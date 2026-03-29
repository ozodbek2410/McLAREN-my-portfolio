import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await prisma.product.findMany({ select: { slug: true, updatedAt: true }, take: 5000 });
  const baseUrl = process.env.PLATFORM_BASE_URL ?? 'http://localhost:3000';

  return products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: 'daily',
    priority: 0.8
  }));
}
