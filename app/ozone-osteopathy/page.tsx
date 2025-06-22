import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import AnimatedLink from "@/components/animated-link"
import QuadrantCarousel from "@/components/quadrant-carousel"

export default function OzoneOsteopathyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozonoterapia + Osteopatia", href: "/ozone-osteopathy" },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <AnimatedScrollElement direction="up" delay={0.1}>
            <p className="text-lg mb-6">
              Attraverso anni di esperienza in{" "}
              <AnimatedLink href="/osteopathy" className="text-primary">
                Terapia Osteopatica
              </AnimatedLink>{" "}
              e{" "}
              <AnimatedLink href="/ozone-therapy" className="text-primary">
                Ozonoterapia
              </AnimatedLink>
              , il Dr. Maico Battistello ha sviluppato un <strong>trattamento combinato unico</strong>, ottenendo
              risultati clinici che nessuna delle due discipline da sola può fornire.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.2}>
            <h3 className="text-xl font-semibold mb-4">Le condizioni che ne beneficiano maggiormente includono:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Disturbi spinali (cervicali/lombari) da ernie discali, artrosi, traumi</li>
              <li>Dolore radicolare dovuto a ernie discali (irradiato a braccia o gambe)</li>
              <li>Artrosi dell'anca e del ginocchio (coxartrosi e gonartrosi)</li>
            </ul>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.3}>
            <p className="text-lg mb-4">
              Le proprietà naturali <strong>antinfiammatorie</strong> e miorilassanti dell'{" "}
              <AnimatedLink href="/ozone-therapy" className="text-primary">
                Ozonoterapia
              </AnimatedLink>
              , combinate con il riallineamento posturale della{" "}
              <AnimatedLink href="/osteopathy" className="text-primary">
                Manipolazione Osteopatica
              </AnimatedLink>
              , producono risultati eccezionali, specialmente per condizioni croniche che impattano la vita quotidiana.
            </p>
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
                link: "/ozone-osteopathy",
              },
              {
                title: "Osteopatia Cervicale",
                image: "/images/osteopatiacervicale2.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Consulenza Specialistica",
                image: "/images/nuovaozono2.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Osteopatia Lombare",
                image: "/images/oslombare.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Ozonoterapia Spalla",
                image: "/images/ozspalla.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Osteopatia Spalla",
                image: "/images/osspalla.jpg",
                link: "/ozone-osteopathy",
              },
            ]}
          />
        </div>
      </AnimatedScrollElement>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
