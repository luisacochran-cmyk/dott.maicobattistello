import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "padova")!
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

export default function OsteopatiaPadovaPage() {
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

          {/* INTRODUZIONE */}
          <div className="text-xl leading-relaxed mb-8 space-y-5">
            <p>
              L&apos;<strong>Osteopatia</strong> è una disciplina manuale che
              considera la persona nella sua globalità, valutando le relazioni
              tra apparato muscolo-scheletrico, postura e funzionalità del
              movimento.
            </p>

            <p>
              A <strong>Padova</strong>, il Dr. Maico Battistello offre{" "}
              <strong>trattamenti osteopatici personalizzati</strong> rivolti a
              persone che presentano dolori muscolo-scheletrici, limitazioni
              funzionali o disturbi correlati alla postura e alla mobilità
              articolare.
            </p>

            <p>
              Ogni percorso viene adattato alle esigenze del singolo paziente
              attraverso una valutazione individuale, con l&apos;obiettivo di
              favorire il recupero della <strong>funzionalità</strong>, dell&apos;
              <strong>equilibrio corporeo</strong> e del benessere generale della
              persona.
            </p>
          </div>

          {/* AREA GEOGRAFICA */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Un riferimento per Padova e l&apos;area padovana
            </h2>

            <p className="text-xl leading-relaxed">
              Lo studio di <strong>Padova</strong> è un riferimento anche per chi
              proviene da{" "}
              <strong>
                Abano Terme, Selvazzano Dentro, Albignasego, Vigonza e Cadoneghe
              </strong>
              , oltre che dagli altri comuni dell&apos;area padovana.
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
