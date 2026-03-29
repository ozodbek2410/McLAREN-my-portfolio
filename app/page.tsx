import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='space-y-8'>
      <section className='rounded-2xl bg-slate-900 p-10 text-white'>
        <h1 className='text-4xl font-bold'>B2C Marketplace Platform</h1>
        <p className='mt-3 text-slate-300'>Hero, featured listings, categories, and top sellers.</p>
      </section>
      <section className='grid gap-4 md:grid-cols-3'>
        {['/products', '/seller/dashboard', '/admin/dashboard'].map((href) => (
          <Link key={href} href={href} className='rounded-xl border bg-white p-6 shadow-sm'>
            Open {href}
          </Link>
        ))}
      </section>
    </div>
  );
}
