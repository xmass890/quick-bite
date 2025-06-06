import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
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
  })
    .index("by_clerkId", ["clerkId"]),

  restaurants: defineTable({
    name: v.string(),
    description: v.string(),
    cuisine: v.string(),
    address: v.string(),
    ownerId: v.id("users"),
    rating: v.number(),
    imageUrl: v.optional(v.id("_storage")),
  })
    .index("by_ownerId", ["ownerId"]),

  foodItems: defineTable({
    restaurantId: v.id("restaurants"),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(),
    imageUrl: v.id("_storage"),
    isFavorite: v.optional(v.boolean()),
  })
    .index("by_restaurantId", ["restaurantId"]),

  orders: defineTable({
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
  })
    .index("by_userId", ["userId"]),

  messages: defineTable({
    body: v.string(),
    author: v.string(),
    format: v.union(v.literal("text"), v.literal("image")),
    // If it's an image, store the storageId for the image content
    imageStorageId: v.optional(v.id("_storage")),
  })
});
