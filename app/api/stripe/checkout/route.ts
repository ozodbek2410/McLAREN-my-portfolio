import { stripe } from '@/lib/stripe';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const session = await stripe.checkout.sessions.create({
    mode: body.mode ?? 'payment',
    line_items: body.lineItems,
    success_url: `${process.env.PLATFORM_BASE_URL}/checkout?status=success`,
    cancel_url: `${process.env.PLATFORM_BASE_URL}/checkout?status=cancel`
  });

  return NextResponse.json({ id: session.id, url: session.url });
}
