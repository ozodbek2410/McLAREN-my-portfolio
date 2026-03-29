import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function POST(req: Request) {
  const { buyerId, addressId, items } = await req.json();
  if (!buyerId || !addressId || !Array.isArray(items) || items.length === 0) return fail('Invalid order payload');

  const total = items.reduce((sum: number, item: { unitPrice: number; quantity: number }) => sum + item.unitPrice * item.quantity, 0);

  const order = await prisma.order.create({
    data: {
      buyerId,
      addressId,
      subtotal: total,
      total,
      items: { create: items }
    },
    include: { items: true }
  });

  return ok(order, { status: 201 });
}
