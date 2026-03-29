export function PageShell({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-xl border bg-white p-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-2 text-slate-600">{description}</p>
    </section>
  );
}
