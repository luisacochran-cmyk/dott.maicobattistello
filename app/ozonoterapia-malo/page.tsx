import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "malo")!
const service = services.find((s) => s.slug === "ozonoterapia")!
const seoData = generateLocalSEO(service, city)

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonical,
  },
}

export default function OzonoterapiaMaloPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozonoterapia", href: "/ozone-therapy" },
          { label: `${city.name}`, href: `/ozonoterapia-${city.slug}` },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

          <p className="text-lg mb-6">
            L'ossigeno-ozonoterapia utilizza una <strong>miscela di ossigeno e gas ozono</strong> per il trattamento
            sintomatico ed eziologico delle malattie umane e animali. Questi gas all'interno del corpo hanno proprietà
            <strong> antinfiammatorie, analgesiche e antiedemigene</strong> e sono in grado di{" "}
            <strong>generare benessere</strong>, guarire processi infiammatori e promuovere la{" "}
            <strong>rigenerazione dei tessuti</strong>. A <strong>Malo</strong>, il Dr. Maico Battistello offre questi
            trattamenti presso il Centro Medico Medicalis, con un approccio personalizzato per ogni paziente. Per queste
            caratteristiche è diventata una terapia medica di provata sicurezza, efficacia e minima invasività. Secondo
            il Ministero della Salute, questo tipo di terapia è particolarmente efficace, non solo nel migliorare i
            sintomi delle ernie discali ma anche nel ridurne il volume, esercitando un vero e proprio{" "}
            <strong>effetto curativo</strong>.
          </p>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="-mt-8 mb-12">
        <QuadrantCarousel
          items={[
            {
              title: "Trattamento Combinato",
              image: "/images/nuovaozonosteo1.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Terapia Integrata",
              image: "/images/osteozonoterapia1.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Risultati Clinici",
              image: "/images/osteozonoterapia2.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Ozonoterapia Avanzata",
              image: "/images/ozonoterapia.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Trattamento di Ozonoterapia",
              image: "/images/ozonoterapia3.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
          ]}
        />
      </div>

      {/* Piccola Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Piccola Autoemoterapia (PAET) a {city.name}</h3>
            <p className="text-lg mb-4">
              La Piccola Autoemoterapia è una delle tecniche utilizzate nell'ozonoterapia a <strong>{city.name}</strong>
              . Consiste nel prelevare una
              <strong> piccola quantità</strong> di sangue dal paziente, miscelarla con ozono medicale e reiniettarla
              per <strong>via intramuscolare</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
              <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È particolarmente efficace per
              problematiche localizzate e per <strong>migliorare la risposta immunitaria</strong> dell'organismo.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full max-w-md md:max-w-none mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1167667781?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="PAET_finale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grande Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full max-w-md md:max-w-none mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1167667746?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title="GAET_finale"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4">Grande Autoemoterapia (GAET) a {city.name}</h3>
            <p className="text-lg mb-4">
              La Grande Autoemoterapia rappresenta la tecnica più avanzata dell'Ozonoterapia sistemica a{" "}
              <strong>{city.name}</strong>. Consiste nel prelevare una <strong>maggiore quantità di sangue</strong> dal
              paziente (circa 80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
              <strong>per via endovenosa</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento ha <strong>effetti sistemici profondi</strong>, stimolando il sistema immunitario,
              migliorando l'ossigenazione tissutale e producendo{" "}
              <strong>potenti effetti antinfiammatori e rigenerativi</strong>. È particolarmente indicato per patologie
              croniche e <strong>condizioni sistemiche complesse</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <section className="py-8 container mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="administration-methods">
            <AccordionTrigger className="text-xl font-semibold">
              Metodi di Somministrazione dell'Ozonoterapia a {city.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  L'ozonoterapia a <strong>{city.name}</strong> può essere somministrata localmente o sistemicamente a
                  seconda delle patologie da trattare.
                </p>
                <p className="text-lg">
                  Le varie vie di somministrazione possono anche essere utilizzate da sole o in combinazione, per
                  esercitare un effetto sinergico.
                </p>
                <p className="text-lg">Le principali vie di somministrazione sono:</p>

                <h4 className="font-semibold mt-4">Sistemica:</h4>
                <p className="text-lg">
                  Applicata nei casi in cui la prognosi e la progressione della malattia possono beneficiare della
                  modulazione della risposta infiammatoria o di un migliore apporto di ossigeno ai tessuti. Questi
                  includono:
                </p>
                <ul className="list-disc pl-6">
                  <li>Grande Auto-emoterapia (GAET) – venosa;</li>
                  <li>Piccola Auto-emoterapia Infusionale (PAEI) – muscolo profondo;</li>
                  <li>Rettale</li>
                </ul>

                <h4 className="font-semibold mt-4">Locale:</h4>
                <p className="text-lg">
                  Applicata quando c'è la necessità di sfruttare gli effetti analgesici, antinfiammatori e miorilassanti
                  per patologie muscolo-scheletriche, intestinali e altre. La somministrazione avviene tramite:
                </p>
                <ul className="list-disc pl-6">
                  <li>Intramuscolare, paravertebrale</li>
                  <li>Sottocutanea</li>
                  <li>Peri-articolare</li>
                  <li>Intra-articolare</li>
                  <li>Insufflazione (rettale e vaginale)</li>
                  <li>Topica con Sacca di Ozono</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="clinical-therapeutic-indications">
            <AccordionTrigger className="text-xl font-semibold">Indicazioni Clinico-Terapeutiche</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  Grazie alla Medicina Basata sull'Evidenza (EBM), le patologie trattate con l'Ossigeno-Ozonoterapia a{" "}
                  <strong>{city.name}</strong>
                  sono suddivise in tre categorie.
                </p>

                <h4 className="font-semibold mt-4">Evidenza di Tipo A:</h4>
                <p className="text-lg">
                  Basata su revisioni sistematiche con omogeneità di studi caso-controllo. Le principali applicazioni
                  cliniche riconosciute dal Ministero della Salute includono:
                </p>
                <ul className="list-disc pl-6">
                  <li>Ernie Discali</li>
                  <li>Protrusioni Discali</li>
                  <li>Discopatie</li>
                  <li>Sindrome Faccettale</li>
                  <li>Osteoartrosi, Gonartrosi, Condromalacia rotulea</li>
                </ul>

                <h4 className="font-semibold mt-4">Evidenza di Tipo B:</h4>
                <p className="text-lg">Basata su singoli studi randomizzati, studi di coorte o studi caso-controllo.</p>
                <ul className="list-disc pl-6">
                  <li>Patologie Ortopediche</li>
                  <li>Piede Diabetico</li>
                  <li>Ulcere Cutanee e Ustioni</li>
                  <li>Malattie Cutanee Acute causate da batteri, funghi o virus</li>
                </ul>

                <h4 className="font-semibold mt-4">Evidenza di Tipo C:</h4>
                <p className="text-lg">
                  Basata su opinioni di esperti senza ricerca sistematica o scientifica specifica.
                </p>
                <ul className="list-disc pl-6">
                  <li>Long Covid</li>
                  <li>Fibromialgia</li>
                  <li>Stanchezza Cronica (CFS)</li>
                  <li>Stanchezza Stagionale o da Lavoro</li>
                  <li>Debolezza Generale o Mancanza di Energia nel Parkinson</li>
                  <li>Benessere post-ospedalizzazione/recupero</li>
                  <li>Artrite Reumatoide, Artrite Psoriasica</li>
                  <li>Disfunzione Erettile</li>
                  <li>Malattie Autoimmuni (supporto alle terapie convenzionali)</li>
                  <li>Demenza Senile/Alzheimer (complementare alla terapia convenzionale)</li>
                  <li>Asma</li>
                  <li>Emicranie</li>
                  <li>Cefalee a Grappolo o Tensiva</li>
                  <li>Problemi Infettivi</li>
                  <li>Problemi Circolatori</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contraindications">
            <AccordionTrigger className="text-xl font-semibold">Controindicazioni</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  A concentrazioni terapeutiche, l'Ossigeno-Ozonoterapia non ha effetti collaterali. Non è un
                  trattamento doloroso. Non provoca reazioni allergiche. Non interferisce con i farmaci in uso.
                </p>

                <p className="text-lg mt-4">Le controindicazioni sono limitate alla GAET per le seguenti condizioni:</p>
                <ul className="list-disc pl-6">
                  <li>Favismo</li>
                  <li>Ipertiroidismo grave</li>
                  <li>Allergie al citrato e agli anticoagulanti</li>
                  <li>Epilessia</li>
                  <li>Gravidanza</li>
                  <li>Sport agonistico</li>
                </ul>

                <p className="text-lg mt-4">
                  Tutti i trattamenti con ozono vengono eseguiti utilizzando apparecchiature certificate, aderendo alle
                  linee guida sviluppate dalle principali società scientifiche nazionali e internazionali, come:
                </p>
                <ul className="list-disc pl-6">
                  <li>SIOOT (Società Scientifica Internazionale di Ossigeno-Ozonoterapia)</li>
                  <li>Nuova FIO (Federazione Italiana di Ossigeno-Ozonoterapia)</li>
                  <li>ISCO3 (Comitato Scientifico Internazionale di Ozonoterapia)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.structuredData),
        }}
      />
    </div>
  )
}
