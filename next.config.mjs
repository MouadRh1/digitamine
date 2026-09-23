/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        // pas de `search` → tous les query params sont autorisés
      },
    ],
  },
};

export default nextConfig;