import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "docs",
  basePath: "/next_portfolio",
  assetPrefix: "./",
  trailingSlash: true,
};

export default nextConfig;
