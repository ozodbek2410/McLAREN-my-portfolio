import { PageShell } from '@/components/shared/page-shell';

export const revalidate = 300;

export default function ProductsPage() {
  return (
    <PageShell title="Products" description="Full-text search, category/price/rating filters, and smart sorting ready for integration." />
  );
}
