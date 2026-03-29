import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';
  return [
    '', '/products', '/cart', '/checkout', '/account', '/seller/dashboard', '/admin/dashboard'
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
