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
      <div className="w-full">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozonoterapia + Osteopatia", href: "/ozonoterapia-osteopatia" },
          ]}
        />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
         <AnimatedScrollElement direction="up" delay={0.1}>
  <p className="text-lg mb-6">
    L'ossigeno-ozonoterapia e l'osteopatia sono due metodiche differenti che, in molti casi,
    possono essere utilizzate in modo complementare.
  </p>
  <p className="text-lg mb-6">
  Nella pratica clinica del Dr. Maico Battistello, l'associazione tra queste due discipline viene frequentemente presa in considerazione quando il disturbo presenta sia una componente <strong>infiammatoria</strong> sia alterazioni della <strong>mobilità articolare, muscolare o posturale</strong>. In questi casi, l'utilizzo complementare delle due metodiche può consentire un <strong>approccio più completo</strong> alle diverse componenti del problema.
  </p>
  <p className="text-lg mb-6">
    L'obiettivo è intervenire non solo sul sintomo doloroso, ma anche sui fattori biomeccanici
    che possono contribuire al mantenimento del problema nel tempo.
  </p>
</AnimatedScrollElement>

<AnimatedScrollElement direction="up" delay={0.2}>
  <h3 className="text-xl font-semibold mb-4">
    Quando può essere indicato un approccio integrato
  </h3>
  <ul className="list-disc pl-6 mb-6 space-y-2">
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

<AnimatedScrollElement direction="up" delay={0.3}>
  <p className="text-lg mb-4">
    La scelta del trattamento viene sempre definita dopo una <strong>valutazione individuale</strong>.
    In alcuni casi può essere indicata prevalentemente l'ossigeno-ozonoterapia, in altri l'osteopatia;
    in altri ancora può essere utile un <strong>approccio integrato</strong> tra le due metodiche.
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

          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
           <h3 className="text-xl font-semibold mb-3">Trattamento combinato Ozonoterapia + Osteopatia nelle sedi di:</h3>
              <p className="mb-4">
                Il Dr. Maico Battistello offre il trattamento combinato Ozonoterapia + Osteopatia anche presso:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Link href="/ozono-osteo-padova" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  → Ozono + Osteo a Padova
                </Link>
               <Link href="/ozono-osteo-marostica" className="text-blue-600 hover:text-blue-800 underline font-medium">
                 → Ozono + Osteo a Marostica
                </Link>
                <Link href="/ozono-osteo-schio" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  → Ozono + Osteo a Schio
                </Link>
                <Link href="/ozono-osteo-malo" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  → Ozono + Osteo a Malo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

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
