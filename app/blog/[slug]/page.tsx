import { notFound } from "next/navigation"

const validSlugs = [
  "malanni-stagionali-ozonoterapia",
  "infiammazione-cronica-basso-grado",
]

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  if (!validSlugs.includes(params.slug)) {
    notFound()
  }

  return (
    <main className="pt-28 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">
          {params.slug === "infiammazione-cronica-basso-grado"
            ? "Infiammazione Cronica di Basso Grado"
            : "Malanni stagionali e difese naturali"}
        </h1>

        <p className="mt-6">
          Pagina articolo in preparazione.
        </p>
      </div>
    </main>
  )
}
