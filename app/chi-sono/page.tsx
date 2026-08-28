import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import WordCarousel from "@/components/word-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chi Sono - Dr. Maico Battistello | Medico Specialista",
  description:
    "Dr. Maico Battistello, Medico Legale, Osteopata e Ozonoterapeuta. Un percorso professionale costruito tra Medicina, valutazione funzionale e approccio personalizzato.",
  openGraph: {
    title: "Chi Sono - Dr. Maico Battistello",
    description:
      "Dr. Maico Battistello, Medico Legale, Osteopata e Ozonoterapeuta.",
    images: [
      {
        url: "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
        width: 800,
        height: 600,
        alt: "Dr. Maico Battistello - Medico Legale, Osteopata e Ozonoterapeuta",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Sono - Dr. Maico Battistello",
    description:
      "Dr. Maico Battistello, Medico Legale, Osteopata e Ozonoterapeuta.",
    images: [
      "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
    ],
  },
  alternates: {
    canonical: "https://dottmaicobattistello.it/chi-sono",
  },
}

export default function ChiSonoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Maico Battistello",
    jobTitle: "Medico Chirurgo",
    description:
      "Medico Legale, Osteopata e Ozonoterapeuta",
    image:
      "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
    url: "https://dottmaicobattistello.it/chi-sono",
    sameAs: ["https://dottmaicobattistello.it"],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Università di Padova",
      },
      {
        "@type": "EducationalOrganization",
        name: "Università di Parma",
      },
    ],
    knowsAbout: [
      "Medicina Legale",
      "Osteopatia",
      "Ozonoterapia",
      "Pet Therapy",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Chi Sono", href: "/chi-sono" },
          ]}
        />

        <div className="container mx-auto px-4 py-10 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[430px_1fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="w-full max-w-[430px] mx-auto md:mx-0">
                <img
                  src="/images/medicinalegale1.jpg"
                  alt="Dr. Maico Battistello - Medico Legale, Osteopata e Ozonoterapeuta"
                  className="w-full h-auto object-cover rounded-xl shadow-sm"
                  itemProp="image"
                />
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              itemScope
              itemType="https://schema.org/Person"
            >
              <h1
                className="text-3xl font-bold mb-3"
                itemProp="name"
              >
                Dr. Maico Battistello
              </h1>

              <h2
                className="text-xl mb-5 italic text-gray-600"
                itemProp="jobTitle"
              >
                Medico Legale · Osteopata · Ozonoterapeuta
              </h2>

              <p className="text-xl font-medium leading-relaxed mb-8 text-gray-800">
                Competenze diverse, una stessa attenzione alla persona.
              </p>

              <div className="text-xl leading-relaxed space-y-6">
                <p itemProp="description">
                  Il percorso professionale del Dr. Maico Battistello nasce
                  dalla Medicina e si sviluppa negli anni attraverso ambiti
                  differenti, uniti da un interesse costante per la
                  comprensione del corpo, della sua funzionalità e delle
                  conseguenze che dolore, trauma e alterazioni
                  muscolo-scheletriche possono avere sulla vita della persona.
                </p>

                <p>
                  Laureato in Medicina e Chirurgia presso
                  l&apos;Università di Padova nel 1999, prosegue la propria
                  formazione conseguendo nel 2004 la specializzazione in
                  Medicina Legale presso l&apos;Università di Parma. Un ambito
                  che ancora oggi rappresenta una parte importante della sua
                  attività professionale, attraverso visite e consulenze
                  medico-legali.
                </p>

                <p>
                  Parallelamente, l&apos;interesse per una lettura funzionale
                  dell&apos;apparato muscolo-scheletrico lo porta ad
                  approfondire l&apos;Osteopatia. Nel 2005 consegue il diploma
                  presso l&apos;Istituto Europeo per la Medicina Osteopatica
                  (EIOM) di Padova.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-10 md:mt-12">
            <div className="text-xl leading-relaxed space-y-6">
              <p>
                Dal 2017 integra nella propria attività clinica anche
                l&apos;Ossigeno-Ozonoterapia, ampliando ulteriormente le
                possibilità di valutazione e trattamento delle problematiche
                dolorose e muscolo-scheletriche.
              </p>

              <div className="my-10 border-l-4 border-primary pl-6">
                <p className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 m-0">
                  È proprio dall&apos;incontro tra queste esperienze che nasce
                  il suo modo di lavorare: non partire automaticamente da una
                  tecnica, ma dalla comprensione del problema.
                </p>
              </div>

            <p>
  L&apos;esperienza maturata in questi diversi ambiti gli permette oggi di
  integrare Osteopatia e Ossigeno-Ozonoterapia all&apos;interno di un unico
  percorso di valutazione e trattamento. Le due discipline possono essere
  utilizzate anche separatamente, quando indicato, ma è dalla loro integrazione
  che nasce uno degli elementi distintivi del suo approccio: scegliere e
  combinare strumenti diversi sulla base delle caratteristiche e delle esigenze
  della singola persona.
</p>

              <p>
                L&apos;obiettivo non è applicare lo stesso trattamento a tutti,
                ma valutare ciò che può essere più appropriato in quel momento,
                considerando il dolore insieme agli aspetti articolari,
                muscolari, funzionali e posturali che possono contribuire al
                disturbo.
              </p>

              <p>
                Accanto all&apos;attività medica, nel 2019 consegue anche la
                certificazione nell&apos;ambito della Pet Therapy,
                qualificandosi come Project Manager, Coordinatore di Intervento
                e Conduttore di Cani: un&apos;ulteriore esperienza
                all&apos;interno di un percorso professionale caratterizzato
                dall&apos;interesse per modalità diverse di relazione, cura e
                assistenza.
              </p>

              <p>
                Nell&apos;ambito dell&apos;Ossigeno-Ozonoterapia opera facendo
                riferimento alle linee guida e alle buone pratiche
                professionali del settore.
              </p>

              <p>
                Il Dr. Maico Battistello riceve su appuntamento nelle sedi di
                <strong> Marostica, Malo, Schio e Padova</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="my-14">
          <WordCarousel
            words={[
              "Professionalità",
              "Affidabilità",
              "Esperienza",
              "Passione",
            ]}
          />
        </div>

        <ContactForm />
      </div>
    </>
  )
}
