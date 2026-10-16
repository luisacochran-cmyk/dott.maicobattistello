import type { Metadata } from "next"
import type { ReactNode } from "react"

// Valori di riserva per le pagine del blog.
// Ogni pagina (elenco e articoli) dichiara il proprio titolo e il proprio indirizzo.
export const metadata: Metadata = {
  title: "Blog | Dott. Maico Battistello",
  description:
    "Approfondimenti del Dott. Maico Battistello su ozonoterapia, osteopatia, medicina legale, dolore e salute.",
}

export default function BlogLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
