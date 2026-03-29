import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });
  if (!product) return { title: 'Product not found' };

  return {
    title: product.title,
    description: product.description,
    openGraph: { title: product.title, description: product.description }
  };
}

export const revalidate = 120;

export default async function ProductDetailsPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { images: true, reviews: true, seller: { include: { shop: true } } }
  });

  if (!product) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{product.title}</h1>
      <p className="text-slate-600">{product.description}</p>
      <p className="font-medium">{product.price.toString()} UZS</p>
      <div className="rounded border bg-white p-4">
        <p className="font-medium">Seller: {product.seller.shop?.name ?? product.seller.email}</p>
      </div>
    </div>
  );
}
