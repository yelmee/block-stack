import type {
    NextConfig
} from "next";

const nextConfig: NextConfig = {
  // Monorepo support: the client imports workspace package sources directly
  // (e.g. `domains/src/...`). Allow Next to transpile them.
  experimental: {
    externalDir: true,
  },
  transpilePackages: ["domains", "adapters"],
};

export default nextConfig;
