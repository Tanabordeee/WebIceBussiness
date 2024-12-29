import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['i.imgur.com'],
  },
  serverExternalPackages: ['mongoose'],
};

export default nextConfig;