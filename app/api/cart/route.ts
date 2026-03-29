import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const buyerId = req.nextUrl.searchParams.get('buyerId');
  if (!buyerId) return NextResponse.json({ error: 'buyerId required' }, { status: 400 });
  const cart = await prisma.cart.findUnique({ where: { buyerId }, include: { items: { include: { product: true } } } });
  return NextResponse.json(cart);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cart = await prisma.cart.upsert({
    where: { buyerId: body.buyerId },
    update: {
      items: {
        upsert: {
          where: { cartId_productId: { cartId: body.cartId, productId: body.productId } },
          update: { quantity: body.quantity },
          create: { productId: body.productId, quantity: body.quantity }
        }
      }
    },
    create: {
      buyerId: body.buyerId,
      items: { create: { productId: body.productId, quantity: body.quantity } }
    },
    include: { items: true }
  });

  return NextResponse.json(cart);
}
