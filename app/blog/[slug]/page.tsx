import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PaginaArticolo } from "@/components/articolo-blog"
import { articoli, trovaArticolo } from "@/lib/articoli"

type Props = {
  params: {
    slug: string
  }
}

// Crea in anticipo una pagina per ogni articolo dell'archivio
export function generateStaticParams() {
  return articoli.map((articolo) => ({ slug: articolo.slug }))
}

// Indirizzi che non corrispondono a un articolo: pagina "non trovato"
export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const articolo = trovaArticolo(params.slug)

  if (!articolo) {
    return { title: "Articolo non trovato | Dott. Maico Battistello" }
  }

  return {
    title: `${articolo.titolo} | Dott. Maico Battistello`,
    description: articolo.descrizione,
    alternates: {
      canonical: `https://dottmaicobattistello.it/blog/${articolo.slug}`,
    },
    openGraph: {
      title: articolo.titolo,
      description: articolo.descrizione,
      type: "article",
    },
  }
}

export default function BlogArticoloPage({ params }: Props) {
  const articolo = trovaArticolo(params.slug)

  if (!articolo) {
    notFound()
  }

  return <PaginaArticolo articolo={articolo} />
}
