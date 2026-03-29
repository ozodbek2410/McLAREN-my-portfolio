import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { productSchema } from '@/lib/validators/product';
import { sanitizeText } from '@/lib/security/sanitize';

export async function GET() {
  const products = await prisma.product.findMany({ where: { status: 'ACTIVE' }, take: 50 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const json = await req.json();
  const parsed = productSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const product = await prisma.product.create({
    data: {
      ...parsed.data,
      title: sanitizeText(parsed.data.title),
      description: sanitizeText(parsed.data.description),
      slug: crypto.randomUUID(),
      sellerId: json.sellerId,
      shopId: json.shopId
    }
  });

  return NextResponse.json(product, { status: 201 });
}
