import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"
import Image from "next/image"
import AnimatedScrollElement from "@/components/animated-scroll-element"

export const metadata = {
  title: "Medicina Legale - Dr. Maico Battistello | Consulenze Specialistiche",
  description:
    "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie. Valutazione accurata del danno biologico e invalidità permanente.",
}

export default function LegalMedicinePage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Medicina Legale", href: "/medicina-legale" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Medicina Legale – Dr. Maico Battistello</h1>

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

          <h3 className="text-xl font-semibold mb-4">Servizi di Medicina Legale</h3>

          <ul className="list-disc pl-6 mb-6 text-lg space-y-2">
            <li>Consulenze tecniche di parte (CTP)</li>
            <li>Perizie medico-legali</li>
            <li>Valutazione del danno biologico</li>
            <li>Quantificazione dell'invalidità permanente</li>
            <li>Analisi documentazione clinica</li>
            <li>Supporto in contenziosi assicurativi</li>
            <li>Perizie per infortuni sul lavoro</li>
          </ul>

          <p className="text-lg mb-6">
            Per i dettagli sui prezzi e per prenotare una consulenza, contattami ora cliccando{" "}
            <Link href="/contacts" className="text-primary hover:text-primary-dark underline">
              qui
            </Link>
            .
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-semibold mb-3">📍 Consulenze Medicina Legale nelle principali città</h3>
            <p className="mb-4">Il Dr. Maico Battistello offre consulenze medico-legali anche presso:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Link href="/medicina-legale-padova" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Padova
              </Link>
              <Link href="/medicina-legale-vicenza" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Vicenza
              </Link>
              <Link href="/medicina-legale-schio" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Schio
              </Link>
              <Link href="/medicina-legale-malo" className="text-blue-600 hover:text-blue-800 underline font-medium">
                → Medicina Legale a Malo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Single Image Section */}
      <AnimatedScrollElement direction="up" delay={0.5}>
        <div className="my-12">
          <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[70%] h-[350px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/design-mode/medlegale.jpg.jpeg"
                  alt="Consulenza di Medicina Legale"
                  fill
                  className="object-cover object-[90%_center] md:object-center"
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
