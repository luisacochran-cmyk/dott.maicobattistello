# Dr. Maico Battistello — Sito Web Ufficiale

Sito web professionale del **Dr. Maico Battistello**, medico chirurgo specializzato in Ozonoterapia, Osteopatia e Medicina Legale, con studi a Padova, Vicenza, Schio e Malo (Veneto, Italia).

**Sito in produzione:** [https://dottmaicobattistello.it](https://dottmaicobattistello.it)

**Progetto Vercel:** [https://vercel.com/kawelongon24-itsaltoadrias-projects/v0-drbattistello100325](https://vercel.com/kawelongon24-itsaltoadrias-projects/v0-drbattistello100325)

---

## Stack Tecnologico

| Tecnologia | Versione | Utilizzo |
|---|---|---|
| Next.js | 14 (App Router) | Framework principale |
| React | 19 | UI library |
| TypeScript | 5.7 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| shadcn/ui + Radix UI | — | Componenti UI |
| Nodemailer | 7 | Invio email dal form di contatto |
| Google Analytics | G-C3FPBVTC8P | Analisi del traffico |
| pnpm | — | Package manager |

---

## Struttura del Progetto

```
dott.maicobattistello/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Layout radice (metadata, navbar, footer, SEO)
│   ├── page.tsx                  # Homepage
│   ├── about-me/                 # Pagina "Chi Sono" (interna)
│   ├── blog/                     # Pagina Blog
│   ├── contacts/                 # Pagina Contatti (interna)
│   ├── legal-medicine/           # Pagina Medicina Legale (interna)
│   ├── osteopathy/               # Pagina Osteopatia (interna)
│   ├── ozone-therapy/            # Pagina Ozonoterapia (interna)
│   ├── ozone-osteopathy/         # Pagina Ozono + Osteopatia (interna)
│   ├── cookie-policy/            # Cookie Policy
│   ├── privacy-policy/           # Privacy Policy
│   │
│   ├── # Pagine SEO locali — Ozonoterapia per città
│   ├── ozonoterapia-padova/
│   ├── ozonoterapia-vicenza/
│   ├── ozonoterapia-schio/
│   ├── ozonoterapia-malo/
│   │
│   ├── # Pagine SEO locali — Osteopatia per città
│   ├── osteopatia-padova/
│   ├── osteopatia-vicenza/
│   ├── osteopatia-schio/
│   ├── osteopatia-malo/
│   │
│   ├── # Pagine SEO locali — Ozono + Osteopatia per città
│   ├── ozono-osteo-padova/
│   ├── ozono-osteo-vicenza/
│   ├── ozono-osteo-schio/
│   ├── ozono-osteo-malo/
│   │
│   ├── # Pagine SEO locali — Medicina Legale per città
│   ├── medicina-legale-padova/
│   ├── medicina-legale-vicenza/
│   ├── medicina-legale-schio/
│   ├── medicina-legale-malo/
│   ├── medicina-legale-marostica/
│   │
│   └── api/
│       └── send-email/route.ts   # API route per invio email (Nodemailer + Gmail)
│
├── components/                   # Componenti React riutilizzabili
│   ├── navbar.tsx                # Navigazione principale (desktop + mobile)
│   ├── footer.tsx                # Footer con contatti e link
│   ├── contact-form.tsx          # Form di contatto con validazione
│   ├── cookie-banner.tsx         # Banner consenso cookie
│   ├── google-analytics.tsx      # Integrazione Google Analytics
│   ├── breadcrumb.tsx            # Breadcrumb per pagine interne
│   ├── image-carousel.tsx        # Carosello immagini
│   ├── quadrant-carousel.tsx     # Carosello a quadranti
│   ├── word-carousel.tsx         # Animazione parole in rotazione
│   ├── location-list.tsx         # Lista delle città/sedi
│   ├── animated-button.tsx       # Pulsante con animazione
│   ├── animated-link.tsx         # Link con animazione
│   ├── animated-scroll-element.tsx # Elemento animato allo scroll
│   ├── client-animated-section.tsx # Sezioni animate (client-side)
│   ├── client-typewriter.tsx     # Effetto typewriter (client-side)
│   ├── typewriter-animation.tsx  # Animazione typewriter
│   ├── theme-provider.tsx        # Provider tema
│   └── ui/                       # Componenti shadcn/ui
│
├── lib/
│   ├── seo-config.ts             # Configurazione SEO centralizzata (città, servizi, structured data)
│   └── utils.ts                  # Utility generali (cn, classnames)
│
├── hooks/
│   └── use-scroll-animation.tsx  # Hook per animazioni allo scroll
│
├── public/
│   ├── images/                   # Immagini del sito
│   ├── sitemap.xml               # Sitemap XML per i motori di ricerca
│   ├── robots.txt                # Istruzioni per i crawler
│   ├── manifest.json             # Web App Manifest (PWA)
│   ├── local-business.json       # Structured data LocalBusiness
│   └── browserconfig.xml         # Configurazione per browser Microsoft
│
├── styles/
│   └── globals.css               # Stili globali aggiuntivi
│
├── app/globals.css               # Stili globali principali + variabili CSS
├── tailwind.config.js            # Configurazione Tailwind CSS
├── next.config.mjs               # Configurazione Next.js (headers, rewrites, redirects)
├── tsconfig.json                 # Configurazione TypeScript
└── components.json               # Configurazione shadcn/ui
```

---

## Pagine e Routing

Il sito usa URL in italiano per gli utenti, mappati internamente tramite `next.config.mjs`:

| URL Pubblico (italiano) | File interno | Descrizione |
|---|---|---|
| `/` | `app/page.tsx` | Homepage |
| `/ozonoterapia` | `app/ozone-therapy/` | Ozonoterapia |
| `/osteopatia` | `app/osteopathy/` | Osteopatia |
| `/ozonoterapia-osteopatia` | `app/ozone-osteopathy/` | Trattamento combinato |
| `/medicina-legale` | `app/legal-medicine/` | Medicina Legale |
| `/chi-sono` | `app/about-me/` | Presentazione del dottore |
| `/blog` | `app/blog/` | Articoli e notizie |
| `/contatti` | `app/contacts/` | Form di contatto |
| `/cookie-policy` | `app/cookie-policy/` | Cookie Policy |
| `/privacy-policy` | `app/privacy-policy/` | Privacy Policy |

### Pagine SEO Locali

Ogni servizio principale ha una pagina dedicata per ogni città servita, per ottimizzare la visibilità locale sui motori di ricerca:

- `/{servizio}-{città}` — es. `/ozonoterapia-padova`, `/osteopatia-vicenza`, `/medicina-legale-schio`
- Città coperte: **Padova**, **Vicenza**, **Schio**, **Malo**, **Marostica** (solo Medicina Legale)
- Servizi coperti: **ozonoterapia**, **osteopatia**, **ozono-osteo** (combinato), **medicina-legale**

---

## Servizi del Dottore

### Ozonoterapia
Utilizzo di una miscela di ossigeno e ozono per trattare in modo antinfiammatorio e analgesico patologie come ernie discali, artrosi, lombalgia, Long Covid e fibromialgia. Tecniche principali: GAET (Grande Autoemotrasfusione) e PAET (Piccola Autoemotrasfusione).

### Osteopatia
Terapia manuale olistica per il riequilibrio posturale e funzionale. Indicata per cervicalgie, lombalgie, cefalee, tensioni muscolari e problemi posturali.

### Ozonoterapia + Osteopatia (Trattamento Combinato)
Approccio unico sviluppato dal Dr. Battistello che unisce i due trattamenti per ottenere risultati clinici superiori rispetto a ciascuna disciplina singolarmente.

### Medicina Legale
Consulenze medico-legali specialistiche, perizie e relazioni tecniche per danni da incidenti stradali, infortuni sul lavoro, malasanità, invalidità civile e responsabilità professionale. Il dottore opera come CTP (Consulente Tecnico di Parte).

---

## Funzionamento del Form di Contatto

Il form di contatto (`/contatti`) raccoglie:
- Nome e cognome
- Email
- Numero di telefono
- Motivo del contatto

I dati vengono inviati all'API route `POST /api/send-email`, che usa **Nodemailer** con il server SMTP di Gmail per recapitare il messaggio all'indirizzo del dottore.

### Variabili d'ambiente richieste

```env
GMAIL_USER=maico.battistello@gmail.com
GMAIL_APP_PASSWORD=<google_app_password>
```

> La `GMAIL_APP_PASSWORD` deve essere una **App Password** generata dall'account Google (non la password principale). Vedi: [Google App Passwords](https://myaccount.google.com/apppasswords).

---

## SEO e Structured Data

Il sito è ottimizzato per i motori di ricerca con:

- **Metadata dinamici** per ogni pagina (titolo, descrizione, canonical, Open Graph, Twitter Card)
- **Schema.org Structured Data** di tipo `MedicalBusiness`, `LocalBusiness` e `Person` nel `layout.tsx`
- **Sitemap XML** in `public/sitemap.xml`
- **robots.txt** in `public/robots.txt`
- **Google Search Console** verificata (tag `YCmYA_tPmgbNyc95YLxhBNEsiUExky3vTif5k2uJzwY`)
- **Google Analytics** (ID: `G-C3FPBVTC8P`)
- **`lib/seo-config.ts`**: file centralizzato che definisce le configurazioni di città e servizi usate per generare i metadata e i structured data delle pagine SEO locali

---

## Sicurezza

Gli header HTTP di sicurezza sono configurati in `next.config.mjs` per tutte le route:

- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security` (HSTS con preload)
- `Content-Security-Policy`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (blocca camera, microfono, geolocalizzazione)

Il sito forza anche il redirect HTTP → HTTPS tramite la sezione `redirects` della configurazione Next.js.

---

## Sviluppo Locale

### Prerequisiti

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installazione

```bash
git clone https://github.com/KaweAW/dott.maicobattistello.git
cd dott.maicobattistello
pnpm install
```

### Variabili d'ambiente

Crea un file `.env.local` nella root del progetto:

```env
GMAIL_USER=maico.battistello@gmail.com
GMAIL_APP_PASSWORD=<google_app_password>
```

### Avvio del server di sviluppo

```bash
pnpm dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000).

### Build di produzione

```bash
pnpm build
pnpm start
```

---

## Deploy

Il progetto è deployato su **Vercel** e si aggiorna automaticamente ad ogni push sul branch `main`. Le variabili d'ambiente vanno configurate nelle impostazioni del progetto Vercel (sezione *Environment Variables*).
