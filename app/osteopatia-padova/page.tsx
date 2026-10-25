import type { Metadata } from "next"
import { cities, services, generateLocalSEO } from "@/lib/seo-config"
import {
  LandingPage,
  LandingSezione,
  LandingNota,
  LandingLink,
} from "@/components/landing-layout"

const city = cities.find((c) => c.slug === "padova")!
const service = services.find((s) => s.slug === "osteopatia")!
const seoData = generateLocalSEO(service, city)

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  alternates: {
    canonical: seoData.canonical,
  },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: seoData.canonical,
  },
}

export default function OsteopatiaPadovaPage() {
  return (
    <LandingPage
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Osteopatia", href: "/osteopatia" },
        { label: city.name, href: `/osteopatia-${city.slug}` },
      ]}
      etichetta={`Osteopatia · ${city.name}`}
      titolo={seoData.h1}
      intro={
        <>
          <p>
            L&apos;<strong>Osteopatia</strong> è una disciplina manuale che
            considera la persona nella sua globalità, valutando le relazioni
            tra apparato muscolo-scheletrico, postura e funzionalità del
            movimento.
          </p>
          <p>
            A <strong>Padova</strong>, il Dott. Maico Battistello offre{" "}
            <strong>trattamenti osteopatici personalizzati</strong> rivolti a
            persone che presentano dolori muscolo-scheletrici, limitazioni
            funzionali o disturbi correlati alla postura e alla mobilità
            articolare.
          </p>
          <p>
            Ogni percorso viene adattato alle esigenze del singolo paziente
            attraverso una valutazione individuale, con l&apos;obiettivo di
            favorire il recupero della <strong>funzionalità</strong>, dell&apos;
            <strong>equilibrio corporeo</strong> e del benessere generale della
            persona.
          </p>
        </>
      }
      carosello={[
        { title: "Trattamento Osteopatico", image: "/images/nuovaosteo1.jpg", link: "/osteopatia" },
        { title: "Manipolazione Cranio-Sacrale", image: "/images/nuovaosteo2.jpg", link: "/osteopatia" },
        { title: "Trattamento Viscerale", image: "/images/nuovaosteo3.jpg", link: "/osteopatia" },
        { title: "Osteopatia Cervicale", image: "/images/osteopatiacervicale.jpg", link: "/osteopatia" },
      ]}
      datiStrutturati={seoData.structuredData}
    >
      <LandingSezione
        etichetta="Area geografica"
        titolo="Un riferimento per Padova e l'area padovana"
      >
        <p>
          Lo studio di <strong>Padova</strong> è un riferimento anche per chi
          proviene da{" "}
          <strong>
            Abano Terme, Selvazzano Dentro, Albignasego, Vigonza e Cadoneghe
          </strong>
          , oltre che dagli altri comuni dell&apos;area padovana.
        </p>
      </LandingSezione>

      <LandingSezione etichetta="L'approccio integrato" titolo="Osteopatia e ozonoterapia insieme">
        <LandingNota>
          Nella pratica del Dott. Maico Battistello l&apos;osteopatia è parte di
          un <strong>approccio integrato</strong> con l&apos;ozonoterapia.
        </LandingNota>
        <p>
          <LandingLink href="/ozono-osteo-padova">
            Scopri l&apos;approccio integrato a Padova
          </LandingLink>
        </p>
      </LandingSezione>
    </LandingPage>
  )
}
