import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Link from "next/link"

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
            <strong> maniera olistica</strong>. L'Osteopata esamina le <strong>strutture del corpo</strong> (colonna
            vertebrale, articolazioni, fasce muscolari, proiezioni viscerali e ossa craniche), cercando le principali
            aree di squilibrio posturale/articolare, tensione muscolo-legamentosa/fasciale, e con{" "}
            <strong>tecniche manipolative attente</strong>, adatte alle esigenze specifiche di ogni individuo,
            dall'anziano, al bambino, alla donna in gravidanza, ripristina queste aree, recuperando il corretto
            equilibrio posturale, l'equilibrio funzionale e il benessere fisico.
          </p>
        </div>
      </div>

      {/* Cities Links Section */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold mb-3">📍 Trattamenti Osteopatici nelle principali città</h3>
          <p className="mb-4">Il Dr. Maico Battistello offre trattamenti osteopatici anche presso:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/osteopatia-padova" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Osteopatia a Padova
            </Link>
            <Link href="/osteopatia-vicenza" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Osteopatia a Vicenza
            </Link>
            <Link href="/osteopatia-schio" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Osteopatia a Schio
            </Link>
            <Link href="/osteopatia-malo" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Osteopatia a Malo
            </Link>
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
              link: "/osteopathy",
            },
            {
              title: "Manipolazione Cranio-Sacrale",
              image: "/images/nuovaosteo2.jpg",
              link: "/osteopathy",
            },
            {
              title: "Trattamento Viscerale",
              image: "/images/nuovaosteo3.jpg",
              link: "/osteopathy",
            },
            {
              title: "Osteopatia Cervicale",
              image: "/images/osteopatiacervicale.jpg",
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
