import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(req: Request) {
  const sellerId = new URL(req.url).searchParams.get('sellerId');
  if (!sellerId) return fail('sellerId required');
  const products = await prisma.product.findMany({ where: { shop: { sellerId } }, include: { images: true } });
  return ok(products);
}

export async function POST(req: Request) {
  const { sellerId, ...payload } = await req.json();
  if (!sellerId) return fail('sellerId required');

  const subscription = await prisma.sellerSubscription.findFirst({ where: { sellerId, status: 'active' }, include: { plan: true } });
  if (subscription && subscription.activeListingCount >= subscription.plan.listingLimit && subscription.plan.listingLimit !== -1) {
    return fail('Listing limit reached for current plan', 403);
  }

  const shop = await prisma.shop.findUnique({ where: { sellerId } });
  if (!shop) return fail('Shop not found', 404);

  const product = await prisma.product.create({ data: { ...payload, shopId: shop.id } });
  await prisma.sellerSubscription.updateMany({ where: { sellerId, status: 'active' }, data: { activeListingCount: { increment: 1 } } });
  return ok(product, { status: 201 });
}
