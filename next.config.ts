import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ifoda.uz', pathname: '/storage/**' },
      { protocol: 'https', hostname: '**.ifoda.uz' },
    ],
  },
};

export default nextConfig;
