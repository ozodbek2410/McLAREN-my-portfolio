import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const sellers = await prisma.user.findMany({ where: { role: 'SELLER' }, include: { shop: true, products: true } });
  return NextResponse.json(sellers);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const seller = await prisma.user.update({ where: { id: body.sellerId }, data: { status: body.status } });
  return NextResponse.json(seller);
}
