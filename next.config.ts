import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  outputFileTracingIncludes: {
    "/": ["node_modules/**/pino@*/node_modules/pino/lib/**"],
  },
};

export default nextConfig;
