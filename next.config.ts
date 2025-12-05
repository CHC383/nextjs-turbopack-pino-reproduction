import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverExternalPackages: ["pino", "thread-stream", "pino-pretty", "pino-roll"],
};

export default nextConfig;
