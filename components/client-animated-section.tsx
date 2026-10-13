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
      
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
  <ClientTypewriter
    text="Ozonoterapia e Osteopatia: due discipline, un unico percorso"
    delay={80}
  />
</h1>

     <AnimatedScrollElement className="mb-7" direction="left" delay={0.5}>
  <p className="text-xl md:text-2xl text-white">
    Un approccio personalizzato al dolore, all'infiammazione e al recupero della funzionalità.
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
                <Link href="/contatti" className="flex items-center gap-2">
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
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4">
        <AnimatedScrollElement
          className="mb-12 text-center"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Per quali disturbi può essere utile una valutazione?
          </h2>

         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Il dolore e la limitazione funzionale possono avere origini
            differenti. Una valutazione medica permette di comprendere il
            quadro della persona e individuare il percorso più appropriato.
          </p>
        </AnimatedScrollElement>

        <AnimatedScrollElement direction="up" delay={0.3}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">

            <div className="md:px-8">
              <h3 className="text-xl font-semibold text-primary mb-5">
                Colonna e schiena
              </h3>

             <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p>Cervicalgia</p>
                <p>Lombalgia</p>
                <p>Sciatalgia</p>
                <p>Ernia e protrusione discale</p>
              </div>
            </div>

            <div className="md:px-8 md:border-l md:border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-5">
                Articolazioni e movimento
              </h3>

             <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p>Artrosi</p>
                <p>Tendiniti</p>
                <p>Dolore alla spalla</p>
                <p>Dolore al ginocchio</p>
                <p>Dolori muscolari e articolari</p>
              </div>
            </div>

            <div className="md:px-8 md:border-l md:border-gray-200">
              <h3 className="text-xl font-semibold text-primary mb-5">
                Dolore e condizioni persistenti
              </h3>

            <div className="space-y-3 text-lg text-gray-700 leading-relaxed">
                <p>Infiammazione cronica</p>
                <p>Fibromialgia</p>
                <p>Stanchezza persistente e riduzione della vitalità</p>
              </div>
            </div>

          </div>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function TreatmentsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4">
        <AnimatedScrollElement
          className="text-center max-w-3xl mx-auto mb-12"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Un approccio costruito sulla persona
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-5">
            L&apos;ozonoterapia può essere indicata per intervenire sul dolore
            e sui processi infiammatori; l&apos;osteopatia si concentra invece
            sugli aspetti funzionali e posturali che possono contribuire al
            disturbo. Sono discipline diverse, con modalità e ambiti di
            intervento distinti, che possono essere utilizzate singolarmente
            oppure integrate quando la valutazione clinica ne evidenzia
            l&apos;indicazione.
          </p>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            L&apos;obiettivo non è applicare un trattamento prestabilito, ma
            individuare il percorso più appropriato per la singola persona,
            tenendo conto del quadro clinico, della funzionalità e delle
            esigenze individuali.
          </p>
        </AnimatedScrollElement>

        <AnimatedScrollElement direction="up" delay={0.3}>
          <QuadrantCarousel
            items={[
              {
                title: "Approccio integrato",
                image: "/images/homeozono.jpg",
                link: "/ozone-osteopathy",
              },
              {
                title: "Osteopatia nel percorso terapeutico",
                image: "/images/homeosteo.jpg",
                link: "/osteopathy",
              },
              {
                title: "Ozonoterapia nel percorso terapeutico",
                image: "/images/homeozonosteo.jpg",
                link: "/ozone-therapy",
              },
            ]}
            showTitles={true}
          />
        </AnimatedScrollElement>

       
        
        <div className="relative mt-20 md:mt-28 overflow-hidden rounded-[2rem] bg-[#F5F3ED] px-6 py-12 md:px-14 md:py-16">
          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#0066CC]/10" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">Presenza sul territorio</p>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Dove riceve<span className="text-[#0066CC]">.</span></h3>
              <p className="mt-5 max-w-sm text-base md:text-lg leading-relaxed text-slate-600">
                Ozonoterapia, osteopatia e medicina legale: scopri le sedi e i servizi disponibili sul territorio.
              </p>
              <Link href="/contatti" className="group mt-8 inline-flex items-center gap-3 border-b border-[#0066CC]/40 pb-2 font-semibold text-[#0066CC] transition-all hover:gap-5 hover:border-[#0066CC]">
                Sedi e contatti <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 self-center">
              {["Marostica", "Schio", "Malo", "Padova"].map((city, index) => (
                <div key={city} className="group flex items-baseline gap-4 border-b border-slate-300/70 py-5 transition-colors hover:border-[#0066CC]">
                  <span className="text-xs tabular-nums tracking-widest text-[#0066CC]">0{index + 1}</span>
                  <span className="text-2xl md:text-[1.75rem] font-medium tracking-tight text-slate-800 transition-transform duration-300 group-hover:translate-x-1">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export function DescriptionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F3ED] py-20 md:py-28">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,390px)_1fr] gap-9 lg:gap-16 items-center">
          <AnimatedScrollElement direction="left" delay={0.1}>
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
              <Image
                src="/images/Ritratto%20del%20medico%20in%20clinica.png"
                alt="Dott. Maico Battistello, medico legale, osteopata e ozonoterapeuta"
                width={430}
                height={600}
                sizes="(max-width: 768px) 100vw, 390px"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedScrollElement>
          <AnimatedScrollElement direction="right" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-7">Il Dott. Maico Battistello</h2>
            <div className="space-y-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                Laureato in Medicina e Chirurgia e specializzato in Medicina Legale, il Dott. Maico Battistello integra competenze mediche con l’Ozonoterapia e l’Osteopatia per costruire percorsi terapeutici personalizzati.
              </p>
              <p>
                Ogni scelta nasce da una valutazione clinica approfondita e dall&apos;ascolto della persona, con l&apos;obiettivo di individuare il trattamento più appropriato in base alle esigenze del singolo paziente.
              </p>
            </div>
            <Button asChild size="lg" className="mt-9 bg-[#0066CC] hover:bg-[#0057AD] text-white font-semibold text-base px-9 h-12 rounded-full">
              <Link href="/chi-sono">Chi sono</Link>
            </Button>
          </AnimatedScrollElement>
        </div>
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
           className="bg-white text-primary hover:bg-gray-100 hover-lift text-lg px-8 h-12"
          >
            <Link href="/contatti" className="flex items-center gap-2">
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
       <h2 className="text-3xl font-bold mb-4">
  Ozonoterapia + Osteopatia
</h2>

<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
  Scopri l’approccio integrato del Dott. Maico Battistello, che combina
  ossigeno-ozonoterapia e osteopatia quando indicato dalla valutazione clinica.
</p>

<Button
  asChild
  size="lg"
  className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift"
>
 <Link href="/ozonoterapia-osteopatia">Scopri di più</Link>
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
  question: "Come vengono integrate Ozonoterapia e Osteopatia nel percorso di cura?",
  answer:
    "Quando clinicamente indicato, Ozonoterapia e Osteopatia possono essere integrate all’interno di un unico percorso, mettendo in relazione approcci differenti sulla base della valutazione complessiva della persona. Il trattamento viene quindi definito in modo personalizzato, in funzione del quadro clinico e delle specifiche esigenze.",
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
    <section className="bg-white py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <AnimatedScrollElement direction="left" delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">Informazioni utili</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Domande<br className="hidden md:block" /> frequenti<span className="text-[#0066CC]">.</span></h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-slate-600">
              Alcune informazioni utili per comprendere come si svolge la valutazione e come richiedere un appuntamento.
            </p>
          </AnimatedScrollElement>
          <AnimatedScrollElement direction="up" delay={0.2}>
            <div className="border-t border-slate-300/80">
              {faqs.map((faq, index) => (
                <details key={faq.question} className="group border-b border-slate-300/80 py-1" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="text-lg md:text-xl font-medium leading-snug text-slate-900">{faq.question}</span>
                    <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0066CC]/30 text-xl font-light text-[#0066CC] transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-xl pb-7 pr-10 text-base md:text-lg leading-relaxed text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  )
}
