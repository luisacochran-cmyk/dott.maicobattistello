import type { Metadata } from "next"

import {
  HeroSection,
  TreatmentsSection,
  ConditionsSection,
  SubtitleSection,
  DescriptionSection,
  LocationsSection,
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
      <TreatmentsSection />
      <SubtitleSection />
      <DescriptionSection />
      <LocationsSection />
      <FaqSection />
      <AdvancedTherapySection />
    </>
  )
}
