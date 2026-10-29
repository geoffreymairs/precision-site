import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/stump-removal",
        destination: "/services/land-section-prep",
        permanent: true,
      },
      {
        source: "/services/backyard-work",
        destination: "/services/excavation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
