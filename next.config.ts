import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
