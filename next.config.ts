import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "docs",
  basePath: process.env.NODE_ENV === "production" ? "/next_portfolio" : " ",
  assetPrefix: process.env.NODE_ENV === "production" ? "/next_portfolio/" : " ",
};

export default nextConfig;
