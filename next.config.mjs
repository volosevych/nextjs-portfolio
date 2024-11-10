/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-portfolio' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
