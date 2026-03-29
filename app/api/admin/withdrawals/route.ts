import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const requests = await prisma.withdrawalRequest.findMany({ include: { seller: true } });
  return NextResponse.json(requests);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const updated = await prisma.withdrawalRequest.update({
    where: { id: body.withdrawalId },
    data: { status: body.status, adminNote: body.adminNote }
  });
  return NextResponse.json(updated);
}
