import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Maico Battistello - Ozonoterapia",
  description: "Dr. Maico Battistello - Specialista in Ozonoterapia, Osteopatia e Medicina Legale",
  generator: "v0.dev",
  verification: {
    google: "YCmYA_tPmgbNyc95YLxhBNEsiUExky3vTif5k2uJzwY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dr. Maico Battistello - Ozonoterapia e Osteopatia",
    description: "Specialista in Medicina Legale, Ozonoterapia e Osteopatia. Prenota la tua visita.",
    url: "https://dottmaicobattistello.it",
    siteName: "Dr. Maico Battistello",
    images: [
      {
        url: "https://dottmaicobattistello.it/images/nuovologo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maico Battistello - Logo",
        type: "image/png",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maico Battistello - Ozonoterapia e Osteopatia",
    description: "Specialista in Medicina Legale, Ozonoterapia e Osteopatia. Prenota la tua visita.",
    images: ["https://dottmaicobattistello.it/images/nuovologo.png"],
    creator: "@drmaicobt",
    site: "@drmaicobt",
  },
  alternates: {
    canonical: "https://dottmaicobattistello.it",
  },
  other: {
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "msapplication-config": "/browserconfig.xml",
    referrer: "origin-when-cross-origin",
    viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        {/* Enhanced Mobile Viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
        />

        {/* WhatsApp Business Specific Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dr. Battistello" />

        {/* Enhanced Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        {/* Force HTTPS */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        {/* WhatsApp/Social Media Meta Tags */}
        <meta property="og:site_name" content="Dr. Maico Battistello" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:url" content="https://dottmaicobattistello.it" />
        <meta property="og:title" content="Dr. Maico Battistello - Ozonoterapia e Osteopatia" />
        <meta
          property="og:description"
          content="Specialista in Medicina Legale, Ozonoterapia e Osteopatia. Prenota la tua visita."
        />
        <meta property="og:image" content="https://dottmaicobattistello.it/images/nuovologo.png" />
        <meta property="og:image:secure_url" content="https://dottmaicobattistello.it/images/nuovologo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Dr. Maico Battistello - Specialista in Ozonoterapia e Osteopatia" />
        <meta property="og:image:type" content="image/png" />

        {/* Twitter/X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@drmaicobt" />
        <meta name="twitter:creator" content="@drmaicobt" />
        <meta name="twitter:title" content="Dr. Maico Battistello - Ozonoterapia e Osteopatia" />
        <meta
          name="twitter:description"
          content="Specialista in Medicina Legale, Ozonoterapia e Osteopatia. Prenota la tua visita."
        />
        <meta name="twitter:image" content="https://dottmaicobattistello.it/images/nuovologo.png" />

        {/* Additional Security and Performance */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/nuovologo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/nuovologo.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://dottmaicobattistello.it" />

        {/* Enhanced Structured Data for WhatsApp Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://dottmaicobattistello.it/#organization",
              name: "Dr. Maico Battistello",
              alternateName: "Dott. Maico Battistello",
              description: "Specialista in Ozonoterapia, Osteopatia e Medicina Legale",
              url: "https://dottmaicobattistello.it",
              telephone: "+393487383372",
              email: "maico.battistello@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via F. Piccolo 6",
                addressLocality: "Padova",
                addressRegion: "Veneto",
                postalCode: "35127",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "45.4064",
                longitude: "11.8768",
              },
              medicalSpecialty: ["Osteopatia", "Ozonoterapia", "Medicina Legale"],
              priceRange: "€€",
              image: "https://dottmaicobattistello.it/images/nuovologo.png",
              logo: "https://dottmaicobattistello.it/images/nuovologo.png",
              sameAs: ["https://dottmaicobattistello.it"],
              openingHours: "Mo-Fr 09:00-18:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi Medici",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Ozonoterapia",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Osteopatia",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "MedicalProcedure",
                      name: "Medicina Legale",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Additional Schema for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://dottmaicobattistello.it/#person",
              name: "Dr. Maico Battistello",
              givenName: "Maico",
              familyName: "Battistello",
              honorificPrefix: "Dr.",
              jobTitle: "Medico Chirurgo",
              description: "Specialista in Ozonoterapia, Osteopatia e Medicina Legale",
              url: "https://dottmaicobattistello.it",
              image: "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
              telephone: "+393487383372",
              email: "maico.battistello@gmail.com",
              worksFor: {
                "@id": "https://dottmaicobattistello.it/#organization",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Università di Padova",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Università di Parma",
                },
              ],
              knowsAbout: ["Osteopatia", "Ozonoterapia", "Medicina Legale", "Pet Therapy"],
              sameAs: ["https://dottmaicobattistello.it"],
            }),
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3FPBVTC8P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-C3FPBVTC8P', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `,
          }}
        />
      </head>
      <body className={roboto.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
