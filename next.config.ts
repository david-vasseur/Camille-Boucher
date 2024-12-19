import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  async headers() {
    return [
      {
        source: '/(.*)', 
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate', 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
