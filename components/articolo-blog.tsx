import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import { type Articolo, formattaData } from "@/lib/articoli"

/* Trasforma **testo** in grassetto e [testo](/indirizzo) in link */
function conFormattazione(testo: string): ReactNode[] {
  return testo.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g).map((parte, i) => {
    if (parte.startsWith("**") && parte.endsWith("**") && parte.length > 4) {
      return <strong key={i}>{conFormattazione(parte.slice(2, -2))}</strong>
    }
    const link = parte.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      return (
        <Link
          key={i}
          href={link[2]}
          className="text-[#0066CC] underline decoration-[#0066CC]/30 underline-offset-4 transition-colors hover:decoration-[#0066CC]"
        >
          {link[1]}
        </Link>
      )
    }
    return parte
  })
}

const tuttoGrassetto = (t: string) =>
  t.startsWith("**") && t.endsWith("**") && !t.slice(2, -2).includes("**")

/* Trasforma il testo dell'articolo in titoli, paragrafi, elenchi e citazioni */
function TestoArticolo({ contenuto }: { contenuto: string }) {
  const blocchi = contenuto.trim().split(/\n\s*\n/)

  return (
    <>
      {blocchi.map((blocco, i) => {
        const t = blocco.trim()
        if (!t) return null

        // Linea di separazione
        if (t === "---") {
          return <hr key={i} className="my-10 border-slate-300/80" />
        }

        // Titolo di sezione
        if (t.startsWith("### ")) {
          return (
            <h2 key={i} className="pt-4 text-[1.6rem] md:text-3xl font-semibold leading-tight tracking-tight text-slate-900">
              {t.slice(4)}
            </h2>
          )
        }

        // Sequenza di foto numerate: righe "@foto /indirizzo | didascalia"
        if (t.startsWith("@foto ")) {
          const foto = t
            .split("\n")
            .map((riga) => riga.trim().replace(/^@foto\s+/, ""))
            .filter(Boolean)
            .map((riga) => {
              const [src, didascalia = ""] = riga.split("|").map((p) => p.trim())
              return { src, didascalia }
            })
          return (
            <figure key={i} className="md:-mx-24 lg:-mx-32">
              <p className="mb-3 text-sm text-slate-500 md:hidden">Scorri le foto →</p>
              <ol className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0">
                {foto.map((f, j) => (
                  <li key={j} className="w-[72%] shrink-0 snap-start md:w-auto">
                    <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-[#F8F5F0] shadow-[0_18px_45px_-32px_rgba(20,35,55,0.55)]">
                      <Image src={f.src} alt={f.didascalia} fill sizes="(max-width: 768px) 72vw, 200px" className="object-cover" />
                      <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0066CC] text-sm font-semibold text-white shadow-md">
                        {j + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-base leading-snug text-slate-700">{f.didascalia}</p>
                  </li>
                ))}
              </ol>
            </figure>
          )
        }

        // Tabella: righe che iniziano con | (la prima è l'intestazione)
        if (t.startsWith("|")) {
          const righe = t
            .split("\n")
            .map((riga) => riga.trim())
            .filter((riga) => riga.startsWith("|") && !/^\|[\s|:-]+\|$/.test(riga))
            .map((riga) => riga.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()))
          const [intestazione, ...corpo] = righe
          return (
            <div key={i} className="overflow-x-auto rounded-[1.25rem] bg-gradient-to-br from-[#F2F7FD] via-white to-[#FAF6F0] ring-1 ring-[#E3E8EF]">
              <table className="w-full min-w-[34rem] border-collapse text-left text-base md:text-lg">
                <thead>
                  <tr>
                    {intestazione.map((cella, j) => (
                      <th
                        key={j}
                        scope="col"
                        className={`px-5 pt-5 pb-3 align-bottom text-sm font-semibold uppercase tracking-[0.12em] ${j === intestazione.length - 1 ? "text-[#0066CC]" : "text-slate-500"}`}
                      >
                        {cella}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {corpo.map((riga, r) => (
                    <tr key={r} className="border-t border-slate-200/80">
                      {riga.map((cella, j) =>
                        j === 0 ? (
                          <th key={j} scope="row" className="px-5 py-4 align-top font-semibold text-slate-900">
                            {conFormattazione(cella)}
                          </th>
                        ) : (
                          <td
                            key={j}
                            className={`px-5 py-4 align-top ${j === riga.length - 1 ? "text-slate-900" : "text-slate-600"}`}
                          >
                            {conFormattazione(cella)}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        // Elenco puntato (una o più righe che iniziano con •)
        if (t.startsWith("• ")) {
          const voci = t
            .split("\n")
            .map((riga) => riga.trim())
            .filter(Boolean)
            .map((riga) => riga.replace(/^•\s*/, ""))
          return (
            <ul key={i} className="space-y-3">
              {voci.map((voce, j) => (
                <li key={j} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/60" />
                  <span>{conFormattazione(voce)}</span>
                </li>
              ))}
            </ul>
          )
        }

        // Frase d'apertura tutta in grassetto: diventa il sottotitolo
        if (i === 0 && tuttoGrassetto(t)) {
          return (
            <p key={i} className="text-xl md:text-2xl font-semibold leading-relaxed text-slate-800">
              {t.slice(2, -2)}
            </p>
          )
        }

        // Citazione lunga tra virgolette
        if (t.startsWith('"') && t.endsWith('"')) {
          return (
            <blockquote key={i} className="border-l-2 border-[#0066CC]/40 pl-5 text-xl md:text-2xl italic leading-relaxed text-slate-800">
              {t}
            </blockquote>
          )
        }

        // Domanda o frase tra « »
        if (t.startsWith("«") && t.endsWith("»")) {
          return (
            <p key={i} className="pl-5 text-xl italic text-slate-800">
              {t}
            </p>
          )
        }

        // Paragrafo normale
        return <p key={i}>{conFormattazione(t)}</p>
      })}
    </>
  )
}

const etichetta = "text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]"

export function PaginaArticolo({ articolo }: { articolo: Articolo }) {
  const indirizzo = `https://dottmaicobattistello.it/blog/${articolo.slug}`

  const datiStrutturati = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articolo.titolo,
    description: articolo.descrizione,
    image: `https://dottmaicobattistello.it${encodeURI(articolo.immagine)}`,
    datePublished: articolo.data,
    author: {
      "@type": "Person",
      name: "Dott. Maico Battistello",
      url: "https://dottmaicobattistello.it/chi-sono",
    },
    mainEntityOfPage: indirizzo,
  }

  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: articolo.titolo, href: `/blog/${articolo.slug}` },
          ]}
        />
      </div>

      <article className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_12%,#FFFFFF_70%,#FAF8F4_100%)]">
        {/* Intestazione */}
        <header className="pt-10 pb-8 md:pt-16">
          <div className="container mx-auto max-w-3xl px-4">
            <p className={`mb-4 ${etichetta}`}>
              {articolo.categoria} · {formattaData(articolo.data)}
            </p>
            <h1 className="text-[2rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
              {articolo.titolo}
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-5" aria-hidden="true" />
            <p className="text-base text-slate-500">di Dott. Maico Battistello</p>
          </div>
        </header>

        {/* Immagine */}
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#F8F5F0] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
            <Image
              src={articolo.immagine}
              alt={articolo.titolo}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className={articolo.immagineIntera ? "object-contain" : "object-cover"}
            />
          </div>
        </div>

        {/* Testo */}
        <div className="container mx-auto max-w-3xl px-4 py-10 md:py-14">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900">
            {articolo.contenuto && <TestoArticolo contenuto={articolo.contenuto} />}
          </div>

          {/* Bibliografia */}
          {articolo.bibliografia && articolo.bibliografia.length > 0 && (
            <details className="group mt-12 border-y border-slate-300/80">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="text-lg md:text-xl font-semibold text-slate-900">Riferimenti bibliografici</span>
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0066CC]/30 text-xl font-light text-[#0066CC] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <ol className="space-y-3 pb-6 text-sm md:text-base leading-relaxed text-slate-600">
                {articolo.bibliografia.map((voce, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-semibold text-[#0066CC]">{i + 1}.</span>
                    <span>{voce}</span>
                  </li>
                ))}
              </ol>
            </details>
          )}

          {/* Pagine collegate */}
          <div className="mt-12">
            <p className={`mb-4 ${etichetta}`}>Approfondisci</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { href: "/ozonoterapia-osteopatia", testo: "L'approccio integrato" },
                { href: "/ozonoterapia", testo: "Ozonoterapia" },
                { href: "/osteopatia", testo: "Osteopatia" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center border-b border-[#0066CC]/40 pb-1 font-semibold text-[#0066CC] transition-colors hover:border-[#0066CC]"
                >
                  {link.testo}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Invito a prenotare */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="rounded-[2.5rem] bg-white/80 p-7 text-center ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] md:p-10">
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                Ogni percorso inizia da una valutazione<span className="text-[#0066CC]">.</span>
              </p>
              <Link
                href="/contatti"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-[#0066CC] px-8 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#0057AD]"
              >
                <Calendar className="h-5 w-5" />
                <span>Prenota una visita</span>
              </Link>
            </div>
          </div>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati) }}
      />
    </div>
  )
}
