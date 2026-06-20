import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "padova")!
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
    type: "website",
    locale: "it_IT",
    siteName: "Dr. Maico Battistello",
    images: [
      {
        url: "https://dottmaicobattistello.it/images/nuovaozonosteo1.jpg",
        width: 1200,
        height: 630,
        alt: `Ozonoterapia a ${city.name} - Dr. Maico Battistello`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: ["https://dottmaicobattistello.it/images/nuovaozonosteo1.jpg"],
  },
  keywords: [
    `ozonoterapia ${city.name.toLowerCase()}`,
    `ozono terapia ${city.name.toLowerCase()}`,
    `ozonoterapia provincia ${city.province}`,
    `dott battistello ${city.name.toLowerCase()}`,
    `dr maico battistello ${city.name.toLowerCase()}`,
    `ossigeno ozonoterapia ${city.name.toLowerCase()}`,
    `ernia discale ${city.name.toLowerCase()}`,
    `mal di schiena ${city.name.toLowerCase()}`,
    `artrosi ${city.name.toLowerCase()}`,
    `dolore cervicale ${city.name.toLowerCase()}`,
    `centro ozonoterapia ${city.name.toLowerCase()}`,
    `medico ozonoterapia ${city.name.toLowerCase()}`,
    `specialista ozonoterapia ${city.name.toLowerCase()}`,
    `cura ozono ${city.name.toLowerCase()}`,
    `terapia ozono ${city.name.toLowerCase()}`,
  ].join(", "),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function OzonoterapiaPadovaPage() {
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
  A <strong>Padova</strong>, il Dr. Maico Battistello utilizza l'ossigeno-ozonoterapia in un percorso personalizzato,
  rivolto in particolare a disturbi muscolo-scheletrici, dolore cronico e problematiche funzionali della colonna.
  Il trattamento viene valutato in base alla condizione del paziente, alla sede del disturbo e agli obiettivi clinici.
</p>

<p className="text-lg mb-6">
  L'ozonoterapia può essere indicata quando è presente una componente <strong>infiammatoria</strong>,
  dolorosa o articolare, con l'obiettivo di contribuire alla riduzione del <strong>dolore</strong>,
  al miglioramento della <strong>funzionalità</strong> e a una migliore qualità del movimento.
</p>

<h3 className="text-xl font-semibold mb-4">
  Quando può essere indicata l'ozonoterapia a Padova
</h3>

<ul className="list-disc pl-6 mb-6 space-y-2">
  <li>Cervicalgia e lombalgia</li>
  <li>Ernie e protrusioni discali</li>
  <li>Sciatalgia e dolore radicolare</li>
  <li>Artrosi e problematiche articolari</li>
  <li>Tendinopatie e dolore muscolo-scheletrico</li>
  <li>Limitazioni della mobilità e recupero funzionale</li>
</ul>
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Ozono Terapia Padova - Trattamento Professionale",
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
              La <strong>Piccola Autoemoterapia a Padova</strong> è una delle tecniche più richieste presso lo studio
              del Dr. Battistello. Consiste nel prelevare una <strong>piccola quantità</strong> di sangue dal paziente,
              miscelarla con ozono medicale e reiniettarla per <strong>via intramuscolare</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento di <strong>ozonoterapia a Padova</strong> stimola il sistema immunitario e ha proprietà{" "}
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
                title="PAET Ozonoterapia Padova - Dr. Maico Battistello"
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
                title="GAET Ozonoterapia Padova - Dr. Maico Battistello"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4">Grande Autoemoterapia (GAET) a {city.name}</h3>
            <p className="text-lg mb-4">
              La <strong>Grande Autoemoterapia a Padova</strong> rappresenta la tecnica più avanzata dell'Ozonoterapia
              sistemica offerta dal Dr. Battistello. Consiste nel prelevare una{" "}
              <strong>maggiore quantità di sangue</strong> dal paziente (circa 80-240ml), ozonizzarlo in modo
              controllato e reinfonderlo <strong>per via endovenosa</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento di <strong>ozonoterapia sistemica a Padova</strong> ha{" "}
              <strong>effetti sistemici profondi</strong>, stimolando il sistema immunitario, migliorando
              l'ossigenazione tissutale e producendo <strong>potenti effetti antinfiammatori e rigenerativi</strong>. È
              particolarmente indicato per patologie croniche e <strong>condizioni sistemiche complesse</strong>.
            </p>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h3 className="text-2xl font-bold mb-6">Domande Frequenti sull'Ozonoterapia a Padova</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="costo-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">Quanto costa l'ozonoterapia a Padova?</AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">
                Il costo dell'ozonoterapia a Padova varia in base al tipo di trattamento e al numero di sedute
                necessarie. Il Dr. Battistello offre sempre un consulto iniziale per valutare il caso specifico e
                fornire un preventivo personalizzato. I prezzi sono competitivi rispetto ad altri centri della provincia
                di Padova.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dove-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">Dove si fa l'ozonoterapia a Padova?</AccordionTrigger>
            <AccordionContent>
              <p className="text-lg">
                Il Dr. Maico Battistello esegue trattamenti di ozonoterapia a Padova presso la Clinica Cittàgiardino e
                la Clinica Medicina Amica. Entrambe le strutture sono dotate di tecnologie all'avanguardia e rispettano
                i più alti standard di sicurezza.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="efficacia-ozonoterapia-padova">
            <AccordionTrigger className="text-lg font-semibold">
              L'ozonoterapia a Padova è davvero efficace?
            </AccordionTrigger>
            <AccordionContent>
            <p className="text-lg">
  L'efficacia dell'ozonoterapia dipende dalla condizione trattata, dalla valutazione clinica e dalla risposta individuale del paziente. In ambito muscolo-scheletrico può essere indicata come supporto terapeutico per dolore, infiammazione e limitazioni funzionali, sempre dopo valutazione medica.
</p>
        
          <AccordionItem value="administration-methods">
            <AccordionTrigger className="text-xl font-semibold">
              Metodi di Somministrazione dell'Ozonoterapia a {city.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  L'<strong>ozonoterapia a {city.name}</strong> può essere somministrata localmente o sistemicamente a
                  seconda delle patologie da trattare. Il Dr. Battistello utilizza le tecniche più avanzate disponibili
                  nella provincia di Padova.
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
            <AccordionTrigger className="text-xl font-semibold">
              Patologie Trattate con Ozonoterapia a Padova
            </AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  Grazie alla Medicina Basata sull'Evidenza (EBM), le patologie trattate con l'Ossigeno-Ozonoterapia a{" "}
                  <strong>{city.name}</strong> dal Dr. Battistello sono suddivise in tre categorie.
                </p>

                <h4 className="font-semibold mt-4">Evidenza di Tipo A (Massima Efficacia):</h4>
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

                <h4 className="font-semibold mt-4">Evidenza di Tipo B (Alta Efficacia):</h4>
                <p className="text-lg">Basata su singoli studi randomizzati, studi di coorte o studi caso-controllo.</p>
                <ul className="list-disc pl-6">
                  <li>Patologie Ortopediche</li>
                  <li>Piede Diabetico</li>
                  <li>Ulcere Cutanee e Ustioni</li>
                  <li>Malattie Cutanee Acute causate da batteri, funghi o virus</li>
                </ul>

                <h4 className="font-semibold mt-4">Evidenza di Tipo C (Buona Efficacia):</h4>
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
            <AccordionTrigger className="text-xl font-semibold">Sicurezza dell'Ozonoterapia a Padova</AccordionTrigger>
            <AccordionContent>
              <div className="prose max-w-none">
                <p className="text-lg">
                  A concentrazioni terapeutiche, l'<strong>Ossigeno-Ozonoterapia a Padova</strong> del Dr. Battistello
                  non ha effetti collaterali. Non è un trattamento doloroso. Non provoca reazioni allergiche. Non
                  interferisce con i farmaci in uso.
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
          __html: JSON.stringify({
            ...seoData.structuredData,
            "@type": ["MedicalBusiness", "LocalBusiness"],
            priceRange: "€€",
            paymentAccepted: ["Cash", "Credit Card"],
            currenciesAccepted: "EUR",
            openingHours: ["Mo-Fr 09:00-18:00"],
            telephone: "+39-XXX-XXXXXXX",
            email: "info@dottmaicobattistello.it",
           hasMap: "https://maps.google.com/?q=Padova+ozonoterapia"
          
              
          }),
        }}
      />
    </div>
  )
}
