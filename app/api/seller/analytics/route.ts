import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const sellerId = req.nextUrl.searchParams.get('sellerId');
  if (!sellerId) return NextResponse.json({ error: 'sellerId required' }, { status: 400 });

  const [sales, orders, topProducts] = await Promise.all([
    prisma.order.aggregate({ where: { sellerId, status: 'DELIVERED' }, _sum: { totalAmount: true } }),
    prisma.order.count({ where: { sellerId } }),
    prisma.orderItem.groupBy({ by: ['productId'], _sum: { quantity: true }, orderBy: { _sum: { quantity: 'desc' } }, take: 5 })
  ]);

  return NextResponse.json({ totalSales: sales._sum.totalAmount, totalOrders: orders, topProducts });
}
