import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketplace Platform',
  description: 'B2C marketplace with seller subscriptions and admin controls.'
};

const links = [
  ['Products', '/products'],
  ['Cart', '/cart'],
  ['Account', '/account'],
  ['Seller', '/seller/dashboard'],
  ['Admin', '/admin/dashboard']
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold">Marketplace</Link>
            <div className="flex gap-4 text-sm">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="text-slate-600 hover:text-slate-900">
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
