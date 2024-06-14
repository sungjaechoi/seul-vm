/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**', // 모든 경로를 허용
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // 모든 경로를 허용
      },
    ],
  },
}

export default nextConfig
