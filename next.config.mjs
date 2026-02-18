/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:; img-src 'self' data: https: blob:; media-src 'self' https: blob: data:; connect-src 'self' https: wss: blob:; frame-src 'self' https:; worker-src 'self' blob:; upgrade-insecure-requests;"
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'unsafe-none'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'cross-origin'
          }
        ]
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/ozonoterapia',
        destination: '/ozone-therapy',
      },
      {
        source: '/osteopatia',
        destination: '/osteopathy',
      },
      {
        source: '/ozonoterapia-osteopatia',
        destination: '/ozone-osteopathy',
      },
      {
        source: '/medicina-legale',
        destination: '/legal-medicine',
      },
      {
        source: '/chi-sono',
        destination: '/about-me',
      },
      {
        source: '/contatti',
        destination: '/contacts',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://dottmaicobattistello.it/:path*',
        permanent: true,
      },
      {
        source: '/ozone-therapy',
        destination: '/ozonoterapia',
        permanent: true,
      },
      {
        source: '/osteopathy',
        destination: '/osteopatia',
        permanent: true,
      },
      {
        source: '/ozone-osteopathy',
        destination: '/ozonoterapia-osteopatia',
        permanent: true,
      },
      {
        source: '/legal-medicine',
        destination: '/medicina-legale',
        permanent: true,
      },
      {
        source: '/about-me',
        destination: '/chi-sono',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contatti',
        permanent: true,
      },
      {
        source: '/chisono',
        destination: '/chi-sono',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/medicina-legale-a-padova',
        destination: '/medicina-legale',
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
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'dottmaicobattistello.it'],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig
