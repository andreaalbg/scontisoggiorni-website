/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // SEO optimizations
  generateEtags: true,
};

export default nextConfig;

