import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import GoogleAnalytics from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Dr. Battistello - Osteopatia e Ozonoterapia",
    template: "%s | Dr. Battistello",
  },
  description:
    "Specialista in Osteopatia, Ozonoterapia e Medicina Legale. Trattamenti personalizzati per il benessere e la salute. Prenota la tua visita.",
  keywords: "osteopatia, ozonoterapia, medicina legale, fisioterapia, trattamenti, salute, benessere",
  authors: [{ name: "Dr. Battistello" }],
  creator: "Dr. Battistello",
  publisher: "Dr. Battistello",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://drbattistello.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://drbattistello.com",
    title: "Dr. Battistello - Osteopatia e Ozonoterapia",
    description:
      "Specialista in Osteopatia, Ozonoterapia e Medicina Legale. Trattamenti personalizzati per il benessere e la salute.",
    siteName: "Dr. Battistello",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Battistello - Osteopatia e Ozonoterapia",
    description:
      "Specialista in Osteopatia, Ozonoterapia e Medicina Legale. Trattamenti personalizzati per il benessere e la salute.",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C3FPBVTC8P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C3FPBVTC8P');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Suspense fallback={null}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <CookieBanner />
            <GoogleAnalytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
