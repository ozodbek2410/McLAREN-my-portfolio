import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

const createProductSchema = z.object({
  shopId: z.string(),
  categoryId: z.string(),
  title: z.string().min(3),
  slug: z.string().min(3),
  description: z.string().min(10),
  price: z.number().int().positive(),
  discountPrice: z.number().int().positive().optional(),
  stock: z.number().int().nonnegative().default(0)
});

export async function GET() {
  const products = await prisma.product.findMany({ where: { status: 'ACTIVE' }, take: 20, include: { images: true, category: true, shop: true } });
  return ok(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = createProductSchema.safeParse(body);
  if (!parsed.success) return fail(parsed.error.message);

  const product = await prisma.product.create({ data: parsed.data });
  return ok(product, { status: 201 });
}
