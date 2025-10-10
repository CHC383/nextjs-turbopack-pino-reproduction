import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ["thread-stream", "pino", "pino-pretty"],
};

export default nextConfig;
