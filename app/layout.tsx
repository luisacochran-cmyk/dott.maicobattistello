import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

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
  },
  other: {
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={roboto.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
