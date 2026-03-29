import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(req: Request) {
  const sellerId = new URL(req.url).searchParams.get('sellerId');
  if (!sellerId) return fail('sellerId required');

  const orderItems = await prisma.orderItem.findMany({ where: { product: { shop: { sellerId } } }, include: { product: true } });
  const revenue = orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return ok({ revenue, itemsSold: orderItems.length });
}
