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
              <div className="w-[250px] h-[350px] mx-auto">
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
                Specializzato in Osteopatia, Ozonoterapia e Medicina Legale
              </h3>

              <div className="space-y-4">
                <p className="text-lg" itemProp="description">
Laureato in Medicina e Chirurgia presso l'Università di Padova nel 1999 e specializzato in Medicina Legale presso l'Università di Parma nel 2004. Ha conseguito il diploma in Osteopatia presso l'Istituto Europeo per la Medicina Osteopatica (EIOM) di Padova nel 2005 ed esercita come Ozonoterapeuta dal 2017.

Nel corso della sua attività professionale ha integrato competenze in Medicina Legale, Osteopatia e Ozonoterapia, sviluppando un approccio orientato alla persona e alla gestione multidisciplinare dei disturbi muscolo-scheletrici e del dolore.

Riceve presso le sedi di Marostica, Monte di Malo, Schio e Padova, occupandosi di valutazioni medico-legali, osteopatia e ossigeno-ozonoterapia.

Nel 2019 ha inoltre conseguito la certificazione in Pet Therapy, qualificandosi come Project Manager, Coordinatore di Intervento e Conduttore di Cani.
               <p className="text-lg">
La sua attività professionale è orientata alla valutazione medico-legale e all'integrazione di osteopatia e ossigeno-ozonoterapia, attraverso protocolli clinici consolidati e un approccio multidisciplinare orientato alla persona, con particolare attenzione ai disturbi muscolo-scheletrici, al dolore cronico e ai percorsi terapeutici personalizzati.</p>

                
              </div>
            </div>
          </div>

          <div className="my-12">
            <WordCarousel words={["Professionalità", "Affidabilità", "Esperienza", "Passione"]} />
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  )
}
