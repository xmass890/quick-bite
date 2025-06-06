// convex/http.ts (or a dedicated file like convex/uploads.ts)
import { mutation } from "./_generated/server";

export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    // Generates a URL for the client to directly upload a file to Convex storage
    return await ctx.storage.generateUploadUrl();
  },
});