import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ sellers: [] });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Seller moderation update', payload: await req.json() });
}
