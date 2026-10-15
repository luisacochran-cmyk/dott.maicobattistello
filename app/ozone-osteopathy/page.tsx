import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import AnimatedScrollElement from "@/components/animated-scroll-element"
import QuadrantCarousel from "@/components/quadrant-carousel"

export const metadata = {
  title: "Ozonoterapia e Osteopatia - Dr. Maico Battistello",
  description:
    "Approccio integrato tra ossigeno-ozonoterapia e osteopatia per disturbi muscolo-scheletrici, dolore e recupero funzionale.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia-osteopatia",
  },
}

const locations = [
  { name: "Marostica", href: "/ozono-osteo-marostica" },
  { name: "Schio", href: "/ozono-osteo-schio" },
  { name: "Monte di Malo", href: "/ozono-osteo-malo" },
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
    <main className="pt-20 bg-white">
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
        {/* Introduzione: foto originali assemblate senza alterare i soggetti */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <AnimatedScrollElement direction="up" delay={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#0066CC] mb-3">
                  Approccio integrato
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#173B65] mb-5">
                  Ozonoterapia e Osteopatia
                </h1>
                <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
                <div className="space-y-5 text-lg leading-relaxed text-[#33465C]">
                  <p>
                    <strong>L&apos;ossigeno-ozonoterapia e l&apos;osteopatia</strong>{" "}
                    sono due metodiche differenti che, in molti casi, possono essere
                    utilizzate in modo complementare.
                  </p>
                  <p>
                    Nella pratica clinica del Dr. Maico Battistello, l&apos;associazione
                    tra queste due discipline viene frequentemente presa in
                    considerazione quando il disturbo presenta sia una componente{" "}
                    <strong>infiammatoria</strong> sia alterazioni della{" "}
                    <strong>mobilità articolare, muscolare o posturale</strong>.
                    In questi casi, l&apos;utilizzo complementare delle due
                    metodiche può consentire un <strong>approccio più completo</strong>{" "}
                    alle diverse componenti del problema.
                  </p>
                  <p>
                    L&apos;obiettivo è intervenire non solo sul sintomo doloroso, ma
                    anche sui fattori biomeccanici che possono contribuire al
                    mantenimento del problema nel tempo.
                  </p>
                </div>
              </div>
            </AnimatedScrollElement>
            <div className="relative w-full aspect-[3/2] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/maico-trio-foto-originali-sfumato.jpg"
                alt="Composizione fotografica: trattamento osteopatico, grande autoemoterapia e trattamento del ginocchio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Indicazioni e valutazione individuale */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto max-w-6xl px-4">
            <AnimatedScrollElement direction="up" delay={0.2}>
              <div className="max-w-4xl">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#0066CC] mb-3">
                  Valutazione personalizzata
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#173B65] mb-6">
                  Quando può essere indicato un approccio integrato
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-8 text-lg text-[#33465C]">
                  {indications.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0066CC]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg leading-relaxed text-[#33465C]">
                  La scelta del trattamento viene sempre definita dopo una{" "}
                  <strong>valutazione individuale</strong>. In alcuni casi può essere
                  indicata prevalentemente l&apos;ossigeno-ozonoterapia, in altri
                  l&apos;osteopatia; in altri ancora può essere utile un{" "}
                  <strong>approccio integrato</strong> tra le due metodiche.
                </p>
              </div>
            </AnimatedScrollElement>
          </div>
        </section>

        {/* Sedi: sfumatura morbida in entrata e in uscita */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <AnimatedScrollElement direction="up" delay={0.3}>
              <div className="mb-8 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#0066CC] mb-3">
                  Le sedi
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#173B65] mb-3">
                  Dove riceve per Ozonoterapia e Osteopatia
                </h2>
                <p className="text-base md:text-lg text-[#526274]">
                  Scopri le informazioni e i servizi disponibili nelle diverse sedi.
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    aria-label={`Ozonoterapia e Osteopatia a ${location.name}: scopri di più`}
                    className="group flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-[#E7E0D7] bg-white/90 px-3 py-5 text-center shadow-sm transition-colors hover:border-[#A9C9E9] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC]"
                  >
                    <span className="text-base md:text-lg font-semibold text-[#173B65]">
                      {location.name}
                    </span>
                    <span className="text-sm font-medium text-[#0066CC] group-hover:underline underline-offset-4">
                      Scopri di più
                    </span>
                  </Link>
                ))}
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
