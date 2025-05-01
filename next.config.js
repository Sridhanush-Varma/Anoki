/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Output directory for the static build
  trailingSlash: true, // Add trailing slashes to all routes
  images: {
    unoptimized: true,
    domains: [
      'upload.wikimedia.org',
      'lh3.googleusercontent.com',
      'images.ctfassets.net',
      'cdn.icon-icons.com',
      'mistral.ai',
      'huggingface.co',
      'cdn.worldvectorlogo.com'
    ]
  },
  // Add transpilePackages to help with compatibility
  transpilePackages: ['react-icons', 'framer-motion'],
  // Disable barrel optimization for react-icons
  experimental: {
    optimizePackageImports: []
  },
  // Set the base path for GitHub Pages
  basePath: '/Encode-25',
  assetPrefix: '/Encode-25/',
}

module.exports = nextConfig
