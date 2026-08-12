import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Keep this starter self-contained when nested under the marketing repo.
  turbopack: {
    root,
  },
};

export default nextConfig;
