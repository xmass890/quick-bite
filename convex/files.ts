// convex/files.ts
import { mutation } from "./_generated/server";

// Generates a URL for the client to upload a file to Convex storage
export const generateUploadUrl = mutation(async (ctx) => {
  // You can add authorization here if needed, e.g., only authenticated users can upload
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Not authenticated to generate upload URL.");
  }
  return await ctx.storage.generateUploadUrl();
});