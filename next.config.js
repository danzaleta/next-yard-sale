/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'placeimg.com',
      'api.lorem.space',
      'store.storeimages.cdn-apple.com',
      'w7.pngwing.com',
      'encrypted-tbn0.gstatic.com',
      'http2.mlstatic.com',
    ],
  },
});