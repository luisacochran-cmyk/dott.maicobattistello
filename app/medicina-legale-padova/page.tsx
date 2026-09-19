import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "padova")!
const service = services.find((s) => s.slug === "medicina-legale")!
const seoData = generateLocalSEO(service, city)

export const metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
}

export default function MedicinaLegalepadovaPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.structuredData),
        }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Medicina Legale", href: "/legal-medicine" },
          {
            label: `Medicina Legale a ${city.name}`,
            href: seoData.canonical,
          },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          {/* HERO / INTRODUZIONE */}

          <h1 className="text-3xl font-bold mb-6">
            {seoData.h1}
          </h1>

          <h2 className="text-2xl font-semibold mb-6">
            {seoData.h2}
          </h2>

          <div className="text-xl mb-8 space-y-4">
            <p>
              Il Dr. Maico Battistello, specialista in Medicina Legale,
              svolge attività di medicina legale a Padova offrendo consulenze
              e valutazioni medico-legali rivolte a privati, professionisti,
              studi legali e agenzie assicurative.
            </p>

            <p>
              L&apos;attività comprende la valutazione del danno biologico e
              del danno alla persona, le conseguenze di infortuni e sinistri
              stradali, l&apos;invalidità permanente, le controversie
              assicurative, la responsabilità professionale sanitaria e
              l&apos;assistenza medico-legale nell&apos;ambito di consulenze
              tecniche di parte (CTP).
            </p>

            <p>
              La consulenza parte dall&apos;analisi della documentazione
              clinica e medico-legale, dall&apos;inquadramento del caso e
              dalla valutazione specialistica, con l&apos;obiettivo di
              fornire un parere medico-legale chiaro e documentato nei
              diversi ambiti assicurativi, stragiudiziali e giudiziari.
            </p>

            <p>
              Il servizio è rivolto a persone provenienti da Padova e dai
              comuni dell&apos;area padovana, tra cui Abano Terme,
              Selvazzano Dentro, Albignasego e Vigonza.
            </p>
          </div>

          {/* SERVIZI */}

          <h2 className="text-2xl font-semibold mb-4">
            Servizi di Medicina Legale a Padova
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {service.conditions.map((condition, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm"
              >
                <p className="font-medium text-lg text-gray-800">
                  ✓ {condition}
                </p>
              </div>
            ))}
          </div>

          {/* DANNO BIOLOGICO */}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Danno biologico e valutazione del danno alla persona
            </h2>

            <div className="text-lg space-y-4">
              <p>
                La valutazione del danno alla persona è uno degli ambiti
                della Medicina Legale e permette di analizzare le conseguenze
                di un evento lesivo sulla salute della persona.
              </p>

              <p>
                La consulenza medico-legale prende in considerazione la
                documentazione clinica disponibile, gli accertamenti
                diagnostici, il percorso terapeutico, gli esiti delle
                lesioni e gli eventuali postumi permanenti.
              </p>

              <p>
                La valutazione può riguardare, tra gli altri, danni derivanti
                da incidenti stradali, lesioni personali e altri eventi che
                abbiano determinato conseguenze temporanee o permanenti.
              </p>
            </div>
          </section>

          {/* RESPONSABILITÀ SANITARIA E CTP */}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Responsabilità sanitaria e Consulenza Tecnica di Parte (CTP)
            </h2>

            <div className="text-lg space-y-4">
              <p>
                Nell&apos;ambito della responsabilità sanitaria e
                professionale, la valutazione medico-legale consente di
                esaminare la documentazione clinica e il percorso diagnostico
                e terapeutico in relazione allo specifico caso.
              </p>

              <p>
                Il medico legale può inoltre svolgere il ruolo di consulente
                tecnico di parte (CTP), fornendo una valutazione specialistica
                degli aspetti medico-legali e collaborando con il legale
                nell&apos;analisi della documentazione e del caso.
              </p>

              <p>
                La consulenza tecnica di parte può essere utilizzata sia
                nella fase stragiudiziale sia nell&apos;ambito di un
                procedimento giudiziario.
              </p>
            </div>
          </section>

          {/* INVALIDITÀ / INFORTUNI / ASSICURAZIONI */}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Invalidità, infortuni e valutazioni assicurative
            </h2>

            <div className="text-lg space-y-4">
              <p>
                L&apos;attività medico-legale comprende anche valutazioni
                relative all&apos;invalidità civile, agli infortuni sul
                lavoro e alle conseguenze permanenti derivanti da lesioni o
                eventi traumatici.
              </p>

              <p>
                In ambito assicurativo, la consulenza medico-legale permette
                di analizzare la documentazione sanitaria e gli esiti
                dell&apos;evento ai fini della valutazione del danno e delle
                problematiche medico-legali connesse al caso.
              </p>

              <p>
                Ogni valutazione viene effettuata sulla base della
                documentazione disponibile e delle caratteristiche
                specifiche della situazione esaminata.
              </p>
            </div>
          </section>

          {/* BOX PROFESSIONALE */}

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-10">
            <h2 className="text-2xl font-semibold mb-3">
              Valutazione medico-legale del caso
            </h2>

            <p className="text-lg">
              Il Dr. Maico Battistello è specialista in Medicina Legale.
              L&apos;attività comprende l&apos;analisi della documentazione
              clinica, la valutazione medico-legale del danno alla persona,
              la redazione di relazioni medico-legali e l&apos;assistenza
              nell&apos;ambito di consulenze tecniche di parte.
            </p>
          </div>

          {/* QUANDO RIVOLGERSI AL MEDICO LEGALE */}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">
              Quando rivolgersi a un Medico Legale a Padova
            </h2>

            <div className="text-lg space-y-4">
              <p>
                Una valutazione medico-legale può essere richiesta in seguito
                a un incidente stradale, un infortunio o un evento che abbia
                determinato conseguenze temporanee o permanenti sulla salute,
                oppure nell&apos;ambito di una controversia assicurativa o di
                un caso di responsabilità professionale sanitaria.
              </p>

              <p>
                Il medico legale analizza la documentazione sanitaria e gli
                esiti dell&apos;evento, valutando le conseguenze del danno
                alla persona e la loro rilevanza medico-legale.
              </p>

              <p>
                La consulenza può inoltre affiancare la persona e il suo
                legale attraverso una consulenza tecnica di parte (CTP), sia
                nella fase stragiudiziale sia nell&apos;ambito di un
                procedimento giudiziario.
              </p>
            </div>
          </section>

          {/* FAQ */}

          <h2 className="text-2xl font-semibold mb-4">
            Domande frequenti sulla Medicina Legale
          </h2>

          <div className="space-y-4 mb-10">

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Cos&apos;è una consulenza tecnica di parte (CTP)?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                La consulenza tecnica di parte è una consulenza
                medico-legale richiesta da una delle parti coinvolte per
                valutare gli aspetti sanitari e medico-legali del caso e
                fornire supporto specialistico nell&apos;ambito di una
                controversia.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Come si quantifica l&apos;invalidità permanente?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                La valutazione dell&apos;invalidità permanente prende in
                considerazione la documentazione clinica, gli esiti delle
                lesioni, la visita medico-legale e i criteri valutativi
                applicabili al caso specifico.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Quando è utile una valutazione medico-legale dopo un
                incidente stradale?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                La valutazione medico-legale permette di esaminare la
                documentazione sanitaria, gli esiti delle lesioni e le
                eventuali conseguenze permanenti, fornendo gli elementi
                medico-legali utili alla valutazione del danno alla persona.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Il medico legale può collaborare con il mio avvocato?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                Sì. Nell&apos;ambito di una consulenza tecnica di parte,
                il medico legale può collaborare con il legale fornendo una
                valutazione specialistica degli aspetti medico-legali del
                caso.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Quali documenti servono per una consulenza medico-legale?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                È utile presentare la documentazione sanitaria relativa al
                caso, come referti, cartelle cliniche, esami diagnostici,
                certificati medici e la documentazione assicurativa o
                legale disponibile.
              </p>
            </details>

            <details className="bg-gray-50 p-5 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Quanto dura una consulenza medico-legale?
              </summary>

              <p className="mt-2 text-lg text-gray-700">
                I tempi dipendono dalle caratteristiche e dalla complessità
                del caso, dalla quantità di documentazione da esaminare e
                dal tipo di valutazione medico-legale richiesta.
              </p>
            </details>

          </div>

          {/* CTA */}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-3">
              Consulenza di Medicina Legale a Padova
            </h2>

            <p className="text-lg mb-4">
              Per richiedere una consulenza medico-legale a Padova o
              ricevere informazioni sulla valutazione del proprio caso,
              è possibile contattare il Dr. Maico Battistello.
            </p>

            <Link
              href="/contacts"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Richiedi una consulenza
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
