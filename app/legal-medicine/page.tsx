import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import AnimatedScrollElement from "@/components/animated-scroll-element"

export default function LegalMedicinePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Medicina Legale a Padova", href: "/legal-medicine" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-6">In cosa consiste la consulenza medico legale?</h2>

          <p className="text-lg mb-6">
            La consulenza specialistica e la relazione medico-legale vengono fornite dopo un esame medico diretto della
            parte lesa e un'<strong>attenta revisione</strong> dell'intero processo clinico, diagnostico e terapeutico
            intrapreso dall'individuo.
          </p>

          <p className="text-lg mb-6">
            Lo scopo sia della consulenza che della relazione è fornire una <strong>valutazione accurata</strong> delle
            menomazioni derivanti da <strong>incidenti, lesioni o malattie</strong>.
          </p>

          <p className="text-lg mb-6">
            Per i dettagli sui prezzi, contattami ora cliccando{" "}
            <Link href="/contacts" className="text-primary hover:text-primary-dark underline">
              qui
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Single Image Section */}
      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="my-12">
          <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[70%] h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medlegale.jpg-RS0IvBU5iZfMrAp9XVe8gOEYtCR5sP.jpeg"
                  alt="Consulenza di Medicina Legale"
                  fill
                  className="object-cover object-[55%_center] md:object-center"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white text-center backdrop-blur-sm rounded-b-xl">
                  <h3 className="text-lg font-semibold">Consulenza di Medicina Legale</h3>
                  <p className="text-sm mt-1">Valutazione professionale e relazioni medico-legali specialistiche</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedScrollElement>
    </div>
  )
}
