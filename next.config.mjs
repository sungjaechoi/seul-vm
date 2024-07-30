/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
        pathname: '/get/**',
      },
    ],
  },
}

export default nextConfig
