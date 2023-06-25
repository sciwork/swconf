/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  output: 'export',
  distDir: process.env.OUTPUTDIR,
  images: {
    unoptimized: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
