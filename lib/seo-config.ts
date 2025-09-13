export interface CityConfig {
  name: string
  slug: string
  province: string
  coordinates: {
    lat: number
    lng: number
  }
}

export interface ServiceConfig {
  name: string
  slug: string
  description: string
  longDescription: string
}

export const cities: CityConfig[] = [
  {
    name: "Padova",
    slug: "padova",
    province: "PD",
    coordinates: { lat: 45.4064, lng: 11.8768 },
  },
  {
    name: "Vicenza",
    slug: "vicenza",
    province: "VI",
    coordinates: { lat: 45.5455, lng: 11.5353 },
  },
  {
    name: "Schio",
    slug: "schio",
    province: "VI",
    coordinates: { lat: 45.7147, lng: 11.3578 },
  },
  {
    name: "Malo",
    slug: "malo",
    province: "VI",
    coordinates: { lat: 45.6539, lng: 11.4167 },
  },
]

export const services: ServiceConfig[] = [
  {
    name: "Ozonoterapia",
    slug: "ozonoterapia",
    description: "Trattamenti di ozonoterapia per ernie discali, artrosi e patologie infiammatorie",
    longDescription:
      "L'ossigeno-ozonoterapia utilizza una miscela di ossigeno e gas ozono per il trattamento sintomatico ed eziologico delle malattie. Questi gas hanno proprietà antinfiammatorie, analgesiche e antiedemigene.",
  },
  {
    name: "Osteopatia",
    slug: "osteopatia",
    description: "Trattamenti osteopatici manuali per il riequilibrio posturale e funzionale",
    longDescription:
      "L'Osteopatia è una terapia sanitaria manuale che si avvicina alla persona malata nella sua totalità, con tecniche manipolative attente per ripristinare l'equilibrio posturale e funzionale.",
  },
  {
    name: "Ozonoterapia + Osteopatia",
    slug: "ozono-osteo",
    description: "Trattamento combinato innovativo di ozonoterapia e osteopatia per risultati superiori",
    longDescription:
      "Il Dr. Maico Battistello ha sviluppato un trattamento combinato unico di ozonoterapia e osteopatia, ottenendo risultati clinici che nessuna delle due discipline da sola può fornire.",
  },
]

export function generateLocalSEO(service: ServiceConfig, city: CityConfig) {
  return {
    title: `${service.name} a ${city.name} - Dr. Maico Battistello`,
    description: `${service.description} a ${city.name} con il Dr. Maico Battistello. Specialista qualificato nella provincia di ${city.province}. Prenota la tua visita.`,
    h1: `${service.name} a ${city.name} – Dr. Maico Battistello`,
    h2: `Cos'è la ${service.name}?`,
    canonical: `https://dottmaicobattistello.it/${service.slug}-${city.slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: `Dr. Maico Battistello - ${service.name} ${city.name}`,
      description: `Specialista in ${service.name} a ${city.name}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "Veneto",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.coordinates.lat,
        longitude: city.coordinates.lng,
      },
      areaServed: {
        "@type": "City",
        name: city.name,
      },
      medicalSpecialty: [service.name],
    },
  }
}
