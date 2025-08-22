import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSqlQuerySchema, insertContactMessageSchema } from "@shared/schema";
import OpenAI from "openai";

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key" 
});

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

  const httpServer = createServer(app);
  return httpServer;
}
