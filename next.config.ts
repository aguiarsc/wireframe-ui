import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
