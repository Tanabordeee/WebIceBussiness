import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img5.pic.in.th",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img2.pic.in.th",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
    // เพิ่ม WebP/AVIF output formats + ลด quality default
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // cache 24 ชั่วโมง
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  serverExternalPackages: ["mongoose"],
  // Removed redundant preconnect headers as they are unused for initial page load
  async headers() {
    return [];
  },
};

export default nextConfig;