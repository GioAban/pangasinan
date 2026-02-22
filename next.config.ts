/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // ONLY the repository name, starting with a slash
  basePath: "/pangasinan",

  // Use the same string as basePath, NO trailing slash
  assetPrefix: "/pangasinan",

  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
