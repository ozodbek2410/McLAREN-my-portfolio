import { PageShell } from '@/components/shared/page-shell';

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  return <PageShell title={`Order ${params.id}`} description="Live order timeline: PENDING → PROCESSING → SHIPPED → DELIVERED." />;
}
