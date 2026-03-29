import { canCreateListing } from '@/lib/subscriptions';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const sellerId = req.nextUrl.searchParams.get('sellerId');
  if (!sellerId) return NextResponse.json({ error: 'sellerId required' }, { status: 400 });

  const products = await prisma.product.findMany({ where: { sellerId } });
  return NextResponse.json(products);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const subscription = await prisma.sellerSubscription.findFirst({
    where: { sellerId: body.sellerId, active: true },
    include: { plan: true },
    orderBy: { createdAt: 'desc' }
  });

  const listingCount = await prisma.product.count({ where: { sellerId: body.sellerId, status: { in: ['ACTIVE', 'DRAFT', 'PAUSED'] } } });
  const plan = subscription?.plan.code ?? 'FREE';

  if (!canCreateListing(plan, listingCount)) {
    return NextResponse.json({ error: 'Listing limit reached for your current plan' }, { status: 403 });
  }

  const product = await prisma.product.create({ data: body });
  return NextResponse.json(product, { status: 201 });
}
