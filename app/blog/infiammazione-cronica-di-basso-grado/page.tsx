import type { Metadata } from "next"
import { PaginaArticolo } from "@/components/articolo-blog"
import { trovaArticolo } from "@/lib/articoli"

const articolo = trovaArticolo("infiammazione-cronica-di-basso-grado")

export const metadata: Metadata = {
  title: `${articolo.titolo} | Dott. Maico Battistello`,
  description: articolo.descrizione,
  alternates: { canonical: `https://dottmaicobattistello.it/blog/${articolo.slug}` },
  openGraph: {
    title: articolo.titolo,
    description: articolo.descrizione,
    type: "article",
  },
}

export default function Page() {
  return <PaginaArticolo articolo={articolo} />
}
