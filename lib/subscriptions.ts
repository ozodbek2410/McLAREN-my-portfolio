import { PlanCode } from '@prisma/client';

export const planLimits: Record<PlanCode, { listings: number; featuredSlots: number; analytics: boolean }> = {
  FREE: { listings: 10, featuredSlots: 0, analytics: false },
  BASIC: { listings: 100, featuredSlots: 1, analytics: true },
  PRO: { listings: Number.MAX_SAFE_INTEGER, featuredSlots: 5, analytics: true }
};

export function canCreateListing(plan: PlanCode, currentListingCount: number) {
  return currentListingCount < planLimits[plan].listings;
}
