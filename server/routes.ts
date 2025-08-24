import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSqlQuerySchema, insertContactMessageSchema, insertVideoSchema, insertSiteSettingsSchema } from "@shared/schema";
import OpenAI from "openai";
import multer from "multer";
import path from "path";
import fs from "fs";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

// Configure multer for video uploads
const upload = multer({
  dest: 'uploads/videos/',
  limits: {
    fileSize: 100 * 1024 * 1024, // 100MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['video/mp4', 'video/quicktime', 'video/avi'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only MP4, MOV, and AVI are allowed.'));
    }
  },
});

// Ensure upload directories exist
const uploadDir = 'uploads/videos/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export async function registerRoutes(app: Express): Promise<Server> {
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
        naturalLanguage,
        sqlQuery: result.sql
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

  // Site settings endpoints
  app.get("/api/site-settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings || { youtubeUrl: null });
    } catch (error) {
      console.error("Error fetching site settings:", error);
      res.status(500).json({ error: "Failed to fetch site settings" });
    }
  });

  app.post("/api/site-settings/youtube", async (req, res) => {
    try {
      const { youtubeUrl } = req.body;
      
      if (!youtubeUrl || typeof youtubeUrl !== 'string') {
        return res.status(400).json({ error: "YouTube URL is required" });
      }

      // Simple validation for YouTube URL
      const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
      if (!youtubeRegex.test(youtubeUrl)) {
        return res.status(400).json({ error: "Invalid YouTube URL" });
      }

      const settings = await storage.updateYoutubeUrl(youtubeUrl, "employer");
      res.json(settings);
    } catch (error) {
      console.error("Error updating YouTube URL:", error);
      res.status(500).json({ error: "Failed to update YouTube URL" });
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

  // Video upload endpoint
  app.post("/api/videos/upload", upload.single('video'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No video file provided" });
      }

      const { uploadedBy = 'admin' } = req.body;
      
      // Create video record in storage
      const video = await storage.createVideo({
        fileName: req.file.originalname,
        fileUrl: `/uploads/videos/${req.file.filename}`,
        isActive: true, // Set new video as active by default
        uploadedBy
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

  const httpServer = createServer(app);
  return httpServer;
}
