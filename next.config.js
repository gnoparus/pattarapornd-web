/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Custom domain configuration for GitHub Pages
  // No basePath or assetPrefix needed for custom domains
}

module.exports = nextConfig
