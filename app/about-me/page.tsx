import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import WordCarousel from "@/components/word-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Chi Sono - Dr. Maico Battistello | Medico Specialista",
  description:
    "Dr. Maico Battistello, laureato in Medicina e Chirurgia, specializzato in Osteopatia, Ozonoterapia e Medicina Legale. Esperienza dal 1999.",
  keywords: "Dr. Maico Battistello, medico, osteopatia, ozonoterapia, medicina legale, Padova, Parma",
  openGraph: {
    title: "Chi Sono - Dr. Maico Battistello",
    description: "Dr. Maico Battistello, specializzato in Osteopatia, Ozonoterapia e Medicina Legale",
    images: [
      {
        url: "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
        width: 800,
        height: 600,
        alt: "Dr. Maico Battistello - Medico Specialista",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chi Sono - Dr. Maico Battistello",
    description: "Dr. Maico Battistello, specializzato in Osteopatia, Ozonoterapia e Medicina Legale",
    images: ["https://dottmaicobattistello.it/images/medicinalegale1.jpg"],
  },
  alternates: {
  canonical: "https://dottmaicobattistello.it/chi-sono",
},
}
export default function AboutMePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Maico Battistello",
    jobTitle: "Medico Chirurgo",
    description: "Specializzato in Osteopatia, Ozonoterapia e Medicina Legale",
    image: "https://dottmaicobattistello.it/images/medicinalegale1.jpg",
    url: "https://dottmaicobattistello.it/about-me",
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
    knowsAbout: ["Osteopatia", "Ozonoterapia", "Medicina Legale", "Pet Therapy"],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-20">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Chi Sono", href: "/about-me" },
          ]}
        />

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
             <div className="w-[300px] h-[420px] mx-auto">
                <img
                  src="/images/medicinalegale1.jpg"
                  alt="Dr. Maico Battistello - Medico Specialista in Osteopatia, Ozonoterapia e Medicina Legale"
                  className="w-full h-full object-cover rounded-lg"
                  itemProp="image"
                />
              </div>
            </div>

            <div className="md:w-2/3" itemScope itemType="https://schema.org/Person">
              <h1 className="text-3xl font-bold mb-2" itemProp="name">
                Dr. Maico Battistello
              </h1>
              <h2 className="text-xl mb-1 italic text-gray-600" itemProp="jobTitle">
                Laureato in Medicina e Chirurgia
              </h2>
              <h3 className="text-lg mb-4 italic text-gray-600" itemProp="description">
               Medico Legale, Osteopata e Ozonoterapeuta
              </h3>

         <div className="space-y-4">
  <p className="text-lg" itemProp="description">
  Laureato in Medicina e Chirurgia presso l'Università di Padova nel 1999 e specializzato in Medicina Legale presso l'Università di Parma nel 2004. Nel 2005 ha conseguito il diploma in Osteopatia presso l'Istituto Europeo per la Medicina Osteopatica (EIOM) di Padova e dal 2017 integra nella propria attività clinica l'Ossigeno-Ozonoterapia.
  </p>

  <p className="text-lg mt-4">
    Nel 2019 ha conseguito la certificazione in Pet Therapy, qualificandosi come Project Manager, Coordinatore di Intervento e Conduttore di Cani.
  </p>

  <p className="text-lg mt-4">
La sua attività professionale è orientata alla presa in carico globale della persona, con particolare attenzione ai disturbi muscolo-scheletrici, al dolore cronico e alla costruzione di percorsi terapeutici personalizzati, integrando competenze di Medicina Legale, Osteopatia e Ossigeno-Ozonoterapia.

  Nell'ambito dell'Ossigeno-Ozonoterapia segue le linee guida e le buone pratiche riconosciute dalla Nuova FIO e dalla SIOOT.
</p>

<p className="text-lg mt-4">
  È disponibile per visite e consulenze nelle sedi di Marostica, Monte di Malo, Schio e Padova.
</p>
</div>
           
        </div>
            </div>
                </div>

<div className="my-12">
          <div className="my-12">
            <WordCarousel words={["Professionalità", "Affidabilità", "Esperienza", "Passione"]} />
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  )
}
