import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep file tracing rooted on this kit when nested inside the monorepo.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
