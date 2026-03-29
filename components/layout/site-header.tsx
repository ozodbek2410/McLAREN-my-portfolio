import Link from 'next/link';

const links = [
  ['Marketplace', '/products'],
  ['Seller', '/seller/dashboard'],
  ['Admin', '/admin/dashboard'],
  ['Account', '/account']
] as const;

export function SiteHeader() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold">
          Marketplace Pro
        </Link>
        <div className="flex gap-4 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-slate-600 hover:text-slate-900">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
