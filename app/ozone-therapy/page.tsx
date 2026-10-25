import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"

export const metadata = {
  title: "Ozonoterapia a Marostica, Schio, Malo e Padova | Dott. Maico Battistello",
  description:
    "Ozonoterapia per dolore cronico, ernie, artrosi, infiammazione e recupero funzionale. Grande e Piccola Autoemoterapia. Visite a Marostica, Schio, Malo e Padova.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia",
  },
}

const locations = [
  { name: "Marostica", href: "/ozonoterapia-marostica" },
  { name: "Schio", href: "/ozonoterapia-schio" },
  { name: "Malo", href: "/ozonoterapia-malo" },
  { name: "Padova", href: "/ozonoterapia-padova" },
]

/* Tendina nativa (<details>): si apre e chiude come prima,
   ma il testo è sempre presente nella pagina, quindi Google lo legge. */
function Approfondimento({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="group border-b border-slate-300/80">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">{title}</span>
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0066CC]/30 text-2xl font-light text-[#0066CC] transition-transform duration-300 group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pb-8">{children}</div>
    </details>
  )
}

export default function OzoneTherapyPage() {
  return (
    <main className="pt-20 lg:pt-24 bg-white">
      <div className="w-full bg-[#F2F7FD]">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ozonoterapia", href: "/ozonoterapia" },
          ]}
        />
      </div>

      {/* Sfondo unico per introduzione e metodo: dall'azzurro chiaro al crema */}
      <div className="bg-[linear-gradient(to_bottom,#F2F7FD_0%,#FFFFFF_22%,#F8F5F0_60%,#F0EAE0_100%)]">
        {/* Introduzione */}
        <section className="pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                Ossigeno-ozonoterapia
              </p>
              <h1 className="text-[2.25rem] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-5">
                Cos&apos;è l&apos;Ozonoterapia<span className="text-[#0066CC]">?</span>
              </h1>
              <div className="h-1 w-16 rounded-full bg-[#E8CFB0] mb-7" aria-hidden="true" />
              <div className="space-y-5 text-lg md:text-xl leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                <p>
                  L&apos;<strong>ossigeno-ozonoterapia</strong> utilizza una miscela di ossigeno e ozono impiegata in diversi ambiti della pratica medica come supporto nel trattamento di specifiche condizioni cliniche. Le modalità di applicazione vengono valutate dal medico in base alle caratteristiche del paziente e al quadro clinico.
                </p>
                <p>
                  L&apos;<strong>ozono medicale</strong> è oggetto di interesse
                  per le sue proprietà biologiche e trova applicazione, in contesti
                  clinici appropriati, nell&apos;ambito di percorsi terapeutici
                  rivolti a <strong>patologie muscolo-scheletriche</strong>,{" "}
                  <strong>stati infiammatori</strong> e{" "}
                  <strong>condizioni dolorose</strong>.
                </p>
                <p>
                  Accanto ai trattamenti locali, l&apos;ossigeno-ozonoterapia
                  comprende anche un <strong>approccio sistemico</strong>,
                  attraverso metodiche quali la{" "}
                  <strong>Grande Autoemoterapia (GAET)</strong> e la{" "}
                  <strong>Piccola Autoemoterapia (PAET)</strong>.
                  Queste metodiche sono studiate e utilizzate in ambito
                  complementare anche per condizioni complesse come la{" "}
                  <strong>fibromialgia</strong>, il{" "}
                  <strong>dolore cronico diffuso</strong> e la sintomatologia
                  associata, tra cui <strong>affaticamento</strong> e{" "}
                  <strong>disturbi del sonno</strong>, sempre nell&apos;ambito
                  di una valutazione medica individuale.
                </p>
                <p>
                  Per le sue caratteristiche di <strong>minima invasività</strong>, l&apos;ossigeno-ozonoterapia viene integrata in protocolli personalizzati dopo una <strong>valutazione medica specialistica</strong>, con l&apos;obiettivo di favorire il benessere della persona e il recupero della <strong>funzionalità</strong>.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#F2F7FD] shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
              <Image
                src="/images/Medico con sacca di sangue in clinica.png"
                alt="Dott. Maico Battistello durante una procedura di grande autoemoterapia (GAET)"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Il metodo: GAET e PAET con i video, subito dopo l'introduzione */}
        <section className="pt-8 pb-14 md:pt-10 md:pb-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 md:mb-14">
              <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
                Il metodo
              </p>
              <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                Grande e Piccola Autoemoterapia<span className="text-[#0066CC]">.</span>
              </h2>
            </div>

            <div className="space-y-14 md:space-y-20">
              {/* Grande Autoemoterapia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="aspect-video w-full overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
                  <iframe
                    src="https://player.vimeo.com/video/1167667746?h=c3a7c519ea&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="h-full w-full"
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Video: la Grande Autoemoterapia (GAET)"
                  />
                </div>
                <div className="space-y-4 text-lg leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                    Grande Autoemoterapia (GAET)
                  </h3>
                  <p>
                    La Grande Autoemoterapia rappresenta la tecnica più avanzata
                    dell&apos;Ozonoterapia sistemica. Consiste nel prelevare una{" "}
                    <strong>maggiore quantità di sangue</strong> dal paziente (circa
                    80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
                    <strong>per via endovenosa</strong>.
                  </p>
                  <p>
                    Questo trattamento ha{" "}
                    <strong>effetti sistemici profondi</strong>, stimolando il
                    sistema immunitario, migliorando l&apos;ossigenazione tissutale
                    e producendo{" "}
                    <strong>potenti effetti antinfiammatori e rigenerativi</strong>
                    . È particolarmente indicato per patologie croniche e{" "}
                    <strong>condizioni sistemiche complesse</strong>.
                  </p>
                </div>
              </div>

              {/* Piccola Autoemoterapia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 space-y-4 text-lg leading-relaxed text-slate-600 [&_strong]:font-semibold [&_strong]:text-slate-900">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                    Piccola Autoemoterapia (PAET)
                  </h3>
                  <p>
                    La Piccola Autoemoterapia è una delle tecniche utilizzate
                    nell&apos;ozonoterapia. Consiste nel prelevare una{" "}
                    <strong>piccola quantità</strong> di sangue dal paziente,
                    miscelarla con ozono medicale e reiniettarla per{" "}
                    <strong>via intramuscolare</strong>.
                  </p>
                  <p>
                    Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
                    <strong>antinfiammatorie, analgesiche e rigenerative</strong>
                    . È particolarmente efficace per problematiche localizzate e per{" "}
                    <strong>migliorare la risposta immunitaria</strong>{" "}
                    dell&apos;organismo.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-video w-full overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-[0_24px_70px_-40px_rgba(20,35,55,0.5)]">
                  <iframe
                    src="https://player.vimeo.com/video/1167667781?h=802d55120b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    className="h-full w-full"
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Video: la Piccola Autoemoterapia (PAET)"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Rimando alla pagina dedicata all'ozonoterapia topica per le ulcere */}
      <section className="bg-[#F0EAE0] pt-12 md:pt-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-5 rounded-[1.5rem] bg-white/80 p-6 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-50px_rgba(20,45,75,0.4)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
                Ozonoterapia topica
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Ulcere, ferite e medicazioni complesse<span className="text-[#0066CC]">.</span>
              </h2>
              <p className="mt-2 max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
                Grande Autoemoterapia (GAET), ozono in apposite sacche a tenuta e trattamento topico delle lesioni.
              </p>
            </div>
            <Link
              href="/ozonoterapia-ulcere"
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#0066CC] px-7 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#0057AD]"
            >
              Scopri il trattamento
            </Link>
          </div>
        </div>
      </section>

      {/* Approfondimenti: tendine native, il testo resta leggibile da Google */}
      <section className="bg-gradient-to-b from-[#F0EAE0] to-[#FAF8F4] py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
            Approfondimenti
          </p>
          <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-4">
            Indicazioni, somministrazione e controindicazioni<span className="text-[#0066CC]">.</span>
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
            Per chi desidera approfondire: indicazioni cliniche suddivise per
            livello di evidenza scientifica (A, B, C), metodi di somministrazione
            e controindicazioni.
          </p>

          <div className="border-t border-slate-300/80">
            {/* INDICAZIONI CLINICO-TERAPEUTICHE */}
            <Approfondimento title="Indicazioni Clinico-Terapeutiche">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-700">
                  Grazie alla Medicina Basata sull&apos;Evidenza (EBM), le
                  indicazioni dell&apos;ossigeno-ozonoterapia possono essere
                  suddivise in tre categorie in base al livello di evidenza
                  disponibile.
                </p>

                {/* Evidenza Tipo A */}
                <div className="rounded-[1.5rem] bg-[#EDF4F9] p-6 ring-1 ring-[#D4DFE9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066CC] text-lg font-semibold text-white">
                      A
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900">Evidenza di Tipo A</h3>
                      <p className="mt-2 text-lg leading-relaxed text-slate-600">
                        Basata su revisioni sistematiche con omogeneità di
                        studi caso-controllo. Le principali applicazioni
                        cliniche riconosciute dal Ministero della Salute
                        includono:
                      </p>
                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg text-slate-700 marker:text-[#0066CC]/60 md:grid-cols-2">
                        <li>Ernie discali</li>
                        <li>Protrusioni discali</li>
                        <li>Discopatie</li>
                        <li>Sindrome faccettale</li>
                        <li>Osteoartrosi, gonartrosi, condromalacia rotulea</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evidenza Tipo B */}
                <div className="rounded-[1.5rem] bg-white/80 p-6 ring-1 ring-[#D4DFE9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#0066CC] text-lg font-semibold text-[#0066CC]">
                      B
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900">Evidenza di Tipo B</h3>
                      <p className="mt-2 text-lg leading-relaxed text-slate-600">
                        Basata su singoli studi randomizzati, studi di coorte o
                        studi caso-controllo.
                      </p>
                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg text-slate-700 marker:text-[#0066CC]/60 md:grid-cols-2">
                        <li>Patologie ortopediche</li>
                        <li>Piede diabetico</li>
                        <li>Ulcere cutanee e ustioni</li>
                        <li>Malattie cutanee acute causate da batteri, funghi o virus</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evidenza Tipo C */}
                <div className="rounded-[1.5rem] bg-[#F8F5F0] p-6 ring-1 ring-[#E7E0D7]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-slate-400 text-lg font-semibold text-slate-600">
                      C
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900">Evidenza di Tipo C</h3>
                      <p className="mt-2 text-lg leading-relaxed text-slate-600">
                        Basata su opinioni di esperti senza ricerca sistematica
                        o scientifica specifica.
                      </p>
                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg text-slate-700 marker:text-slate-400 md:grid-cols-2">
                        <li>Long Covid</li>
                        <li>Fibromialgia</li>
                        <li>Stanchezza cronica (CFS)</li>
                        <li>Stanchezza stagionale o da lavoro</li>
                        <li>Debolezza generale o mancanza di energia nel Parkinson</li>
                        <li>Benessere post-ospedalizzazione/recupero</li>
                        <li>Artrite reumatoide, artrite psoriasica</li>
                        <li>Disfunzione erettile</li>
                        <li>Malattie autoimmuni (supporto alle terapie convenzionali)</li>
                        <li>Demenza senile/Alzheimer (complementare alla terapia convenzionale)</li>
                        <li>Asma</li>
                        <li>Emicranie</li>
                        <li>Cefalea a grappolo o tensiva</li>
                        <li>Problemi infettivi</li>
                        <li>Problemi circolatori</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="border-l-2 border-[#0066CC]/30 pl-5 text-lg leading-relaxed text-slate-600">
                  <strong className="font-semibold text-slate-900">
                    Le indicazioni vengono valutate caso per caso.
                  </strong>{" "}
                  L&apos;ossigeno-ozonoterapia non sostituisce le terapie
                  mediche convenzionali, ma può integrarsi in un percorso
                  clinico appropriato.
                </p>
              </div>
            </Approfondimento>

            {/* METODI DI SOMMINISTRAZIONE */}
            <Approfondimento title="Metodi di Somministrazione">
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  L&apos;ozonoterapia può essere somministrata localmente o
                  sistemicamente a seconda delle patologie da trattare.
                </p>
                <p>
                  Le varie vie di somministrazione possono anche essere
                  utilizzate da sole o in combinazione, per esercitare un
                  effetto sinergico.
                </p>
                <p className="font-semibold text-slate-900">
                  Le principali vie di somministrazione sono:
                </p>

                <h3 className="pt-2 text-xl font-semibold text-[#0066CC]">Sistemica:</h3>
                <p>
                  Applicata nei casi in cui la prognosi e la progressione della
                  malattia possono beneficiare della modulazione della risposta
                  infiammatoria o di un migliore apporto di ossigeno ai
                  tessuti. Questi includono:
                </p>
                <ul className="list-disc space-y-1 pl-6 marker:text-[#0066CC]/60">
                  <li>Grande Auto-emoterapia (GAET) - venosa;</li>
                  <li>Piccola Auto-emoterapia Infusionale (PAEI) - muscolo profondo;</li>
                  <li>Rettale</li>
                </ul>

                <h3 className="pt-2 text-xl font-semibold text-[#0066CC]">Locale:</h3>
                <p>
                  Applicata quando c&apos;è la necessità di sfruttare gli
                  effetti analgesici, antinfiammatori e miorilassanti per
                  patologie muscolo-scheletriche, intestinali e altre. La
                  somministrazione avviene tramite:
                </p>
                <ul className="list-disc space-y-1 pl-6 marker:text-[#0066CC]/60">
                  <li>Intramuscolare, paravertebrale</li>
                  <li>Sottocutanea</li>
                  <li>Peri-articolare</li>
                  <li>Intra-articolare</li>
                  <li>Insufflazione (rettale e vaginale)</li>
                  <li>Topica con Sacca di Ozono</li>
                </ul>
              </div>
            </Approfondimento>

            {/* CONTROINDICAZIONI */}
            <Approfondimento title="Controindicazioni">
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  A concentrazioni terapeutiche,
                  l&apos;Ossigeno-Ozonoterapia non ha effetti collaterali. Non
                  è un trattamento doloroso. Non provoca reazioni allergiche.
                  Non interferisce con i farmaci in uso.
                </p>
                <p>
                  Le controindicazioni sono limitate alla GAET per le seguenti
                  condizioni:
                </p>
                <ul className="list-disc space-y-1 pl-6 marker:text-[#0066CC]/60">
                  <li>Favismo</li>
                  <li>Ipertiroidismo grave</li>
                  <li>Allergie al citrato e agli anticoagulanti</li>
                  <li>Epilessia</li>
                  <li>Gravidanza</li>
                  <li>Sport agonistico</li>
                </ul>
                <p>
                  Tutti i trattamenti con ozono vengono eseguiti utilizzando
                  apparecchiature certificate, aderendo alle linee guida
                  sviluppate dalle principali società scientifiche nazionali e
                  internazionali, come:
                </p>
                <ul className="list-disc space-y-1 pl-6 marker:text-[#0066CC]/60">
                  <li>SIOOT (Società Scientifica Internazionale di Ossigeno-Ozonoterapia)</li>
                  <li>Nuova FIO (Federazione Italiana di Ossigeno-Ozonoterapia)</li>
                  <li>ISCO3 (Comitato Scientifico Internazionale di Ozonoterapia)</li>
                </ul>
              </div>
            </Approfondimento>
          </div>
        </div>
      </section>

      {/* Sedi: stesso stile della sezione "Dove riceve" della home */}
      <section className="bg-gradient-to-b from-[#FAF8F4] to-white py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#0066CC] mb-4">
              Le sedi
            </p>
            <h2 className="text-[2rem] md:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-3">
              Dove riceve per l&apos;Ozonoterapia<span className="text-[#0066CC]">.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600">
              Scopri le informazioni e i servizi disponibili nelle diverse sedi.
            </p>
          </div>
          <div className="rounded-[2.5rem] bg-white/70 p-6 ring-1 ring-[#E7E0D7] shadow-[0_24px_65px_-46px_rgba(20,45,75,0.4)] md:p-9">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 md:gap-x-9">
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  aria-label={`Ozonoterapia a ${location.name}`}
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
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto max-w-6xl px-4">
          <QuadrantCarousel
            items={[
              { title: "Trattamento Combinato", image: "/images/nuovaozonosteo1.jpg", link: "/ozonoterapia" },
              { title: "Terapia Integrata", image: "/images/osteozonoterapia1.jpg", link: "/ozonoterapia" },
              { title: "Risultati Clinici", image: "/images/osteozonoterapia2.jpg", link: "/ozonoterapia" },
              { title: "Ozonoterapia Avanzata", image: "/images/Medico con sacca di sangue in clinica.png", link: "/ozonoterapia" },
              { title: "Trattamento di Ozonoterapia", image: "/images/ozonoterapia3.jpg", link: "/ozonoterapia" },
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
