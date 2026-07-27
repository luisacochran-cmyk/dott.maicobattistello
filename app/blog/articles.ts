export interface BlogArticle {
  slug: string
  title: string
  image: string
  category: string
  publishDate: string
  content: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "infiammazione-cronica-basso-grado",
    title:
      "Infiammazione Cronica di Basso Grado: Cos'è e Perché Causa Dolori Articolari Persistenti",
    image: "/images/infiammazione-cronica-maico.png",
    category: "Ozonoterapia",
    publishDate: "19/07/2026",
    content: `L'infiammazione cronica di basso grado (Systemic Chronic Inflammation - SCI) rappresenta uno dei principali motori biologici dei disturbi del nostro tempo.

A differenza dell'infiammazione acuta – che è una risposta visibile, protettiva e temporanea a un danno – il processo cronico si sviluppa in modo subdolo e può persistere nel tempo.

### Le Terapie Mediche in Studio

Il percorso clinico può integrare, quando indicato:

• Ozonoterapia infiltrativa e trattamento osteopatico

• Grande Autoemoterapia

• Prescrizione nutraceutica personalizzata

### L'Approccio Multidisciplinare e lo Stile di Vita

Il percorso può comprendere anche nutrizione clinica, gestione dello stress, meditazione e attività fisica adattata, in relazione alle caratteristiche del paziente.

### Conclusioni

Ogni paziente necessita di una valutazione individuale. Il trattamento non parte da una tecnica precostituita, ma dalla comprensione clinica del problema.

### Prenota una Visita Specialistica

Il Dott. Maico Battistello riceve su appuntamento a Marostica, Malo, Schio e Padova.`,
  },
]

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug)
}
