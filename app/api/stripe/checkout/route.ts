import { NextResponse } from 'next/server';
import { stripe } from '@/lib/billing/stripe';

export async function POST(req: Request) {
  const { items, successUrl, cancelUrl } = await req.json();
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: items,
    success_url: successUrl,
    cancel_url: cancelUrl
  });

  return NextResponse.json({ id: session.id, url: session.url });
}
