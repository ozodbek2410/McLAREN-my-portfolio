import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Admin withdrawals list endpoint scaffolded.' });
}

export async function POST() {
  return NextResponse.json({ message: 'Admin withdrawal approval endpoint scaffolded.' });
}
