import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"
import AnimatedScrollElement from "@/components/animated-scroll-element"

export const metadata = {
  title: "Medicina Legale - Dr. Maico Battistello | Consulenze Specialistiche",
  description:
    "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie. Valutazione accurata del danno biologico e invalidità permanente.",
alternates: {
  canonical: "https://dottmaicobattistello.it/medicina-legale",
 },
}
export default function LegalMedicinePage() {
  const sedi = [
    { nome: "Padova", href: "/medicina-legale-padova" },
    { nome: "Marostica", href: "/medicina-legale-marostica" },
    { nome: "Schio", href: "/medicina-legale-schio" },
    { nome: "Malo", href: "/medicina-legale-malo" },
  ]
  return (
    <main className="pt-20 text-slate-800">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicina Legale", href: "/medicina-legale" }]} />
      <section className="bg-gradient-to-br from-[#0066CC] via-[#1680d8] to-[#dff1ff] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">Medicina Legale – Dr. Maico Battistello</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/95">Consulenze specialistiche e valutazioni medico-legali</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-[#fff9ee] py-14 md:py-20">
        <div className="container mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#0066CC]">Cos'è la Medicina Legale</h2>
<p className="text-lg leading-relaxed text-slate-700">La medicina legale è la disciplina che mette in relazione <strong>scienza medica e diritto</strong>. Si occupa di analizzare e valutare, secondo criteri scientifici, gli aspetti <strong>clinici, diagnostici e prognostici</strong> di un evento lesivo o di una patologia, al fine di stabilirne le <strong>conseguenze giuridiche, assicurative o risarcitorie</strong>.</p><p className="text-lg leading-relaxed text-slate-700">In ambito pratico, la medicina legale interviene in tutte le situazioni in cui è necessario un <strong>parere tecnico qualificato</strong> per chiarire l'entità del danno alla persona, la correttezza delle cure e la <strong>relazione causale tra evento e menomazione</strong>. Questa disciplina è quindi un punto d'incontro tra il mondo della medicina e quello della giustizia, con l'obiettivo di tutelare il paziente e garantire equità nelle valutazioni medico-assicurative.</p>          </div>
          <AnimatedScrollElement direction="up" delay={0.2}>
            <figure className="overflow-hidden rounded-2xl bg-[#edf6ff] shadow-lg">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/design-mode/medlegale.jpg.jpeg" alt="Consulenza di Medicina Legale" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </figure>
          </AnimatedScrollElement>
        </div>
      </section>
      <section className="bg-gradient-to-b from-[#fff9ee] to-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl space-y-6 px-4">
          <h2 className="text-3xl font-semibold text-[#0066CC]">Presentazione</h2>
<p className="text-lg leading-relaxed text-slate-700">Sono il <strong>Dr. Maico Battistello</strong>, medico chirurgo, attivo nell'ambito della <strong>medicina legale e assicurativa dal 2001</strong> e <strong>specialista in Medicina Legale dal 2004</strong>. Svolgo attività di consulenza e perizia medico-legale per <strong>Responsabilità Civile (RC), Responsabilità Civile Auto (RCA), Polizze Infortuni e Polizze Malattia</strong>, offrendo un supporto tecnico competente e indipendente a pazienti, avvocati e agenzie.</p>        </div>
      </section>
      <section className="bg-gradient-to-b from-[#f0f8ff] to-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#0066CC]">Prestazioni medico-legali</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-[#dcecff] bg-white p-7 shadow-sm"><h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Responsabilità Civile (RC)</h3><ul className="list-disc pl-5 space-y-2 text-slate-700"><li>Valutazione del <strong>danno biologico temporaneo e permanente</strong></li>
            <li>Analisi della <strong>documentazione clinica</strong></li>
            <li>Redazione di <strong>relazioni medico-legali</strong> per contenziosi civili e stragiudiziali</li>
            <li>Supporto nella definizione di <strong>accordi transattivi</strong></li></ul></article>
            <article className="rounded-2xl border border-[#dcecff] bg-white p-7 shadow-sm"><h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Responsabilità Civile Auto (RCA)</h3><ul className="list-disc pl-5 space-y-2 text-slate-700"><li>Perizie medico-legali per <strong>sinistri stradali</strong></li>
            <li>Valutazione della <strong>dinamica lesiva</strong> e delle menomazioni conseguenti</li>
            <li>Verifica della <strong>congruità delle cure, dei tempi di guarigione</strong> e degli accertamenti eseguiti</li>
            <li>Relazioni chiare e documentabili per compagnie, legali e privati</li></ul></article>
            <article className="rounded-2xl border border-[#dcecff] bg-white p-7 shadow-sm"><h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Polizze Infortuni</h3><ul className="list-disc pl-5 space-y-2 text-slate-700"><li>Valutazione dell'<strong>invalidità permanente</strong> secondo tabelle di polizza</li>
            <li>Analisi dei <strong>postumi da infortuni sportivi, lavorativi ed extra-lavorativi</strong></li>
            <li>Supporto in caso di <strong>contestazioni tra assicurato e compagnia</strong></li></ul></article>
            <article className="rounded-2xl border border-[#dcecff] bg-white p-7 shadow-sm"><h3 className="mb-4 text-xl font-semibold text-[#0066CC]">Polizze Malattia</h3><ul className="list-disc pl-5 space-y-2 text-slate-700"><li>Inquadramento medico-legale delle <strong>patologie coperte da polizza</strong></li>
            <li>Verifica della <strong>corretta applicazione delle condizioni contrattuali</strong></li>
            <li>Stima delle <strong>menomazioni residue</strong></li></ul></article>
          </div>
        </div>
      </section>
      <section className="bg-[#fff9ee] py-14 md:py-20">
        <div className="container mx-auto max-w-6xl space-y-6 px-4">
          <h2 className="text-3xl font-semibold text-[#0066CC]">Consulenze Tecniche di Parte (CTP)</h2>
<p className="text-lg leading-relaxed text-slate-700">Offro attività di <strong>Consulente Tecnico di Parte</strong> in procedimenti civili, con studio del caso e della documentazione sanitaria; parere scritto preventivo sulla sostenibilità della richiesta risarcitoria; assistenza durante le operazioni peritali; confronto tecnico con CTU e altre parti coinvolte. L'obiettivo è tutelare in modo rigoroso e scientificamente fondato gli interessi del cliente.</p>        </div>
      </section>
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl space-y-6 px-4">
          <h2 className="text-3xl font-semibold text-[#0066CC]">Approccio Integrato Medico-Legale e Terapeutico</h2>
<p className="text-lg leading-relaxed text-slate-700">In qualità di medico legale, osteopata e ozonoterapeuta, unisco alla valutazione del danno una <strong>visione clinica completa</strong>. Questo mi permette di valutare la <strong>pertinenza e la congruità delle terapie eseguite</strong>; indicare quando siano necessari <strong>esami diagnostico-strumentali aggiuntivi</strong> per documentare al meglio le lesioni; e correlare in modo preciso <strong>quadro clinico, iter terapeutico e menomazioni permanenti</strong>. Questo approccio integrato offre un vantaggio concreto in ambito assicurativo e giudiziario.</p>          <h3 className="pt-4 text-2xl font-semibold text-[#0066CC]">A chi è rivolto il servizio</h3>
<ul className="list-disc pl-5 space-y-2 text-slate-700"><li>Privati coinvolti in <strong>sinistri stradali o infortuni</strong></li>
            <li>Pazienti con <strong>postumi invalidanti</strong> che necessitano di una corretta valutazione medico-legale</li>
            <li>Studi legali che richiedono un <strong>riferimento medico-legale stabile</strong></li>
            <li>Agenzie assicurative e broker</li>
            <li>Agenzie che necessitano di <strong>supporto medico-legale</strong> sui propri assistiti</li></ul>        </div>
      </section>
      <section className="bg-gradient-to-b from-[#eff8ff] to-[#fff9ee] py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-semibold text-[#0066CC]">Consulenze Medicina Legale nelle principali città</h2>
          <p className="mb-8 text-lg text-slate-700">Il Dr. Maico Battistello offre consulenze medico-legali presso:</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sedi.map((sede) => (
              <Link key={sede.href} href={sede.href} className="group rounded-2xl border border-[#dcecff] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-[#0066CC]">{sede.nome}</h3>
                <span className="mt-3 inline-block text-sm text-slate-600 group-hover:text-[#0066CC]">Medicina Legale →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl rounded-2xl bg-[#0066CC] px-6 py-10 text-white md:px-12">
          <h2 className="text-3xl font-semibold">Richiedi una consulenza</h2>
          <p className="mt-4 max-w-2xl text-lg">Per i dettagli sui prezzi e per prenotare una consulenza, contattami.</p>
          <Link href="/contatti" className="mt-6 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-[#0066CC] transition hover:bg-[#fff9ee]">Vai ai contatti →</Link>
        </div>
      </section>
    </main>
  )
}
