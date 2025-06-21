import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import WordCarousel from "@/components/word-carousel"

export default function AboutMePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Chi Sono", href: "/about-me" },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Photo */}
          <div className="md:w-1/3">
            <div className="w-[250px] h-[350px] mx-auto">
              <img
                src="/images/medicinalegale1.jpg"
                alt="Dr. Maico Battistello"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Biography */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">Dr. Maico Battistello</h1>
            <h2 className="text-xl mb-1 italic text-gray-600">Laureato in Medicina e Chirurgia</h2>
            <h3 className="text-lg mb-4 italic text-gray-600">
              Specializzato in Osteopatia, Ozonoterapia e Medicina Legale
            </h3>

            <div className="space-y-4">
              <p className="text-lg">
                Laureato in Medicina e Chirurgia presso l'Università di Padova nel 1999. Specializzato in Medicina
                Legale presso l'Università di Parma nel 2004. Ha conseguito il diploma in Osteopatia presso l'Istituto
                Europeo per la Medicina Osteopatica (EIOM) di Padova nel 2005. Ozonoterapeuta dal 2017. Nel 2019, ha
                ottenuto la certificazione in "Pet Therapy", qualificandosi come Project Manager, Coordinatore di
                Intervento e Conduttore di Cani.
              </p>
              <p className="text-lg">
                Iscritto a società scientifiche riconosciute dal Ministero della Salute, in conformità alla Legge n. 24
                dell'8 marzo 2017, come Nuova FIO (Nuova Federazione Italiana di Ossigeno-Ozono) e SIOOT (Società
                Scientifica di Ossigeno-Ozonoterapia).
              </p>
            </div>
          </div>
        </div>

        {/* Word Carousel */}
        <div className="my-12">
          <WordCarousel words={["Professionalità", "Affidabilità", "Esperienza", "Passione"]} />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  )
}
