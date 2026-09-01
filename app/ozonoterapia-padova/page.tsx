import Link from "next/link"
import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
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
  },
}

export default function OzonoterapiaPadovaPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozonoterapia", href: "/ozone-therapy" },
          { label: `${city.name}`, href: `/ozonoterapia-${city.slug}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-4xl font-bold mb-6">{seoData.h1}</h1>

          {/* INTRODUZIONE */}
          <div className="text-xl leading-relaxed mb-8 space-y-5">
            <p>
              A <strong>Padova</strong>, il Dott. Maico Battistello utilizza
              l&apos;<strong>ossigeno-ozonoterapia</strong> nell&apos;ambito di
              percorsi rivolti alla gestione del <strong>dolore</strong>, dei{" "}
              <strong>disturbi muscolo-scheletrici</strong> e delle problematiche
              funzionali della <strong>colonna vertebrale</strong> e delle
              articolazioni.
            </p>

            <p>
              Ogni trattamento parte dalla <strong>valutazione clinica</strong>.
              Natura e sede del disturbo, presenza di una componente infiammatoria,
              limitazioni funzionali e caratteristiche individuali contribuiscono
              a determinare se l&apos;ozonoterapia possa essere indicata e quale
              modalità di somministrazione sia più appropriata.
            </p>

            <p>
              L&apos;obiettivo non è applicare un protocollo prestabilito, ma
              costruire un percorso coerente con il quadro clinico della persona.
              Quando indicato, il trattamento può inoltre inserirsi in un approccio
              più ampio che considera non soltanto il dolore, ma anche{" "}
              <strong>funzionalità, mobilità e qualità del movimento</strong>.
            </p>
          </div>

          {/* INDICAZIONI */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Quando può essere indicata l&apos;ozonoterapia a Padova
          </h2>

          <p className="text-xl leading-relaxed mb-5">
            L&apos;ossigeno-ozonoterapia può essere presa in considerazione, dopo
            valutazione medica, nell&apos;ambito di differenti condizioni
            muscolo-scheletriche e dolorose, tra cui:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-3 text-xl leading-relaxed">
            <li>
              <strong>Cervicalgia e lombalgia</strong>
            </li>
            <li>
              <strong>Ernie e protrusioni discali</strong>
            </li>
            <li>
              <strong>Sciatalgia e dolore radicolare</strong>
            </li>
            <li>
              <strong>Artrosi e problematiche articolari</strong>
            </li>
            <li>
              <strong>Tendinopatie e disturbi muscolo-scheletrici</strong>
            </li>
            <li>
              Dolore associato a{" "}
              <strong>limitazioni della mobilità e della funzionalità</strong>
            </li>
          </ul>

          <p className="text-xl leading-relaxed mb-8">
            Le possibili indicazioni dell&apos;ozonoterapia presentano{" "}
            <strong>livelli differenti di evidenza scientifica</strong>. Per questo
            l&apos;indicazione non deriva semplicemente dalla presenza di una
            determinata patologia: è la valutazione medica a stabilire
            l&apos;appropriatezza del trattamento nel singolo caso e la modalità con
            cui eventualmente inserirlo nel percorso terapeutico.
          </p>

          {/* AREA GEOGRAFICA */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Un riferimento per Padova e l&apos;area padovana
            </h2>

            <p className="text-xl leading-relaxed">
              L&apos;attività a <strong>Padova</strong> rappresenta un riferimento
              anche per chi proviene da{" "}
              <strong>
                Abano Terme, Selvazzano Dentro, Albignasego, Vigonza e Cadoneghe
              </strong>
              , oltre che dagli altri comuni dell&apos;area padovana.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12">
        <QuadrantCarousel
          items={[
            {
              title: "Ozonoterapia Cervicale",
              image: "/images/ozcervicale.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Ozonoterapia Lombare",
              image: "/images/ozonoterapia3.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
            {
              title: "Consulenza Specialistica",
              image: "/images/nuovaozono2.jpg",
              link: `/ozonoterapia-${city.slug}`,
            },
          ]}
        />
      </div>

      {/* Piccola Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Piccola Autoemoterapia (PAET) a {city.name}
            </h3>

            <p className="text-xl leading-relaxed mb-4">
              La Piccola Autoemoterapia è una delle tecniche utilizzate
              nell&apos;ozonoterapia a <strong>{city.name}</strong>. Consiste nel
              prelevare una <strong>piccola quantità</strong> di sangue dal
              paziente, miscelarla con ozono medicale e reiniettarla per{" "}
              <strong>via intramuscolare</strong>.
            </p>

            <p className="text-xl leading-relaxed">
              Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
              <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È
              particolarmente efficace per problematiche localizzate e per{" "}
              <strong>migliorare la risposta immunitaria</strong> dell&apos;organismo.
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
                title="GAET_finale"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4">
              Grande Autoemoterapia (GAET) a {city.name}
            </h3>

            <p className="text-xl leading-relaxed mb-4">
              La Grande Autoemoterapia rappresenta la tecnica più avanzata
              dell&apos;Ozonoterapia sistemica a <strong>{city.name}</strong>.
              Consiste nel prelevare una{" "}
              <strong>maggiore quantità di sangue</strong> dal paziente (circa
              80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
              <strong>per via endovenosa</strong>.
            </p>

            <p className="text-xl leading-relaxed">
              Questo trattamento ha <strong>effetti sistemici profondi</strong>,
              stimolando il sistema immunitario, migliorando l&apos;ossigenazione
              tissutale e producendo{" "}
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

      <ContactForm />

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
            email: "info@dottmaicobattistello.it",
            hasMap: "https://maps.google.com/?q=Padova+ozonoterapia",
          }),
        }}
      />
    </div>
  )
}
