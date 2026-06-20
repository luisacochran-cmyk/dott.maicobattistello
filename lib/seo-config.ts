export interface CityConfig {
  name: string
  slug: string
  province: string
  coordinates: {
    lat: number
    lng: number
  }
  nearbyTowns: string[]
  population: number
  description: string
}

export interface ServiceConfig {
  name: string
  slug: string
  description: string
  longDescription: string
  keywords: string[]
  benefits: string[]
  conditions: string[]
}

export const cities: CityConfig[] = [
  {
    name: "Padova",
    slug: "padova",
    province: "PD",
    coordinates: { lat: 45.4064, lng: 11.8768 },
    nearbyTowns: [
      "Abano Terme",
      "Cittadella",
      "Camposampiero",
      "Piove di Sacco",
      "Este",
      "Monselice",
      "Selvazzano Dentro",
      "Vigonza",
      "Albignasego",
      "Cadoneghe",
    ],
    population: 214000,
    description: "Capoluogo della provincia veneta, centro universitario e culturale di grande importanza",
  },
  {
    name: "Vicenza",
    slug: "vicenza",
    province: "VI",
    coordinates: { lat: 45.5455, lng: 11.5353 },
    nearbyTowns: [
      "Bassano del Grappa",
      "Thiene",
      "Arzignano",
      "Montecchio Maggiore",
      "Valdagno",
      "Creazzo",
      "Torri di Quartesolo",
      "Dueville",
      "Costabissara",
      "Altavilla Vicentina",
    ],
    population: 111000,
    description: "Città del Palladio, patrimonio UNESCO e importante centro industriale del Veneto",
  },
  {
    name: "Schio",
    slug: "schio",
    province: "VI",
    coordinates: { lat: 45.7147, lng: 11.3578 },
    nearbyTowns: [
      "Thiene",
      "Valdagno",
      "Marostica",
      "Breganze",
      "Piovene Rocchette",
      "Santorso",
      "Villaverla",
      "Zugliano",
      "Carrè",
      "Chiuppano",
    ],
    population: 39000,
    description: "Importante centro industriale dell'Alto Vicentino, conosciuto per la tradizione tessile",
  },
  {
    name: "Malo",
    slug: "malo",
    province: "VI",
    coordinates: { lat: 45.6539, lng: 11.4167 },
    nearbyTowns: [
      "Thiene",
      "Schio",
      "Isola Vicentina",
      "Monte di Malo",
      "Santorso",
      "Villaverla",
      "Carrè",
      "Zugliano",
      "Breganze",
      "Piovene Rocchette",
    ],
    population: 14000,
    description: "Comune dell'Alto Vicentino, centro di eccellenza per l'industria e l'artigianato",
  },
  {
    name: "Marostica",
    slug: "marostica",
    province: "VI",
    coordinates: { lat: 45.7887, lng: 11.6142 },
    nearbyTowns: [
      "Bassano del Grappa",
      "Thiene",
      "Schio",
      "Malo",
      "Valdagno",
      "Breganze",
      "Piovene Rocchette",
      "Villaverla",
      "Carrè",
      "Zugliano",
    ],
    population: 13000,
    description: "Comune dell'Alto Vicentino, famosa per la Partita a Scacchi e il Castello",
  },
]

export const services: ServiceConfig[] = [
  {
    name: "Ozonoterapia",
    slug: "ozonoterapia",
    description: "Trattamenti di ozonoterapia per ernie discali, artrosi e patologie infiammatorie",
    longDescription:
      "L'ossigeno-ozonoterapia utilizza una miscela di ossigeno e gas ozono per il trattamento sintomatico ed eziologico delle malattie. Questi gas hanno proprietà antinfiammatorie, analgesiche e antiedemigene.",
    keywords: [
      "ozonoterapia",
      "ozono terapia",
      "ossigeno ozonoterapia",
      "ernia discale",
      "artrosi",
      "dolore cervicale",
      "mal di schiena",
      "GAET",
      "PAET",
      "autoemoterapia",
      "terapia ozono",
      "cura ozono",
    ],
    benefits: [
      "Riduzione del dolore",
      "Effetto antinfiammatorio",
      "Miglioramento della circolazione",
      "Stimolazione del sistema immunitario",
      "Rigenerazione tissutale",
      "Minima invasività",
      "Nessun effetto collaterale",
    ],
    conditions: [
      "Ernie discali",
      "Protrusioni discali",
      "Artrosi",
      "Dolori cervicali",
      "Lombalgia",
      "Fibromialgia",
      "Long Covid",
      "Ulcere cutanee",
    ],
  },
  {
    name: "Osteopatia",
    slug: "osteopatia",
    description: "Trattamenti osteopatici manuali per il riequilibrio posturale e funzionale",
    longDescription:
      "L'Osteopatia è una terapia sanitaria manuale che si avvicina alla persona malata nella sua totalità, con tecniche manipolative attente per ripristinare l'equilibrio posturale e funzionale.",
    keywords: [
      "osteopatia",
      "osteopata",
      "manipolazione osteopatica",
      "terapia manuale",
      "riequilibrio posturale",
      "dolore muscolare",
      "cervicalgia",
      "lombalgia",
      "mal di testa",
      "postura",
    ],
    benefits: [
      "Riequilibrio posturale",
      "Riduzione delle tensioni muscolari",
      "Miglioramento della mobilità",
      "Approccio olistico",
      "Trattamento personalizzato",
      "Tecniche non invasive",
      "Risultati duraturi",
    ],
    conditions: [
      "Dolori cervicali",
      "Lombalgia",
      "Cefalee",
      "Problemi posturali",
      "Tensioni muscolari",
      "Disturbi articolari",
      "Stress fisico",
    ],
  },
  {
    name: "Ozonoterapia + Osteopatia",
    slug: "ozono-osteo",
    description: "Trattamento combinato innovativo di ozonoterapia e osteopatia per risultati superiori",
    longDescription:
"Il Dr. Maico Battistello utilizza l'ossigeno-ozonoterapia e l'osteopatia in modo integrato quando la valutazione clinica lo ritiene appropriato. L'obiettivo è offrire un approccio personalizzato che consideri la persona nella sua globalità, combinando competenze e strumenti terapeutici differenti all'interno di un percorso personalizzato.",
    keywords: [
      "ozonoterapia osteopatia",
      "trattamento combinato",
      "terapia integrata",
      "ozono osteopatia",
      "approccio multidisciplinare",
      "risultati superiori",
      "innovazione terapeutica",
    ],
    benefits: [
      "Risultati superiori",
      "Approccio multidisciplinare",
      "Sinergia terapeutica",
      "Trattamento completo",
      "Riduzione dei tempi di guarigione",
      "Efficacia potenziata",
      "Innovazione clinica",
    ],
    conditions: [
      "Patologie croniche complesse",
      "Ernie discali severe",
      "Artrosi avanzata",
      "Dolori persistenti",
      "Problemi posturali cronici",
      "Condizioni multisintomatiche",
    ],
  },
  {
    name: "Medicina Legale",
    slug: "medicina-legale",
    description: "Consulenze medico-legali specialistiche e perizie per danni da incidenti e malattie",
    longDescription:
      "La consulenza specialistica e la relazione medico-legale vengono fornite dopo un esame medico diretto della parte lesa e un'attenta revisione dell'intero processo clinico, diagnostico e terapeutico intrapreso dall'individuo.",
    keywords: [
      "medicina legale",
      "medico legale",
      "consulenza medico legale",
      "perizia medica",
      "danno biologico",
      "invalidità permanente",
      "relazione medico legale",
      "CTP",
      "consulente tecnico di parte",
      "valutazione del danno",
    ],
    benefits: [
      "Valutazione accurata del danno",
      "Relazioni tecniche dettagliate",
      "Supporto legale qualificato",
      "Analisi della documentazione clinica",
      "Quantificazione dell'invalidità",
      "Assistenza nel contenzioso",
      "Esperienza pluriennale",
    ],
    conditions: [
      "Danni da incidente stradale",
      "Infortuni sul lavoro",
      "Malasanità",
      "Invalidità civile",
      "Danni da lesioni personali",
      "Responsabilità professionale",
      "Perizie assicurative",
    ],
  },
]

export function generateLocalSEO(service: ServiceConfig, city: CityConfig) {
  const nearbyTownsText = city.nearbyTowns.slice(0, 5).join(", ")

  return {
    title: `${service.name} a ${city.name} - Dr. Maico Battistello | Specialista ${city.province}`,
    description: `${service.description} a ${city.name} con il Dr. Maico Battistello. Specialista qualificato nella provincia di ${city.province}. Pazienti da ${nearbyTownsText}. Prenota la tua visita.`,
    h1: `${service.name} a ${city.name} – Dr. Maico Battistello`,
    h2: `Cos'è ${service.name === "Medicina Legale" ? "la" : "la"} ${service.name}?`,
    canonical: `https://dottmaicobattistello.it/${service.slug}-${city.slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness"],
      name: `Dr. Maico Battistello - ${service.name} ${city.name}`,
      description: `Specialista in ${service.name} a ${city.name}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "Veneto",
        addressCountry: "IT",
        postalCode: city.slug === "padova" ? "35100" : city.slug === "vicenza" ? "36100" : "36015",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
      areaServed: [
        {
          "@type": "City",
          name: city.name,
        },
        ...city.nearbyTowns.map((town) => ({
          "@type": "City",
          name: town,
        })),
      ],
      medicalSpecialty: [service.name],
      priceRange: "€€",
      telephone: "+39-XXX-XXXXXXX",
      url: `https://dottmaicobattistello.it/${service.slug}-${city.slug}`,
      sameAs: [
        "https://www.facebook.com/drmaicobaattistello",
        "https://www.instagram.com/drmaicobaattistello",
        "https://www.linkedin.com/in/maico-battistello",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Servizi di ${service.name}`,
        itemListElement: service.conditions.map((condition, index) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": service.name === "Medicina Legale" ? "Service" : "MedicalTherapy",
            name: service.name === "Medicina Legale" ? `Consulenza ${condition}` : `Trattamento ${condition}`,
            description: `${service.name} per ${condition} a ${city.name}`,
          },
        })),
      },
    },
  }
}
