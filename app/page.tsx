
import type { Metadata } from "next"

import {
  HeroSection,
  TreatmentsSection,
  ConditionsSection,
  DescriptionSection,
  FaqSection,
  AdvancedTherapySection,
  ReviewsSection,
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

      <TreatmentsSection />

      <DescriptionSection />

      <ReviewsSection />

      <FaqSection />

      <AdvancedTherapySection />
    </>
  )
}
