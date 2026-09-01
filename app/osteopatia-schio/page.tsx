import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "schio")!
const service = services.find((s) => s.slug === "osteopatia")!
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

export default function OsteopatiaSchioPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full bg-secondary">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopatia", href: "/osteopathy" },
            { label: `${city.name}`, href: `/osteopatia-${city.slug}` },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none leading-relaxed">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

          {/* INTRODUZIONE */}
          <div className="text-xl leading-relaxed mb-8 space-y-5">
            <p>
              L&apos;<strong>Osteopatia</strong> è una disciplina manuale che si
              basa sulla valutazione e sul trattamento delle disfunzioni che
              possono influire sull&apos;equilibrio e sulla mobilità del corpo.
            </p>

            <p>
              A <strong>Schio</strong>, il Dr. Maico Battistello offre{" "}
              <strong>trattamenti osteopatici personalizzati</strong> rivolti a
              persone di ogni età, con un approccio orientato alla ricerca delle
              cause funzionali che possono contribuire a dolore, rigidità e
              limitazioni del movimento.
            </p>

            <p>
              Attraverso una valutazione individuale e tecniche manuali adattate
              alle esigenze del paziente, il trattamento osteopatico mira a
              favorire il recupero della <strong>funzionalità</strong>, della{" "}
              <strong>mobilità articolare</strong> e del benessere generale
              della persona.
            </p>
          </div>

          {/* AREA GEOGRAFICA */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Osteopatia a Schio e nell&apos;Alto Vicentino
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
      <div className="my-12">
        <QuadrantCarousel
          items={[
            {
              title: "Trattamento Osteopatico",
              image: "/images/nuovaosteo1.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Manipolazione Cranio-Sacrale",
              image: "/images/nuovaosteo2.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Trattamento Viscerale",
              image: "/images/nuovaosteo3.jpg",
              link: `/osteopatia-${city.slug}`,
            },
            {
              title: "Osteopatia Cervicale",
              image: "/images/osteopatiacervicale.jpg",
              link: `/osteopatia-${city.slug}`,
            },
          ]}
        />
      </div>

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
