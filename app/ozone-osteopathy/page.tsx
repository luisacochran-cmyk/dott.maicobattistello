import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import QuadrantCarousel from "@/components/quadrant-carousel"

export const metadata = {
  title: "Ozonoterapia e Osteopatia a Marostica, Schio, Malo e Padova | Dott. Maico Battistello",
  description:
    "L'approccio integrato del Dott. Maico Battistello: ossigeno-ozonoterapia e osteopatia in un unico percorso per dolore, infiammazione e recupero funzionale.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia-osteopatia",
  },
}

const locations = [
  { name: "Marostica", href: "/ozono-osteo-marostica" },
  { name: "Schio", href: "/ozono-osteo-schio" },
  { name: "Malo", href: "/ozono-osteo-malo" },
  { name: "Padova", href: "/ozono-osteo-padova" },
]

const indications = [
  "Cervicalgia e lombalgia",
  "Ernie e protrusioni discali",
  "Sciatalgia e dolore radicolare",
  "Artrosi e problematiche articolari",
  "Contratture muscolari persistenti",
  "Limitazioni della mobilità",
  "Disturbi muscolo-scheletrici cronici",
  "Dolore correlato a sovraccarichi posturali",
]

export default function OzoneOsteopathyPage() {
  return (
    <main className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozonoterapia + Osteopatia", href: "/ozonoterapia-osteopatia" },
          ]}
        />
      </div>

      {/* Un unico sfondo per introduzione, sedi e passaggio al carosello:
          il crema emerge al centro e sfuma verso il bianco in uscita. */}
      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_22%,#F8F5F0_43%,#F0EAE0_63%,#F8F5F0_81%,#FFFFFF_100%)]">
        {/* Introduzione */}
        <section className="pt-10 pb-6 md:pt-16 md:pb-8">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedScrollElement direction="up" delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                  Approccio integrato
                </p>
                <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
                  Ozonoterapia e Osteopatia<span className="text-[#0066CC]">.</span>
                </h1>
                <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
                <div className="space-y-5 text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  <p>
                    <strong>L&apos;ossigeno-ozonoterapia e l&apos;osteopatia</strong>{" "}
                    sono due discipline differenti. Nella pratica clinica del
                    Dott. Maico Battistello diventano un <strong>approccio integrato</strong>:
                    non l&apos;una o l&apos;altra, ma due metodiche che si completano
                    all&apos;interno di un <strong>unico percorso</strong>.
                  </p>
                  <p>
                    L&apos;ozonoterapia può intervenire sulla componente{" "}
                    <strong>infiammatoria</strong> e sul dolore; l&apos;osteopatia
                    lavora sulle alterazioni della{" "}
                    <strong>mobilità articolare, muscolare o posturale</strong>.
                    Integrarle permette di affrontare in modo{" "}
                    <strong>più completo</strong> le diverse componenti del problema.
                  </p>
                  <p>
                    L&apos;obiettivo è intervenire non solo sul sintomo doloroso, ma
                    anche sui fattori biomeccanici che possono contribuire al
                    mantenimento del problema nel tempo.
                  </p>
                </div>
              </div>
            </AnimatedScrollElement>

            {/* Due foto reali affiancate, unite da un "+": l'integrazione raccontata per immagini */}
            <AnimatedScrollElement direction="up" delay={0.2}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
                    <Image
                      src="/images/DSCF5346.JPG"
                      alt="Il Dott. Maico Battistello durante un trattamento di ossigeno-ozonoterapia alla spalla"
                      fill
                      priority
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-[65%_center]"
                    />
                  </div>

                  <div className="relative mt-10 md:mt-14 aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
                    <Image
                      src="/images/DSCF5366.JPG"
                      alt="Il Dott. Maico Battistello durante un trattamento osteopatico alla spalla"
                      fill
                      priority
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-[62%_center]"
                    />
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl font-light text-[#0066CC] shadow-lg ring-1 ring-black/5 md:h-14 md:w-14"
                >
                  +
                </div>
              </div>
            </AnimatedScrollElement>
          </div>
        </section>

        {/* Indicazioni e valutazione individuale */}
        <section className="py-8 md:py-10">
          <div className="container mx-auto max-w-6xl px-4">
            <AnimatedScrollElement direction="up" delay={0.2}>
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                  Valutazione personalizzata
                </p>
                <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-8">
                  Quando può essere indicato un approccio integrato<span className="text-[#0066CC]">?</span>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-8 text-base md:text-lg leading-relaxed text-slate-700">
                  {indications.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0066CC]/60" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-l-2 border-[#0066CC]/30 pl-5 text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  Il percorso viene sempre definito dopo una{" "}
                  <strong>valutazione individuale</strong>, che permette di stabilire
                  come integrare le due metodiche in base al quadro clinico e alle
                  esigenze della persona.
                </p>
              </div>
            </AnimatedScrollElement>
          </div>
        </section>

        {/* Sedi: stesso stile della sezione "Dove riceve" della home */}
        <section className="pt-8 pb-12 md:pt-10 md:pb-16">
          <div className="container mx-auto max-w-6xl px-4">
            <AnimatedScrollElement direction="up" delay={0.3}>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                  Le sedi
                </p>
                <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-3">
                  Dove riceve per Ozonoterapia e Osteopatia<span className="text-[#0066CC]">.</span>
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
                      aria-label={`Ozonoterapia e Osteopatia a ${location.name}`}
                      className="group flex min-h-24 items-center border-b border-[#D4DFE9] py-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] sm:min-h-28"
                    >
                      <span className="text-xl font-medium tracking-tight text-slate-800 transition-colors group-hover:text-[#0066CC] sm:text-2xl md:text-[1.7rem]">
                        {location.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedScrollElement>
          </div>
        </section>
      </div>

      {/* Carosello esistente, con immagini originali e collegamenti corretti */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <AnimatedScrollElement direction="up" delay={0.5}>
            <QuadrantCarousel
              items={[
                { title: "Ozonoterapia Cervicale", image: "/images/ozcervicale.jpg", link: "/ozonoterapia-osteopatia" },
                { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale2.jpg", link: "/ozonoterapia-osteopatia" },
                { title: "Consulenza Specialistica", image: "/images/nuovaozono2.jpg", link: "/ozonoterapia-osteopatia" },
                { title: "Osteopatia Lombare", image: "/images/oslombare.jpg", link: "/ozonoterapia-osteopatia" },
                { title: "Ozonoterapia Spalla", image: "/images/ozspalla.jpg", link: "/ozonoterapia-osteopatia" },
                { title: "Osteopatia Spalla", image: "/images/osspalla.jpg", link: "/ozonoterapia-osteopatia" },
              ]}
            />
          </AnimatedScrollElement>
        </div>
      </section>

      <section className="bg-white">
        <ContactForm />
      </section>
    </main>
  )
}
