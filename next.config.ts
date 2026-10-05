import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  devIndicators: false,
  onDemandEntries: {
    // 保持已编译页面在内存中的缓存时长（1小时），避免来回切页面时反复重新编译
    maxInactiveAge: 60 * 60 * 1000,
    // 允许同时缓存在内存中的页面数量
    pagesBufferLength: 50,
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "recharts",
      "@base-ui/react",
      "cmdk",
      "date-fns",
      "embla-carousel-react",
    ],
  },
};

export default nextConfig;
