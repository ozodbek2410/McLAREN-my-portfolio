import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Admin seller list endpoint scaffolded.' });
}

export async function POST() {
  return NextResponse.json({ message: 'Admin seller moderation endpoint scaffolded.' });
}
