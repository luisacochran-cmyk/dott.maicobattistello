import Link from "next/link"
import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
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
          { label: "Ozonoterapia", href: "/ozonoterapia" },
          { label: `${city.name}`, href: `/ozonoterapia-${city.slug}` },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          {/* INTRODUZIONE */}
          <div className="text-xl leading-relaxed mb-8 space-y-5">
            <p>
              L&apos;<strong>ossigeno-ozonoterapia</strong> utilizza una miscela
              di ossigeno e ozono impiegata in diversi ambiti della pratica
              medica come supporto nel trattamento di specifiche condizioni
              cliniche.
            </p>

            <p>
              Nell&apos;area di <strong>Malo</strong>, il Dr. Maico Battistello
              esegue trattamenti personalizzati di{" "}
              <strong>ozonoterapia</strong> dopo un&apos;attenta valutazione
              medica, individuando la modalità di applicazione più appropriata
              in base alle caratteristiche del paziente e al quadro clinico.
            </p>

            <p>
              L&apos;<strong>ozono medicale</strong> viene utilizzato, nei
              contesti appropriati, come supporto nei percorsi terapeutici
              rivolti a patologie muscolo-scheletriche, stati infiammatori e
              condizioni dolorose.
            </p>

            <p>
              Per le sue caratteristiche di{" "}
              <strong>minima invasività</strong>, l&apos;ossigeno-ozonoterapia
              viene integrata in protocolli personalizzati con l&apos;obiettivo
              di favorire il benessere della persona e il recupero della
              funzionalità.
            </p>
          </div>

          {/* AREA GEOGRAFICA */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Un riferimento per Malo e l&apos;Alto Vicentino
            </h2>

            <p className="text-xl leading-relaxed">
              L&apos;attività nell&apos;area di <strong>Malo</strong>{" "}
              rappresenta un riferimento anche per chi proviene da{" "}
              <strong>
                Isola Vicentina, Marano Vicentino, Thiene, Villaverla e San Vito
                di Leguzzano
              </strong>
              , oltre che dagli altri comuni dell&apos;Alto Vicentino.
            </p>
          </div>
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
            <h2 className="text-2xl font-semibold mb-4">
              Piccola Autoemoterapia (PAET) a {city.name}
            </h2>

            <p className="text-xl leading-relaxed mb-4">
              La Piccola Autoemoterapia è una delle tecniche utilizzate
              nell&apos;ozonoterapia a <strong>{city.name}</strong>. Consiste
              nel prelevare una <strong>piccola quantità</strong> di sangue dal
              paziente, miscelarla con ozono medicale e reiniettarla per{" "}
              <strong>via intramuscolare</strong>.
            </p>

            <p className="text-xl leading-relaxed">
              Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
              <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È
              particolarmente efficace per problematiche localizzate e per{" "}
              <strong>migliorare la risposta immunitaria</strong>{" "}
              dell&apos;organismo.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full max-w-md md:max-w-none mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
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
                src="https://player.vimeo.com/video/1167667746?h=c3a7c519ea&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="GAET_finale"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-2xl font-semibold mb-4">
              Grande Autoemoterapia (GAET) a {city.name}
            </h2>

            <p className="text-xl leading-relaxed mb-4">
              La Grande Autoemoterapia rappresenta la tecnica più avanzata
              dell&apos;Ozonoterapia sistemica a{" "}
              <strong>{city.name}</strong>. Consiste nel prelevare una{" "}
              <strong>maggiore quantità di sangue</strong> dal paziente (circa
              80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
              <strong>per via endovenosa</strong>.
            </p>

            <p className="text-xl leading-relaxed">
              Questo trattamento ha{" "}
              <strong>effetti sistemici profondi</strong>, stimolando il sistema
              immunitario, migliorando l&apos;ossigenazione tissutale e
              producendo{" "}
              <strong>potenti effetti antinfiammatori e rigenerativi</strong>. È
              particolarmente indicato per patologie croniche e{" "}
              <strong>condizioni sistemiche complesse</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Ozonoterapia - Approfondimento */}
      <section className="container mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-3">
            Approfondisci l&apos;Ozonoterapia
          </h2>

          <p className="text-xl leading-relaxed mb-5">
            Per conoscere i metodi di somministrazione, le indicazioni
            clinico-terapeutiche suddivise per livello di evidenza e le
            controindicazioni, consulta la pagina completa dedicata
            all&apos;Ozonoterapia.
          </p>

          <Link
            href="/ozonoterapia"
            className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline"
          >
            Scopri metodi, indicazioni e controindicazioni →
          </Link>
        </div>
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
