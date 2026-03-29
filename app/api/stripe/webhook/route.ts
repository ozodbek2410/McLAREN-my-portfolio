import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/billing/stripe';

export async function POST(req: Request) {
  const signature = headers().get('stripe-signature');
  const payload = await req.text();

  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Missing webhook signature' }, { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);
    if (event.type.startsWith('customer.subscription.')) {
      // TODO: map event data to SellerSubscription update.
    }
    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json({ message: 'Invalid webhook' }, { status: 400 });
  }
}
