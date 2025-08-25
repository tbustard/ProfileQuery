import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSqlQuerySchema, insertContactMessageSchema, insertVideoSchema, insertResumeUploadSchema } from "@shared/schema";
import { setupAuth, isAuthenticated } from "./replitAuth";
import OpenAI from "openai";
import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import cloudinary from "./cloudinary";

if (!process.env.OPENAI_API_KEY && !process.env.OPENAI_API_KEY_ENV_VAR) {
  console.warn("Warning: No OpenAI API key found in environment variables");
}

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "" 
});

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads/videos');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for video uploads (disk storage)
const videoUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadsDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, `video-${uniqueSuffix}${ext}`);
    }
  }),
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['video/mp4', 'video/quicktime', 'video/avi', 'video/webm'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only MP4, MOV, AVI, and WebM are allowed.'));
    }
  },
});

// Configure multer for resume uploads (memory storage for database)
const resumeUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['application/pdf', 'text/html', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, HTML, DOC, and DOCX are allowed.'));
    }
  },
});

// No longer need to create upload directories since we're using cloud storage

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Resume upload routes (protected)
  app.get('/api/resume-uploads', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const uploads = await storage.getResumeUploads(userId);
      res.json(uploads);
    } catch (error) {
      console.error("Error fetching resume uploads:", error);
      res.status(500).json({ error: "Failed to fetch uploads" });
    }
  });

  app.post('/api/resume-uploads', isAuthenticated, resumeUpload.single('file'), async (req: any, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const userId = req.user.claims.sub;
      const fileBuffer = req.file.buffer;
      const fileName = req.file.originalname;
      const fileSize = req.file.size;
      const description = req.body.description || '';

      // Save file to uploads directory
      const uploadsDir = path.join(process.cwd(), 'uploads/resumes');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExt = path.extname(fileName);
      const savedFileName = `resume-${uniqueSuffix}${fileExt}`;
      const filePath = path.join(uploadsDir, savedFileName);
      const fileUrl = `/uploads/resumes/${savedFileName}`;

      // Write file to disk
      fs.writeFileSync(filePath, fileBuffer);

      // Save to database
      const resumeUpload = await storage.createResumeUpload({
        userId,
        fileName,
        fileUrl,
        fileSize,
        description,
      });

      res.json(resumeUpload);
    } catch (error) {
      console.error("Error uploading resume:", error);
      res.status(500).json({ error: "Failed to upload resume" });
    }
  });

  app.delete('/api/resume-uploads/:id', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { id } = req.params;
      
      const success = await storage.deleteResumeUpload(id, userId);
      
      if (success) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Resume not found or unauthorized" });
      }
    } catch (error) {
      console.error("Error deleting resume:", error);
      res.status(500).json({ error: "Failed to delete resume" });
    }
  });
  // Serve Tyler Bustard Resume files (must be before API routes)
  app.get("/Tyler_Bustard_Resume.pdf", async (req, res) => {
    try {
      // FIRST: Check database for uploaded resumes (prioritize uploaded files)
      const resumes = await storage.getResumeUploads('employer');
      
      if (resumes.length > 0) {
        // Get the most recent PDF resume from uploads
        const pdfResume = resumes
          .filter(r => r.fileName.toLowerCase().endsWith('.pdf'))
          .sort((a, b) => {
            const dateA = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
            const dateB = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
            return dateB - dateA;
          })[0];

        if (pdfResume && pdfResume.fileUrl) {
          const resumePath = path.join(process.cwd(), pdfResume.fileUrl.replace(/^\//, ''));
          
          if (fs.existsSync(resumePath)) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename="Tyler_Bustard_Resume.pdf"`);
            const fileStream = fs.createReadStream(resumePath);
            return fileStream.pipe(res);
          }
        }
      }

      // FALLBACK: Only serve from attached assets if no uploads found
      const fallbackPath = path.join(process.cwd(), 'attached_assets/Tyler_Bustard_Resume.pdf');
      
      if (fs.existsSync(fallbackPath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="Tyler_Bustard_Resume.pdf"`);
        const fileStream = fs.createReadStream(fallbackPath);
        return fileStream.pipe(res);
      }

      return res.status(404).json({ error: "No resume found" });
    } catch (error) {
      console.error("Error serving Tyler Bustard resume:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // SQL Translation endpoint
  app.post("/api/translate-sql", async (req, res) => {
    try {
      const { naturalLanguage } = req.body;
      
      if (!naturalLanguage || typeof naturalLanguage !== 'string') {
        return res.status(400).json({ error: "Natural language query is required" });
      }

      // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `You are an expert financial SQL analyst. Convert natural language queries to SQL using this financial database schema:

Tables:
- stocks (symbol VARCHAR(10) PRIMARY KEY, company_name VARCHAR(200), sector VARCHAR(100), market_cap BIGINT, pe_ratio DECIMAL(8,2), dividend_yield DECIMAL(5,2), last_updated TIMESTAMP)
- portfolios (id INTEGER PRIMARY KEY, portfolio_name VARCHAR(100), client_id INTEGER, total_value DECIMAL(15,2), risk_level VARCHAR(20), created_date DATE)
- portfolio_holdings (id INTEGER PRIMARY KEY, portfolio_id INTEGER FK, stock_symbol VARCHAR(10) FK, shares INTEGER, purchase_price DECIMAL(10,2), purchase_date DATE)
- stock_prices (id INTEGER PRIMARY KEY, stock_symbol VARCHAR(10) FK, price DECIMAL(10,2), volume BIGINT, price_date DATE)

Focus on investment analysis, portfolio management, and financial reporting queries. Respond with JSON in this format: { "sql": "SELECT ...", "explanation": "This query analyzes..." }`
          },
          {
            role: "user",
            content: naturalLanguage
          }
        ],
        response_format: { type: "json_object" },
      });

      const result = JSON.parse(response.choices[0].message.content || '{}');
      
      if (!result.sql) {
        return res.status(400).json({ error: "Failed to generate SQL query" });
      }

      // Store the query
      await storage.createSqlQuery({
        naturalQuery: naturalLanguage,
        sqlQuery: result.sql,
        explanation: result.explanation || "SQL query generated successfully"
      });

      res.json({
        sql: result.sql,
        explanation: result.explanation || "SQL query generated successfully"
      });

    } catch (error) {
      console.error("SQL translation error:", error);
      res.status(500).json({ error: "Failed to translate query. Please try again." });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Failed to send message. Please check your input." });
    }
  });


  // Get recent SQL queries
  app.get("/api/sql-queries", async (req, res) => {
    try {
      const queries = await storage.getSqlQueries();
      res.json(queries.slice(0, 10)); // Return last 10 queries
    } catch (error) {
      console.error("Get queries error:", error);
      res.status(500).json({ error: "Failed to fetch queries" });
    }
  });

  // Resume upload endpoint
  app.post("/api/resumes/upload", resumeUpload.single('resume'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No resume file provided" });
      }

      const { userId = 'employer' } = req.body;
      
      // Generate a unique filename for the resume since we're using memory storage
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(req.file.originalname);
      const generatedFilename = `resume-${uniqueSuffix}${ext}`;
      const resumePath = path.join(process.cwd(), 'uploads/resumes', generatedFilename);
      
      // Ensure directory exists
      const resumeDir = path.join(process.cwd(), 'uploads/resumes');
      if (!fs.existsSync(resumeDir)) {
        fs.mkdirSync(resumeDir, { recursive: true });
      }
      
      // Write the buffer to disk
      fs.writeFileSync(resumePath, req.file.buffer);
      
      // Create resume record in storage with all required fields
      const resume = await storage.createResumeUpload({
        fileName: req.file.originalname,
        fileUrl: `/uploads/resumes/${generatedFilename}`,
        userId,
        fileSize: req.file.size,
        description: req.body.description || null
      });

      res.json({ 
        success: true, 
        resume,
        message: "Resume uploaded successfully"
      });
    } catch (error: any) {
      console.error("Resume upload error:", error);
      res.status(500).json({ error: "Failed to upload resume" });
    }
  });

  // Get resumes for a user
  app.get("/api/resumes/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const resumes = await storage.getResumeUploads(userId);
      res.json(resumes);
    } catch (error) {
      console.error("Get resumes error:", error);
      res.status(500).json({ error: "Failed to fetch resumes" });
    }
  });

  // Get latest resume for download
  app.get("/api/resumes/latest/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const resumes = await storage.getResumeUploads(userId);
      
      if (resumes.length === 0) {
        return res.status(404).json({ error: "No resume found" });
      }

      // Get the most recent resume
      const latestResume = resumes.sort((a, b) => {
        const dateA = a.uploadedAt ? new Date(a.uploadedAt).getTime() : 0;
        const dateB = b.uploadedAt ? new Date(b.uploadedAt).getTime() : 0;
        return dateB - dateA;
      })[0];

      if (!latestResume.fileUrl) {
        return res.status(404).json({ error: "Resume file path not found" });
      }
      
      const resumePath = path.join(process.cwd(), latestResume.fileUrl.replace(/^\//, ''));
      
      if (!fs.existsSync(resumePath)) {
        return res.status(404).json({ error: "Resume file not found" });
      }

      // Set appropriate headers based on file type
      const ext = path.extname(latestResume.fileName).toLowerCase();
      let contentType = 'application/octet-stream';
      
      switch (ext) {
        case '.pdf':
          contentType = 'application/pdf';
          break;
        case '.html':
          contentType = 'text/html';
          break;
        case '.doc':
          contentType = 'application/msword';
          break;
        case '.docx':
          contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
      }

      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', `attachment; filename="${latestResume.fileName}"`);
      
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
    } catch (error) {
      console.error("Error serving resume:", error);
      res.status(500).json({ error: "Failed to serve resume" });
    }
  });


  // Video upload endpoint
  app.post("/api/videos/upload", videoUpload.single('video'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No video file provided" });
      }

      // Create video record in storage
      const video = await storage.createVideo({
        title: req.body.title || req.file.originalname,
        fileName: req.file.originalname,
        fileUrl: `/uploads/videos/${req.file.filename}`,
        mimeType: req.file.mimetype,
        fileSize: req.file.size,
        isActive: true, // Set new video as active by default
        uploadedBy: "admin" // Admin upload from employer dashboard
      });

      // Mark all other videos as inactive
      await storage.deactivateOtherVideos(video.id);

      res.json({ 
        success: true, 
        video,
        message: "Video uploaded and set as active"
      });

    } catch (error) {
      console.error("Video upload error:", error);
      res.status(500).json({ error: "Failed to upload video" });
    }
  });

  // Get active introduction video
  app.get("/api/introduction-video", async (req, res) => {
    try {
      const activeVideo = await storage.getActiveVideo();
      
      if (!activeVideo) {
        return res.status(404).json({ error: "No active video found" });
      }

      const videoPath = path.join(process.cwd(), activeVideo.fileUrl.replace(/^\//, ''));
      
      if (!fs.existsSync(videoPath)) {
        return res.status(404).json({ error: "Video file not found" });
      }

      // Stream video file
      const stat = fs.statSync(videoPath);
      const fileSize = stat.size;
      const range = req.headers.range;

      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        
        const chunksize = (end - start) + 1;
        const file = fs.createReadStream(videoPath, { start, end });
        
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };
        
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        };
        
        res.writeHead(200, head);
        fs.createReadStream(videoPath).pipe(res);
      }
    } catch (error) {
      console.error("Error serving video:", error);
      res.status(500).json({ error: "Failed to serve video" });
    }
  });

  // Get video thumbnail (placeholder endpoint)
  app.get("/api/video-thumbnail", async (req, res) => {
    // For now, return a simple response or generate a thumbnail
    res.status(204).end(); // No content - could implement thumbnail generation
  });

  // Get all videos
  app.get("/api/videos", async (req, res) => {
    try {
      const videos = await storage.getVideos();
      res.json(videos);
    } catch (error) {
      console.error("Get videos error:", error);
      res.status(500).json({ error: "Failed to fetch videos" });
    }
  });

  // Delete a video
  app.delete("/api/videos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const success = await storage.deleteVideo(id);
      
      if (success) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: "Video not found" });
      }
    } catch (error) {
      console.error("Delete video error:", error);
      res.status(500).json({ error: "Failed to delete video" });
    }
  });

  // Serve the active introduction video
  app.get("/api/introduction-video", async (req, res) => {
    try {
      const activeVideo = await storage.getActiveVideo();
      if (!activeVideo) {
        return res.status(404).json({ error: "No active video found" });
      }
      
      // Check if the video URL is a full URL or a relative path
      if (activeVideo.fileUrl.startsWith('http')) {
        // Redirect to the external URL
        return res.redirect(activeVideo.fileUrl);
      } else {
        // Serve the local file
        const videoPath = path.join(process.cwd(), activeVideo.fileUrl);
        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;

        if (range) {
          const parts = range.replace(/bytes=/, "").split("-");
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunksize = (end - start) + 1;
          const file = fs.createReadStream(videoPath, { start, end });
          const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': activeVideo.mimeType || 'video/mp4',
          };
          res.writeHead(206, head);
          file.pipe(res);
        } else {
          const head = {
            'Content-Length': fileSize,
            'Content-Type': activeVideo.mimeType || 'video/mp4',
          };
          res.writeHead(200, head);
          fs.createReadStream(videoPath).pipe(res);
        }
      }
    } catch (error) {
      console.error("Error serving introduction video:", error);
      res.status(500).json({ error: "Failed to serve introduction video" });
    }
  });

  // Get the most recent uploaded resume
  app.get("/api/latest-resume", async (req, res) => {
    try {
      // Use a default user ID for now (can be replaced with actual auth later)
      const userId = "default-user";
      const resumes = await storage.getResumeUploads(userId);
      
      if (!resumes || resumes.length === 0) {
        return res.status(404).json({ error: "No resumes found" });
      }
      
      // Sort by uploadedAt to get the most recent
      const latestResume = resumes.sort((a, b) => 
        new Date(b.uploadedAt!).getTime() - new Date(a.uploadedAt!).getTime()
      )[0];
      
      res.json(latestResume);
    } catch (error) {
      console.error("Error fetching latest resume:", error);
      res.status(500).json({ error: "Failed to fetch latest resume" });
    }
  });

  // Set active video
  app.post("/api/videos/:id/activate", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.setActiveVideo(id);
      res.json({ success: true, message: "Video activated successfully" });
    } catch (error) {
      console.error("Activate video error:", error);
      res.status(500).json({ error: "Failed to activate video" });
    }
  });



  // Serve uploaded files (videos and resumes) with proper MIME types
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads'), {
    setHeaders: (res, filePath) => {
      const ext = path.extname(filePath).toLowerCase();
      if (ext === '.mp4') {
        res.setHeader('Content-Type', 'video/mp4');
      } else if (ext === '.mov') {
        res.setHeader('Content-Type', 'video/quicktime');
      } else if (ext === '.avi') {
        res.setHeader('Content-Type', 'video/x-msvideo');
      } else if (ext === '.webm') {
        res.setHeader('Content-Type', 'video/webm');
      } else if (ext === '.pdf') {
        res.setHeader('Content-Type', 'application/pdf');
      }
    }
  }));

  const httpServer = createServer(app);
  return httpServer;
}
