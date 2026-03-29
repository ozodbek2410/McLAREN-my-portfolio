import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const sellerId = req.nextUrl.searchParams.get('sellerId');
  if (!sellerId) return NextResponse.json({ error: 'sellerId required' }, { status: 400 });

  const orders = await prisma.order.findMany({ where: { sellerId }, include: { items: true, buyer: true } });
  return NextResponse.json(orders);
}
