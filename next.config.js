/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RPC_NODE: 'https://mainnet.infura.io/v3/0b2d8931f83744c59aec0525dd7be85b'
  }
}

module.exports = nextConfig
