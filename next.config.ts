import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "docs",
  basePath: "/next_portfolio",
  assetPrefix: "/next_portfolio",
  trailingSlash: true,
};

export default nextConfig;
