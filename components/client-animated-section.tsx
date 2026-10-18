"use client";

import AnimatedScrollElement from "@/components/animated-scroll-element";
import ClientTypewriter from "@/components/client-typewriter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuadrantCarousel from "@/components/quadrant-carousel";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={`hero-section hero-section-mobile flex items-center pt-28 md:pt-32 pb-10 md:pb-16 ${className}`}
    >
      <div className="container">
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[5%] text-left">
          <h1 className="grid text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            {/* 1. Titolo completo: lo legge Google e tiene il posto, ma è trasparente */}
            <span className="col-start-1 row-start-1 text-transparent select-none">
              Ozonoterapia e Osteopatia: due discipline, un unico percorso
            </span>

            {/* 2. Effetto macchina da scrivere, sovrapposto nello stesso punto */}
            <span aria-hidden="true" className="col-start-1 row-start-1">
              <ClientTypewriter
                text="Ozonoterapia e Osteopatia: due discipline, un unico percorso"
                delay={80}
              />
            </span>
          </h1>

          <AnimatedScrollElement className="mb-8" direction="left" delay={0.3}>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Un approccio personalizzato al dolore, all'infiammazione e al
              recupero della funzionalità.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 rounded-full px-8 bg-[#0066CC] hover:bg-[#0057AD] text-white font-semibold text-base sm:text-lg shadow-lg"
              >
                <Link href="/contatti" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Prenota una visita</span>
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 rounded-full px-8 border border-white/70 bg-white/10 text-white hover:bg-white hover:text-[#0066CC] font-semibold text-base sm:text-lg backdrop-blur-sm"
              >
                <Link href="/ozonoterapia-osteopatia">
                  Scopri l'approccio integrato
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  );
}

export function ConditionsSection() {
  const groups = [
    {
      title: "Colonna e schiena",
      items: [
        "Cervicalgia",
        "Lombalgia",
        "Sciatalgia",
        "Ernia e protrusione discale",
      ],
    },
    {
      title: "Articolazioni e movimento",
      items: [
        "Artrosi",
        "Tendiniti",
        "Dolore alla spalla",
        "Dolore al ginocchio",
        "Dolori muscolari e articolari",
      ],
    },
    {
      title: "Dolore e condizioni persistenti",
      items: [
        "Infiammazione cronica",
        "Fibromialgia",
        "Stanchezza persistente e riduzione della vitalità",
      ],
    },
  ];

  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-[#F0EAE0] via-[#F3EDE3] to-[#FAF8F4]">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <AnimatedScrollElement
            className="mb-8 md:mb-12 max-w-3xl"
            direction="up"
            delay={0.1}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
              Ambiti di valutazione
            </p>
            <h2 className="text-[2rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
              Per quali disturbi può essere utile una valutazione
              <span className="text-[#0066CC]">?</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600">
              Il dolore e la limitazione funzionale possono avere origini
              differenti. Una valutazione medica permette di comprendere il
              quadro della persona e individuare il percorso più appropriato.
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-300/80">
              {groups.map((group, index) => (
                <div
                  key={group.title}
                  className={`py-6 md:py-8 ${
                    index === 0
                      ? "md:pr-8"
                      : "border-t border-slate-300/80 md:border-t-0 md:border-l md:px-8"
                  }`}
                >
                  <h3 className="mb-4 text-lg md:text-xl font-semibold text-[#0066CC]">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5 text-base md:text-lg leading-relaxed text-slate-700">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/60"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  );
}

export function TreatmentsSection() {
  return (
    <section className="bg-white">
      <div className="bg-gradient-to-b from-[#FAF8F4] via-[#FFFFFF] to-[#EDF4F9] pt-12 pb-8 md:pt-16 md:pb-10">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
            <AnimatedScrollElement direction="left" delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
                L&apos;approccio integrato
              </p>
              <h2 className="text-[2rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
                Un approccio costruito sulla persona
                <span className="text-[#0066CC]">.</span>
              </h2>
            </AnimatedScrollElement>

            <AnimatedScrollElement direction="up" delay={0.2}>
              {/* Le parole chiave sono in <strong>: grassetto più scuro del testo, non blu */}
              <div className="space-y-5 text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                <p>
                  L&apos;<strong>ozonoterapia</strong> può essere indicata per
                  intervenire sul <strong>dolore</strong> e sui{" "}
                  <strong>processi infiammatori</strong>; l&apos;
                  <strong>osteopatia</strong> si concentra sugli{" "}
                  <strong>aspetti funzionali e posturali</strong> che possono
                  contribuire al disturbo.
                </p>

                <p>
                  Il tratto distintivo del Dott. Maico Battistello è l&apos;
                  <strong>integrazione di queste due discipline</strong>: non
                  l&apos;una o l&apos;altra, ma un{" "}
                  <strong>unico percorso</strong> in cui ozonoterapia e
                  osteopatia si completano, costruito sulla valutazione clinica
                  e sulle esigenze di ciascun paziente.
                </p>

                <p className="border-l-2 border-[#0066CC]/30 pl-5">
                  Il percorso comprende anche l&apos;
                  <strong>attenzione all&apos;alimentazione</strong>, con
                  l&apos;elaborazione di{" "}
                  <strong>schede nutrizionali personalizzate</strong> affiancate
                  dalla <strong>nutraceutica</strong>, in base alle necessità
                  del paziente.
                </p>
              </div>
            </AnimatedScrollElement>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#EDF4F9] via-[#EAF2F8] to-[#E2EDF6] py-7 md:py-10">
        <div className="container px-4">
          <AnimatedScrollElement direction="up" delay={0.3}>
            <QuadrantCarousel
              items={[
                {
                  title: "Approccio integrato",
                  image: "/images/homeozono.jpg",
                  link: "/ozonoterapia-osteopatia",
                },
                {
                  title: "Osteopatia nel percorso terapeutico",
                  image: "/images/homeosteo.jpg",
                  link: "/osteopatia",
                },
                {
                  title: "Ozonoterapia nel percorso terapeutico",
                  image: "/images/homeozonosteo.jpg",
                  link: "/ozonoterapia",
                },
              ]}
              showTitles={true}
            />
          </AnimatedScrollElement>
        </div>
      </div>

      <div className="relative overflow-hidden bg-gradient-to-b from-[#E2EDF6] via-[#DDEAF4] to-[#F0F4F7] py-10 md:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-40 h-96 w-96 rounded-full bg-white/35 blur-3xl"
        />
        <div className="container relative px-4">
          <div className="mx-auto max-w-6xl grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <AnimatedScrollElement direction="left" delay={0.1}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
                Dove riceve
              </p>
              <h2 className="max-w-lg text-[2rem] font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                La cura inizia da una valutazione attenta
                <span className="text-[#0066CC]">.</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
                Ozonoterapia + Osteopatia · Medicina Legale
              </p>
              <Link
                href="/contatti"
                className="mt-5 inline-flex items-center border-b border-[#0066CC]/40 pb-2 font-semibold text-[#0066CC] transition-colors hover:border-[#0066CC]"
              >
                Scopri le sedi e i contatti
              </Link>
            </AnimatedScrollElement>
            <AnimatedScrollElement direction="right" delay={0.2}>
              <div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-white/70 shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] backdrop-blur-sm md:p-9">
                <div className="grid grid-cols-2 gap-x-5 md:gap-x-9">
                  {[
                    { name: "Marostica", href: "/ozono-osteo-marostica" },
                    { name: "Schio", href: "/ozono-osteo-schio" },
                    { name: "Malo", href: "/ozono-osteo-malo" },
                    { name: "Padova", href: "/ozono-osteo-padova" },
                  ].map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="group flex min-h-24 items-center border-b border-[#D4DFE9] py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] sm:min-h-28"
                      aria-label={`Ozonoterapia e Osteopatia a ${city.name}`}
                    >
                      <span className="text-xl font-medium tracking-tight text-slate-800 transition-colors group-hover:text-[#0066CC] sm:text-2xl md:text-[1.7rem]">
                        {city.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedScrollElement>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DescriptionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F4F7] via-[#FFFFFF] to-[#F0EAE0] pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,390px)_1fr] gap-6 lg:gap-12 items-center">
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
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-5">
              Il Dott. Maico Battistello
            </h2>
            <div className="space-y-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                Laureato in Medicina e Chirurgia e specializzato in Medicina
                Legale, il Dott. Maico Battistello integra competenze mediche
                con l’Ozonoterapia e l’Osteopatia per costruire percorsi
                terapeutici personalizzati.
              </p>
              <p>
                Ogni scelta nasce da una valutazione clinica approfondita e
                dall&apos;ascolto della persona, con l&apos;obiettivo di
                individuare il trattamento più appropriato in base alle esigenze
                del singolo paziente.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-[#0066CC] hover:bg-[#0057AD] text-white font-semibold text-base px-9 h-12 rounded-full"
            >
              <Link href="/chi-sono">Chi sono</Link>
            </Button>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  );
}

export function AdvancedTherapySection() {
  return (
    // Continua il crema delle FAQ e sfuma dolcemente verso il bianco da cui parte il footer
    <section className="bg-gradient-to-b from-[#EEE5D9] via-[#F6F1EA] to-[#FFFFFF] pt-2 pb-16 md:pt-4 md:pb-24">
      <div className="container px-4">
        <AnimatedScrollElement
          className="mx-auto max-w-3xl"
          direction="up"
          delay={0.1}
        >
          <div className="rounded-[2.5rem] bg-white/85 p-8 text-center ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] md:p-12">
            <h2 className="text-[1.75rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
              Non esiste un trattamento giusto per tutti
              <span className="text-[#0066CC]">.</span>
            </h2>
            <div
              className="mx-auto mt-5 mb-6 h-1 w-16 rounded-full bg-[#E8CFB0]"
              aria-hidden="true"
            />
            <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
              Dolore, infiammazione e limitazione funzionale possono presentarsi
              in modo diverso da persona a persona. La visita permette di
              valutare il quadro clinico e orientare il percorso terapeutico in
              modo mirato.
            </p>
            <Link
              href="/contatti"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#0066CC] px-8 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#0057AD]"
            >
              <Calendar className="h-5 w-5" />
              <span>Prenota una visita</span>
            </Link>
          </div>
        </AnimatedScrollElement>
      </div>
    </section>
  );
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
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-4">
        <AnimatedScrollElement
          className="text-center"
          direction="up"
          delay={0.1}
        >
          <h2 className="text-3xl font-bold mb-4">Ozonoterapia + Osteopatia</h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Scopri l’approccio integrato del Dott. Maico Battistello, che
            combina ossigeno-ozonoterapia e osteopatia quando indicato dalla
            valutazione clinica.
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
  );
}

export function FaqSection() {
  const faqs = [
    {
      question: "Come si svolge la prima visita?",
      answer:
        "La prima visita prevede la raccolta della storia clinica, l’ascolto dei sintomi e una valutazione medica del quadro complessivo. Solo successivamente viene individuato il percorso più appropriato.",
    },
    {
      question:
        "Come vengono integrate Ozonoterapia e Osteopatia nel percorso di cura?",
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
  ];

  return (
    // Resta crema fino in fondo: prosegue senza stacchi nella sezione successiva
    <section className="bg-gradient-to-b from-[#F0EAE0] via-[#EEE5D9] to-[#EEE5D9] pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:gap-12">
          <AnimatedScrollElement direction="left" delay={0.1}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
              Informazioni utili
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Domande
              <br className="hidden md:block" /> frequenti
              <span className="text-[#0066CC]">.</span>
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-slate-600">
              Alcune informazioni utili per comprendere come si svolge la
              valutazione e come richiedere un appuntamento.
            </p>
          </AnimatedScrollElement>
          <AnimatedScrollElement direction="up" delay={0.2}>
            <div className="border-t border-slate-300/80">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-slate-300/80 py-1"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                    <span className="text-lg md:text-xl font-medium leading-snug text-slate-900">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0066CC]/30 text-xl font-light text-[#0066CC] transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-xl pb-7 pr-10 text-base md:text-lg leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  );
}
