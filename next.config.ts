/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pangasinan",
  assetPrefix: "/pangasinan",
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
