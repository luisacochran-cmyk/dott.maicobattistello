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

export default function MedicinaLegalePadovaPage() {
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
          { label: `Medicina Legale a ${city.name}`, href: seoData.canonical },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

         <div className="text-lg mb-6 space-y-4">
  <p>
   <p>
  Il Dr. Maico Battistello svolge attività di medicina legale a Padova, offrendo consulenze medico-legali rivolte a privati, professionisti, studi legali e compagnie assicurative in uno dei principali contesti professionali e universitari del Veneto.
</p>
  </p>

  <p>
    La consulenza medico-legale può essere utile in caso di danno biologico, infortuni, sinistri stradali, invalidità permanente, responsabilità professionale e controversie assicurative.
  </p>

  <p>
    Ogni valutazione viene svolta attraverso l’analisi della documentazione clinica, l’inquadramento del caso e, quando necessario, la visita specialistica.
  </p>
</div>

          <h3 className="text-xl font-semibold mb-4">Servizi di Medicina Legale a {city.name}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {service.conditions.map((condition, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <p className="font-medium text-gray-800">✓ {condition}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Vantaggi della Consulenza con il Dr. Battistello</h3>

          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">💼 Esperienza e Competenza</h3>
            <p className="mb-3">
              Il Dr. Maico Battistello è specialista in Medicina Legale con anni di esperienza nella valutazione del
              danno biologico e nella redazione di perizie medico-legali per contenziosi assicurativi e giudiziari.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-4">Domande Frequenti sulla Medicina Legale</h3>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">Cos'è una consulenza tecnica di parte (CTP)?</summary>
              <p className="mt-2 text-gray-700">
                La CTP è una consulenza medico-legale richiesta da una delle parti in causa (assicurato, danneggiato)
                per valutare il danno subito e supportare la propria posizione in un contenzioso.
              </p>
            </details>

            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">Come si quantifica l'invalidità permanente?</summary>
              <p className="mt-2 text-gray-700">
                L'invalidità permanente viene quantificata attraverso l'esame medico del paziente, l'analisi della
                documentazione clinica e l'applicazione di tabelle di valutazione riconosciute dalla giurisprudenza.
              </p>
            </details>

            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">Quanto dura una consulenza medico-legale?</summary>
              <p className="mt-2 text-gray-700">
                La durata varia in base alla complessità del caso, ma generalmente richiede un'analisi approfondita
                della documentazione clinica seguita da una visita medica specialistica.
              </p>
            </details>

            <details className="bg-gray-50 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">Quali documenti servono per la consulenza?</summary>
              <p className="mt-2 text-gray-700">
                È necessario portare tutta la documentazione medica relativa all'evento dannoso: referti, cartelle
                cliniche, esami diagnostici, certificati medici e eventuale corrispondenza assicurativa.
              </p>
            </details>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">📞 Prenota la Tua Consulenza a {city.name}</h3>
            <p className="mb-4">
              Per richiedere una consulenza medico-legale specialistica a {city.name} o per informazioni sui costi,
              contattami ora:
            </p>
            <Link
              href="/contacts"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contattami Ora
            </Link>
          </div>

          <h3 className="text-xl font-semibold mb-4">Altre Città Servite</h3>
          <p className="text-base mb-4">Oltre a {city.name}, offro consulenze di medicina legale anche a:</p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {cities
              .filter((c) => c.slug !== city.slug && c.slug !== "vicenza")
              .map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/medicina-legale-${otherCity.slug}`}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Medicina Legale a {otherCity.name}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
