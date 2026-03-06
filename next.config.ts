import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.jan-sedivy.com",
        pathname: "/wp-content/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
