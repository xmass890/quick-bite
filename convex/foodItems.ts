// convex/foodItems.ts
import { v } from "convex/values"; // Make sure to import 'v'
import { mutation } from "./_generated/server";

export const createFoodItem = mutation({
  args: {
    restaurantId: v.id("restaurants"), // Assuming you want to link food to a restaurant
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(),
    storageId: v.id("_storage"), // The ID of the uploaded image in Convex storage
  },
  handler: async (ctx, args) => {
    // Insert the new food item into the 'foodItems' table
    const newFoodItemId = await ctx.db.insert("foodItems", {
      restaurantId: args.restaurantId,
      name: args.name,
      description: args.description,
      price: args.price,
      category: args.category,
      imageUrl: args.storageId, // Store the storageId as the imageUrl
      // You can add other default fields if needed, e.g., isFavorite: false
    });
    return newFoodItemId; // Return the ID of the newly created food item
  },
});