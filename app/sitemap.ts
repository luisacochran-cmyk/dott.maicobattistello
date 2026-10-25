import type { MetadataRoute } from "next"
import { articoli } from "@/lib/articoli"

// Sitemap generata in automatico: gli articoli nuovi del blog
// vengono aggiunti da soli. Per una nuova pagina, aggiungerla qui sotto.
const base = "https://dottmaicobattistello.it"

const pagine: { percorso: string; priorita: number }[] = [
  { percorso: "/", priorita: 1.0 },
  { percorso: "/chi-sono", priorita: 0.9 },
  { percorso: "/ozonoterapia", priorita: 0.9 },
  { percorso: "/osteopatia", priorita: 0.9 },
  { percorso: "/ozonoterapia-osteopatia", priorita: 0.9 },
  { percorso: "/medicina-legale", priorita: 0.9 },
  { percorso: "/ozonoterapia-ulcere", priorita: 0.8 },
  { percorso: "/ozonoterapia-padova", priorita: 0.8 },
  { percorso: "/ozonoterapia-marostica", priorita: 0.8 },
  { percorso: "/ozonoterapia-schio", priorita: 0.8 },
  { percorso: "/ozonoterapia-malo", priorita: 0.8 },
  { percorso: "/osteopatia-padova", priorita: 0.8 },
  { percorso: "/osteopatia-marostica", priorita: 0.8 },
  { percorso: "/osteopatia-schio", priorita: 0.8 },
  { percorso: "/osteopatia-malo", priorita: 0.8 },
  { percorso: "/ozono-osteo-padova", priorita: 0.8 },
  { percorso: "/ozono-osteo-marostica", priorita: 0.8 },
  { percorso: "/ozono-osteo-schio", priorita: 0.8 },
  { percorso: "/ozono-osteo-malo", priorita: 0.8 },
  { percorso: "/medicina-legale-padova", priorita: 0.8 },
  { percorso: "/medicina-legale-marostica", priorita: 0.8 },
  { percorso: "/medicina-legale-schio", priorita: 0.8 },
  { percorso: "/medicina-legale-malo", priorita: 0.8 },
  { percorso: "/contatti", priorita: 0.7 },
  { percorso: "/blog", priorita: 0.7 },
  { percorso: "/privacy-policy", priorita: 0.3 },
  { percorso: "/cookie-policy", priorita: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const oggi = new Date()
  return [
    ...pagine.map(({ percorso, priorita }) => ({
      url: `${base}${percorso === "/" ? "" : percorso}`,
      lastModified: oggi,
      priority: priorita,
    })),
    ...articoli.map((a) => ({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(a.data),
      priority: 0.7,
    })),
  ]
}
