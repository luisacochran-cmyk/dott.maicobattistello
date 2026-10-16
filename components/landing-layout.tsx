import type { ReactNode } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"

/* ------------------------------------------------------------------
   Stampo grafico comune a tutte le landing page delle sedi.
   Ogni pagina passa i propri testi; lo stile vive solo qui.
------------------------------------------------------------------- */

type VoceBreadcrumb = { label: string; href: string }
type VoceCarosello = { title: string; image: string; link: string }
type InvitoFinale = { titolo: string; testo?: string; pulsante: string }

const testo =
  "text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900"

export function LandingPage({
  breadcrumb,
  etichetta,
  titolo,
  intro,
  children,
  carosello,
  datiStrutturati,
  invito,
}: {
  breadcrumb: VoceBreadcrumb[]
  etichetta: string
  titolo: string
  intro: ReactNode
  children: ReactNode
  carosello?: VoceCarosello[]
  datiStrutturati?: object
  invito?: InvitoFinale
}) {
  const invitoTitolo = invito?.titolo ?? "Ogni percorso inizia da una valutazione"
  const invitoPulsante = invito?.pulsante ?? "Prenota una visita"

  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb items={breadcrumb} />
      </div>

      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_18%,#F8F5F0_45%,#F0EAE0_75%,#FAF8F4_100%)]">
        {/* Intestazione */}
        <section className="pt-10 pb-6 md:pt-16 md:pb-8">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
              {etichetta}
            </p>
            <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
              {titolo}
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
            <div className={`space-y-5 ${testo}`}>{intro}</div>
          </div>
        </section>

        {/* Sezioni specifiche della pagina */}
        {children}

        {/* Invito finale (personalizzabile da ogni pagina) */}
        <section className="pt-6 pb-14 md:pt-8 md:pb-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-[2.5rem] bg-white/70 p-7 text-center ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] md:p-10">
              <p className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                {invitoTitolo}<span className="text-[#0066CC]">.</span>
              </p>
              {invito?.testo && (
                <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                  {invito.testo}
                </p>
              )}
              <Link
                href="/contatti"
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-[#0066CC] px-8 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#0057AD]"
              >
                <Calendar className="h-5 w-5" />
                <span>{invitoPulsante}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {carosello && carosello.length > 0 && (
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto max-w-6xl px-4">
            <QuadrantCarousel items={carosello} />
          </div>
        </section>
      )}

      <section className="bg-white">
        <ContactForm />
      </section>

      {datiStrutturati && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datiStrutturati) }}
        />
      )}
    </div>
  )
}

/* Una sezione con etichetta facoltativa e titolo */
export function LandingSezione({
  etichetta,
  titolo,
  children,
}: {
  etichetta?: string
  titolo: string
  children: ReactNode
}) {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto max-w-4xl px-4">
        {etichetta && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
            {etichetta}
          </p>
        )}
        <h2 className="text-[1.75rem] md:text-3xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
          {titolo}
        </h2>
        <div className={`space-y-5 ${testo}`}>{children}</div>
      </div>
    </section>
  )
}

/* Elenco con pallini blu, su due colonne da computer */
export function LandingElenco({ voci }: { voci: string[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-base md:text-lg leading-relaxed text-slate-700">
      {voci.map((voce) => (
        <li key={voce} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/60" />
          <span>{voce}</span>
        </li>
      ))}
    </ul>
  )
}

/* Paragrafo evidenziato con la linea blu a sinistra */
export function LandingNota({ children }: { children: ReactNode }) {
  return <p className="border-l-2 border-[#0066CC]/30 pl-5">{children}</p>
}

/* Collegamento sottolineato in blu, come nel resto del sito */
export function LandingLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center border-b border-[#0066CC]/40 pb-1 font-semibold text-[#0066CC] transition-colors hover:border-[#0066CC]"
    >
      {children}
    </Link>
  )
}

/* Video Vimeo affiancato al testo. "invertito" mette il video a destra */
export function LandingVideo({
  titolo,
  video,
  titoloVideo,
  invertito = false,
  children,
}: {
  titolo: string
  video: string
  titoloVideo: string
  invertito?: boolean
  children: ReactNode
}) {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={`aspect-video w-full overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)] ${invertito ? "md:order-2" : ""}`}>
          <iframe
            src={video}
            className="h-full w-full"
            loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title={titoloVideo}
          />
        </div>
        <div className={invertito ? "md:order-1" : ""}>
          <h2 className="text-[1.75rem] md:text-3xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
            {titolo}
          </h2>
          <div className={`space-y-5 ${testo}`}>{children}</div>
        </div>
      </div>
    </section>
  )
}

/* Riquadro azzurro evidenziato */
export function LandingRiquadro({
  etichetta,
  titolo,
  children,
}: {
  etichetta?: string
  titolo: string
  children: ReactNode
}) {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-[2.5rem] bg-[#EDF4F9] p-7 ring-1 ring-[#D4DFE9] md:p-10">
          {etichetta && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
              {etichetta}
            </p>
          )}
          <h2 className="text-[1.75rem] md:text-3xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
            {titolo}
          </h2>
          <div className={`space-y-5 ${testo}`}>{children}</div>
        </div>
      </div>
    </section>
  )
}

/* Domande frequenti a fisarmonica, come nella home */
export function LandingFaq({
  titolo,
  domande,
}: {
  titolo: string
  domande: { domanda: string; risposta: string }[]
}) {
  return (
    <section className="py-6 md:py-8">
      <div className="container mx-auto max-w-4xl px-4">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
          Informazioni utili
        </p>
        <h2 className="text-[1.75rem] md:text-3xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
          {titolo}
        </h2>
        <div className="border-t border-slate-300/80">
          {domande.map((faq) => (
            <details key={faq.domanda} className="group border-b border-slate-300/80 py-1">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="text-lg md:text-xl font-medium leading-snug text-slate-900">{faq.domanda}</span>
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0066CC]/30 text-xl font-light text-[#0066CC] transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pb-7 pr-10 text-base md:text-lg leading-relaxed text-slate-600">{faq.risposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
