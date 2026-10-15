import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Osteopatia - Dr. Maico Battistello",
  description:
    "Osteopatia per dolori muscolo-scheletrici, cervicalgia, lombalgia e problematiche posturali. Visite a Marostica, Schio, Padova e Monte di Malo.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/osteopatia",
  },
}

const locations = [
  { name: "Marostica", href: "/osteopatia-marostica" },
  { name: "Schio", href: "/osteopatia-schio" },
  { name: "Monte di Malo", href: "/osteopatia-malo" },
  { name: "Padova", href: "/osteopatia-padova" },
]

export default function OsteopathyPage() {
  return (
    <main className="pt-20 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopatia", href: "/osteopatia" },
          ]}
        />
      </div>

      <section className="bg-gradient-to-br from-[#F2F7FD] via-white to-[#F8F5F0] py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#173B65] mb-5">
              Cos&apos;è l&apos;Osteopatia?
            </h1>
            <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
            <div className="space-y-5 text-lg leading-relaxed text-[#33465C]">
              <p>
                L&apos;Osteopatia è una <strong>terapia manuale</strong> che valuta le relazioni tra <strong>struttura e funzione del corpo</strong>, con particolare attenzione alla colonna vertebrale, alle articolazioni, al sistema muscolare e ai tessuti connettivi.
              </p>
              <p>
                Attraverso una valutazione accurata e tecniche manuali specifiche, l&apos;osteopata individua le alterazioni della mobilità e della funzione che possono contribuire a <strong>dolore</strong>, limitazioni del movimento e <strong>disturbi muscolo-scheletrici</strong>.
              </p>
              <p>
                Il trattamento viene adattato alle caratteristiche della persona, con l&apos;obiettivo di favorire un migliore equilibrio funzionale e una maggiore qualità di vita.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-[5/6] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/nuovaosteo1.jpg"
              alt="Trattamento osteopatico"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F8F5F0] to-[#F4EFE8] py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#0066CC] mb-3">Le sedi</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#173B65] mb-3">Dove riceve per l&apos;Osteopatia</h2>
            <p className="text-base md:text-lg text-[#526274]">Scopri le informazioni e i servizi disponibili nelle diverse sedi.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                aria-label={`Osteopatia a ${location.name}: scopri di più`}
                className="group flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-[#E7E0D7] bg-white/90 px-3 py-5 text-center shadow-sm transition-colors hover:border-[#A9C9E9] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC]"
              >
                <span className="text-base md:text-lg font-semibold text-[#173B65]">{location.name}</span>
                <span className="text-sm font-medium text-[#0066CC] group-hover:underline underline-offset-4">Scopri di più</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#F2F7FD] to-white py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <QuadrantCarousel
            items={[
              { title: "Trattamento Osteopatico", image: "/images/nuovaosteo1.jpg", link: "/osteopathy" },
              { title: "Manipolazione Cranio-Sacrale", image: "/images/nuovaosteo2.jpg", link: "/osteopathy" },
              { title: "Trattamento Viscerale", image: "/images/nuovaosteo3.jpg", link: "/osteopathy" },
              { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale.jpg", link: "/osteopathy" },
            ]}
          />
        </div>
      </section>

      <section className="bg-white">
        <ContactForm />
      </section>
    </main>
  )
}
