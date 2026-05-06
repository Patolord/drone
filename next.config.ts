import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.mux.com",
        port: "",
        pathname: "/**",
        search: "?time=1&width=2560&height=1440&fit_mode=crop",
      },
    ],
  },
};

export default nextConfig;
