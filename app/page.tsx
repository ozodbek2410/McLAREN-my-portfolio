export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl bg-slate-900 p-8 text-white">
        <h1 className="text-3xl font-bold">Professional B2C Marketplace Starter</h1>
        <p className="mt-2 text-slate-200">Hero, featured products, categories, and top sellers blocks are ready to integrate with real data.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {['Featured Products', 'Categories', 'Top Sellers'].map((item) => (
          <article key={item} className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="font-semibold">{item}</h2>
            <p className="text-sm text-slate-600">Connect API data here.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
