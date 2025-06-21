"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

// Import the client-side component with dynamic to avoid hydration errors
const DynamicTypewriter = dynamic(() => import("@/components/typewriter-animation"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center">
      <Loader2 className="h-4 w-4 animate-spin mr-2" />
      <span>Caricamento...</span>
    </div>
  ),
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
