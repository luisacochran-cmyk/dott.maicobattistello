import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"

export default function OsteopathyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="w-full bg-secondary">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopatia", href: "/osteopathy" },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6">Cos'è l'Osteopatia?</h2>

          <p className="text-lg mb-6">
            L'Osteopatia è una terapia sanitaria manuale che si avvicina alla persona malata nella sua totalità, cioè in
            maniera olistica. L'Osteopata esamina le strutture del corpo (colonna vertebrale, articolazioni, fasce
            muscolari, proiezioni viscerali e ossa craniche), cercando le principali aree di squilibrio
            posturale/articolare, tensione muscolo-legamentosa/fasciale, e con tecniche manipolative attente, adatte
            alle esigenze specifiche di ogni individuo, dall'anziano, al bambino, alla donna in gravidanza, ripristina
            queste aree, recuperando il corretto equilibrio posturale, l'equilibrio funzionale e il benessere fisico.
          </p>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="my-12">
        <QuadrantCarousel
          items={[
            {
              title: "Trattamento Osteopatico",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/osteopic.jpg-1DghIg2avBhDEuGOkg7IMcB61GdHay.jpeg",
              link: "/osteopathy",
            },
            {
              title: "Manipolazione Cranio-Sacrale",
              image: "/images/osteopatia1.jpg",
              link: "/osteopathy",
            },
            {
              title: "Trattamento Viscerale",
              image: "/images/osteopatia2.jpg",
              link: "/osteopathy",
            },
          ]}
        />
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
