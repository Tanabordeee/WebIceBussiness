import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img5.pic.in.th' , 'img2.pic.in.th'],
  },
  serverExternalPackages: ['mongoose'],
};

export default nextConfig;