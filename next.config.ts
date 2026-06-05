import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.179'],
  env: {
    SESSION_TOKEN: process.env.SESSION_TOKEN
  }
};

export default nextConfig;
