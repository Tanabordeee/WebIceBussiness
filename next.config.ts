import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img5.pic.in.th',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
        pathname: '/**',
      },
    ],
  },
  serverExternalPackages: ['mongoose'],
};

export default nextConfig;