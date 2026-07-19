"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Breadcrumb from "@/components/breadcrumb"
import { Search, ChevronDown, ArrowLeft, Calendar } from 'lucide-react'
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

Il metodo di somministrazione è sistemico o Auto Emoterapia (GAET), attraverso il sistema venoso. Questa procedura minimamente invasiva dura circa 30-40 minuti, sotto costante supervisione medica/infermieristica.

Il Dr. Maico Battistello, esperto in ozonoterapia, è disponibile per qualsiasi chiarimento riguardo a questo metodo innovativo, che esegue quotidianamente con eccellenti risultati.

Non esitare a contattarci per maggiori informazioni o per fissare un appuntamento.

---

### Attrezzatura per Ozonoterapia

Questo è un esempio di sottotitolo che dovrebbe essere gestito come un h3.
`,
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

Il trattamento utilizzato è la Grande Auto Emoterapia (GAET), con una durata di circa 40 minuti.

Il Dr. Maico Battistello, con la sua esperienza in questo campo terapeutico, adatterà il piano di trattamento più adatto in base alla gravità e alla durata dei sintomi del paziente.`,
  },
  {
    id: 3,
    title:
      "Malanni stagionali e difese naturali: il ruolo dell'ossigeno-ozonoterapia integrata con osteopatia, Grande Autoemoterapia (GAET) e Piccola Autoemoterapia (PAET)",
    image: "/images/nuovaozono2.jpg",
    category: "ozone-therapy",
    publishDate: "11/10/2025",
    content: `Con l'arrivo dell'autunno aumentano stanchezza, dolori articolari e muscolari, cervicalgie, lombalgie, sinusiti e cali delle difese. L'ossigeno-ozonoterapia, integrata alla manipolazione osteopatica e alle metodiche sistemiche come GAET e PAET, offre un approccio clinico sinergico in grado di ridurre l'infiammazione, migliorare il bilancio redox, sostenere l'immunità e ristabilire la funzione biomeccanica.

---

### I malanni autunnali: cosa succede all'organismo

Il passaggio alla stagione fredda comporta riduzione dell'esposizione solare, maggiore umidità e oscillazioni termiche. Questi fattori si associano a una diminuzione della vitamina D, a un incremento dello stress ossidativo e a un'iper-reattività neurovegetativa. Il risultato clinico è spesso una somma di disturbi: riacutizzazione di artrosi e tendinopatie, dolore miofasciale diffuso, peggioramento di lombalgie e cervicalgie, frequenti infezioni delle vie aeree superiori e senso di fatica prolungata. Molti quadri possono essere riletti come una condizione di infiammazione cronica di basso grado con alterazioni della microcircolazione, della viscosità ematica e del metabolismo mitocondriale.

---

### Ossigeno-ozonoterapia: meccanismi chiave (azione antinfiammatoria e redox)

L'ozono medicale è una miscela di ossigeno e ozono in concentrazione controllata, somministrata in condizioni di sicurezza e con protocolli standardizzati. A basse dosi terapeutiche agisce come un 'eustress' controllato che innesca risposte adattative: up-regolazione degli enzimi antiossidanti (SOD, catalasi, glutatione-perossidasi), riduzione delle specie reattive dell'ossigeno in eccesso, modulazione delle citochine pro-infiammatorie (es. TNF-α, IL-6) e incremento di quelle anti-infiammatorie. A livello microcircolatorio migliora la deformabilità eritrocitaria, l'ossigenazione tissutale e il rilascio di NO endoteliale, con beneficio su dolore ischemico, edema e rigidità. Questi effetti spiegano perché le infiltrazioni locali risultino utili in artrosi, tendinopatie, sindromi miofasciali e dorsalgie ricorrenti.

---

### Integrazione con l'osteopatia: sinergia biomeccanica-neurovegetativa

Le disfunzioni somatiche (rigidità articolari, restrizioni fasciali, ipertono paravertebrale) mantengono il circolo vizioso dolore-spasmo-ischemia. La manipolazione osteopatica mirata ripristina la mobilità segmentaria, migliora il drenaggio venoso e linfatico, riequilibra il tono del sistema nervoso autonomo e riduce gli input nocicettivi periferici. Quando la manipolazione precede o segue l'infiltrazione di ozono, i tessuti risultano più ricettivi: si riduce la pressione intratissutale, aumenta l'irrorazione e l'effetto antalgico tende a stabilizzarsi. Questa logica 'biochimica + biomeccanica' è particolarmente efficace su lombalgie e cervicalgie da overuse, cefalee miotensive, sindromi miofasciali stagionali, dolori artrosi alle ginocchia e alle articolazioni delle anche. L'associazione di trattamenti infiltrativi di ossigeno-ozono con la manipolazione osteopatica trova inoltre indicazione nei processi degenerativi a carico dei tendini della cuffia dei rotatori, nella coxartrosi e nella gonartrosi. In questi quadri, la sinergia tra l'effetto antinfiammatorio e biostimolante dell'ozono e il riequilibrio biomeccanico osteopatico favorisce la riduzione del dolore, il miglioramento dell'articolarità e il rallentamento della progressione degenerativa articolare.

---

### Grande Autoemoterapia (GAET): effetto sistemico su infiammazione, energia e immunità

La GAET prevede il prelievo di una quantità controllata di sangue venoso che viene miscelato con ossigeno-ozono e reinfuso endovena. L'esposizione controllata all'ozono attiva vie di segnalazione Nrf2-Keap1 con aumento della sintesi di glutatione e normalizzazione del bilancio redox; parallelamente si osserva una tendenza alla riduzione delle citochine pro-infiammatorie e un miglioramento dell'efficienza mitocondriale (maggior disponibilità di ATP e migliore ossigenazione tissutale). Sul piano clinico, ciò si traduce in calo della fatica, maggiore resilienza agli stress stagionali e riduzione delle riacutizzazioni dolorose diffuse.

Numerose evidenze suggeriscono inoltre che la GAET possa contribuire al riequilibrio immunitario nei soggetti affetti da patologie autoimmunitarie. Il suo effetto di modulazione del sistema redox e dell'espressione citochinica aiuta a contenere i processi infiammatori autoindotti e a migliorare la risposta sistemica, offrendo un supporto complementare in quadri come artrite reumatoide, stanchezza cronica e fibromialgia.

Indicazioni tipiche in stagione: astenia prolungata post-infettiva, riacutizzazioni di dolore cronico disfunzionale, recupero lento dopo periodi di stress o infezioni respiratorie ricorrenti, supporto nei pazienti con comorbidità che necessitano di un 'reset' del sistema ossido-riduttivo.

---

### Piccola Autoemoterapia (PAET): modulazione immunitaria 'dolce'

La PAET utilizza piccole quantità di sangue ozonizzato re-iniettate per via intramuscolare. L'obiettivo è uno stimolo immunitario graduale e una regolazione del microambiente citochinico e redox. In ottica stagionale può aiutare i soggetti con infezioni ricorrenti delle vie aeree superiori, convalescenze prolungate e profili di iper-reattività infiammatoria. La PAET è spesso combinata con cicli brevi di GAET per massimizzare l'effetto sistemico mantenendo un'ottima tollerabilità.

---

### Protocollo integrato: infiltrazioni mirate + osteopatia + GAET/PAET

Un percorso integrato tipico in autunno può prevedere: Valutazione clinico-funzionale completa; sedute di osteopatia per liberare i distretti più rigidi (cervico-dorso-lombare, cingoli); infiltrazioni di ossigeno-ozonoterapia su punti trigger, articolazioni o piani paravertebrali; GAET per il riequilibrio sistemico del bilancio redox e dell'assetto citochinico; PAET per rinforzare lo stimolo immunitario. Il numero e la frequenza delle sedute dipendono da età, comorbidità, intensità del dolore e obiettivi funzionali (ritorno al lavoro/sport).

---

### Personalizzazione clinica: sportivi, anziani, pazienti cronici

Sportivi: focus su recupero muscolare e prevenzione delle recidive; infiltrazioni a basso volume su strutture sovraccariche, osteopatia per normalizzare catene miofasciali, migliorando l'elasticità e la funzionalità articolare.

Anziani: priorità a microcircolazione, mobilità articolare e riduzione dell'uso di analgesici; sedute più ravvicinate ma di intensità prudente; PAET come stimolo immunitario tollerabile.

Pazienti cronici: obiettivo riduzione del 'rumore infiammatorio' sistemico; GAET ciclica, infiltrazioni conservative e manipolazione dolce, monitorando marker clinici (dolore, funzione, sonno, tolleranza allo sforzo).

---

### Sicurezza e controindicazioni

Somministrata da personale medico formato, l'ossigeno-ozonoterapia presenta un profilo di sicurezza favorevole. Le reazioni locali (fastidio, tensione, modesto ematoma) sono generalmente transitorie. GAET/PAET richiedono protocolli e materiali certificati e il rispetto di controindicazioni relative (deficit G6PD, ipertiroidismo non controllato, gravidanza, episodi convulsivi non stabilizzati, intolleranze specifiche). La valutazione anamnestica e la scelta del dosaggio sono centrali per mantenere un'elevato rapporto beneficio/rischio.

---

### Conclusioni: perché puntare su un approccio integrato in autunno

Nei mesi autunnali il carico infiammatorio e lo stress ossidativo tendono a crescere, con ricadute su dolore, mobilità e immunità. L'integrazione di ossigeno-ozonoterapia infiltrativa con osteopatia, associata a GAET e PAET quando indicato, permette di agire su più livelli: biochimico, microcircolatorio e biomeccanico. Il risultato è una maggiore resilienza stagionale, una riduzione dei sintomi e un recupero funzionale più stabile. La personalizzazione del protocollo, basata su quadro clinico e obiettivi del paziente, è la chiave per ottenere benefici duraturi con un'elevata tollerabilità.

---

### BIBLIOGRAFIA ESSENZIALE

Selezionare di seguito per leggere le fonti peer-reviewed:`,
  },
  {
    id: 4,
   title: "Infiammazione Cronica di Basso Grado: Cos'è e Perché Causa Dolori Articolari Persistenti",
 image: "/images/infiammazione-cronica-maico.png",
category: "ozone-therapy",
publishDate: "19/07/2026",
   content: `L'infiammazione cronica di basso grado (Systemic Chronic Inflammation - SCI) rappresenta uno dei principali motori biologici dei disturbi del nostro tempo.

A differenza dell'infiammazione acuta – che è una risposta visibile, protettiva e temporanea a un danno (come una distorsione o un'infezione) – il processo cronico si sviluppa in modo subdolo. Rimane al di sotto della soglia del dolore evidente per anni, agendo nell'ombra.

Oggi la letteratura scientifica internazionale riconosce questo stato infiammatorio come uno dei principali fattori coinvolti nello sviluppo e nel mantenimento di numerose patologie multifattoriali:

• **Patologie osteo-articolari:** degradazione accelerata delle cartilagini, artrosi, rigidità e flogosi sinoviale persistente.

• **Patologie neurodegenerative:** innesco di processi neuroinfiammatori associati al declino cognitivo.

• **Disordini immunologici e autoimmuni:** perdita dell'equilibrio e della tolleranza immunitaria, che porta il corpo ad attaccare se stesso.

• **Oncologia:** numerosi studi stanno approfondendo il ruolo dell'infiammazione cronica nella creazione di un microambiente favorevole allo sviluppo e alla progressione di alcune neoplasie.

Per questa ragione, la medicina moderna non può limitarsi alla temporanea soppressione del sintomo locale. È fondamentale intervenire in modo strategico e multidisciplinare sui meccanismi biologici che mantengono attivo il processo infiammatorio.

"Nel mio lavoro, il trattamento non parte mai da una tecnica precostituita, ma dalla comprensione clinica del problema. Solo integrando l'azione locale sulle articolazioni con un riequilibrio generale dell'organismo possiamo spezzare il circolo vizioso del dolore e della degenerazione dei tessuti."

---

### Le Terapie Mediche in Studio

All'interno del percorso clinico, eseguo e prescrivo direttamente trattamenti mirati basati su solide evidenze scientifiche:

• **Ozonoterapia Infiltrativa e Trattamento Osteopatico:** Una sinergia terapeutica locale. L'ozono agisce riducendo la flogosi e migliorando il microcircolo nell'area colpita dal dolore, mentre la manipolazione osteopatica ripristina la corretta biomeccanica articolare, riduce le tensioni muscolari e favorisce il drenaggio linfatico.

• **Grande Autoemoterapia (GAEI):** Rappresenta l'approccio d'elezione a livello sistemico. Attraverso una miscela controllata di ossigeno e ozono, questo trattamento attiva la risposta antiossidante endogena del corpo, esercita una potente azione anti-infiammatoria globale, ottimizza l'ossigenazione dei tessuti e stimola profondamente i naturali processi rigenerativi.

• **Prescrizione Nutraceutica Personalizzata:** L'utilizzo mirato di molecole naturali standardizzate di altissima qualità, essenziali per supportare i processi biologici di risoluzione dell'infiammazione, al di fuori delle mode commerciali.

---

### L'Approccio Multidisciplinare e lo Stile di Vita

Per consolidare i risultati ottenuti in studio, l'approccio clinico si estende alla collaborazione con professionisti esterni specializzati:

• **Nutrizione Clinica Funzionale:** definizione di piani alimentari su misura, prevalentemente vegetali e a basso impatto glicemico, elaborati in collaborazione con professionisti qualificati.

• **Meditazione e Gestione dello Stress:** Un pilastro cruciale per regolare l'asse neuro-endocrino. Ridurre lo stress favorisce una migliore regolazione della risposta infiammatoria sistemica.

• **Attività Fisica Adattata:** Collaborazione diretta con i personal trainer o gli istruttori di fiducia dei pazienti per impostare schemi di lavoro ad hoc, calibrati per evitare sovraccarichi dannosi.

---

### Conclusioni: Oltre il Semplice Sintomo

L'infiammazione cronica di basso grado rappresenta oggi una delle principali sfide della medicina moderna. Comprenderne il ruolo significa andare oltre la semplice gestione del sintomo e ricercare le cause che contribuiscono a mantenere il dolore e limitare il recupero.

Ogni paziente merita un percorso costruito sulle proprie caratteristiche cliniche. Per questo motivo non applico protocolli identici per tutti, ma integro le diverse competenze e gli strumenti terapeutici più appropriati solo dopo un'attenta valutazione medica.

**Il trattamento non inizia con una tecnica. Inizia con la comprensione del problema.**

Se soffri di dolore persistente, rigidità articolare o disturbi che continuano a ripresentarsi nel tempo, il primo passo è individuare la causa che li alimenta.

---

### Prenota una Visita Specialistica

Se desideri valutare il tuo stato infiammatorio e strutturare un percorso terapeutico personalizzato, il Dott. Maico Battistello riceve su appuntamento presso gli studi di:

• **Marostica**

• **Malo**

• **Schio**

• **Padova**


`,
  },
]

type BibliographyDropdownProps = {}
const BibliographyDropdown: React.FC<BibliographyDropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const bibliographyItems = [
    "Bocci V, Zanardi I, Travagli V. 'Ozone acting on human blood yields a hormetic dose-response relationship.' Medical Gas Research.",
    "Re L, Malcangi G, Martinez-Sanchez G. 'Ozone therapy: A clinical overview and mechanisms.' Evidence-Based Complementary and Alternative Medicine.",
    "Smith NL, Wilson AL, Gandhi J, Vatsia S, Khan SA. 'Ozone therapy: An overview of pharmacodynamics, current research, and therapeutic potential.' Medical Gas Research.",
    "Elvis AM, Ekta JS. 'Ozone therapy: A clinical review.' Journal of Natural Science, Biology and Medicine.",
    "Borrelli E, et al. 'Mechanisms of action of ozone therapy in medical practice.' International Journal of Ozone Therapy.",
  ]

  return (
    <div className="bibliography-dropdown-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
      >
        <span className="font-semibold text-blue-900">📚 Riferimenti Bibliografici</span>
        <ChevronDown className={`h-5 w-5 transition-transform text-blue-600 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-lg space-y-3">
          {bibliographyItems.map((item, index) => (
            <div key={index} className="flex gap-3 text-sm">
              <span className="font-semibold text-blue-600 flex-shrink-0">{index + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

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
    setSearchTerm("")
    setHighlightedContent(null)
    window.scrollTo(0, 0)
  }

  const handleBackToList = () => {
    setActiveArticle(null)
    setSearchTerm("")
    setHighlightedContent(null)
  }

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

  const renderArticleContent = () => {
    return activeArticle.content
      .split("\n\n")
      .map((paragraph, index) => {
        if (!paragraph.trim()) return null

        if (paragraph.startsWith("### ")) {
          const title = paragraph.replace("### ", "").trim()
          return (
            <h3 key={index} className="text-xl font-bold text-primary mt-6 mb-4 border-b-2 border-primary pb-2">
              {title}
            </h3>
          )
        }

        if (paragraph.trim() === "---") {
          return <div key={index} className="my-8 border-t border-gray-300"></div>
        }

        if (
  activeArticle.id !== 4 &&
  (paragraph.includes("Ozonoterapia") ||
    paragraph.includes("Osteopatia") ||
    paragraph.includes("ossigeno-ozonoterapia"))
) {
          const parts = paragraph.split(/(Ozonoterapia|Osteopatia|ossigeno-ozonoterapia)/gi).map((part, i) => {
            if (part?.toLowerCase() === "ossigeno-ozonoterapia") {
              return (
                <AnimatedLink key={i} href="/ozonoterapia">
                  {part}
                </AnimatedLink>
              )
            }
            if (part?.toLowerCase() === "osteopatia") {
              return (
                <AnimatedLink key={i} href="/osteopatia">
                  {part}
                </AnimatedLink>
              )
            }
            if (part?.toLowerCase() === "ossigeno-ozonoterapia") {
              return (
                <AnimatedLink key={i} href="/ozonoterapia">
                  {part}
                </AnimatedLink>
              )
            }
            return part
          })

          return (
            <p key={index} className="text-lg leading-relaxed mb-4">
              {parts.map((part, i) => {
                if (typeof part !== "string") return part

                const boldItalicParts = part.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*)/g)
                return boldItalicParts.map((subpart, j) => {
                  if (subpart?.startsWith("***") && subpart?.endsWith("***")) {
                    return (
                      <em key={j} className="italic font-semibold text-primary">
                        {subpart.slice(3, -3)}
                      </em>
                    )
                  }
                  if (subpart?.startsWith("**") && subpart?.endsWith("**")) {
                    return (
                      <strong key={j} className="font-bold text-primary">
                        {subpart.slice(2, -2)}
                      </strong>
                    )
                  }
                  return subpart
                })
              })}
            </p>
          )
        }

    
        if (paragraph.includes("**")) {
          const parts = paragraph.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={index} className="text-lg leading-relaxed mb-4">
              {parts.map((part, i) => {
                if (part?.startsWith("**") && part?.endsWith("**")) {
                  return (
                    <strong key={i} className="font-bold text-primary">
                      {part.slice(2, -2)}
                    </strong>
                  )
                }
                return part
              })}
            </p>
          )
        }

    
        if (paragraph.includes("***")) {
          const parts = paragraph.split(/(\*\*\*.*?\*\*\*)/g)
          return (
            <p key={index} className="text-lg leading-relaxed mb-4">
              {parts.map((part, i) =>
                part?.startsWith("***") && part?.endsWith("***") ? (
                  <em key={i} className="italic font-semibold text-primary">
                    {part.slice(3, -3)}
                  </em>
                ) : (
                  part
                ),
              )}
            </p>
          )
        }

    
        return (
          <p key={index} className="text-lg leading-relaxed mb-4">
            {paragraph}
          </p>
        )
      })
      .filter((_, index) => {
        const paragraphs = activeArticle.content.split("\n\n")
        const currentParagraph = paragraphs[index] || ""
        return !currentParagraph.startsWith("### BIBLIOGRAFIA")
      })
  }

  return (
    <div className="pt-20 min-h-screen">
      <Breadcrumb items={getBreadcrumbItems()} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/5">
            <div className="sticky top-24 space-y-6">
              {!activeArticle && (
                <div className="flex flex-col space-y-4">
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

              {activeArticle && (
                <div className="bg-gray-50 p-4 rounded-lg hidden md:block">
                  <h3 className="font-semibold mb-2">Informazioni Articolo</h3>
                  <p className="text-sm text-gray-600 mb-1">Categoria: {getCategoryName(activeArticle.category)}</p>
                  <p className="text-sm text-gray-600">
                    Tempo di lettura: {Math.ceil((activeArticle.content?.length || 0) / 1000)} min
                  </p>
                </div>
              )}

              {!activeArticle && (
                <div className="space-y-3">
                  <div className="text-sm text-gray-600">
                    Pagina {currentPage} di {totalPages}
                  </div>

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

          <div className="w-full lg:w-4/5">
            {activeArticle ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
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

                <div className={activeArticle.id === 4 ? "article-image-container article-image-contain" : "article-image-container"}>
                  <Image
                    src={activeArticle.image || "/placeholder.svg"}
                    alt={activeArticle.title}
                    fill
                    className={activeArticle.id === 4 ? "object-contain" : "object-cover"}
                  />
                </div>

               

                <div className="prose max-w-none article-content">{renderArticleContent()}</div>
{activeArticle.id === 4 && (
  <div className="mt-10 text-center">
    <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white hover-lift">
      <Link href="/contacts" className="flex items-center gap-2 no-underline">
        <Calendar className="h-5 w-5" />
        <span>Richiedi informazioni o prenota una visita</span>
      </Link>
    </Button>
  </div>
)}
                <div className="mt-8 mb-8">
                  <BibliographyDropdown />
                </div>

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
                              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-full">
                                <div className="relative h-48 overflow-hidden rounded-t-lg">
                                  <Image
                                    src={article.image || "/placeholder.svg"}
                                    alt={article.title}
                                    fill
                                    className="object-cover transform transition-transform group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
