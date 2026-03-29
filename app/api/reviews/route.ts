import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Review creation endpoint scaffolded (rating + text + photo + helpful votes).' }, { status: 201 });
}
