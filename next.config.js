/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out', // Output directory for the static build
  trailingSlash: true, // Add trailing slashes to all routes
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
    unoptimized: true, // Required for static export
  },
  // Add transpilePackages to help with compatibility
  transpilePackages: ['react-icons', 'framer-motion'],
  // Disable barrel optimization for react-icons
  experimental: {
    optimizePackageImports: []
  },
  // Set the base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Encode-25' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Encode-25/' : '',
}

module.exports = nextConfig
