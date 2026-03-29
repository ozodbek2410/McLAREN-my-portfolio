import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

const reviewSchema = z.object({
  userId: z.string(),
  productId: z.string(),
  orderId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5)
});

export async function POST(req: Request) {
  const parsed = reviewSchema.safeParse(await req.json());
  if (!parsed.success) return fail(parsed.error.message);

  const review = await prisma.review.create({ data: parsed.data });
  return ok(review, { status: 201 });
}
