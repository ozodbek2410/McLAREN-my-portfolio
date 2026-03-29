import { stripe } from '@/lib/stripe';
import { fail, ok } from '@/lib/api';

export async function POST(req: Request) {
  const { items, mode = 'payment', successUrl, cancelUrl } = await req.json();
  if (!Array.isArray(items) || items.length === 0) return fail('No checkout items');

  const session = await stripe.checkout.sessions.create({
    mode,
    line_items: items,
    success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/checkout?success=1`,
    cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/checkout?canceled=1`
  });

  return ok({ id: session.id, url: session.url });
}
