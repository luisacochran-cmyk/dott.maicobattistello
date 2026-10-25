"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Una sola visita registrata per pagina: la configurazione iniziale
// (in layout.tsx) non invia visite, le invia solo questo componente.
export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window.gtag === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) return
    const query = searchParams.toString()
    window.gtag("event", "page_view", {
      page_path: pathname + (query ? `?${query}` : ""),
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}
