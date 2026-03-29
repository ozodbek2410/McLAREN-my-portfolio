import Link from 'next/link';
import { PageShell } from '@/components/shared/page-shell';

export default function HomePage() {
  return (
    <PageShell
      title="Professional B2C Marketplace"
      description="Hero, featured products, category spotlight, and top sellers feed are ready for data wiring."
    >
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded border p-4">Featured Products Slot</div>
        <div className="rounded border p-4">Top Sellers Slot</div>
        <div className="rounded border p-4">Promotional Banner Ads Slot</div>
      </div>
      <Link href="/products" className="inline-block rounded bg-slate-900 px-4 py-2 text-white">
        Start browsing
      </Link>
    </PageShell>
  );
}
