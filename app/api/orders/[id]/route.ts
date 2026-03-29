import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const order = await prisma.order.findUnique({ where: { id: params.id }, include: { items: true, address: true } });
  if (!order) return fail('Order not found', 404);
  return ok(order);
}
