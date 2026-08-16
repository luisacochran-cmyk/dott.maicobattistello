import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Blog | Dr. Maico Battistello",
  description:
    "Approfondimenti del Dr. Maico Battistello su ozonoterapia, osteopatia, medicina legale, dolore e salute.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
