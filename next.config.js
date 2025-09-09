/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.cerave.com' },
      { protocol: 'https', hostname: 'www.laroche-posay.us' },
      { protocol: 'https', hostname: 'm.media-amazon.com' }
    ]
  }
};
module.exports = nextConfig;
