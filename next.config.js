/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/pattarapornd-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pattarapornd-web/' : '',
}

module.exports = nextConfig
