import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/testimonials', destination: '/#testimonials', permanent: false },
      // The navbar and footer link to these paths and scroll on click, but a
      // crawler follows the href itself, and none of them is a real route.
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/process', destination: '/#how-we-work', permanent: false },
      { source: '/faq', destination: '/#faq', permanent: false },
    ];
  },
};

export default nextConfig;
