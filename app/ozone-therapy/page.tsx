"use client"
import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import QuadrantCarousel from "@/components/quadrant-carousel"
import Link from "next/link"

export default function OzoneTherapyPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Ozonoterapia", href: "/ozononoterapia" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
       <div className="prose prose-lg max-w-none leading-relaxed">
          <h2 className="text-2xl font-semibold mb-6">Cos'è l'Ozonoterapia?</h2>

<p className="text-lg mb-6">
  L’<strong>ossigeno-ozonoterapia</strong> utilizza una miscela di ossigeno e ozono impiegata in diversi ambiti della pratica medica come supporto nel trattamento di specifiche condizioni cliniche. Le modalità di applicazione vengono valutate dal medico in base alle caratteristiche del paziente e al quadro clinico.

  L’<strong>ozono medicale</strong> è oggetto di interesse per le sue proprietà biologiche e viene utilizzato, in contesti appropriati, come supporto nei percorsi terapeutici rivolti a <strong>patologie muscolo-scheletriche</strong>, stati infiammatori e condizioni dolorose.

  Per le sue caratteristiche di <strong>minima invasività</strong>, l’ossigeno-ozonoterapia viene integrata in protocolli personalizzati dopo una <strong>valutazione medica specialistica</strong>, con l’obiettivo di favorire il benessere della persona e il recupero della <strong>funzionalità</strong>.
</p>

        </div>
      </div>

      {/* Cities Links Section */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-semibold mb-3">📍 Trattamenti di Ozonoterapia nelle principali città</h3>
          <p className="mb-4">Il Dr. Maico Battistello offre trattamenti di ozonoterapia anche presso:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/ozonoterapia-padova" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Ozonoterapia a Padova
            </Link>
            <Link href="/ozonoterapia-vicenza" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Ozonoterapia a Marostica
            </Link>
            <Link href="/ozonoterapia-schio" className="text-blue-600 hover:text-blue-800 underline font-medium">
              → Ozonoterapia a Schio
            </Link>
            <Link href="/ozonoterapia-malo" className="text-blue-600 hover:text-blue-800 underline font-medium">
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
              link: "/ozone-therapy",
            },
            {
              title: "Terapia Integrata",
              image: "/images/osteozonoterapia1.jpg",
              link: "/ozone-therapy",
            },
            {
              title: "Risultati Clinici",
              image: "/images/osteozonoterapia2.jpg",
              link: "/ozone-therapy",
            },
            {
              title: "Ozonoterapia Avanzata",
              image: "/images/ozonoterapia.jpg",
              link: "/ozone-therapy",
            },
            {
              title: "Trattamento di Ozonoterapia",
              image: "/images/ozonoterapia3.jpg",
              link: "/ozone-therapy",
            },
          ]}
        />
      </div>

      {/* Piccola Autoemoterapia Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Piccola Autoemoterapia (PAET)</h3>
            <p className="text-lg mb-4">
              La Piccola Autoemoterapia è una delle tecniche utilizzate nell'ozonoterapia. Consiste nel prelevare una
              <strong> piccola quantità</strong> di sangue dal paziente, miscelarla con ozono medicale e reiniettarla
              per <strong>via intramuscolare</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento stimola il sistema immunitario e ha proprietà{" "}
              <strong>antinfiammatorie, analgesiche e rigenerative</strong>. È particolarmente efficace per
              problematiche localizzate e per <strong>migliorare la risposta immunitaria</strong> dell'organismo.
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
            <h3 className="text-xl font-semibold mb-4">Grande Autoemoterapia (GAET)</h3>
            <p className="text-lg mb-4">
              La Grande Autoemoterapia rappresenta la tecnica più avanzata dell'Ozonoterapia sistemica. Consiste nel
              prelevare una <strong>maggiore quantità di sangue</strong> dal paziente (circa 80-240ml), ozonizzarlo in
              modo controllato e reinfonderlo <strong>per via endovenosa</strong>.
            </p>
            <p className="text-lg">
              Questo trattamento ha <strong>effetti sistemici profondi</strong>, stimolando il sistema immunitario,
              migliorando l'ossigenazione tissutale e producendo{" "}
              <strong>potenti effetti antinfiammatori e rigenerativi</strong>. È particolarmente indicato per patologie
              croniche e <strong>condizioni sistemiche complesse</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Collapsible Sections */}
      <section className="py-8 container mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="administration-methods">
            <AccordionTrigger className="text-2xl font-bold py-5">Metodi di Somministrazione</AccordionTrigger>
            <AccordionContent>
          <div className="prose prose-lg max-w-none leading-relaxed">
  <p className="text-xl leading-relaxed">
    L'ozonoterapia può essere somministrata localmente o sistemicamente a seconda delle patologie da trattare.
  </p>

  <p className="text-xl leading-relaxed">
    Le varie vie di somministrazione possono anche essere utilizzate da sole o in combinazione, per esercitare un effetto sinergico.
  </p>

  <p className="text-xl font-medium">
    Le principali vie di somministrazione sono:
  </p>

  <h4 className="font-bold text-xl mt-6">Sistemica:</h4>
  <p className="text-xl leading-relaxed">
    Applicata nei casi in cui la prognosi e la progressione della malattia possono beneficiare della modulazione della risposta infiammatoria o di un migliore apporto di ossigeno ai tessuti. Questi includono:
  </p>
  <ul className="list-disc pl-6 text-lg">
    <li>Grande Auto-emoterapia (GAET) - venosa;</li>
    <li>Piccola Auto-emoterapia Infusionale (PAEI) - muscolo profondo;</li>
    <li>Rettale</li>
  </ul>

  <h4 className="font-bold text-xl mt-6">Locale:</h4>
  <p className="text-xl leading-relaxed">
    Applicata quando c'è la necessità di sfruttare gli effetti analgesici, antinfiammatori e miorilassanti per patologie muscolo-scheletriche, intestinali e altre. La somministrazione avviene tramite:
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

          <AccordionItem value="clinical-therapeutic-indications">
            <AccordionTrigger className="text-2xl font-bold py-5">Indicazioni Clinico-Terapeutiche</AccordionTrigger>
            <AccordionContent>
        <div className="prose prose-lg max-w-none leading-relaxed">
<p className="text-xl">
   L&apos;ossigeno-ozonoterapia può essere utilizzata come supporto in diversi quadri clinici, sempre dopo una valutazione medica e all&apos;interno di un percorso personalizzato.
</p>
<h4 className="font-bold text-2xl mt-8">Dolore e colonna vertebrale</h4>

<ul className="list-disc pl-6 text-lg">
  <li><strong>Ernie discali</strong></li>
  <li><strong>Protrusioni discali</strong></li>
  <li>Discopatie</li>
  <li>Sindrome faccettale</li>
  <li>Lombalgia e dolore muscolo-scheletrico</li>
</ul>
<h4 className="font-bold text-2xl mt-8">Articolazioni e infiammazione</h4>

<ul className="list-disc pl-6 text-lg">
  <li><strong>Artrosi</strong></li>
  <li>Gonartrosi</li>
  <li>Patologie ortopediche</li>
  <li>Artrite reumatoide e artrite psoriasica</li>
  <li>Tendinopatie e condizioni infiammatorie</li>
</ul>
  

<h4 className="font-bold text-2xl mt-8">Cute e circolazione</h4>
  <ul className="list-disc pl-6 text-lg">
    <li>Piede diabetico</li>
    <li>Ulcere cutanee e ustioni</li>
    <li>Problemi circolatori</li>
    <li>Lesioni cutanee di difficile guarigione</li>
  </ul>

<h4 className="font-bold text-2xl mt-8">Altri ambiti di supporto</h4>
  <ul className="list-disc pl-6 text-lg">
    <li><strong>Fibromialgia</strong></li>
    <li><strong>Long Covid</strong></li>
    <li>Stanchezza cronica</li>
    <li>Emicrania e cefalea tensiva</li>
    <li>Benessere post-ospedalizzazione/recupero</li>
  </ul>

<p className="text-lg text-gray-600 mt-8 leading-relaxed">
    Le indicazioni vengono valutate caso per caso. L'ossigeno-ozonoterapia non sostituisce le terapie mediche convenzionali, ma può integrarsi in un percorso clinico appropriato.
  </p>
</div>
</AccordionContent>
</AccordionItem>

          <AccordionItem value="contraindications">
            <AccordionTrigger className="text-2xl font-bold py-5">Controindicazioni</AccordionTrigger>
            <AccordionContent>
             <div className="prose prose-lg max-w-none leading-relaxed">
                <p className="text-lg">
                  A concentrazioni terapeutiche, l'Ossigeno-Ozonoterapia non ha effetti collaterali. Non è un
                  trattamento doloroso. Non provoca reazioni allergiche. Non interferisce con i farmaci in uso.
                </p>

                <p className="text-lg mt-4">Le controindicazioni sono limitate alla GAET per le seguenti condizioni:</p>
               <ul className="list-disc pl-6 text-lg">
                  <li>Favismo</li>
                  <li>Ipertiroidismo grave</li>
                  <li>Allergie al citrato e agli anticoagulanti</li>
                  <li>Epilessia</li>
                  <li>Gravidanza</li>
                  <li>Sport agonistico</li>
                </ul>

                <p className="text-lg mt-4">
                  Tutti i trattamenti con ozono vengono eseguiti utilizzando apparecchiature certificate, aderendo alle
                  linee guida sviluppate dalle principali società scientifiche nazionali e internazionali, come:
                </p>
               <ul className="list-disc pl-6 text-lg">
                  <li>SIOOT (Società Scientifica Internazionale di Ossigeno-Ozonoterapia)</li>
                  <li>Nuova FIO (Federazione Italiana di Ossigeno-Ozonoterapia)</li>
                  <li>ISCO3 (Comitato Scientifico Internazionale di Ozonoterapia)</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
