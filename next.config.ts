import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired work URL (matches the-forge Railway 301).
      { source: "/work", destination: "/about", statusCode: 301 },
      // www → apex. Only matches once www.journeydigital.ai is attached to Vercel.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.journeydigital.ai" }],
        destination: "https://journeydigital.ai/:path*",
        statusCode: 301,
      },
    ];
  },
  async rewrites() {
    return [
      // Locked sample-church demo (static HTML ported from the-forge).
      { source: "/demo", destination: "/jd-demo.html" },
    ];
  },
};

export default nextConfig;
