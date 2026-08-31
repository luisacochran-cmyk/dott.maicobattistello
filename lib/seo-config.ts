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
      "Selvazzano Dentro",
      "Albignasego",
      "Vigonza",
      "Cadoneghe",
      "Rubano",
      "Limena",
      "Noventa Padovana",
      "Ponte San Nicolò",
      "Vigodarzere",
    ],
    population: 214000,
    description:
      "Capoluogo della provincia veneta e importante centro sanitario, universitario e culturale",
  },

  {
    // Mantenuta temporaneamente: verificare eventuali utilizzi prima della rimozione
    name: "Vicenza",
    slug: "vicenza",
    province: "VI",
    coordinates: { lat: 45.5455, lng: 11.5353 },
    nearbyTowns: [
      "Creazzo",
      "Altavilla Vicentina",
      "Torri di Quartesolo",
      "Costabissara",
      "Dueville",
      "Caldogno",
      "Monticello Conte Otto",
      "Arcugnano",
      "Longare",
      "Bolzano Vicentino",
    ],
    population: 111000,
    description:
      "Capoluogo della provincia di Vicenza e riferimento per l'area vicentina",
  },

  {
    name: "Schio",
    slug: "schio",
    province: "VI",
    coordinates: { lat: 45.7147, lng: 11.3578 },
    nearbyTowns: [
      "Santorso",
      "Piovene Rocchette",
      "Torrebelvicino",
      "Marano Vicentino",
      "Thiene",
      "Zanè",
      "Villaverla",
      "Valdagno",
      "Carrè",
      "Zugliano",
    ],
    population: 39000,
    description:
      "Centro dell'Alto Vicentino e punto di riferimento per Schio e i comuni circostanti",
  },

  {
    name: "Malo",
    slug: "malo",
    province: "VI",
    coordinates: { lat: 45.6539, lng: 11.4167 },
    nearbyTowns: [
      "Monte di Malo",
      "Isola Vicentina",
      "Marano Vicentino",
      "Thiene",
      "Schio",
      "Villaverla",
      "San Vito di Leguzzano",
      "Castelgomberto",
      "Cornedo Vicentino",
      "Santorso",
    ],
    population: 14000,
    description:
      "Comune dell'Alto Vicentino, vicino a Schio, Thiene e ai principali centri dell'area",
  },

  {
    name: "Marostica",
    slug: "marostica",
    province: "VI",
    coordinates: { lat: 45.7887, lng: 11.6142 },
    nearbyTowns: [
      "Bassano del Grappa",
      "Nove",
      "Schiavon",
      "Colceresa",
      "Breganze",
      "Sandrigo",
      "Lusiana Conco",
      "Pianezze",
      "Cartigliano",
      "Rosà",
    ],
    population: 13000,
    description:
      "Comune dell'area pedemontana vicentina, vicino a Bassano del Grappa e ai principali centri del Bassanese",
  },
]

export const services: ServiceConfig[] = [
  {
    name: "Ozonoterapia",
    slug: "ozonoterapia",
    description:
      "Ossigeno-ozonoterapia nell'ambito di percorsi personalizzati per problematiche muscolo-scheletriche, articolari e dolorose",
    longDescription:
      "L'ossigeno-ozonoterapia utilizza una miscela di ossigeno e ozono medicale. L'indicazione al trattamento viene definita dopo una valutazione clinica individuale, considerando il quadro della persona e gli obiettivi terapeutici.",
    keywords: [
      "ozonoterapia",
      "ozono terapia",
      "ossigeno ozonoterapia",
      "ernia discale",
      "protrusione discale",
      "artrosi",
      "dolore cervicale",
      "cervicalgia",
      "lombalgia",
      "mal di schiena",
      "GAET",
      "PAET",
      "autoemoterapia",
    ],
    benefits: [
      "Approccio personalizzato",
      "Valutazione clinica individuale",
      "Gestione del dolore muscolo-scheletrico",
      "Supporto nel percorso terapeutico",
      "Possibile integrazione con altri approcci clinici",
    ],
    conditions: [
      "Ernie discali",
      "Protrusioni discali",
      "Artrosi",
      "Dolori cervicali",
      "Lombalgia",
      "Sciatalgia",
      "Problematiche articolari",
      "Dolore muscolo-scheletrico",
    ],
  },

  {
    name: "Osteopatia",
    slug: "osteopatia",
    description:
      "Valutazione e trattamento osteopatico per mobilità, funzione e problematiche muscolo-scheletriche",
    longDescription:
      "L'osteopatia è una disciplina manuale che considera le relazioni tra struttura e funzione del corpo. Attraverso la valutazione clinica e funzionale, il trattamento viene adattato alle caratteristiche della persona e alle eventuali limitazioni della mobilità.",
    keywords: [
      "osteopatia",
      "osteopata",
      "trattamento osteopatico",
      "terapia manuale",
      "mobilità articolare",
      "dolore muscolare",
      "cervicalgia",
      "lombalgia",
      "postura",
      "funzione muscolo-scheletrica",
    ],
    benefits: [
      "Valutazione individuale",
      "Approccio personalizzato",
      "Miglioramento della mobilità",
      "Gestione delle tensioni muscolari",
      "Valutazione della funzione muscolo-scheletrica",
    ],
    conditions: [
      "Dolori cervicali",
      "Lombalgia",
      "Cefalee",
      "Limitazioni della mobilità",
      "Tensioni muscolari",
      "Disturbi articolari",
      "Problematiche posturali",
    ],
  },

  {
    name: "Ozonoterapia + Osteopatia",
    slug: "ozono-osteo",
    description:
      "Approccio integrato tra ossigeno-ozonoterapia e osteopatia, definito sulla base della valutazione clinica individuale",
    longDescription:
      "Il Dr. Maico Battistello mette in relazione ossigeno-ozonoterapia e osteopatia quando clinicamente indicato. Le due metodiche vengono considerate all'interno di un percorso personalizzato, sulla base della valutazione complessiva della persona, del quadro clinico e delle specifiche esigenze.",
    keywords: [
      "ozonoterapia osteopatia",
      "ossigeno ozonoterapia osteopatia",
      "ozono osteopatia",
      "approccio integrato",
      "percorso personalizzato",
      "dolore muscolo-scheletrico",
      "mobilità articolare",
      "valutazione clinica",
    ],
    benefits: [
      "Valutazione complessiva della persona",
      "Approccio integrato quando clinicamente indicato",
      "Percorso personalizzato",
      "Valutazione della componente dolorosa e funzionale",
      "Integrazione di strumenti terapeutici differenti",
    ],
    conditions: [
      "Cervicalgia e lombalgia",
      "Ernie e protrusioni discali",
      "Sciatalgia e dolore radicolare",
      "Artrosi e problematiche articolari",
      "Contratture muscolari persistenti",
      "Limitazioni della mobilità",
      "Disturbi muscolo-scheletrici cronici",
    ],
  },

  {
    name: "Medicina Legale",
    slug: "medicina-legale",
    description:
      "Consulenze medico-legali, valutazione del danno e relazioni medico-legali",
    longDescription:
      "La consulenza medico-legale viene effettuata attraverso l'esame della documentazione clinica, la valutazione diretta della persona e l'analisi del percorso diagnostico e terapeutico, in relazione allo specifico quesito medico-legale.",
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
      "Valutazione medico-legale",
      "Analisi della documentazione clinica",
      "Relazione medico-legale",
      "Valutazione del danno",
      "Consulenza tecnica di parte",
    ],
    conditions: [
      "Danni da incidente stradale",
      "Infortuni sul lavoro",
      "Responsabilità sanitaria",
      "Invalidità civile",
      "Danni da lesioni personali",
      "Responsabilità professionale",
      "Perizie assicurative",
    ],
  },
]

export function generateLocalSEO(
  service: ServiceConfig,
  city: CityConfig
) {
  const nearbyTownsText = city.nearbyTowns.slice(0, 5).join(", ")

  const isOsteopatiaMarostica =
    service.slug === "osteopatia" && city.slug === "marostica"

  const isOsteopatiaSchio =
    service.slug === "osteopatia" && city.slug === "schio"

  const isOsteopatiaMalo =
    service.slug === "osteopatia" && city.slug === "malo"

  const isOsteopatiaPadova =
    service.slug === "osteopatia" && city.slug === "padova"

  const isOzonoterapiaPadova =
    service.slug === "ozonoterapia" && city.slug === "padova"

  const isOzonoterapiaMarostica =
    service.slug === "ozonoterapia" && city.slug === "marostica"

  const isOzonoterapiaSchio =
    service.slug === "ozonoterapia" && city.slug === "schio"

  const isOzonoterapiaMalo =
    service.slug === "ozonoterapia" && city.slug === "malo"

  return {
    title: isOsteopatiaMarostica
      ? "Osteopata a Marostica | Dr. Maico Battistello – Osteopatia"
      : isOsteopatiaSchio
        ? "Osteopata a Schio | Dr. Maico Battistello – Osteopatia"
        : isOsteopatiaMalo
          ? "Osteopata a Malo | Dr. Maico Battistello – Osteopatia"
          : isOsteopatiaPadova
            ? "Osteopata a Padova | Dr. Maico Battistello – Osteopatia"
            : isOzonoterapiaPadova
              ? "Ozonoterapia a Padova | Dr. Maico Battistello"
              : isOzonoterapiaMarostica
                ? "Ozonoterapia a Marostica | Dr. Maico Battistello"
                : isOzonoterapiaSchio
                  ? "Ozonoterapia a Schio | Dr. Maico Battistello"
                  : isOzonoterapiaMalo
                    ? "Ozonoterapia a Malo | Dr. Maico Battistello"
                    : `${service.name} a ${city.name} | Dr. Maico Battistello`,

    description:
      `${service.description} a ${city.name} con il Dr. Maico Battistello. ` +
      `Riferimento anche per ${nearbyTownsText} e comuni limitrofi.`,

    h1: `${service.name} a ${city.name} – Dr. Maico Battistello`,

    h2: `${service.name} a ${city.name}`,

    canonical:
      `https://dottmaicobattistello.it/${service.slug}-${city.slug}`,

    structuredData: {
      "@context": "https://schema.org",
      "@type": ["MedicalBusiness", "LocalBusiness"],

      name: `Dr. Maico Battistello - ${service.name} ${city.name}`,

      description:
        `${service.name} a ${city.name} con il Dr. Maico Battistello`,

      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "Veneto",
        addressCountry: "IT",
        postalCode:
          city.slug === "padova"
            ? "35100"
            : city.slug === "marostica"
              ? "36063"
              : city.slug === "malo"
                ? "36034"
                : city.slug === "schio"
                  ? "36015"
                  : "",
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

      telephone: "+393487383372",

      url:
        `https://dottmaicobattistello.it/${service.slug}-${city.slug}`,

      sameAs: [
        "https://www.facebook.com/drmaicobaattistello",
        "https://www.instagram.com/drmaicobaattistello",
        "https://www.linkedin.com/in/maico-battistello",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `Servizi di ${service.name}`,
        itemListElement: service.conditions.map((condition) => ({
          "@type": "Offer",
          itemOffered: {
            "@type":
              service.name === "Medicina Legale"
                ? "Service"
                : "MedicalTherapy",
            name:
              service.name === "Medicina Legale"
                ? `Consulenza ${condition}`
                : `${service.name} - ${condition}`,
            description:
              `${service.name} per ${condition} a ${city.name}`,
          },
        })),
      },
    },
  }
}
