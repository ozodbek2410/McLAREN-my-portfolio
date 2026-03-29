import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ items: [] });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Cart updated', body: await req.json() });
}
