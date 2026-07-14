import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/testimonials', destination: '/#testimonials', permanent: false },
    ];
  },
};

export default nextConfig;
