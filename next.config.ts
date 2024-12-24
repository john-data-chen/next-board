import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['pino', 'pino-pretty']
}

export default nextConfig
