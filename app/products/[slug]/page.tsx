export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <div>Product detail for {params.slug}: gallery, seller info, reviews, related products.</div>;
}
