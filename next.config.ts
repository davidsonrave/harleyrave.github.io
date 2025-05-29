import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   basePath: "/harleyrave.github.io",
 output: "export", 
 distDir: "dist",
 images: {
  unoptimized: true,
},
  reactStrictMode: true,
};

export default nextConfig;
