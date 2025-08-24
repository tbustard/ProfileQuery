import { 
  type SqlQuery, 
  type InsertSqlQuery, 
  type ContactMessage, 
  type InsertContactMessage, 
  type User, 
  type UpsertUser,
  type ResumeUpload,
  type InsertResumeUpload,
  type Video,
  type InsertVideo,
  users,
  sqlQueries,
  contactMessages,
  resumeUploads,
  videos,
} from "@shared/schema";
import { db } from "./db";
import { eq, ne } from "drizzle-orm";
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
  createVideo(video: InsertVideo): Promise<Video>;
  getVideos(): Promise<Video[]>;
  getActiveVideo(): Promise<Video | undefined>;
  setActiveVideo(id: string): Promise<void>;
  deactivateOtherVideos(activeId: string): Promise<void>;
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

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const [video] = await db
      .insert(videos)
      .values(insertVideo)
      .returning();
    return video;
  }

  async getVideos(): Promise<Video[]> {
    return await db.select().from(videos).orderBy(videos.createdAt);
  }

  async getActiveVideo(): Promise<Video | undefined> {
    const [video] = await db.select().from(videos).where(eq(videos.isActive, true));
    return video;
  }

  async setActiveVideo(id: string): Promise<void> {
    // Deactivate all videos first
    await db.update(videos).set({ isActive: false });
    // Activate the selected video
    await db.update(videos).set({ isActive: true }).where(eq(videos.id, id));
  }

  async deactivateOtherVideos(activeId: string): Promise<void> {
    await db.update(videos).set({ isActive: false }).where(ne(videos.id, activeId));
  }

}

export const storage = new DatabaseStorage();
