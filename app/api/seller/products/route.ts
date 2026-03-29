import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ products: [] });
}

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Seller product saved', payload: await req.json() }, { status: 201 });
}
