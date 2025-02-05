import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "docs",

  trailingSlash: true,
};

export default nextConfig;
