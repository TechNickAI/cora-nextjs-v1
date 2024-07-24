/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'd1xiic2ql9d7gm.cloudfront.net',
        port: '',
        pathname: '**'
      }
    ]
  }
}