import { Building, MapPin } from "lucide-react"

export default function LocationList() {
  const locations = [
    {
      id: "padova",
      city: "Padova (PD)",
      name: "Clinica Cittàgiardino",
      address: "Via F. Piccolo 6",
      services: "Ozonoterapia · Osteopatia · Percorso integrato · Medicina legale",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Via+F+Piccolo+6+Padova",
    },
    {
      id: "padova-medicina-amica",
      city: "Padova (PD)",
      name: "Clinica Medicina Amica",
      address: "Via Boccaccio 104/C",
      services: "Medicina legale · Osteopatia",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Via+Boccaccio+104+C+Padova",
    },
    {
      id: "marostica",
      city: "Marostica (VI)",
      name: "",
      address: "Via Ragazzoni 36",
      services:
        "Ozonoterapia · Osteopatia · Percorso integrato · Medicina legale",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Via+Ragazzoni+36+Marostica+VI",
    },
    {
      id: "malo",
      city: "Monte di Malo (VI)",
      name: "Centro Medico Medicalis",
      address: "Via Sile 40",
      services:
        "Ozonoterapia · Osteopatia · Percorso integrato · Medicina legale",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Via+Sile+40+Monte+di+Malo+VI",
    },
    {
      id: "schio",
      city: "Schio (VI)",
      name: "Centro Medico MET",
      address: "Via L. Muratori 1/A",
      services:
        "Ozonoterapia · Osteopatia · Percorso integrato · Medicina legale",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Via+L+Muratori+1+A+Schio+VI",
    },
  ]

  return (
    <section className="py-8" aria-labelledby="locations-heading">
      <h3
        id="locations-heading"
        className="text-xl font-semibold mb-6 text-left"
      >
        Sedi in cui riceve il Dott. Maico Battistello
      </h3>

      <ul className="space-y-6">
        {locations.map((location, index) => (
          <li
            key={location.id}
            id={location.id}
            className="scroll-mt-28"
          >
            <div className="flex items-start gap-3">
              <Building
                className="h-5 w-5 text-primary mt-1 flex-shrink-0"
                aria-hidden="true"
              />

              <div className="space-y-1">
                <h4 className="font-semibold text-slate-900">
                  {location.city}
                </h4>

                {location.name && (
                  <p className="font-medium text-slate-700">
                    {location.name}
                  </p>
                )}

                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-primary hover:underline"
                  aria-label={`Visualizza su Google Maps: ${location.city}, ${location.address}`}
                >
                  <MapPin
                    className="h-4 w-4 mt-1 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{location.address}</span>
                </a>

                <p className="text-sm leading-relaxed text-slate-600">
                  {location.services}
                </p>
              </div>
            </div>

            {index < locations.length - 1 && (
              <div className="border-b border-slate-100 mt-6" />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
