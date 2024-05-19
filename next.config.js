/** @type {import('next').NextConfig} */
const nextConfig = {
 output: 'standalone',
   async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `/api/:path*`,
      },
      {
        source: `/:path*`,
        destination: `https://srv498956.hstgr.cloud/:path*`,
      },
    ];
  },
}

module.exports = nextConfig

