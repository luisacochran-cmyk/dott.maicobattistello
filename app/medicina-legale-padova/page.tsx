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

          <h2 className="text-2xl font-semibold mb-4">
            Servizi di Medicina Legale a {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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

          <h2 className="text-2xl font-semibold mb-4">
            Consulenza Medico-Legale a Padova: ambiti di intervento
          </h2>

          <ul className="list-disc pl-6 mb-8 text-lg space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h2 className="text-2xl font-semibold mb-3">
              Esperienza e competenza in Medicina Legale
            </h2>

            <p className="text-lg mb-3">
              Il Dr. Maico Battistello è specialista in Medicina Legale e
              svolge attività nella valutazione del danno biologico e del
              danno alla persona, nella redazione di perizie medico-legali
              e nell&apos;assistenza nell&apos;ambito di controversie
              assicurative e giudiziarie.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Quando rivolgersi a un Medico Legale a Padova
          </h2>

          <div className="text-lg space-y-4 mb-8">
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
              La consulenza può inoltre affiancare il paziente e il suo
              legale attraverso una consulenza tecnica di parte (CTP), sia
              nella fase stragiudiziale sia nell&apos;ambito di un
              procedimento giudiziario.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            Domande frequenti sulla Medicina Legale
          </h2>

          <div className="space-y-4 mb-8">

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

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-semibold mb-3">
              Consulenza di Medicina Legale a {city.name}
            </h2>

            <p className="text-lg mb-4">
              Per richiedere una consulenza medico-legale a {city.name} o
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
