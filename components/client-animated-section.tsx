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
    <section className={`hero-section hero-section-mobile flex items-center pt-20 ${className}`}>
      <div className="container">
        <div className="max-w-xl md:max-w-2xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[5%] text-left">
          <AnimatedScrollElement className="mb-3" direction="left" delay={0.1}>
            <p className="text-xl text-white font-medium">Nuova innovazione terapeutica:</p>
          </AnimatedScrollElement>

          <AnimatedScrollElement className="mb-5" direction="left" delay={0.3}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <ClientTypewriter text="Ozonoterapia & Osteopatia" delay={100} />
            </h1>
          </AnimatedScrollElement>

          <AnimatedScrollElement className="mb-7" direction="left" delay={0.5}>
            <p className="text-xl md:text-2xl text-white">
              <ClientTypewriter text="Unite per un trattamento innovativo" delay={80} />
            </p>
          </AnimatedScrollElement>

          <AnimatedScrollElement direction="up" delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-lg py-6 hover-lift"
              >
                <Link href="/ozone-osteopathy">Scopri di più</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary-dark w-full sm:w-auto text-white font-medium text-lg py-6 hover-lift"
              >
                <Link href="/contacts" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Prenota un Appuntamento</span>
                </Link>
              </Button>
            </div>
          </AnimatedScrollElement>
        </div>
      </div>
    </section>
  )
}

export function TreatmentsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedScrollElement className="mb-8 text-center" direction="up" delay={0.1}>
          <h2 className="text-3xl font-bold mb-4">I Nostri Trattamenti</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {"Scopri il nostro approccio innovativo alla salute "}
            <br />
            {"attraverso la combinazione di Ozonoterapia e Osteopatia"}
          </p>
        </AnimatedScrollElement>
        <AnimatedScrollElement direction="up" delay={0.3}>
          <QuadrantCarousel showTitles={true} />
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
            Scegli Esperienza e Professionalità per le tue cure
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
          <p className="text-center text-lg max-w-3xl mx-auto">
            Laureato in medicina e chirurgia, specializzato in medicina legale. Osteopata e Ozonoterapeuta, da anni
            promuove l'uso combinato di queste discipline per ottenere risultati migliori e più duraturi.
          </p>
        </AnimatedScrollElement>
        <AnimatedScrollElement className="text-center" direction="up" delay={0.3}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white font-medium hover-lift">
            <Link href="/about-me">Scopri di più su di me</Link>
          </Button>
        </AnimatedScrollElement>
      </div>
    </section>
  )
}

export function AdvancedTherapySection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <AnimatedScrollElement className="md:col-span-1" direction="left" delay={0.1}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avantgardepic.jpg-mfJIjkIXbkIrXI8d56YJslAgsYbgQ7.jpeg"
              alt="Attrezzatura per ozonoterapia"
              width={400}
              height={400}
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </AnimatedScrollElement>
          <div className="md:col-span-2 flex flex-col items-center text-center">
            <AnimatedScrollElement className="space-y-4 mb-8" direction="right" delay={0.3}>
              <h3 className="text-xl font-semibold text-blue-200 text-wave-hover">Terapia all'Avanguardia</h3>
              <p className="text-lg">
                L'Ozonoterapia sfrutta le proprietà biochimiche dell'ozono, che fornisce{" "}
                <strong>effetti benefici</strong> per il tuo corpo. L'Ossigeno-Ozonoterapia ha proprietà
                antinfiammatorie, analgesiche, miorilassanti, immunomodulanti, antibatteriche, fungicide e antivirali.
              </p>
            </AnimatedScrollElement>
            <AnimatedScrollElement direction="up" delay={0.5}>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 hover-lift">
                <Link href="/contacts" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Prenota Ora un Appuntamento</span>
                </Link>
              </Button>
            </AnimatedScrollElement>
          </div>
        </div>
      </div>
    </section>
  )
}
