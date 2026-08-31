import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Link from "next/link"

export const metadata = {
  title: "Ozonoterapia - Dr. Maico Battistello",
  description:
    "Ozonoterapia per dolore cronico, ernie, artrosi, infiammazione e recupero funzionale. Visite a Marostica, Schio, Monte di Malo e Padova.",
  alternates: {
    canonical: "https://dottmaicobattistello.it/ozonoterapia",
  },
}

export default function OzoneTherapyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozonoterapia", href: "/ozonoterapia" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-lg max-w-none leading-relaxed">
          <h2 className="text-3xl font-bold mb-6">
            Cos&apos;è l&apos;Ozonoterapia?
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            L&apos;<strong>ossigeno-ozonoterapia</strong> utilizza una miscela
            di ossigeno e ozono impiegata in diversi ambiti della pratica
            medica come supporto nel trattamento di specifiche condizioni
            cliniche. Le modalità di applicazione vengono valutate dal medico
            in base alle caratteristiche del paziente e al quadro clinico.
            <br />
            <br />
            L&apos;<strong>ozono medicale</strong> è oggetto di interesse per
            le sue proprietà biologiche e viene utilizzato, in contesti
            appropriati, come supporto nei percorsi terapeutici rivolti a{" "}
            <strong>patologie muscolo-scheletriche</strong>, stati
            infiammatori e condizioni dolorose.
            <br />
            <br />
            Per le sue caratteristiche di <strong>minima invasività</strong>,
            l&apos;ossigeno-ozonoterapia viene integrata in protocolli
            personalizzati dopo una{" "}
            <strong>valutazione medica specialistica</strong>, con
            l&apos;obiettivo di favorire il benessere della persona e il
            recupero della <strong>funzionalità</strong>.
          </p>
        </div>
      </div>

      {/* Cities Links Section */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold mb-3">
            📍 Trattamenti di Ozonoterapia nelle principali città
          </h3>

          <p className="text-lg leading-relaxed mb-4">
            Il Dr. Maico Battistello offre trattamenti di ozonoterapia anche
            presso:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/ozonoterapia-padova"
              className="text-lg text-blue-600 hover:text-blue-800 underline font-medium"
            >
              → Ozonoterapia a Padova
            </Link>

            <Link
              href="/ozonoterapia-marostica"
              className="text-lg text-blue-600 hover:text-blue-800 underline font-medium"
            >
              → Ozonoterapia a Marostica
            </Link>

            <Link
              href="/ozonoterapia-schio"
              className="text-lg text-blue-600 hover:text-blue-800 underline font-medium"
            >
              → Ozonoterapia a Schio
            </Link>

            <Link
              href="/ozonoterapia-malo"
              className="text-lg text-blue-600 hover:text-blue-800 underline font-medium"
            >
              → Ozonoterapia a Malo
            </Link>
          </div>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="-mt-8 mb-12">
        <QuadrantCarousel
          items={[
            {
              title: "Trattamento Combinato",
              image: "/images/nuovaozonosteo1.jpg",
              link: "/ozonoterapia",
            },
            {
              title: "Terapia Integrata",
              image: "/images/osteozonoterapia1.jpg",
              link: "/ozonoterapia",
            },
            {
              title: "Risultati Clinici",
              image: "/images/osteozonoterapia2.jpg",
              link: "/ozonoterapia",
            },
            {
              title: "Ozonoterapia Avanzata",
              image: "/images/ozonoterapia.jpg",
              link: "/ozonoterapia",
            },
            {
              title: "Trattamento di Ozonoterapia",
              image: "/images/ozonoterapia3.jpg",
              link: "/ozonoterapia",
            },
          ]}
        />
      </div>

      {/* Piccola Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">
              Piccola Autoemoterapia (PAET)
            </h3>

            <p className="text-lg mb-4">
              La Piccola Autoemoterapia è una delle tecniche utilizzate
              nell&apos;ozonoterapia. Consiste nel prelevare una
              <strong> piccola quantità</strong> di sangue dal paziente,
              miscelarla con ozono medicale e reiniettarla per{" "}
              <strong>via intramuscolare</strong>.
            </p>

            <p className="text-lg">
              Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
              <strong>
                antinfiammatorie, analgesiche e rigenerative
              </strong>
              . È particolarmente efficace per problematiche localizzate e per{" "}
              <strong>migliorare la risposta immunitaria</strong>{" "}
              dell&apos;organismo.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full max-w-md md:max-w-none mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1167667781?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="PAET_finale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grande Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full max-w-md md:max-w-none mx-auto">
              <iframe
                src="https://player.vimeo.com/video/1167667746?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                title="GAET_finale"
              />
            </div>
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-xl font-semibold mb-4">
              Grande Autoemoterapia (GAET)
            </h3>

            <p className="text-lg mb-4">
              La Grande Autoemoterapia rappresenta la tecnica più avanzata
              dell&apos;Ozonoterapia sistemica. Consiste nel prelevare una{" "}
              <strong>maggiore quantità di sangue</strong> dal paziente (circa
              80-240ml), ozonizzarlo in modo controllato e reinfonderlo{" "}
              <strong>per via endovenosa</strong>.
            </p>

            <p className="text-lg">
              Questo trattamento ha{" "}
              <strong>effetti sistemici profondi</strong>, stimolando il
              sistema immunitario, migliorando l&apos;ossigenazione tissutale
              e producendo{" "}
              <strong>
                potenti effetti antinfiammatori e rigenerativi
              </strong>
              . È particolarmente indicato per patologie croniche e{" "}
              <strong>condizioni sistemiche complesse</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <section className="py-8 container mx-auto px-4">
        <Accordion type="single" collapsible className="w-full">
          {/* METODI DI SOMMINISTRAZIONE */}
          <AccordionItem value="administration-methods">
            <AccordionTrigger className="text-xl md:text-2xl font-bold py-5 text-left">
              Metodi di Somministrazione
            </AccordionTrigger>

            <AccordionContent>
              <div className="prose prose-lg max-w-none leading-relaxed">
                <p className="text-xl leading-relaxed">
                  L&apos;ozonoterapia può essere somministrata localmente o
                  sistemicamente a seconda delle patologie da trattare.
                </p>

                <p className="text-xl leading-relaxed">
                  Le varie vie di somministrazione possono anche essere
                  utilizzate da sole o in combinazione, per esercitare un
                  effetto sinergico.
                </p>

                <p className="text-xl font-medium">
                  Le principali vie di somministrazione sono:
                </p>

                <h4 className="font-bold text-xl mt-6">Sistemica:</h4>

                <p className="text-xl leading-relaxed">
                  Applicata nei casi in cui la prognosi e la progressione della
                  malattia possono beneficiare della modulazione della risposta
                  infiammatoria o di un migliore apporto di ossigeno ai
                  tessuti. Questi includono:
                </p>

                <ul className="list-disc pl-6 text-lg">
                  <li>Grande Auto-emoterapia (GAET) - venosa;</li>
                  <li>
                    Piccola Auto-emoterapia Infusionale (PAEI) - muscolo
                    profondo;
                  </li>
                  <li>Rettale</li>
                </ul>

                <h4 className="font-bold text-xl mt-6">Locale:</h4>

                <p className="text-xl leading-relaxed">
                  Applicata quando c&apos;è la necessità di sfruttare gli
                  effetti analgesici, antinfiammatori e miorilassanti per
                  patologie muscolo-scheletriche, intestinali e altre. La
                  somministrazione avviene tramite:
                </p>

                <ul className="list-disc pl-6 text-lg">
                  <li>Intramuscolare, paravertebrale</li>
                  <li>Sottocutanea</li>
                  <li>Peri-articolare</li>
                  <li>Intra-articolare</li>
                  <li>Insufflazione (rettale e vaginale)</li>
                  <li>Topica con Sacca di Ozono</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* INDICAZIONI CLINICO-TERAPEUTICHE */}
          <AccordionItem value="clinical-therapeutic-indications">
            <AccordionTrigger className="text-xl md:text-2xl font-bold py-5 text-left">
              Indicazioni Clinico-Terapeutiche
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-6 pb-4">
                <p className="text-lg md:text-xl leading-relaxed">
                  Grazie alla Medicina Basata sull&apos;Evidenza (EBM), le
                  indicazioni dell&apos;ossigeno-ozonoterapia possono essere
                  suddivise in tre categorie in base al livello di evidenza
                  disponibile.
                </p>

                {/* Evidenza Tipo A */}
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                      A
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-700">
                        Evidenza di Tipo A
                      </h4>

                      <p className="mt-2 text-lg leading-relaxed text-gray-700">
                        Basata su revisioni sistematiche con omogeneità di
                        studi caso-controllo. Le principali applicazioni
                        cliniche riconosciute dal Ministero della Salute
                        includono:
                      </p>

                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg md:grid-cols-2">
                        <li>Ernie discali</li>
                        <li>Protrusioni discali</li>
                        <li>Discopatie</li>
                        <li>Sindrome faccettale</li>
                        <li>
                          Osteoartrosi, gonartrosi, condromalacia rotulea
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evidenza Tipo B */}
                <div className="rounded-xl border border-blue-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-blue-600 text-xl font-bold text-blue-600">
                      B
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-blue-700">
                        Evidenza di Tipo B
                      </h4>

                      <p className="mt-2 text-lg leading-relaxed text-gray-700">
                        Basata su singoli studi randomizzati, studi di coorte o
                        studi caso-controllo.
                      </p>

                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg md:grid-cols-2">
                        <li>Patologie ortopediche</li>
                        <li>Piede diabetico</li>
                        <li>Ulcere cutanee e ustioni</li>
                        <li>
                          Malattie cutanee acute causate da batteri, funghi o
                          virus
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evidenza Tipo C */}
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-400 text-xl font-bold text-gray-700">
                      C
                    </div>

                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800">
                        Evidenza di Tipo C
                      </h4>

                      <p className="mt-2 text-lg leading-relaxed text-gray-700">
                        Basata su opinioni di esperti senza ricerca sistematica
                        o scientifica specifica.
                      </p>

                      <ul className="mt-4 grid list-disc gap-x-8 gap-y-2 pl-6 text-lg md:grid-cols-2">
                        <li>Long Covid</li>
                        <li>Fibromialgia</li>
                        <li>Stanchezza cronica (CFS)</li>
                        <li>Stanchezza stagionale o da lavoro</li>
                        <li>
                          Debolezza generale o mancanza di energia nel
                          Parkinson
                        </li>
                        <li>Benessere post-ospedalizzazione/recupero</li>
                        <li>Artrite reumatoide, artrite psoriasica</li>
                        <li>Disfunzione erettile</li>
                        <li>
                          Malattie autoimmuni (supporto alle terapie
                          convenzionali)
                        </li>
                        <li>
                          Demenza senile/Alzheimer (complementare alla terapia
                          convenzionale)
                        </li>
                        <li>Asma</li>
                        <li>Emicranie</li>
                        <li>Cefalea a grappolo o tensiva</li>
                        <li>Problemi infettivi</li>
                        <li>Problemi circolatori</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 px-5 py-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    <strong>
                      Le indicazioni vengono valutate caso per caso.
                    </strong>{" "}
                    L&apos;ossigeno-ozonoterapia non sostituisce le terapie
                    mediche convenzionali, ma può integrarsi in un percorso
                    clinico appropriato.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* CONTROINDICAZIONI */}
          <AccordionItem value="contraindications">
            <AccordionTrigger className="text-xl md:text-2xl font-bold py-5 text-left">
              Controindicazioni
            </AccordionTrigger>

            <AccordionContent>
              <div className="prose prose-lg max-w-none leading-relaxed">
                <p className="text-lg md:text-xl leading-relaxed">
                  A concentrazioni terapeutiche,
                  l&apos;Ossigeno-Ozonoterapia non ha effetti collaterali. Non
                  è un trattamento doloroso. Non provoca reazioni allergiche.
                  Non interferisce con i farmaci in uso.
                </p>

                <p className="mt-4 text-lg md:text-xl leading-relaxed">
                  Le controindicazioni sono limitate alla GAET per le seguenti
                  condizioni:
                </p>

                <ul className="list-disc pl-6 text-lg leading-relaxed">
                  <li>Favismo</li>
                  <li>Ipertiroidismo grave</li>
                  <li>Allergie al citrato e agli anticoagulanti</li>
                  <li>Epilessia</li>
                  <li>Gravidanza</li>
                  <li>Sport agonistico</li>
                </ul>

                <p className="mt-4 text-lg md:text-xl leading-relaxed">
                  Tutti i trattamenti con ozono vengono eseguiti utilizzando
                  apparecchiature certificate, aderendo alle linee guida
                  sviluppate dalle principali società scientifiche nazionali e
                  internazionali, come:
                </p>

                <ul className="list-disc pl-6 text-lg leading-relaxed">
                  <li>
                    SIOOT (Società Scientifica Internazionale di
                    Ossigeno-Ozonoterapia)
                  </li>
                  <li>
                    Nuova FIO (Federazione Italiana di Ossigeno-Ozonoterapia)
                  </li>
                  <li>
                    ISCO3 (Comitato Scientifico Internazionale di Ozonoterapia)
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <ContactForm />
    </div>
  )
}
