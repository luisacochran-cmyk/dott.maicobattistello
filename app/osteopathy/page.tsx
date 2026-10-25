import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Osteopatia a Marostica, Schio, Malo e Padova | Dott. Maico Battistello",
  description:
    "Osteopatia per dolori muscolo-scheletrici, cervicalgia, lombalgia e problematiche posturali. Visite a Marostica, Schio, Malo e Padova.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/osteopatia",
  },
}

const locations = [
  { name: "Marostica", href: "/osteopatia-marostica" },
  { name: "Schio", href: "/osteopatia-schio" },
  { name: "Malo", href: "/osteopatia-malo" },
  { name: "Padova", href: "/osteopatia-padova" },
]

export default function OsteopathyPage() {
  return (
    <div className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Osteopatia", href: "/osteopatia" },
          ]}
        />
      </div>

      {/* Un unico sfondo continuo: introduzione → sedi → carosello */}
      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_28%,#F8F5F0_46%,#F0EAE0_60%,#F0EAE0_73%,#F8F5F0_85%,#FFFFFF_100%)]">
        {/* Introduzione */}
        <section className="pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                Terapia manuale
              </p>
              <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
                Cos&apos;è l&apos;Osteopatia<span className="text-[#0066CC]">?</span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
              <div className="space-y-5 text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
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

              {/* Collegamento all'approccio integrato */}
              <div className="mt-7 border-l-2 border-[#0066CC]/30 pl-5">
                <p className="text-lg leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  Nella pratica del Dott. Maico Battistello l&apos;osteopatia è parte di un{" "}
                  <strong>approccio integrato</strong> con l&apos;ozonoterapia.
                </p>
                <Link
                  href="/ozonoterapia-osteopatia"
                  className="mt-3 inline-flex items-center border-b border-[#0066CC]/40 pb-1 font-semibold text-[#0066CC] transition-colors hover:border-[#0066CC]"
                >
                  Scopri l&apos;approccio integrato
                </Link>
              </div>
            </div>

            {/* Foto: riquadro orizzontale, inquadratura su mani e schiena */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
              <Image
                src="/images/nuovaosteo1.jpg"
                alt="Il Dott. Maico Battistello durante un trattamento osteopatico"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_70%]"
              />
            </div>
          </div>
        </section>

        {/* Sedi: stesso stile della sezione "Dove riceve" della home */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                Le sedi
              </p>
              <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-3">
                Dove riceve per l&apos;Osteopatia<span className="text-[#0066CC]">.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600">
                Scopri le informazioni e i servizi disponibili nelle diverse sedi.
              </p>
            </div>
            <div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-white/70 shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] backdrop-blur-sm md:p-9">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-9">
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    aria-label={`Osteopatia a ${location.name}`}
                    className="group flex min-h-24 items-center border-b border-[#D4DFE9] py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] sm:min-h-28"
                  >
                    <span className="text-xl font-medium tracking-tight text-slate-800 transition-colors group-hover:text-[#0066CC] sm:text-2xl md:text-[1.7rem]">
                      {location.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Carosello */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-6xl">
            <QuadrantCarousel
              items={[
                { title: "Trattamento Osteopatico", image: "/images/nuovaosteo1.jpg", link: "/osteopatia" },
                { title: "Manipolazione Cranio-Sacrale", image: "/images/nuovaosteo2.jpg", link: "/osteopatia" },
                { title: "Trattamento Viscerale", image: "/images/nuovaosteo3.jpg", link: "/osteopatia" },
                { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale.jpg", link: "/osteopatia" },
              ]}
            />
          </div>
        </section>
      </div>

      <section className="bg-white">
        <ContactForm />
      </section>
    </div>
  )
}
