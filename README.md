# Marketplace Pro (Next.js 14 + Prisma + Stripe)

Production-grade B2C marketplace scaffold with **SUPER_ADMIN**, **SELLER**, and **BUYER** role flows.

## Implemented foundation
- Next.js 14 App Router + TypeScript + Tailwind base.
- Prisma schema covering users, shops, subscriptions, products, carts, orders, reviews, withdrawals, disputes, coupons, notifications.
- NextAuth configuration (Credentials + Google OAuth).
- Stripe checkout + webhook scaffolding for one-time and subscription flows.
- Seller/Admin/Buyer pages and API route skeletons aligned with required endpoints.
- SEO primitives (`sitemap.xml`, `robots.txt`, dynamic product metadata).
- Security baseline middleware and request sanitization/rate-limit utilities.
- i18n-ready locale constants (Uzbek/Russian/English) + multi-currency formatter (UZS-focused).

## Quick start
```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## Deployment
- **Vercel**: Add env vars and connect PostgreSQL.
- **VPS**: Build with `npm run build`, run with PM2, put Nginx reverse proxy + TLS in front.

## Next implementation steps
1. Replace scaffolded endpoints with full business logic and RBAC guards.
2. Add shadcn/ui components and charts for seller/admin dashboards.
3. Integrate Cloudinary/S3 signed uploads.
4. Complete Stripe Billing subscription sync for seller plans.
5. Add integration tests and E2E checkout/order moderation flows.
