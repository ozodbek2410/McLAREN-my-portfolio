import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(req: Request) {
  const sessionId = new URL(req.url).searchParams.get('sessionId');
  if (!sessionId) return fail('sessionId is required');
  const cart = await prisma.cart.findUnique({ where: { sessionId }, include: { items: { include: { product: true } } } });
  return ok(cart);
}

export async function POST(req: Request) {
  const { sessionId, productId, quantity = 1 } = await req.json();
  if (!sessionId || !productId) return fail('sessionId and productId are required');

  const cart = await prisma.cart.upsert({
    where: { sessionId },
    create: { sessionId },
    update: {}
  });

  await prisma.cartItem.upsert({
    where: { cartId_productId: { cartId: cart.id, productId } },
    update: { quantity },
    create: { cartId: cart.id, productId, quantity }
  });

  const updated = await prisma.cart.findUnique({ where: { id: cart.id }, include: { items: true } });
  return ok(updated);
}
