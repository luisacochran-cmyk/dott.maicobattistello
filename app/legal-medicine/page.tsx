import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Medicina Legale a Padova, Marostica, Schio e Malo | Dott. Maico Battistello",
  description:
    "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie. Valutazione accurata del danno biologico e invalidità permanente. Padova, Marostica, Schio e Malo.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/medicina-legale",
  },
}

const sedi = [
  { nome: "Padova", href: "/medicina-legale-padova" },
  { nome: "Marostica", href: "/medicina-legale-marostica" },
  { nome: "Schio", href: "/medicina-legale-schio" },
  { nome: "Malo", href: "/medicina-legale-malo" },
]

/* Elenco con pallini blu, come nel resto del sito */
function Elenco({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-3 text-lg leading-relaxed text-slate-700 [&_strong]:font-semibold [&_strong]:text-slate-900">
      {children}
    </ul>
  )
}

function Punto({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/60" />
      <span>{children}</span>
    </li>
  )
}

const etichetta = "mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]"
const titoloH2 = "text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900"
const testo = "text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900"

export default function LegalMedicinePage() {
  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Medicina Legale", href: "/medicina-legale" },
          ]}
        />
      </div>

      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_18%,#F8F5F0_40%,#F0EAE0_62%,#F8F5F0_85%,#FFFFFF_100%)]">
        {/* Introduzione */}
        <section className="pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className={etichetta}>Medicina legale e assicurativa</p>
              <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
                Cos&apos;è la Medicina Legale<span className="text-[#0066CC]">?</span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
              <div className={`space-y-5 ${testo}`}>
                <p>
                  La medicina legale è la disciplina che mette in relazione <strong>scienza medica e diritto</strong>. Si occupa di analizzare e valutare, secondo criteri scientifici, gli aspetti <strong>clinici, diagnostici e prognostici</strong> di un evento lesivo o di una patologia, al fine di stabilirne le <strong>conseguenze giuridiche, assicurative o risarcitorie</strong>.
                </p>
                <p>
                  In ambito pratico, la medicina legale interviene in tutte le situazioni in cui è necessario un <strong>parere tecnico qualificato</strong> per chiarire l&apos;entità del danno alla persona, la correttezza delle cure e la <strong>relazione causale tra evento e menomazione</strong>. Questa disciplina è quindi un punto d&apos;incontro tra il mondo della medicina e quello della giustizia, con l&apos;obiettivo di tutelare il paziente e garantire equità nelle valutazioni medico-assicurative.
                </p>
              </div>
            </div>

            {/* Foto fissa, senza animazione: compare subito e riempie tutto il riquadro */}
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
              <Image
                src="/images/design-mode/medlegale.jpg.jpeg"
                alt="Consulenza di Medicina Legale con il Dott. Maico Battistello"
                fill
                priority
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </div>
        </section>

        {/* Presentazione + Consulenze Tecniche di Parte */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
            <div>
              <p className={etichetta}>Il medico legale</p>
              <h2 className={titoloH2}>
                Presentazione<span className="text-[#0066CC]">.</span>
              </h2>
            </div>
            <div className={`space-y-5 ${testo}`}>
              <p>
                Sono il <strong>Dott. Maico Battistello</strong>, medico chirurgo, attivo nell&apos;ambito della <strong>medicina legale e assicurativa dal 2001</strong> e <strong>specialista in Medicina Legale dal 2004</strong>. Svolgo attività di consulenza e perizia medico-legale per <strong>Responsabilità Civile (RC), Responsabilità Civile Auto (RCA), Responsabilità Medica (RCP), Polizze Infortuni e Polizze Malattia</strong>, offrendo un supporto tecnico competente e indipendente a pazienti, avvocati e agenzie.
              </p>
              <p>
                Offro attività di <strong>Consulente Tecnico di Parte (CTP)</strong> in procedimenti civili, con studio del caso e della documentazione sanitaria; parere scritto preventivo sulla sostenibilità della richiesta risarcitoria; assistenza durante le operazioni peritali; confronto tecnico con CTU e altre parti coinvolte. L&apos;obiettivo è tutelare in modo rigoroso e scientificamente fondato gli interessi del cliente.
              </p>
            </div>
          </div>
        </section>

        {/* Prestazioni */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <p className={etichetta}>Ambiti di intervento</p>
            <h2 className={`${titoloH2} mb-8`}>
              Prestazioni medico-legali<span className="text-[#0066CC]">.</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)]">
                <h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Responsabilità Civile (RC)</h3>
                <Elenco>
                  <Punto>Valutazione del <strong>danno biologico temporaneo e permanente</strong></Punto>
                  <Punto>Analisi della <strong>documentazione clinica</strong></Punto>
                  <Punto>Redazione di <strong>relazioni medico-legali</strong> per contenziosi civili e stragiudiziali</Punto>
                  <Punto>Supporto nella definizione di <strong>accordi transattivi</strong></Punto>
                </Elenco>
              </article>

              <article className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)]">
                <h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Responsabilità Civile Auto (RCA)</h3>
                <Elenco>
                  <Punto>Perizie medico-legali per <strong>sinistri stradali</strong></Punto>
                  <Punto>Valutazione della <strong>dinamica lesiva</strong> e delle menomazioni conseguenti</Punto>
                  <Punto>Verifica della <strong>congruità delle cure, dei tempi di guarigione</strong> e degli accertamenti eseguiti</Punto>
                  <Punto>Relazioni chiare e documentabili per compagnie, legali e privati</Punto>
                </Elenco>
              </article>

              <article className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)]">
                <h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Responsabilità Medica (RCP)</h3>
                <Elenco>
                  <Punto>Valutazione dei casi di presunta <strong>responsabilità sanitaria</strong></Punto>
                  <Punto>Analisi della <strong>cartella clinica</strong> e della documentazione sanitaria</Punto>
                  <Punto>Valutazione del <strong>nesso causale</strong> tra l&apos;operato sanitario e il danno</Punto>
                  <Punto>Stima del <strong>danno biologico</strong> conseguente</Punto>
                </Elenco>
              </article>

              <article className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)]">
                <h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Polizze Infortuni</h3>
                <Elenco>
                  <Punto>Valutazione dell&apos;<strong>invalidità permanente</strong> secondo tabelle di polizza</Punto>
                  <Punto>Analisi dei <strong>postumi da infortuni sportivi, lavorativi ed extra-lavorativi</strong></Punto>
                  <Punto>Supporto in caso di <strong>contestazioni tra assicurato e compagnia</strong></Punto>
                </Elenco>
              </article>

              <article className="rounded-[1.5rem] bg-white/80 p-7 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)]">
                <h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Polizze Malattia</h3>
                <Elenco>
                  <Punto>Inquadramento medico-legale delle <strong>patologie coperte da polizza</strong></Punto>
                  <Punto>Verifica della <strong>corretta applicazione delle condizioni contrattuali</strong></Punto>
                  <Punto>Stima delle <strong>menomazioni residue</strong></Punto>
                </Elenco>
              </article>
            </div>
          </div>
        </section>

        {/* Approccio integrato medico-legale e terapeutico: in evidenza */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="rounded-[2.5rem] bg-[#EDF4F9] p-7 ring-1 ring-[#D4DFE9] md:p-12">
              <p className={etichetta}>Il valore aggiunto</p>
              <h2 className={`${titoloH2} mb-6`}>
                Approccio Integrato Medico-Legale e Terapeutico<span className="text-[#0066CC]">.</span>
              </h2>
              <p className={testo}>
                In qualità di medico legale, osteopata e ozonoterapeuta, unisco alla valutazione del danno una <strong>visione clinica completa</strong>. Questo mi permette di valutare la <strong>pertinenza e la congruità delle terapie eseguite</strong>; indicare quando siano necessari <strong>esami diagnostico-strumentali aggiuntivi</strong> per documentare al meglio le lesioni; e correlare in modo preciso <strong>quadro clinico, iter terapeutico e menomazioni permanenti</strong>. Questo approccio integrato offre un vantaggio concreto in ambito assicurativo e giudiziario.
              </p>
              <Link
                href="/ozonoterapia-osteopatia"
                className="mt-6 inline-flex items-center border-b border-[#0066CC]/40 pb-1 font-semibold text-[#0066CC] transition-colors hover:border-[#0066CC]"
              >
                Scopri l&apos;approccio integrato
              </Link>
            </div>
          </div>
        </section>

        {/* A chi è rivolto */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto max-w-5xl px-4 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
            <div>
              <p className={etichetta}>Destinatari</p>
              <h2 className={titoloH2}>
                A chi è rivolto il servizio<span className="text-[#0066CC]">?</span>
              </h2>
            </div>
            <Elenco>
              <Punto>Privati coinvolti in <strong>sinistri stradali o infortuni</strong></Punto>
              <Punto>Pazienti con <strong>postumi invalidanti</strong> che necessitano di una corretta valutazione medico-legale</Punto>
              <Punto>Studi legali che richiedono un <strong>riferimento medico-legale stabile</strong></Punto>
              <Punto>Agenzie assicurative e broker</Punto>
              <Punto>Agenzie che necessitano di <strong>supporto medico-legale</strong> sui propri assistiti</Punto>
            </Elenco>
          </div>
        </section>

        {/* Sedi: stesso stile della sezione "Dove riceve" della home */}
        <section className="pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8">
              <p className={etichetta}>Le sedi</p>
              <h2 className={`${titoloH2} mb-3`}>
                Consulenze di Medicina Legale nelle principali città<span className="text-[#0066CC]">.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                Scopri le informazioni e i servizi disponibili nelle diverse sedi.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] md:p-9">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-9">
                {sedi.map((sede) => (
                  <Link
                    key={sede.href}
                    href={sede.href}
                    aria-label={`Medicina Legale a ${sede.nome}`}
                    className="group flex min-h-24 items-center border-b border-[#D4DFE9] py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] sm:min-h-28"
                  >
                    <span className="text-xl font-medium tracking-tight text-slate-800 transition-colors group-hover:text-[#0066CC] sm:text-2xl md:text-[1.7rem]">
                      {sede.nome}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <ContactForm />
      </div>
    </div>
  )
}
