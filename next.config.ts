/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  basePath: '/pangasinan-heritage', // replace with your GitHub repo name
  images: {
    unoptimized: true, // optional, prevents errors with next/image
  },
};

module.exports = nextConfig;
