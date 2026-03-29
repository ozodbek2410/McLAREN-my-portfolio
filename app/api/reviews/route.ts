import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const review = await prisma.review.create({
    data: {
      buyerId: body.buyerId,
      productId: body.productId,
      orderId: body.orderId,
      rating: body.rating,
      content: body.content,
      images: body.images?.length ? { create: body.images.map((url: string) => ({ url })) } : undefined
    },
    include: { images: true }
  });

  return NextResponse.json(review, { status: 201 });
}
