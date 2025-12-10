import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1),
  price: z.number().min(0),
});

export const orderSchema = z.object({
  amount: z.number().min(1),
  currency: z.string().default('INR'),
});
