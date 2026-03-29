import { Metadata } from 'next';
import { PageShell } from '@/components/shared/page-shell';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: `Product ${params.slug} | Marketplace Pro`,
    description: 'Product detail with gallery, seller profile, reviews, and related recommendations.'
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <PageShell title={`Product: ${params.slug}`} description="Gallery, specs, reviews, and related products block." />;
}
