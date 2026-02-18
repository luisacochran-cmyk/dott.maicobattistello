import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import AnimatedScrollElement from "@/components/animated-scroll-element"

export const metadata = {
  title: "Medicina Legale - Dr. Maico Battistello | Consulenze Specialistiche",
  description:
    "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie. Valutazione accurata del danno biologico e invalidità permanente.",
}

export default function LegalMedicinePage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Medicina Legale", href: "/medicina-legale" },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Medicina Legale – Dr. Maico Battistello</h1>

          <h2 className="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-3">Cos'è la Medicina Legale</h2>

          <p className="text-lg mb-6">
            La medicina legale è la disciplina che mette in relazione <strong>scienza medica e diritto</strong>. Si occupa di analizzare e valutare, secondo criteri scientifici, gli aspetti <strong>clinici, diagnostici e prognostici</strong> di un evento lesivo o di una patologia, al fine di stabilirne le <strong>conseguenze giuridiche, assicurative o risarcitorie</strong>.
          </p>

          <p className="text-lg mb-6">
            In ambito pratico, la medicina legale interviene in tutte le situazioni in cui è necessario un <strong>parere tecnico qualificato</strong> per chiarire l'entità del danno alla persona, la correttezza delle cure e la <strong>relazione causale tra evento e menomazione</strong>. Questa disciplina è quindi un punto d'incontro tra il mondo della medicina e quello della giustizia, con l'obiettivo di tutelare il paziente e garantire equità nelle valutazioni medico-assicurative.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-3 mt-10">Presentazione</h2>

          <p className="text-lg mb-6">
            Sono il <strong>Dr. Maico Battistello</strong>, medico chirurgo con esperienza dal 2001 in ambito di <strong>medicina legale e delle assicurazioni</strong>. Svolgo attività di consulenza e perizia medico-legale per <strong>Responsabilità Civile (RC), Responsabilità Civile Auto (RCA), Polizze Infortuni e Polizze Malattia</strong>, offrendo un supporto tecnico competente e indipendente a pazienti, avvocati, e agenzie.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-primary">Responsabilità Civile (RC)</h3>
          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Valutazione del <strong>danno biologico temporaneo e permanente</strong></li>
            <li>Analisi della <strong>documentazione clinica</strong></li>
            <li>Redazione di <strong>relazioni medico-legali</strong> per contenziosi civili e stragiudiziali</li>
            <li>Supporto nella definizione di <strong>accordi transattivi</strong></li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-primary">Responsabilità Civile Auto (RCA)</h3>
          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Perizie medico-legali per <strong>sinistri stradali</strong></li>
            <li>Valutazione della <strong>dinamica lesiva</strong> e delle menomazioni conseguenti</li>
            <li>Verifica della <strong>congruità delle cure, dei tempi di guarigione</strong> e degli accertamenti eseguiti</li>
            <li>Relazioni chiare e documentabili per compagnie, legali e privati</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-primary">Polizze Infortuni</h3>
          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Valutazione dell'<strong>invalidità permanente</strong> secondo tabelle di polizza</li>
            <li>Analisi dei <strong>postumi da infortuni sportivi, lavorativi ed extra-lavorativi</strong></li>
            <li>Supporto in caso di <strong>contestazioni tra assicurato e compagnia</strong></li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-primary">Polizze Malattia</h3>
          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Inquadramento medico-legale delle <strong>patologie coperte da polizza</strong></li>
            <li>Verifica della <strong>corretta applicazione delle condizioni contrattuali</strong></li>
            <li>Stima delle <strong>menomazioni residue</strong></li>
          </ul>

          <h2 className="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-3 mt-10">Consulenze Tecniche di Parte (CTP)</h2>

          <p className="text-lg mb-6">
            Offro attività di <strong>Consulente Tecnico di Parte</strong> in procedimenti civili, con studio del caso e della documentazione sanitaria; parere scritto preventivo sulla sostenibilità della richiesta risarcitoria; assistenza durante le operazioni peritali; confronto tecnico con CTU e altre parti coinvolte. L'obiettivo è tutelare in modo rigoroso e scientificamente fondato gli interessi del cliente.
          </p>

          <h2 className="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-3 mt-10">Approccio Integrato Medico-Legale e Terapeutico</h2>

          <p className="text-lg mb-6">
            In qualità di medico legale, osteopata e ozonoterapeuta, unisco alla valutazione del danno una <strong>visione clinica completa</strong>. Questo mi permette di valutare la <strong>pertinenza e la congruità delle terapie eseguite</strong>; indicare quando siano necessari <strong>esami diagnostico-strumentali aggiuntivi</strong> per documentare al meglio le lesioni; e correlare in modo preciso <strong>quadro clinico, iter terapeutico e menomazioni permanenti</strong>. Questo approccio integrato offre un vantaggio concreto in ambito assicurativo e giudiziario.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-primary">A chi è rivolto il servizio</h3>
          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Privati coinvolti in <strong>sinistri stradali o infortuni</strong></li>
            <li>Pazienti con <strong>postumi invalidanti</strong> che necessitano di una corretta valutazione medico-legale</li>
            <li>Studi legali che richiedono un <strong>riferimento medico-legale stabile</strong></li>
            <li>Compagnie assicurative e broker</li>
            <li>Agenzie che necessitano di <strong>supporto medico-legale</strong> sui propri assistiti</li>
          </ul>

          <p className="text-lg mb-6">
            Per i dettagli sui prezzi e per prenotare una consulenza, contattami ora cliccando{" "}
            <Link href="/contacts" className="text-primary hover:text-primary-dark underline">
              qui
            </Link>
            .
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">📍 Consulenze Medicina Legale nelle principali città</h3>
            <p className="mb-4">Il Dr. Maico Battistello offre consulenze medico-legali presso:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/medicina-legale-padova" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Padova
              </Link>
              <Link
                href="/medicina-legale-marostica"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                → Medicina Legale a Marostica
              </Link>
              <Link href="/medicina-legale-schio" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Schio
              </Link>
              <Link href="/medicina-legale-malo" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Malo
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="my-12">
          <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[70%] h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/design-mode/medlegale.jpg.jpeg"
                  alt="Consulenza di Medicina Legale"
                  fill
                  className="object-cover object-[90%_center] md:object-center"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center backdrop-blur-sm rounded-b-xl">
                  <h3 className="text-lg font-semibold">Consulenza di Medicina Legale</h3>
                  <p className="text-sm mt-1">Valutazione professionale e relazioni medico-legali specialistiche</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedScrollElement>
    </div>
  )
}
