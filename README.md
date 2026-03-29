# Marketplace Platform (Next.js 14 + Prisma + Stripe)

Production-grade B2C marketplace foundation with SUPER_ADMIN, SELLER, BUYER (and optional MODERATOR), seller subscriptions, payouts, reviews, product moderation, and Stripe billing/webhooks.

## Included
- Next.js 14 App Router + TypeScript + Tailwind CSS
- Prisma schema for all requested marketplace entities
- NextAuth (Credentials + Google OAuth)
- Stripe checkout + webhook skeleton
- Seller listing limit enforcement by plan (FREE/BASIC/PRO)
- API route scaffolding for buyer/seller/admin workflows
- SEO essentials: dynamic metadata, robots.txt, sitemap.xml
- Security baseline: auth route rate limit + CSRF header/cookie check middleware
- i18n-ready dependency (`next-intl`) and UZS default currency in orders

## Quick Start
1. Copy env file:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate Prisma client and migrate:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```
4. Start dev server:
   ```bash
   npm run dev
   ```

## Deployment
### VPS (Nginx + PM2)
```bash
npm ci
npm run build
pm2 start npm --name marketplace -- start
```
Configure Nginx reverse proxy to `localhost:3000` and set SSL via Let's Encrypt.

### Vercel
- Set all env vars from `.env.example`.
- Use managed PostgreSQL.
- Configure Stripe webhook endpoint to `/api/stripe/webhook`.

## Stripe Plan Mapping
- `FREE`: application-level fallback when no active subscription exists.
- `BASIC` and `PRO`: map to Stripe Price IDs (`STRIPE_PRICE_BASIC`, `STRIPE_PRICE_PRO`).
- Webhook (`customer.subscription.updated` / `deleted`) toggles active status and end date.

## Notes
This is a full-stack scaffold focused on architecture and core flows. Add UI polish with shadcn/ui, stronger RBAC middleware, background jobs/queues, and hardened input validation per route before production launch.
