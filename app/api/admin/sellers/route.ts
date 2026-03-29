import { prisma } from '@/lib/prisma';
import { ok } from '@/lib/api';

export async function GET() {
  const sellers = await prisma.user.findMany({ where: { role: 'SELLER' }, include: { shop: true, sellerSubscriptions: { include: { plan: true } } } });
  return ok(sellers);
}

export async function POST(req: Request) {
  const { sellerId, action } = await req.json();
  const updated = await prisma.shop.update({ where: { sellerId }, data: { suspended: action === 'suspend', approved: action === 'approve' } });
  return ok(updated);
}
