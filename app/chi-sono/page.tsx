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

        <div className="container mx-auto px-4 py-10 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

            <div className="md:w-[38%] lg:w-[36%]">
              <div className="w-[380px] max-w-full h-[532px] mx-auto md:mx-0">
                <img
                  src="/images/medicinalegale1.jpg"
                  alt="Dr. Maico Battistello - Medico Legale, Osteopata e Ozonoterapeuta"
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                  itemProp="image"
                />
              </div>
            </div>

            <div
              className="md:w-[62%] lg:w-[64%] prose prose-lg max-w-none"
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
                className="text-xl mb-4 italic text-gray-600"
                itemProp="jobTitle"
              >
                Medico Legale · Osteopata · Ozonoterapeuta
              </h2>

              <p className="text-xl font-medium leading-relaxed mb-8 text-gray-800">
                Competenze diverse, una stessa attenzione alla persona.
              </p>

              <div className="text-lg leading-relaxed space-y-6">

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
                  Medicina Legale presso l&apos;Università di Parma. Un
                  ambito che ancora oggi rappresenta una parte importante
                  della sua attività professionale, attraverso visite e
                  consulenze medico-legali.
                </p>

                <p>
                  Parallelamente, l&apos;interesse per una lettura funzionale
                  dell&apos;apparato muscolo-scheletrico lo porta ad
                  approfondire l&apos;Osteopatia. Nel 2005 consegue il diploma
                  presso l&apos;Istituto Europeo per la Medicina Osteopatica
                  (EIOM) di Padova.
                </p>

                <p>
                  Dal 2017 integra nella propria attività clinica anche
                  l&apos;Ossigeno-Ozonoterapia, ampliando ulteriormente le
                  possibilità di valutazione e trattamento delle problematiche
                  dolorose e muscolo-scheletriche.
                </p>

                <p className="text-xl font-medium leading-relaxed text-gray-900">
                  È proprio dall&apos;incontro tra queste esperienze che nasce
                  il suo modo di lavorare: non partire automaticamente da una
                  tecnica, ma dalla comprensione del problema.
                </p>

                <p>
                  Osteopatia e Ossigeno-Ozonoterapia possono così essere
                  utilizzate singolarmente oppure integrate, quando indicato,
                  all&apos;interno di un percorso costruito sulle
                  caratteristiche e sulle esigenze della singola persona.
                </p>

                <p>
                  L&apos;obiettivo non è applicare lo stesso trattamento a
                  tutti, ma valutare ciò che può essere più appropriato in quel
                  momento, considerando il dolore insieme agli aspetti
                  articolari, muscolari, funzionali e posturali che possono
                  contribuire al disturbo.
                </p>

                <p>
                  Accanto all&apos;attività medica, nel 2019 consegue anche la
                  certificazione nell&apos;ambito della Pet Therapy,
                  qualificandosi come Project Manager, Coordinatore di
                  Intervento e Conduttore di Cani: un&apos;ulteriore esperienza
                  all&apos;interno di un percorso professionale caratterizzato
                  dall&apos;interesse per modalità diverse di relazione, cura
                  e assistenza.
                </p>

                <p>
                  Nell&apos;ambito dell&apos;Ossigeno-Ozonoterapia opera
                  facendo riferimento alle linee guida e alle buone pratiche
                  professionali del settore.
                </p>

                <p>
                  Il Dr. Maico Battistello riceve su appuntamento nelle sedi di
                  <strong> Marostica, Malo, Schio e Padova</strong>.
                </p>

              </div>
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
