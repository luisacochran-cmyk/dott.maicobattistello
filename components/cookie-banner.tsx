"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")

    // If no choice has been made, show the banner
    if (!cookieConsent) {
      // Small delay to prevent the banner from flashing on page load
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)

    // Here you would typically initialize analytics or other cookie-dependent services
    // For example: initializeAnalytics()
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)

    // Here you would ensure no non-essential cookies are set
  }

  const closeBanner = () => {
    // Just hide the banner without setting a preference
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg p-4 md:p-6 animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="pr-8 flex-1">
            <div className="flex justify-between items-start w-full">
              <h3 className="text-lg font-semibold mb-2">Informativa sui Cookie</h3>
              <button onClick={closeBanner} className="text-gray-500 hover:text-gray-700 md:hidden" aria-label="Chiudi">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare la tua
              esperienza. Cliccando "Accetta tutti" acconsenti all'uso di tutti i cookie. Puoi personalizzare le tue
              preferenze o leggere la nostra{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </Link>{" "}
              per maggiori informazioni.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button variant="outline" onClick={declineCookies} className="w-full sm:w-auto">
              Solo essenziali
            </Button>
            <Button onClick={acceptCookies} className="w-full sm:w-auto bg-primary hover:bg-primary-dark">
              Accetta tutti
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
