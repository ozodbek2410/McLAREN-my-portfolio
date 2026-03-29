import { PageShell } from '@/components/page-shell';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return { title: `Product ${params.slug}` };
}

export default function ProductDetailPage() {
  return <PageShell title='Product Detail' description='Gallery, seller details, review block, related products, structured SEO metadata.' />;
}
