"use client"

import AnimatedScrollElement from "@/components/animated-scroll-element"
import ClientTypewriter from "@/components/client-typewriter"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import QuadrantCarousel from "@/components/quadrant-carousel"

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
  <section className={`hero-section hero-section-mobile flex items-center pt-20 pb-10 md:pb-16 ${className}`}>
      <div className="container">
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[5%] text-left">
          <AnimatedScrollElement className="mb-3" direction="left" delay={0.1}>
            <p className="text-xl text-white font-medium">
              Dott. Maico Battistello
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement className="mb-5" direction="left" delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <ClientTypewriter
                text="Ozonoterapia, Osteopatia e Medicina Legale"
                delay={80}
              />
            </h1>
          </AnimatedScrollElement>

          <AnimatedScrollElement className="mb-7" direction="left" delay={0.5}>
            <p className="text-xl md:text-2xl text-white">
              Un approccio medico personalizzato per il dolore, l'infiammazione
              e il recupero della funzionalità.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-base sm:text-lg py-3 sm:py-6 hover-lift"
              >
                <Link href="/ozone-osteopathy">
                  Scopri l'approccio integrato
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-base sm:text-lg py-3 sm:py-6 hover-lift"
              >
                <Link href="/contacts" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Prenota una visita</span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  )
}
export function ConditionsSection() {
  const conditions = [
    "Cervicalgia",
    "Lombalgia",
    "Sciatalgia",
    "Ernia e protrusione discale",
    "Artrosi",
    "Tendiniti",
    "Dolore alla spalla",
    "Dolore al ginocchio",
    "Dolori muscolari e articolari",
    "Infiammazione cronica",
   "Fibromialgia",
"Stanchezza persistente e riduzione della vitalità",

]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <AnimatedScrollElement
          className="mb-10 text-center"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl font-bold mb-4">
            Per quali disturbi può essere utile una valutazione?
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Il dolore e la limitazione funzionale possono avere origini
            differenti. Una valutazione medica permette di comprendere il
            quadro della persona e individuare il percorso più appropriato.
          </p>
        </AnimatedScrollElement>

      <AnimatedScrollElement direction="up" delay={0.3}>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {conditions.map((condition) => (
      <div
        key={condition}
        className="bg-gradient-to-br from-white to-blue-50/60 border border-blue-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 ease-out px-5 py-4 text-center"
      >
        <span className="text-gray-800 font-medium text-base leading-snug">
          {condition}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-6 flex justify-center">
    <div className="bg-gradient-to-br from-white to-blue-50/60 border border-blue-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 ease-out px-8 py-4 text-center min-w-[220px]">
      <span className="text-blue-700 font-semibold text-base tracking-wide">
        … e molto altro
      </span>
    </div>
  </div>
</AnimatedScrollElement>
      </div>
    </section>
  )
}
export function TreatmentsSection() {
  return (
    <section className="py-16">
      <div className="container px-0 md:px-4">
        <AnimatedScrollElement className="mb-8 text-center px-4" direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold mb-6">Un approccio costruito sulla persona</h2>
       <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
  Quando il dolore, la limitazione funzionale o altri disturbi persistono nel tempo, applicare sempre lo stesso trattamento raramente rappresenta la soluzione migliore.

  <br /><br />

  Ogni persona presenta una storia clinica, sintomi ed esigenze differenti. Per questo motivo, ogni percorso inizia con una valutazione medica approfondita, finalizzata a comprendere il problema nella sua globalità prima di individuare il trattamento più appropriato.

  <br /><br />

  A seconda del quadro clinico possono essere impiegate l'Ozonoterapia, l'Osteopatia oppure la loro integrazione. Quando indicato, il percorso può essere integrato con strategie mirate sullo stile di vita e ulteriori indicazioni personalizzate, sempre nel rispetto delle esigenze cliniche della persona.
</p>
        </AnimatedScrollElement>
        <AnimatedScrollElement direction="up" delay={0.3}>
          <QuadrantCarousel
            items={[
              {
                title: "Ozonoterapia + Osteopatia",
                image: "/images/homeozono.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Osteopatia",
                image: "/images/homeosteo.jpg",
                link: "/osteopathy",
              },
              {
                title: "Ozonoterapia",
                image: "/images/homeozonosteo.jpg",
                link: "/ozone-therapy",
              },
            ]}
            showTitles={true}
          />
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function SubtitleSection() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container">
        <AnimatedScrollElement direction="up" delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
           Il Dott. Maico Battistello
          </h2>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function DescriptionSection() {
  return (
    <section className="py-12">
      <div className="container">
        <AnimatedScrollElement className="mb-8" direction="up" delay={0.1}>
         <p className="text-center text-lg max-w-3xl mx-auto leading-relaxed">
  Laureato in Medicina e Chirurgia e specializzato in Medicina Legale, il Dott. Maico Battistello integra competenze mediche con l’Ozonoterapia e l’Osteopatia per costruire percorsi terapeutici personalizzati.
  <br /><br />

  Ogni scelta nasce da una valutazione clinica approfondita e dall'ascolto della persona, con l'obiettivo di individuare il trattamento più appropriato in base alle esigenze del singolo paziente.
</p>
        </AnimatedScrollElement>
        <AnimatedScrollElement className="text-center" direction="up" delay={0.3}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift">
           <Link href="/about-me">Conosci il Dott. Battistello</Link>
          </Button>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function AdvancedTherapySection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4 md:px-4">
        <AnimatedScrollElement
          className="text-center max-w-4xl mx-auto"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl font-bold mb-6">
            Non esiste un trattamento giusto per tutti.
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            Dolore, infiammazione e limitazione funzionale possono presentarsi
            in modo diverso da persona a persona. La visita permette di valutare
            il quadro clinico e orientare il percorso terapeutico in modo mirato.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover-lift"
          >
            <Link href="/contacts" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Prenota una visita</span>
            </Link>
          </Button>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}
export function LocationsSection() {
  const locations = [
    {
      name: "Marostica",
      href: "/ozonoterapia-marostica",
    },
    {
      name: "Schio",
      href: "/ozonoterapia-schio",
    },
    {
      name: "Malo",
      href: "/ozonoterapia-malo",
    },
    {
      name: "Padova",
      href: "/ozonoterapia-padova",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-4">
        <AnimatedScrollElement
          className="text-center"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl font-bold mb-4">Dove ricevo</h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Il Dott. Maico Battistello riceve a Marostica, Schio, Malo e Padova.
            Scegli la sede più comoda e scopri le informazioni dedicate a
            ciascun ambulatorio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
            {locations.map((location) => (
              <Link
                key={location.name}
                href={location.href}
               className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl px-6 py-5 font-semibold text-gray-800 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:-translate-y-1"
              >
                {location.name}
              </Link>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift"
          >
            <Link href="/contacts">Contatti e sedi</Link>
          </Button>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function FaqSection() {
  const faqs = [
    {
      question: "Come si svolge la prima visita?",
      answer:
        "La prima visita prevede la raccolta della storia clinica, l’ascolto dei sintomi e una valutazione medica del quadro complessivo. Solo successivamente viene individuato il percorso più appropriato.",
    },
    {
      question: "Ozonoterapia e Osteopatia vengono sempre utilizzate insieme?",
      answer:
        "No. In base alla valutazione clinica possono essere impiegate singolarmente oppure integrate, quando le condizioni e le esigenze della persona lo rendono indicato.",
    },
    {
      question: "In quali sedi riceve il Dott. Maico Battistello?",
      answer:
        "Il Dott. Maico Battistello riceve a Marostica, Schio, Malo e Padova. Le informazioni relative alle singole sedi sono disponibili nelle pagine dedicate.",
    },
    {
      question: "Come posso prenotare una visita?",
      answer:
        "È possibile richiedere un appuntamento attraverso la pagina Contatti, scegliendo la sede più comoda e utilizzando i recapiti disponibili.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-4">
        <AnimatedScrollElement
          className="text-center"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl font-bold mb-4">Domande frequenti</h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Alcune informazioni utili per comprendere come si svolge la
            valutazione e come richiedere un appuntamento.
          </p>

          <div className="max-w-4xl mx-auto space-y-4 text-left">
            {faqs.map((faq) => (
              <div
                key={faq.question}
              className="border border-blue-100 rounded-2xl bg-gradient-to-br from-white to-blue-50/60 px-6 py-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift"
            >
              <Link href="/contacts">Richiedi un appuntamento</Link>
            </Button>
          </div>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}
