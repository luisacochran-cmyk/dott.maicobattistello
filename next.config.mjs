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
      {
        source: '/ozonoterapia-osteopatia',
        destination: '/ozone-osteopathy',
        permanent: true,
      },
      {
        source: '/osteopatia',
        destination: '/osteopathy',
        permanent: true,
      },
      {
        source: '/ozonoterapia',
        destination: '/ozone-therapy',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/medicina-legale-a-padova',
        destination: '/legal-medicine',
        permanent: true,
      },
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
