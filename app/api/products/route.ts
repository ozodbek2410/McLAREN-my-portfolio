import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const min = Number(searchParams.get('min') || 0);
  const max = Number(searchParams.get('max') || Number.MAX_SAFE_INTEGER);

  const products = await prisma.product.findMany({
    where: {
      status: 'ACTIVE',
      AND: [
        { price: { gte: min, lte: max } },
        q
          ? { OR: [{ title: { contains: q, mode: 'insensitive' } }, { description: { contains: q, mode: 'insensitive' } }] }
          : {}
      ]
    },
    include: { images: true, category: true },
    take: 24
  });

  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const product = await prisma.product.create({ data: body });
  return NextResponse.json(product, { status: 201 });
}
