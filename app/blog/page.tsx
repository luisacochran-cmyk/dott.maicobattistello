"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Breadcrumb from "@/components/breadcrumb"
import { Search, ChevronDown, ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import AnimatedLink from "@/components/animated-link"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedScrollElement from "@/components/animated-scroll-element"

type Category = "all" | "osteopathy" | "ozone-therapy" | "legal-medicine"

interface Article {
  id: number
  title: string
  image: string
  category: Category
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
  // Manteniamo solo i primi due articoli reali e rimuoviamo tutti gli altri placeholder
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)
  const [highlightedContent, setHighlightedContent] = useState<string | null>(null)
  const articlesPerPage = 15

  const filterRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isFilterOpen])

  // Effect to highlight search terms in article content
  useEffect(() => {
    if (activeArticle && searchTerm.trim()) {
      const content = activeArticle.content || ""
      const regex = new RegExp(`(${searchTerm})`, "gi")
      const highlighted = content.replace(regex, '<span class="bg-yellow-200 underline">$1</span>')
      setHighlightedContent(highlighted)
    } else if (activeArticle) {
      setHighlightedContent(null)
    }
  }, [searchTerm, activeArticle])

  const filteredArticles = articles.filter((article) => {
    if (activeArticle) {
      // When viewing an article, don't filter the list
      return true
    }
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const currentArticles = filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage)

  const handleArticleClick = (article: Article, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveArticle(article)
    setSearchTerm("") // Clear search when opening an article
    setHighlightedContent(null)
    // Scroll to top when viewing an article
    window.scrollTo(0, 0)
  }

  const handleBackToList = () => {
    setActiveArticle(null)
    setSearchTerm("") // Clear search when returning to list
    setHighlightedContent(null)
  }

  // Generate breadcrumb items based on current view
  const getBreadcrumbItems = () => {
    const baseItems = [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
    ]

    if (activeArticle) {
      return [...baseItems, { label: activeArticle.title, href: `/blog/${activeArticle.id}` }]
    }

    return baseItems
  }

  // Translate category names
  const getCategoryName = (category: Category) => {
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

  return (
    <div className="pt-20 min-h-screen">
      <Breadcrumb items={getBreadcrumbItems()} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - 20% */}
          <div className="w-full lg:w-1/5">
            <div className="sticky top-24 space-y-6">
              {/* Filtri e ricerca - Riorganizzati per mobile */}
              {!activeArticle && (
                <div className="flex flex-col space-y-4">
                  {/* Category Filter - Mostrato per primo su mobile */}
                  <div className="order-1 lg:order-2 category-dropdown-container relative z-50" ref={filterRef}>
                    <button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="w-full px-4 py-2 text-left border rounded-md flex justify-between items-center hover:bg-gray-50"
                    >
                      <span>Categoria: {getCategoryName(selectedCategory)}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isFilterOpen && (
                      <div
                        className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-[200px] overflow-y-auto"
                        style={{ top: "calc(100% + 4px)" }}
                      >
                        {["all", "osteopathy", "ozone-therapy", "legal-medicine"].map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category as Category)
                              setIsFilterOpen(false)
                              setCurrentPage(1)
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm md:text-base"
                          >
                            {getCategoryName(category as Category)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Search Bar - Mostrato per secondo su mobile */}
                  <div className="order-2 lg:order-1 relative">
                    <input
                      type="text"
                      placeholder="Cerca articolo..."
                      className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
              )}

              {/* Search Bar - Solo quando si visualizza un articolo */}
              {activeArticle && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cerca parole chiave..."
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              )}

              {/* Article Info - Only shown when viewing an article on desktop */}
              {activeArticle && (
                <div className="bg-gray-50 p-4 rounded-lg hidden md:block">
                  <h3 className="font-semibold mb-2">Informazioni Articolo</h3>
                  <p className="text-sm text-gray-600 mb-1">Categoria: {getCategoryName(activeArticle.category)}</p>
                  <p className="text-sm text-gray-600">
                    Tempo di lettura: {Math.ceil((activeArticle.content?.length || 0) / 1000)} min
                  </p>
                </div>
              )}

              {/* Pagination Info and Controls - Only shown when not viewing an article */}
              {!activeArticle && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    Pagina {currentPage} di {totalPages}
                  </div>

                  {/* Desktop Pagination Controls */}
                  <div className="hidden lg:flex items-center gap-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-50"
                    >
                      Precedente
                    </button>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 text-sm border rounded-md disabled:opacity-50 hover:bg-gray-50"
                    >
                      Successiva
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - 80% */}
          <div className="w-full lg:w-4/5">
            {activeArticle ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Article Header with Back Button and Metadata - Aligned horizontally on desktop */}
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
                      <span className="article-metadata">{activeArticle.publishDate}</span>
                    </div>
                  </div>
                </div>

                {/* Article Featured Image */}
                <div className="article-image-container">
                  <Image
                    src={activeArticle.image || "/placeholder.svg"}
                    alt={activeArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose max-w-none article-content">
                  {activeArticle.content.split("\n\n").map((paragraph, index) => {
                    // Check if paragraph is a heading or subtitle
                    if (
                      paragraph === "I Benefici dell'Ozonoterapia" ||
                      paragraph === "Cos'è esattamente l'influenza?"
                    ) {
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
                  {activeArticle.id === 1 && (
                    <div className="article-image-container">
                      <Image
                        src="/images/design-mode/articolo1pic.jpg.jpeg"
                        alt="Attrezzatura per Ozonoterapia"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Book Appointment Button with hover-lift animation */}
                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white hover-lift">
                    <Link href="/contacts" className="flex items-center gap-2 no-underline">
                      <Calendar className="h-5 w-5" />
                      <span>Prenota un Appuntamento</span>
                    </Link>
                  </Button>
                </div>

                {/* Related Articles Section */}
                {activeArticle && (
                  <div className="mt-16">
                    <AnimatedScrollElement direction="up" delay={0.1}>
                      <h3 className="text-2xl font-bold mb-8 text-center">Articoli Correlati</h3>
                    </AnimatedScrollElement>
                    <AnimatedScrollElement direction="up" delay={0.3}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles
                          .filter(
                            (article) => article.category === activeArticle.category && article.id !== activeArticle.id,
                          )
                          .map((article) => (
                            <div
                              key={article.id}
                              onClick={(e) => handleArticleClick(article, e)}
                              className="cursor-pointer group"
                            >
                              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="relative h-48 overflow-hidden rounded-t-lg">
                                  <Image
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    fill
                                    className="object-cover transform transition-transform group-hover:scale-105"
                                  />
                                </div>
                                <div className="p-4">
                                  <h4 className="text-lg font-semibold">{article.title}</h4>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </AnimatedScrollElement>
                  </div>
                )}
              </div>
            ) : (
              <>
                {currentArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {currentArticles.map((article) => (
                      <AnimatedScrollElement key={article.id} direction="up" delay={0.1}>
                        <a
                          href={`/blog/${article.id}`}
                          onClick={(e) => handleArticleClick(article, e)}
                          className="group w-full"
                        >
                          <div className="blog-card shadow-md hover:shadow-lg transition-shadow w-full">
                            <div className="blog-card-image h-64 sm:h-48">
                              <Image
                                src={article.image || "/placeholder.svg"}
                                alt={article.title}
                                fill
                                className="object-cover transform transition-transform group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold">{article.title}</h3>
                              {article.category !== "all" && (
                                <span className="text-sm text-gray-600">{getCategoryName(article.category)}</span>
                              )}
                            </div>
                          </div>
                        </a>
                      </AnimatedScrollElement>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">Nessun articolo trovato.</p>
                  </div>
                )}

                {/* Mobile Pagination */}
                <div className="mt-8 flex justify-center lg:hidden">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border rounded-md disabled:opacity-50 hover-lift"
                    >
                      Precedente
                    </button>
                    <span className="text-sm text-gray-600">
                      Pagina {currentPage} di {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border rounded-md disabled:opacity-50 hover-lift"
                    >
                      Successiva
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
