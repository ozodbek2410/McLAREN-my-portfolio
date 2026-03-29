import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marketplace Platform',
  description: 'Professional B2C marketplace platform built with Next.js 14'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className='mx-auto min-h-screen max-w-7xl px-4 py-8'>{children}</main>
      </body>
    </html>
  );
}
