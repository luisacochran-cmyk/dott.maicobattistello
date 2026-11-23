"use client"

import { useEffect, useState } from "react"

/* ------------------------------------------------------------------
   Indice laterale dell'articolo (solo su computer):
   resta visibile mentre si legge, evidenzia la sezione in corso e
   mostra una barra blu che si riempie con la lettura.
------------------------------------------------------------------- */

export default function IndiceArticolo({
  sezioni,
}: {
  sezioni: { titolo: string; id: string }[]
}) {
  const [attiva, setAttiva] = useState<string>(sezioni[0]?.id ?? "")
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    const aggiorna = () => {
      // sezione attiva: l'ultima il cui titolo è sopra il 35% dello schermo
      let corrente = sezioni[0]?.id ?? ""
      for (const s of sezioni) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) {
          corrente = s.id
        }
      }
      setAttiva(corrente)

      // progresso: dall'inizio del testo alla fine dell'articolo
      const testo = document.getElementById("testo-articolo")
      if (testo) {
        const r = testo.getBoundingClientRect()
        const totale = r.height - window.innerHeight * 0.5
        const letto = -r.top + window.innerHeight * 0.2
        setProgresso(Math.min(1, Math.max(0, totale > 0 ? letto / totale : 0)))
      }
    }
    aggiorna()
    window.addEventListener("scroll", aggiorna, { passive: true })
    window.addEventListener("resize", aggiorna)
    return () => {
      window.removeEventListener("scroll", aggiorna)
      window.removeEventListener("resize", aggiorna)
    }
  }, [sezioni])

  return (
    <nav aria-label="Indice dell'articolo" className="sticky top-32">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#0066CC]">
        In questo articolo
      </p>
      <div className="relative pl-5">
        {/* barra di lettura */}
        <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-slate-200" aria-hidden="true">
          <div
            className="w-full rounded-full bg-[#0066CC] transition-[height] duration-200"
            style={{ height: `${Math.round(progresso * 100)}%` }}
          />
        </div>
        <ol className="space-y-3">
          {sezioni.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={attiva === s.id ? "true" : undefined}
                className={`block text-[0.95rem] leading-snug transition-colors ${
                  attiva === s.id
                    ? "font-semibold text-[#0066CC]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {s.titolo}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
