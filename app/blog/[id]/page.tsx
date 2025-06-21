"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import Breadcrumb from "@/components/breadcrumb"
import { ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import AnimatedLink from "@/components/animated-link"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import QuadrantCarousel from "@/components/quadrant-carousel"
import AnimatedScrollElement from "@/components/animated-scroll-element"

interface Article {
  id: number
  title: string
  image: string
  category: "all" | "osteopathy" | "ozone-therapy" | "legal-medicine"
  content?: string
  publishDate?: string
}

const articles: Article[] = [
  {
    id: 1,
    title: "Influenza Epidemica e Ozonoterapia",
    image: "/images/articolo1.jpg",
    category: "ozone-therapy",
    publishDate: "18/01/2023",
    content: `Cos'è esattamente l'influenza?

È una malattia respiratoria acuta causata da virus influenzali appartenenti alla famiglia degli Orthomyxoviridae. Il contagio avviene tipicamente in inverno e le sue manifestazioni cliniche rappresentano un importante problema di salute pubblica, con caratteristiche simili al virus Covid-19.

L'alto tasso di contagio e l'ubiquità dei virus influenzali, trasmessi per contatto diretto, causano ondate epidemiche annuali. Il rischio di gravi complicazioni sanitarie e ospedalizzazione colpisce principalmente individui con comorbilità e malattie croniche.

Oltre all'impatto sulla salute pubblica, vanno considerati anche gli elevati costi sociali dovuti alle assenze dal lavoro, poiché il 10% della popolazione viene infettato annualmente.

I sintomi influenzali si manifestano dopo un breve periodo di incubazione di 1-2 giorni post-infezione e possono durare da 4 giorni a 2 settimane, spesso lasciando i pazienti con affaticamento, infiammazione polmonare e perdita di peso.

I Benefici dell'Ozonoterapia

L'Ossigeno-Ozonoterapia che offriamo mira a contrastare i sintomi influenzali in fase iniziale, tra cui mal di gola, congestione delle vie aeree superiori, dolori muscolari, dolori ossei e affaticamento. Grazie alle sue proprietà antivirali e immunomodulatorie, interagisce con il sistema immunitario, rafforzandolo e combattendo l'infezione virale in corso.

Ulteriori benefici di questa terapia includono una migliore ossigenazione dei tessuti, che porta a una migliore circolazione, una migliore funzione degli organi e un benessere generale.

Le sue proprietà antinfiammatorie contribuiscono a un recupero fisico e mentale più rapido, riducendo gli effetti dei danni polmonari.

Il metodo di somministrazione è sistemico o **Auto Emoterapia** (GAET), attraverso il sistema venoso. Questa procedura minimamente invasiva dura circa 30-40 minuti, sotto costante supervisione medica/infermieristica.

Il Dr. Maico Battistello, esperto in ozonoterapia, è disponibile per qualsiasi chiarimento riguardo a questo metodo innovativo, che esegue quotidianamente con eccellenti risultati.

***Non esitare a contattarci per maggiori informazioni o per fissare un appuntamento.***`,
  },
  {
    id: 2,
    title: 'Cos\'è il "Long Covid"?',
    image: "/images/articolo2.jpg",
    category: "ozone-therapy",
    publishDate: "20/12/2022",
    content: `Il Long Covid, noto anche come "sindrome post-Covid", si riferisce a sintomi persistenti dopo l'infezione da SARS-CoV-2, che durano settimane o mesi dopo la guarigione.

I sintomi, la durata e l'intensità variano significativamente da paziente a paziente.

Negli ultimi anni, i sintomi del Covid-19 si sono evoluti con le nuove varianti, ma i sintomi più comuni includono:
• Febbre, tosse, malessere generale
• Dolori muscolari e ossei
• Mal di gola, affaticamento
• Nebbia cerebrale (difficoltà di concentrazione, confusione, problemi di memoria, affaticamento cognitivo)

Il Long Covid può presentarsi in varie forme sintomatiche. Le più comuni includono i sintomi persistenti elencati sopra, ma può anche manifestarsi come:
• Dolore toracico, aritmie, fluttuazioni della pressione sanguigna
• Nausea, perdita di appetito, diarrea
• Disturbi del sonno, depressione, ansia, stress

Si ritiene che questo complesso di sintomi persistenti sia causato da una risposta immunitaria alterata, che porta a uno stato infiammatorio post-virale.

Inoltre, il Long Covid può colpire anche coloro che hanno avuto infezioni lievi o asintomatiche.

I Benefici dell'Ozonoterapia

Uno dei principali benefici dell'Ossigeno-Ozonoterapia è la sua capacità di modulare e rafforzare il sistema immunitario. Agisce come un potente antinfiammatorio, ha un effetto disintossicante e rigenerativo, e serve come efficace antivirale.

Il virus SARS-CoV-2 causa danni attraverso la disregolazione del sistema immunitario, innescando una produzione eccessiva di citochine pro-infiammatorie. Ciò porta a danni ai tessuti e agli organi, compromettendo le normali funzioni corporee.

L'effetto immunomodulatore dell'Ossigeno-Ozonoterapia aiuta a normalizzare la risposta infiammatoria del corpo.

Migliora anche l'ossigenazione in tessuti e organi come:
• Polmoni, cervello, reni, fegato, cuore e muscoli,

Fornendo notevoli benefici terapeutici per i pazienti con Long Covid.

Il trattamento utilizzato è la Grande **Auto Emoterapia** (GAET), con una durata di circa 40 minuti.

Il Dr. Maico Battistello, con la sua esperienza in questo campo terapeutico, adatterà il piano di trattamento più adatto in base alla gravità e alla durata dei sintomi del paziente.`,
  },
]

// Translate category names
const getCategoryName = (category: Article["category"]) => {
  switch (category) {
    case "osteopathy":
      return "Osteopatia"
    case "ozone-therapy":
      return "Ozonoterapia"
    case "legal-medicine":
      return "Medicina Legale"
    default:
      return "Tutti"
  }
}

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const articleId = Number.parseInt(params.id as string)

  const article = articles.find((a) => a.id === articleId)

  useEffect(() => {
    if (!article) {
      router.push("/blog")
    }
  }, [article, router])

  if (!article) {
    return null
  }

  const handleBackToList = () => {
    router.push("/blog")
  }

  return (
    <div className="pt-20 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.id}` },
        ]}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - 20% */}
          <div className="w-full lg:w-1/5">
            <div className="sticky top-24 space-y-6">
              {/* Article Info */}
              <div className="bg-gray-50 p-4 rounded-lg hidden md:block">
                <h3 className="font-semibold mb-2">Informazioni Articolo</h3>
                <p className="text-sm text-gray-600 mb-1">Categoria: {getCategoryName(article.category)}</p>
                <p className="text-sm text-gray-600">
                  Tempo di lettura: {Math.ceil((article.content?.length || 0) / 1000)} min
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - 80% */}
          <div className="w-full lg:w-4/5">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Article Header with Back Button and Metadata */}
              <div className="article-header-desktop">
                <div className="article-header-left">
                  <button
                    onClick={handleBackToList}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Torna agli articoli"
                  >
                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <div className="flex items-center ml-2">
                    <span className="text-gray-600">di Maico Battistello</span>
                    <span className="article-metadata">{article.publishDate}</span>
                  </div>
                </div>
              </div>

              {/* Article Featured Image */}
              <div className="article-image-container">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>

              {/* Article Content */}
              <div className="prose max-w-none article-content">
                {article.content?.split("\n\n").map((paragraph, index) => {
                  // Check if paragraph is a heading or subtitle
                  if (paragraph === "I Benefici dell'Ozonoterapia" || paragraph === "Cos'è esattamente l'influenza?") {
                    return (
                      <h2 key={index} className="article-subtitle">
                        {paragraph}
                      </h2>
                    )
                  }

                  // Check if paragraph contains Ozone Therapy or Oxygen-Ozone Therapy text to wrap in AnimatedLink
                  if (paragraph.includes("Ozonoterapia") || paragraph.includes("Ossigeno-Ozonoterapia")) {
                    const parts = paragraph.split(/(Ozonoterapia|Ossigeno-Ozonoterapia)/g).map((part, i) => {
                      if (part === "Ozonoterapia" || part === "Ossigeno-Ozonoterapia") {
                        return (
                          <AnimatedLink key={i} href="/ozone-therapy">
                            {part}
                          </AnimatedLink>
                        )
                      }
                      return part
                    })
                    return (
                      <p key={index} className="text-lg">
                        {parts}
                      </p>
                    )
                  }

                  // Handle bold text
                  if (paragraph.includes("**")) {
                    const parts = paragraph.split(/\*\*(.*?)\*\*/g)
                    return (
                      <p key={index} className="text-lg">
                        {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                      </p>
                    )
                  }

                  // Handle italic text
                  if (paragraph.includes("***")) {
                    const parts = paragraph.split(/\*\*\*(.*?)\*\*\*/g)
                    return (
                      <p key={index} className="text-lg">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? (
                            <em key={i} className="font-bold">
                              {part}
                            </em>
                          ) : (
                            part
                          ),
                        )}
                      </p>
                    )
                  }

                  // Regular paragraph
                  return (
                    <p key={index} className="text-lg">
                      {paragraph}
                    </p>
                  )
                })}

                {/* Insert articolo1pic.jpg after "The Benefits of Ozone Therapy" section */}
                {article.id === 1 && (
                  <div className="article-image-container">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/articolo1pic.jpg-ZLi9Q4rvxxCqyMGfn62XNPMVDnLgcH.jpeg"
                      alt="Attrezzatura per Ozonoterapia"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Book Appointment Button */}
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white hover-lift">
                  <Link href="/contacts" className="flex items-center gap-2 no-underline">
                    <Calendar className="h-5 w-5" />
                    <span>Prenota un Appuntamento</span>
                  </Link>
                </Button>
              </div>

              {/* Related Articles Section */}
              <div className="mt-16">
                <AnimatedScrollElement direction="up" delay={0.1}>
                  <h3 className="text-2xl font-bold mb-8 text-center">Articoli Correlati</h3>
                </AnimatedScrollElement>
                <AnimatedScrollElement direction="up" delay={0.3}>
                  <div className="max-w-4xl mx-auto">
                    <QuadrantCarousel
                      items={articles
                        .filter(
                          (relatedArticle) =>
                            relatedArticle.category === article.category && relatedArticle.id !== article.id,
                        )
                        .map((relatedArticle) => ({
                          title: relatedArticle.title,
                          image: relatedArticle.image,
                          link: `/blog/${relatedArticle.id}`,
                        }))}
                    />
                  </div>
                </AnimatedScrollElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
