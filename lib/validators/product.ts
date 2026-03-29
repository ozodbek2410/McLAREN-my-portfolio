import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(3).max(120),
  description: z.string().min(30),
  price: z.number().positive(),
  discountPrice: z.number().nonnegative().optional(),
  categoryId: z.string().cuid(),
  stock: z.number().int().nonnegative(),
  sku: z.string().max(64).optional(),
  attributes: z.array(z.object({ key: z.string(), value: z.string() })).default([])
});
