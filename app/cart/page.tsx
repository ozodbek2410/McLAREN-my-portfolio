import { PageShell } from '@/components/shared/page-shell';

export default function CartPage() {
  return <PageShell title="Cart" description="Persisted cart (DB for authenticated users, localStorage fallback for guests)." />;
}
