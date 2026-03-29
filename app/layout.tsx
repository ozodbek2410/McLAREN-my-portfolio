import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Marketplace Platform',
  description: 'B2C marketplace with seller subscriptions and admin controls'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 text-sm">
            <Link href="/" className="font-semibold">MarketPro</Link>
            <div className="flex gap-4">
              <Link href="/products">Products</Link>
              <Link href="/seller/dashboard">Seller</Link>
              <Link href="/admin/dashboard">Admin</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
