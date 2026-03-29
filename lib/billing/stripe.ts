import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-12-18.acacia'
});

export function getPlanConstraints(planName: string) {
  switch (planName) {
    case 'PRO':
      return { listingLimit: Number.POSITIVE_INFINITY, featuredSlots: 5, analytics: true };
    case 'BASIC':
      return { listingLimit: 100, featuredSlots: 1, analytics: true };
    default:
      return { listingLimit: 10, featuredSlots: 0, analytics: false };
  }
}
