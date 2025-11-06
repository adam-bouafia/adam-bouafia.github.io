/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath if deploying to a repository (not username.github.io)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name/',
}

module.exports = nextConfig
