import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Standalone output for server deployments (Vercel supports Next.js natively)
  output: 'standalone',
};

export default nextConfig;
