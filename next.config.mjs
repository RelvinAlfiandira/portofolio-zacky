/** @type {import('next').NextConfig} */
const nextConfig = {

  allowedDevOrigins: ['localhost:3000',
    '192.168.1.12',
    '192.168.1.12:3000',
    '192.168.56.1',
    '192.168.56.1:3000',],
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