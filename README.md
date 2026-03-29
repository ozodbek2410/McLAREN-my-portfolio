# Full-stack B2C Marketplace (Next.js 14 + Prisma + Stripe)

Production-oriented scaffold for a multi-role marketplace platform.

## Included
- Next.js 14 app router + TypeScript
- Prisma schema covering users, shops, products, carts, orders, reviews, subscriptions, withdrawals, disputes, coupons
- NextAuth (credentials + Google OAuth)
- Stripe checkout + webhook routes
- Seller/Admin API domains
- SEO basics (`sitemap.xml`, `robots.txt`, product metadata)
- Auth route rate limiting middleware
- App routes for buyer/seller/admin pages

## Environment Variables
```bash
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
RESEND_API_KEY=
```

## Run
```bash
npm install
npm run prisma:generate
npm run dev
```

## Deployment
- Vercel: configure env vars + Postgres + Stripe webhook
- VPS: build with `npm run build`, run with PM2 behind Nginx

## Notes
This scaffold is intentionally modular: add server actions, i18n dictionaries (`uz`, `ru`, `en`), Cloudinary/S3 upload service adapters, and shadcn/ui component generation as your next step.
