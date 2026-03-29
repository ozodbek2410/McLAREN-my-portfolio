import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const payload = await req.text();
  const sig = headers().get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Webhook secret or signature missing' }, { status: 400 });
  }

  const event = stripe.webhooks.constructEvent(payload, sig, process.env.STRIPE_WEBHOOK_SECRET);

  if (event.type === 'customer.subscription.updated' || event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    await prisma.sellerSubscription.updateMany({
      where: { stripeSubscriptionId: subscription.id },
      data: {
        active: subscription.status === 'active',
        endsAt: subscription.cancel_at_period_end ? new Date(subscription.current_period_end * 1000) : null
      }
    });
  }

  return NextResponse.json({ received: true });
}
