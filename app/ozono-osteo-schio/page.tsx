import type { Metadata } from "next"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import AnimatedLink from "@/components/animated-link"
import QuadrantCarousel from "@/components/quadrant-carousel"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"

const city = cities.find((c) => c.slug === "schio")!
const service = services.find((s) => s.slug === "ozono-osteo")!
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

export default function OzonoOsteoSchioPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozonoterapia + Osteopatia", href: "/ozone-osteopathy" },
            { label: `${city.name}`, href: `/ozono-osteo-${city.slug}` },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{seoData.h1}</h1>

          <AnimatedScrollElement direction="up" delay={0.1}>
            <p className="text-lg mb-6">
              A <strong>{city.name}</strong>, {service.longDescription} Le proprietà naturali{" "}
              <strong>antinfiammatorie</strong> e miorilassanti dell'{" "}
              <AnimatedLink href="/ozone-therapy" className="text-primary">
                Ozonoterapia
              </AnimatedLink>
              , combinate con il riallineamento posturale della{" "}
              <AnimatedLink href="/osteopathy" className="text-primary">
                Manipolazione Osteopatica
              </AnimatedLink>
              , producono risultati eccezionali nella provincia di <strong>{city.province}</strong>, specialmente per
              condizioni croniche che impattano la vita quotidiana.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.2}>
            <h3 className="text-xl font-semibold mb-4">
              Le condizioni che ne beneficiano maggiormente a {city.name} includono:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Disturbi spinali (cervicali/lombari) da ernie discali, artrosi, traumi</li>
              <li>Dolore radicolare dovuto a ernie discali (irradiato a braccia o gambe)</li>
              <li>Artrosi dell'anca e del ginocchio (coxartrosi e gonartrosi)</li>
            </ul>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.4}>
            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift">
                <Link href="/contacts" className="flex items-center gap-2 no-underline">
                  <Calendar className="h-5 w-5" />
                  <span>Prenota un Appuntamento</span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>

      {/* Image Carousel Section */}
      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="my-12">
          <QuadrantCarousel
            items={[
              {
                title: "Ozonoterapia Cervicale",
                image: "/images/ozcervicale.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Cervicale",
                image: "/images/osteopatiacervicale2.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Consulenza Specialistica",
                image: "/images/nuovaozono2.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Lombare",
                image: "/images/oslombare.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Ozonoterapia Spalla",
                image: "/images/ozspalla.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
              {
                title: "Osteopatia Spalla",
                image: "/images/osspalla.jpg",
                link: `/ozono-osteo-${city.slug}`,
              },
            ]}
          />
        </div>
      </AnimatedScrollElement>

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
