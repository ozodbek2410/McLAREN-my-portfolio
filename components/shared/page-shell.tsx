import { ReactNode } from 'react';

export function PageShell({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl space-y-4 px-4 py-8">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-slate-600">{description}</p>
      {children}
    </section>
  );
}
