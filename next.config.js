/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.toyota.com',
            port: '',
            pathname: '/imgix/content/dam/toyota/**',
          },
          {
            protocol: 'https',
            hostname: 'www.motortrend.com',
            port: '',
            pathname: '/uploads/sites/**',
          },
          {
            protocol: 'https',
            hostname: 'di-uploads-development.dealerinspire.com',
            port: '',
            pathname: '/gatorford/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'www.bmw.in',
            port: '',
            pathname: '/content/dam/bmw/**',
          },
          {
            protocol: 'https',
            hostname: 'static-assets.tesla.com',
            port: '',
            pathname: '/configurator/**',
          },
          {
            protocol: 'https',
            hostname: 'd2ivfcfbdvj3sm.cloudfront.net',
            port: '',
            pathname: '/7fc965ab77efe6e0fa62e4ca1ea7673bb65b4757031e3d8e88cb10/**',
          },
          {
            protocol: 'https',
            hostname: 's7d1.scene7.com',
            port: '',
            pathname: '/is/image/**',
          },
          {
            protocol: 'https',
            hostname: 'vehicle-images.dealerinspire.com',
            port: '',
            pathname: '/stock-images/**',
          },
        ],
      },
}

module.exports = nextConfig
//  www.motortrend.com/uploads/sites/10/2023/10/2024-honda-civic-sport-sedan-angular-front.png)