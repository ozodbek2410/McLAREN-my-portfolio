import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';

export const metadata: Metadata = {
  title: 'Marketplace Pro',
  description: 'B2C marketplace with seller subscriptions, multi-role dashboards, and Stripe payments.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
