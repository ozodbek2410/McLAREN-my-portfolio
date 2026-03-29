import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const products = await prisma.product.findMany({ where: { status: 'ACTIVE' }, include: { images: true }, take: 24 });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  return NextResponse.json({ message: 'Create product placeholder', body }, { status: 201 });
}
