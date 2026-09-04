/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: ['192.168.1.12', 'localhost:3000', '192.168.1.12:3000'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/achievement',
        destination: '/achievements',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;