/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '*.amazonaws.com' }
    ]
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
