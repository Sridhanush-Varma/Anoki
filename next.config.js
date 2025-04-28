/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'images.ctfassets.net',
      'cdn.icon-icons.com',
      'mistral.ai',
      'huggingface.co',
      'cdn.worldvectorlogo.com'
    ],
    unoptimized: true,
  },
  // Add transpilePackages to help with compatibility
  transpilePackages: ['react-icons', 'framer-motion'],
  // Disable barrel optimization for react-icons
  experimental: {
    optimizePackageImports: []
  }
}

module.exports = nextConfig
