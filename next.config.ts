import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 13+, but included per request
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'lenis'],
  },
};

export default nextConfig;
