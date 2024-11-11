import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['asiaice.co.th', 'i.imgur.com'],
  },
  serverExternalPackages: ['mongoose'],
  experimental: {
    optimizeCss: true, 
  },
};

export default nextConfig;