import Link from "next/link"
import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "schio")!
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

export default function OzonoterapiaSchioPage() {
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
        <div className="prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          {/* INTRODUZIONE */}
          <div className="text-xl leading-relaxed mb-8 space-y-5">
            <p>
              L&apos;<strong>ossigeno-ozonoterapia</strong> è una terapia medica
              che utilizza una miscela di ossigeno e ozono medicale nell&apos;ambito
              di specifiche indicazioni cliniche.
            </p>

            <p>
              A <strong>Schio</strong>, il Dr. Maico Battistello utilizza
              l&apos;ossigeno-ozonoterapia all&apos;interno di percorsi
              personalizzati, definiti sulla base della valutazione clinica e
              delle caratteristiche della singola persona.
            </p>

            <p>
              In ambito muscolo-scheletrico può essere presa in considerazione,
              quando clinicamente indicato, per problematiche caratterizzate da
              dolore, infiammazione e limitazioni funzionali, anche in relazione
              a disturbi della colonna e delle articolazioni.
            </p>
          </div>

          {/* AREA GEOGRAFICA */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Un riferimento per Schio e l&apos;Alto Vicentino
            </h2>

            <p className="text-xl leading-relaxed">
              Lo studio di <strong>Schio</strong> è un riferimento anche per chi
              proviene da{" "}
              <strong>
                Santorso, Thiene, Piovene Rocchette, Torrebelvicino e Marano
                Vicentino
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

            <div className="text-xl leading-relaxed space-y-5">
              <p>
                La Piccola Autoemoterapia è una delle metodiche che possono
                rientrare nell&apos;ambito dell&apos;ozonoterapia, quando
                clinicamente indicato.
              </p>

              <p>
                L&apos;eventuale utilizzo viene valutato dal medico in relazione
                al quadro clinico, agli obiettivi del trattamento e alle
                caratteristiche della persona.
              </p>
            </div>
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
            <h2 className="text-2xl font-semibold mb-4">
              Grande Autoemoterapia (GAET) a {city.name}
            </h2>

            <div className="text-xl leading-relaxed space-y-5">
              <p>
                La Grande Autoemoterapia è una metodica di ozonoterapia sistemica
                che può essere presa in considerazione in specifici percorsi
                clinici.
              </p>

              <p>
                Indicazioni, modalità di trattamento e appropriatezza vengono
                definite dal medico dopo una valutazione individuale, tenendo
                conto del quadro clinico complessivo e delle eventuali
                controindicazioni.
              </p>
            </div>
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
