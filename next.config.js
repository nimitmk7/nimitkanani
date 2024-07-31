/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  output: 'export',
  basePath: '/nimitkanani',
  assetPrefix: '/nimitkanani/',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'src/images'
  }
}
