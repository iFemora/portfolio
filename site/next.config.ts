import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output static files for easy deployment to any static host
  // Remove this line if you want server-side features
  // output: "export",
  images: {
    // Add domains here when you add real images
    remotePatterns: [],
  },
};

export default nextConfig;
