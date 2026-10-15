import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"

export const metadata = {
  title: "Medicina Legale - Dr. Maico Battistello | Consulenze Specialistiche",
  description:
    "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie. Valutazione accurata del danno biologico e invalidità permanente.",
  alternates: { canonical: "https://dottmaicobattistello.it/medicina-legale" },
}

const services = [
  {
    title: "Responsabilità Civile (RC)",
    items: ["Valutazione del danno biologico temporaneo e permanente", "Analisi della documentazione clinica", "Relazioni medico-legali per contenziosi civili e stragiudiziali", "Supporto nella definizione di accordi transattivi"],
  },
  {
    title: "Responsabilità Civile Auto (RCA)",
    items: ["Perizie medico-legali per sinistri stradali", "Valutazione della dinamica lesiva e delle menomazioni conseguenti", "Verifica della congruità delle cure, dei tempi di guarigione e degli accertamenti", "Relazioni per compagnie, legali e privati"],
  },
  {
    title: "Polizze Infortuni",
    items: ["Valutazione dell’invalidità permanente secondo le tabelle di polizza", "Analisi dei postumi da infortuni sportivi, lavorativi ed extra-lavorativi", "Supporto in caso di contestazioni tra assicurato e compagnia"],
  },
  {
    title: "Polizze Malattia",
    items: ["Inquadramento medico-legale delle patologie coperte da polizza", "Verifica della corretta applicazione delle condizioni contrattuali", "Stima delle menomazioni residue"],
  },
]

const locations = [
  { name: "Padova", href: "/medicina-legale-padova" },
  { name: "Marostica", href: "/medicina-legale-marostica" },
  { name: "Schio", href: "/medicina-legale-schio" },
  { name: "Malo", href: "/medicina-legale-malo" },
]

export default function LegalMedicinePage() {
  return (
    <main className="pt-20 text-slate-800">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicina Legale", href: "/medicina-legale" }]} />

      <section className="bg-gradient-to-br from-[#0066CC] via-[#0879D8] to-[#e9f2f7] text-white">
        <div className="container mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em]">Consulenze e perizie specialistiche</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Medicina Legale</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed md:text-xl">Valutazioni medico-legali basate su competenza clinica, rigore scientifico e analisi documentale.</p>
          <p className="mt-7 text-base font-medium">Dr. Maico Battistello · Specialista in Medicina Legale dal 2004</p>
        </div>
      </section>

      <section className="container mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <h2 className="mb-6 text-3xl font-bold text-[#0066CC]">Cos’è la Medicina Legale</h2>
          <p className="mb-5 leading-8">La medicina legale è la disciplina che mette in relazione <strong>scienza medica e diritto</strong>. Analizza gli aspetti clinici, diagnostici e prognostici di un evento lesivo o di una patologia per valutarne le conseguenze giuridiche, assicurative o risarcitorie.</p>
          <p className="leading-8">Interviene quando è necessario un <strong>parere tecnico qualificato</strong> sull’entità del danno alla persona, sulla correttezza delle cure e sulla relazione causale tra evento e menomazione.</p>
        </div>
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg md:col-span-2 md:h-96">
          <Image src="/images/design-mode/medlegale.jpg.jpeg" alt="Consulenza di medicina legale" fill className="object-cover" sizes="(max-width: 768px) 100vw, 40vw" />
        </div>
      </section>

      <section className="bg-[#faf7ef] py-16">
        <div className="container mx-auto max-w-6xl px-5">
          <p className="mb-3 font-semibold uppercase tracking-widest text-[#0066CC]">Ambiti di attività</p>
          <h2 className="mb-8 text-3xl font-bold">Consulenze medico-legali</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-[#0066CC]">{service.title}</h3>
                <ul className="list-disc space-y-3 pl-5 leading-relaxed marker:text-[#0066CC]">
                  {service.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-5 text-3xl font-bold text-[#0066CC]">Esperienza professionale</h2>
        <p className="max-w-4xl leading-8">Sono il <strong>Dr. Maico Battistello</strong>, medico chirurgo, attivo nella <strong>medicina legale e assicurativa dal 2001</strong> e <strong>specialista in Medicina Legale dal 2004</strong>. Svolgo attività di consulenza e perizia medico-legale per privati, avvocati e agenzie, nell’ambito della responsabilità civile, dei sinistri stradali e delle polizze assicurative.</p>
        <div className="mt-10 rounded-2xl border-l-4 border-[#0066CC] bg-[#eff6fd] p-7">
          <h3 className="mb-4 text-2xl font-bold text-[#0066CC]">Consulenze Tecniche di Parte (CTP)</h3>
          <p className="leading-8">Offro attività di <strong>Consulente Tecnico di Parte</strong> in procedimenti civili: studio del caso e della documentazione sanitaria, parere scritto preventivo sulla sostenibilità della richiesta risarcitoria, assistenza durante le operazioni peritali e confronto tecnico con CTU e altre parti coinvolte.</p>
        </div>
      </section>

      <section className="bg-[#faf7ef] py-16">
        <div className="container mx-auto max-w-6xl px-5">
          <h2 className="mb-6 text-3xl font-bold text-[#0066CC]">Approccio medico-legale e clinico</h2>
          <p className="max-w-4xl leading-8">L’esperienza in medicina legale, osteopatia e ozonoterapia contribuisce a una <strong>visione clinica complessiva</strong>: valutazione della pertinenza delle terapie eseguite, eventuale necessità di ulteriori accertamenti diagnostici e correlazione tra quadro clinico, percorso terapeutico e menomazioni residue. Ogni valutazione medico-legale rimane fondata sui dati clinici e sulla documentazione del singolo caso.</p>
          <h3 className="mb-4 mt-10 text-2xl font-semibold">A chi è rivolto il servizio</h3>
          <ul className="grid list-disc gap-3 pl-5 leading-relaxed md:grid-cols-2 marker:text-[#0066CC]">
            <li>Privati coinvolti in sinistri stradali o infortuni</li>
            <li>Pazienti con postumi invalidanti</li>
            <li>Studi legali</li>
            <li>Agenzie assicurative e broker</li>
            <li>Agenzie che richiedono supporto medico-legale per i propri assistiti</li>
          </ul>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-5 py-16">
        <h2 className="mb-4 text-3xl font-bold text-[#0066CC]">Medicina Legale sul territorio</h2>
        <p className="mb-7 leading-7">Scopri le informazioni sulle consulenze medico-legali nelle diverse sedi.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <Link key={location.href} href={location.href} className="rounded-xl border border-[#0066CC]/20 bg-white p-5 font-semibold text-[#0066CC] shadow-sm transition hover:border-[#0066CC] hover:shadow-md">
              Medicina Legale a {location.name} <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#0066CC] px-5 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Richiedi informazioni</h2>
        <p className="mx-auto mt-4 max-w-xl leading-7">Per conoscere le modalità della consulenza medico-legale e richiedere un appuntamento, visita la pagina contatti.</p>
        <Link href="/contatti" className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-[#0066CC] transition hover:bg-[#faf7ef]">Vai ai contatti →</Link>
      </section>
    </main>
  )
}
