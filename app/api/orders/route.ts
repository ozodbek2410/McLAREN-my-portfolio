import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const payload = await req.json();
  const order = await prisma.order.create({
    data: payload,
    include: { items: true }
  });
  return NextResponse.json(order, { status: 201 });
}
