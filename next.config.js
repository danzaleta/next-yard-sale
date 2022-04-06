/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects(){
    return [
      {
        source: '/hola',
        destination: 'https://www.linkedin.com/in/danzaleta/',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
