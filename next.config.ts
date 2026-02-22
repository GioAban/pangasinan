/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generate static HTML
  basePath: "/pangasinan", // prefix sa GitHub Pages
  assetPrefix: "/pangasinan/",
  trailingSlash: true,
  images: { unoptimized: true }, // allow external images without optimization
};

module.exports = nextConfig;
