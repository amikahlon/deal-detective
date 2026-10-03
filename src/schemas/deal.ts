import { z } from "zod";

// What the user is looking for
export const Requirements = z.object({
  product: z.string(), // Product name
  maxPrice: z.number().optional(), // Maximum price, if provided
  mustHave: z.array(z.string()).default([]), // Required features
});

// A deal found online
export const Deal = z.object({
  title: z.string(), // Deal/product title
  store: z.string(), // Store name
  url: z.string(), // Link to the deal
  price: z.number(), // Current price
  listPrice: z.number().optional(), // Original price, if available
});

// A deal after checking its quality/trust
export const CheckedDeal = Deal.extend({
  trust: z.number().min(0).max(100), // Trust score from 0 to 100
  flags: z.array(z.string()), // Possible problems or warnings
});

// Final AI recommendation
export const Recommendation = z.object({
  action: z.enum(["buy", "wait", "skip"]), // What the user should do
  deal: CheckedDeal.optional(), // The recommended deal, if there is one
  reason: z.string(), // Why this action was chosen
});

// Create TypeScript types automatically from the Zod schemas
export type Requirements = z.infer<typeof Requirements>;
export type Deal = z.infer<typeof Deal>;
export type CheckedDeal = z.infer<typeof CheckedDeal>;
export type Recommendation = z.infer<typeof Recommendation>;
