import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ where: { status: 'ACTIVE' }, include: { images: true }, take: 24 });

  return (
    <div>
      <h1 className="text-2xl font-semibold">Products</h1>
      <p className="text-sm text-slate-500">Search, category, price, rating, sort filters can be applied through API query params.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="rounded border bg-white p-4">
            <p className="font-medium">{product.title}</p>
            <p className="text-sm">{product.price.toString()} UZS</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
