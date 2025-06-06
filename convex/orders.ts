import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query: Get orders by userId
export const getByUserId = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

// Mutation: Create a new order
export const create = mutation({
  args: {
    userId: v.id("users"),
    restaurantId: v.id("restaurants"),
    items: v.array(
      v.object({
        foodItemId: v.id("foodItems"),
        quantity: v.number(),
      })
    ),
    totalAmount: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("preparing"),
      v.literal("out_for_delivery"),
      v.literal("delivered"),
      v.literal("cancelled")
    ),
    deliveryAddress: v.string(),
    deliveryCoordinates: v.object({
      latitude: v.number(),
      longitude: v.number(),
    }),
    driverId: v.optional(v.id("users")),
    createdAt: v.number(),
    updatedAt: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("orders", args);
  },
});