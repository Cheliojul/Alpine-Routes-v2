const repo = 'Alpine-Routes-v2';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export so the site can be served by GitHub Pages.
  output: 'export',
  // Served from https://cheliojul.github.io/Alpine-Routes-v2/ in production.
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
