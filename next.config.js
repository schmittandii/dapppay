/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    RPC_NODE: process.env.RPC_NODE,
    INFURA_ID: process.env.INFURA_ID
  }
}

module.exports = nextConfig
