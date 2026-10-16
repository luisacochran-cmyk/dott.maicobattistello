"use client"

import dynamic from "next/dynamic"

// Import the client-side component with dynamic to avoid hydration errors.
// Mentre si carica non mostra nulla: lo spazio del titolo è già occupato
// dalla copia trasparente nella HeroSection, quindi la pagina non salta.
const DynamicTypewriter = dynamic(() => import("@/components/typewriter-animation"), {
  ssr: false,
  loading: () => null,
})

interface ClientTypewriterProps {
  text: string
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function ClientTypewriter({ text, delay, className, onComplete }: ClientTypewriterProps) {
  return <DynamicTypewriter text={text} delay={delay} className={className} onComplete={onComplete} />
}
