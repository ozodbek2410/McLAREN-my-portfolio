import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Seller products listing endpoint scaffolded.' });
}

export async function POST() {
  return NextResponse.json({ message: 'Seller product creation with plan limit checks scaffolded.' }, { status: 201 });
}
