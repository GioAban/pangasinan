/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generate static HTML
  basePath: "/pangasinan-heritage", // prefix sa GitHub Pages
  assetPrefix: "/pangasinan-heritage/",
  trailingSlash: true,
  images: { unoptimized: true }, // allow external images without optimization
};

module.exports = nextConfig;
