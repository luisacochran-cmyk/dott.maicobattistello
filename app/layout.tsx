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

const titoloSito =
  "Dott. Maico Battistello - Ozonoterapia e Osteopatia a Marostica, Schio, Malo e Padova"
const descrizioneSito =
  "Dott. Maico Battistello, medico chirurgo specialista in Medicina Legale: ozonoterapia e osteopatia in un unico percorso integrato a Marostica, Schio, Malo e Padova."
const immagineSito =
  "https://dottmaicobattistello.it/images/Ritratto%20del%20medico%20in%20clinica.png"

// Valori di riserva per tutto il sito.
// Ogni pagina dichiara il proprio titolo e il proprio indirizzo (canonical):
// qui il canonical NON va messo, altrimenti tutte le pagine senza canonical
// direbbero a Google di essere una copia della home.
export const metadata: Metadata = {
  metadataBase: new URL("https://dottmaicobattistello.it"),
  title: titoloSito,
  description: descrizioneSito,
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
    title: titoloSito,
    description: descrizioneSito,
    siteName: "Dott. Maico Battistello",
    images: [
      {
        url: immagineSito,
        alt: "Dott. Maico Battistello",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: titoloSito,
    description: descrizioneSito,
    images: [immagineSito],
  },
  other: {
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "theme-color": "#0066CC",
    "msapplication-TileColor": "#0066CC",
    "msapplication-config": "/browserconfig.xml",
    referrer: "origin-when-cross-origin",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"
        />

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dott. Battistello" />

        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />

        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />

        <link rel="icon" href="/images/fotoweb.png" sizes="any" />
        <link rel="icon" href="/images/fotoweb.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/fotoweb.png" />

        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "@id": "https://dottmaicobattistello.it/#organization",
              name: "Dott. Maico Battistello",
              alternateName: "Dottor Maico Battistello",
              description: "Specialista in Medicina Legale, Ozonoterapia e Osteopatia",
              url: "https://dottmaicobattistello.it",
              telephone: "+393487383372",
              email: "maico.battistello@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Ragazzoni 36",
                addressLocality: "Marostica",
                addressRegion: "VI",
                postalCode: "36063",
                addressCountry: "IT",
              },
              medicalSpecialty: ["Osteopatia", "Ozonoterapia", "Medicina Legale"],
              priceRange: "€€",
              image: immagineSito,
              logo: "https://dottmaicobattistello.it/images/nuovologo.png",
              sameAs: ["https://www.facebook.com/maicobattistello"],
              areaServed: [
                { "@type": "City", name: "Padova" },
                { "@type": "City", name: "Marostica" },
                { "@type": "City", name: "Schio" },
                { "@type": "City", name: "Malo" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servizi Medici",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Ozonoterapia" } },
                  { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Osteopatia" } },
                  { "@type": "Offer", itemOffered: { "@type": "MedicalProcedure", name: "Medicina Legale" } },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://dottmaicobattistello.it/#person",
              name: "Dott. Maico Battistello",
              givenName: "Maico",
              familyName: "Battistello",
              honorificPrefix: "Dott.",
              jobTitle: "Medico Chirurgo",
              description: "Specialista in Medicina Legale, Ozonoterapia e Osteopatia",
              url: "https://dottmaicobattistello.it",
              image: immagineSito,
              telephone: "+393487383372",
              email: "maico.battistello@gmail.com",
              worksFor: {
                "@id": "https://dottmaicobattistello.it/#organization",
              },
              alumniOf: [
                { "@type": "EducationalOrganization", name: "Università di Padova" },
                { "@type": "EducationalOrganization", name: "Università di Parma" },
              ],
              knowsAbout: ["Osteopatia", "Ozonoterapia", "Medicina Legale", "Pet Therapy"],
              sameAs: ["https://www.facebook.com/maicobattistello"],
            }),
          }}
        />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      var consenso = null;
      try { consenso = localStorage.getItem('cookie-consent'); } catch (e) {}
      gtag('consent', 'default', {
        analytics_storage: consenso === 'accepted' ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
    `,
              }}
            />
          </>
        )}
      </head>
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  )
}
