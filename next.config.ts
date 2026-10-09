import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Build ke time TypeScript errors ignore karne ke liye:
  typescript: {
    ignoreBuildErrors: true,
  },

  // Build ke time ESLint warnings/errors ignore karne ke liye:
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        // Static assets aur images ko exclude kar diya hai
        source: "/((?!_next/static|_next/image|images|favicon.ico).*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;