# MarketPro — Full-stack B2C Marketplace (Next.js 14)

This repository now includes a production-focused starter architecture for a multi-role B2C marketplace.

## Stack
- Next.js 14 App Router + TypeScript
- Prisma + PostgreSQL
- NextAuth.js (Credentials + Google)
- Tailwind CSS
- Stripe (checkout + webhook placeholders)
- Resend/Cloudinary-ready env setup

## Roles
- SUPER_ADMIN, SELLER, BUYER, optional MODERATOR

## Implemented Foundation
- Full Prisma schema for all requested domain models
- Route handlers for all requested API route groups
- App Router pages for buyer/seller/admin experiences
- Middleware rate limit on auth endpoints
- SEO baseline with `sitemap.ts` and `robots.ts`
- Seller subscription model and plan limits in schema

## Getting started
```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## Deploy
- Vercel: add env vars + Postgres + webhook URL
- VPS: use PM2 for `npm run start` behind Nginx reverse proxy

## Notes
This is a professional scaffold with core architecture and route surfaces in place. Connect business logic (payments, webhook reconciliation, moderation workflows, analytics aggregations, uploads, emails) inside the provided files.
