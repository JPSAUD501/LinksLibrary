/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports =  {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/jpsaud501',
        permanent: true,
      },
    ]
  },
}
