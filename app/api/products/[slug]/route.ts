import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { images: true, attributes: true, reviews: { include: { images: true } }, shop: true, category: true }
  });

  if (!product) return fail('Product not found', 404);
  return ok(product);
}
