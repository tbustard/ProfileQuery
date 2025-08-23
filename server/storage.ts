import { 
  type SqlQuery, 
  type InsertSqlQuery, 
  type ContactMessage, 
  type InsertContactMessage, 
  type User, 
  type UpsertUser,
  type ResumeUpload,
  type InsertResumeUpload,
  users,
  sqlQueries,
  contactMessages,
  resumeUploads
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  createSqlQuery(query: InsertSqlQuery): Promise<SqlQuery>;
  getSqlQueries(): Promise<SqlQuery[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createResumeUpload(upload: InsertResumeUpload): Promise<ResumeUpload>;
  getResumeUploads(userId: string): Promise<ResumeUpload[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createSqlQuery(insertQuery: InsertSqlQuery): Promise<SqlQuery> {
    const [query] = await db
      .insert(sqlQueries)
      .values(insertQuery)
      .returning();
    return query;
  }

  async getSqlQueries(): Promise<SqlQuery[]> {
    return await db.select().from(sqlQueries);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const [message] = await db
      .insert(contactMessages)
      .values(insertMessage)
      .returning();
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async createResumeUpload(upload: InsertResumeUpload): Promise<ResumeUpload> {
    const [resumeUpload] = await db
      .insert(resumeUploads)
      .values(upload)
      .returning();
    return resumeUpload;
  }

  async getResumeUploads(userId: string): Promise<ResumeUpload[]> {
    return await db.select().from(resumeUploads).where(eq(resumeUploads.userId, userId));
  }
}

export const storage = new DatabaseStorage();
