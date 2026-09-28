import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    serverActions: {
      // Job applications include a résumé PDF of up to 4 MB, plus form fields and multipart overhead.
      // Vercel itself caps request bodies at 4.5 MB.
      bodySizeLimit: "4.5mb",
    },
  },
};

export default nextConfig;
