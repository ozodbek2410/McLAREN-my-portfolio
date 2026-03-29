import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Order creation endpoint scaffolded. Wire Stripe PaymentIntents + transactional lock.' }, { status: 201 });
}
