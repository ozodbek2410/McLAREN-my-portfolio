import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ withdrawals: [] });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Withdrawal status updated', payload: await req.json() });
}
