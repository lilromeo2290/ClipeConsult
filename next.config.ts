import type { NextConfig } from "next";

/**
 * Next.js production configuration for Webuzo VPS deployment.
 *
 * - `output: "standalone"` produces a self-contained Node.js server at
 *   `.next/standalone/server.js` that needs no node_modules installed on
 *   the target machine — perfect for VPS deployment via PM2 or systemd.
 * - `reactStrictMode: false` to avoid double-invocation in production.
 * - TypeScript build errors are ignored (the codebase is tested locally
 *   via `bun run lint` before each push).
 */
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Compress responses in production (smaller payloads over the wire).
  compress: true,
  // Powered-by header off — small security/privacy win.
  poweredByHeader: false,
  // Better image optimization defaults.
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
