import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "malo")!
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

export default function OsteopatiaMaloPage() {
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
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <h2 className="text-2xl font-semibold mb-6">{seoData.h2}</h2>

          <p className="text-lg mb-6">
            L'Osteopatia è una terapia sanitaria manuale che si avvicina alla persona malata nella sua totalità, cioè in
            <strong> maniera olistica</strong>. L'Osteopata esamina le <strong>strutture del corpo</strong> (colonna
            vertebrale, articolazioni, fasce muscolari, proiezioni viscerali e ossa craniche), cercando le principali
            aree di squilibrio posturale/articolare, tensione muscolo-legamentosa/fasciale, e con{" "}
            <strong>tecniche manipolative attente</strong>, adatte alle esigenze specifiche di ogni individuo,
            dall'anziano, al bambino, alla donna in gravidanza, ripristina queste aree, recuperando il corretto
            equilibrio posturale, l'equilibrio funzionale e il benessere fisico. A <strong>Malo</strong>, il Dr. Maico
            Battistello opera presso il Centro Medico Medicalis, offrendo trattamenti osteopatici mirati e
            personalizzati per ogni esigenza terapeutica.
          </p>
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
