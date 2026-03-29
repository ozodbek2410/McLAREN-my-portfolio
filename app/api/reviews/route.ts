import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  return NextResponse.json({ message: 'Review submitted', payload: await req.json() }, { status: 201 });
}
