import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    '.space-z.ai',
  ],
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
