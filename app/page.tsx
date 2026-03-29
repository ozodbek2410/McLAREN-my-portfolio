import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const revalidate = 300;

export default async function HomePage() {
  const [featuredProducts, topSellers, categories] = await Promise.all([
    prisma.product.findMany({ where: { isFeatured: true, status: 'ACTIVE' }, take: 6 }),
    prisma.shop.findMany({ where: { seller: { status: 'ACTIVE' } }, take: 6 }),
    prisma.category.findMany({ where: { parentId: null }, take: 8 })
  ]);

  return (
    <div className="space-y-10">
      <section className="rounded-xl bg-slate-900 p-8 text-white">
        <h1 className="text-3xl font-bold">Professional B2C Marketplace</h1>
        <p className="mt-2 text-slate-300">Subscriptions, payments, moderation, analytics, and multi-role dashboards.</p>
        <div className="mt-4 flex gap-3">
          <Link href="/products" className="rounded bg-white px-4 py-2 text-slate-900">Browse Products</Link>
          <Link href="/seller/dashboard" className="rounded border border-slate-300 px-4 py-2">Become a Seller</Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="rounded-lg border bg-white p-4">
              <p className="font-medium">{product.title}</p>
              <p className="text-sm text-slate-500">{product.price.toString()} UZS</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Top Sellers</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {topSellers.map((shop) => (
            <li key={shop.id} className="rounded border bg-white p-4">{shop.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category.id} className="rounded-full bg-slate-100 px-3 py-1 text-sm">{category.name}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
