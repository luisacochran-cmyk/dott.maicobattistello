"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (typeof window.gtag !== "undefined" && gaId) {
      window.gtag("config", gaId, {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}
