import type { NextConfig } from "next";

const BACKEND_URL = process.env.BACKEND_API_URL || 'http://localhost:8080';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Proxy all /api/backend/* requests to the Java Spring Boot backend
  async rewrites() {
    return [
      {
        source: '/api/backend/:path*',
        destination: `${BACKEND_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
