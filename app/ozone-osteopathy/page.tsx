import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import QuadrantCarousel from "@/components/quadrant-carousel"

export const metadata = {
  title: "Ozonoterapia e Osteopatia - Dr. Maico Battistello",
  description:
    "Approccio integrato tra ossigeno-ozonoterapia e osteopatia per disturbi muscolo-scheletrici, dolore e recupero funzionale.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia-osteopatia",
  },
}

export default function OzoneOsteopathyPage() {
  return (
    <div className="pt-20">
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            {
              label: "Ozonoterapia + Osteopatia",
              href: "/ozonoterapia-osteopatia",
            },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none">

          {/* INTRODUZIONE */}
          <AnimatedScrollElement direction="up" delay={0.1}>
            <div className="text-xl mb-8 space-y-5">
              <p>
                <strong>L&apos;ossigeno-ozonoterapia e l&apos;osteopatia</strong>{" "}
                sono due metodiche differenti che, in molti casi, possono essere
                utilizzate in modo complementare.
              </p>

              <p>
                Nella pratica clinica del Dr. Maico Battistello, l&apos;associazione
                tra queste due discipline viene frequentemente presa in
                considerazione quando il disturbo presenta sia una componente{" "}
                <strong>infiammatoria</strong> sia alterazioni della{" "}
                <strong>
                  mobilità articolare, muscolare o posturale
                </strong>
                . In questi casi, l&apos;utilizzo complementare delle due
                metodiche può consentire un{" "}
                <strong>approccio più completo</strong> alle diverse componenti
                del problema.
              </p>

              <p>
                L&apos;obiettivo è intervenire non solo sul sintomo doloroso, ma
                anche sui fattori biomeccanici che possono contribuire al
                mantenimento del problema nel tempo.
              </p>
            </div>
          </AnimatedScrollElement>

          {/* INDICAZIONI */}
          <AnimatedScrollElement direction="up" delay={0.2}>
            <h3 className="text-2xl font-semibold mb-5">
              Quando può essere indicato un approccio integrato
            </h3>

            <ul className="list-disc pl-6 mb-8 text-lg space-y-3">
              <li>Cervicalgia e lombalgia</li>
              <li>Ernie e protrusioni discali</li>
              <li>Sciatalgia e dolore radicolare</li>
              <li>Artrosi e problematiche articolari</li>
              <li>Contratture muscolari persistenti</li>
              <li>Limitazioni della mobilità</li>
              <li>Disturbi muscolo-scheletrici cronici</li>
              <li>Dolore correlato a sovraccarichi posturali</li>
            </ul>
          </AnimatedScrollElement>

          {/* VALUTAZIONE */}
          <AnimatedScrollElement direction="up" delay={0.3}>
            <p className="text-lg mb-8">
              La scelta del trattamento viene sempre definita dopo una{" "}
              <strong>valutazione individuale</strong>. In alcuni casi può essere
              indicata prevalentemente l&apos;ossigeno-ozonoterapia, in altri
              l&apos;osteopatia; in altri ancora può essere utile un{" "}
              <strong>approccio integrato</strong> tra le due metodiche.
            </p>
          </AnimatedScrollElement>

          {/* CTA */}
          <AnimatedScrollElement direction="up" delay={0.4}>
            <div className="my-10 text-center">
              <Button
                asChild
                className="h-auto bg-primary hover:bg-primary-dark text-white text-lg font-semibold px-8 py-4 rounded-lg hover-lift"
              >
                <Link
                  href="/contacts"
                  className="flex items-center justify-center gap-3 no-underline"
                >
                  <Calendar className="h-6 w-6" />
                  <span className="text-lg font-semibold">
                    Prenota un Appuntamento
                  </span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>

          {/* SEDI */}
          <AnimatedScrollElement direction="up" delay={0.45}>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h3 className="text-2xl font-semibold mb-4">
                Trattamento combinato Ozonoterapia + Osteopatia nelle sedi di:
              </h3>

              <p className="text-lg mb-5">
                Il Dr. Maico Battistello offre il trattamento combinato
                Ozonoterapia + Osteopatia anche presso:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <Link
                  href="/ozono-osteo-padova"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  → Ozono + Osteo a Padova
                </Link>

                <Link
                  href="/ozono-osteo-marostica"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  → Ozono + Osteo a Marostica
                </Link>

                <Link
                  href="/ozono-osteo-schio"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  → Ozono + Osteo a Schio
                </Link>

                <Link
                  href="/ozono-osteo-malo"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  → Ozono + Osteo a Malo
                </Link>
              </div>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>

      {/* CAROUSEL */}
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

      <ContactForm />
    </div>
  )
}
