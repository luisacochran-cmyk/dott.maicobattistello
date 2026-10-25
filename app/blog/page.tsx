import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import { articoli, formattaData } from "@/lib/articoli"

export const metadata: Metadata = {
  title: "Blog | Dott. Maico Battistello",
  description:
    "Articoli e approfondimenti del Dott. Maico Battistello su ozonoterapia, osteopatia, approccio integrato e medicina legale.",
  alternates: { canonical: "https://dottmaicobattistello.it/blog" },
}

export default function BlogPage() {
  // Dal più recente al meno recente
  const elenco = [...articoli].sort((a, b) => b.data.localeCompare(a.data))

  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />
      </div>

      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_20%,#F8F5F0_60%,#F0EAE0_100%)] pb-16 md:pb-24">
        {/* Intestazione */}
        <section className="pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="container mx-auto max-w-6xl px-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">Blog</p>
            <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
              Articoli e approfondimenti<span className="text-[#0066CC]">.</span>
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-6" aria-hidden="true" />
            <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
              Riflessioni del Dott. Maico Battistello su dolore, infiammazione,
              approccio integrato tra ozonoterapia e osteopatia, e medicina legale.
            </p>
          </div>
        </section>

        {/* Schede degli articoli */}
        <section>
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {elenco.map((articolo) => (
                <Link
                  key={articolo.slug}
                  href={`/blog/${articolo.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.45)] transition-shadow hover:shadow-[0_24px_65px_-35px_rgba(20,45,75,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F5F0]">
                    <Image
                      src={articolo.immagine}
                      alt={articolo.titolo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#0066CC]">
                      {articolo.categoria} · {formattaData(articolo.data)}
                    </p>
                    <h2 className="text-xl font-semibold leading-snug tracking-tight text-slate-900 group-hover:text-[#0066CC] transition-colors">
                      {articolo.titolo}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">
                      {articolo.descrizione}
                    </p>
                    <span className="mt-5 inline-flex self-start border-b border-[#0066CC]/40 pb-1 font-semibold text-[#0066CC]">
                      Leggi l&apos;articolo
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
