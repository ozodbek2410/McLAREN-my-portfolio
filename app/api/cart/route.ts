import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: Request) {
  const buyerId = new URL(req.url).searchParams.get('buyerId');
  if (!buyerId) return NextResponse.json({ message: 'buyerId is required' }, { status: 400 });

  const cart = await prisma.cart.findUnique({ where: { buyerId }, include: { items: true } });
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const { buyerId, productId, quantity } = await req.json();
  const cart = await prisma.cart.upsert({
    where: { buyerId },
    create: { buyerId },
    update: {}
  });

  await prisma.cartItem.upsert({
    where: { cartId_productId: { cartId: cart.id, productId } },
    create: { cartId: cart.id, productId, quantity: quantity ?? 1 },
    update: { quantity: quantity ?? 1 }
  });

  return NextResponse.json({ ok: true });
}
