import type { Metadata } from "next"

import {
  HeroSection,
  TreatmentsSection,
  ConditionsSection,
  SubtitleSection,
  DescriptionSection,
  FaqSection,
  AdvancedTherapySection,
} from "@/components/client-animated-section"

export const metadata: Metadata = {
  alternates: {
    canonical: "https://dottmaicobattistello.it",
  },
}

export default function Home() {
  return (
       <>
      <HeroSection />

      <ConditionsSection />

      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-white to-slate-50"
      />

      <TreatmentsSection />
      <SubtitleSection />
      <DescriptionSection />

      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-white via-slate-50 to-white"
      />

      <FaqSection />

      <AdvancedTherapySection />
    </>
  )
}
