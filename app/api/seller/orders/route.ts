import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(req: Request) {
  const sellerId = new URL(req.url).searchParams.get('sellerId');
  if (!sellerId) return fail('sellerId required');

  const orders = await prisma.order.findMany({
    where: { items: { some: { product: { shop: { sellerId } } } } },
    include: { items: true, buyer: true },
    orderBy: { createdAt: 'desc' }
  });

  return ok(orders);
}
