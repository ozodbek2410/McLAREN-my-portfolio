import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ totalSales: 0, monthly: [], topProducts: [] });
}
