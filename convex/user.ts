import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query: Get user by Clerk ID
export const getByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});

// Mutation: Create a new user
export const create = mutation({
  args: {
    clerkId: v.string(),
    username: v.string(),
    email: v.string(),
    phoneNumber: v.optional(v.string()),
    role: v.union(
      v.literal("user"),
      v.literal("restaurateur"),
      v.literal("deliverer")
    ),
    imageUrl: v.optional(v.string()),
    profileComplete: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", args);
  },
});