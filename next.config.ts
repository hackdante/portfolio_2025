import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: 'px.ads.linkedin.com',
        port: '',
        pathname: '/collect/**', 
      },
    ],
  },
};

export default nextConfig;
