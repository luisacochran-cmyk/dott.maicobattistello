/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/chisono',
        destination: '/about-me',
        permanent: true,
      },
      {
        source: '/chi-sono',
        destination: '/about-me',
        permanent: true,
      },
      // Rimosso il redirect www -> non-www che causava il loop infinito
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
