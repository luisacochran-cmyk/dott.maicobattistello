import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "../articles"
import AnimatedLink from "@/components/animated-link"

type BlogArticlePageProps = {
  params: {
    slug: string
  }
}

export function generateMetadata({
  params,
}: BlogArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Articolo non trovato | Dr. Maico Battistello",
    }
  }

  return {
    title: `${article.title} | Dr. Maico Battistello`,
    description: article.content
      .replace(/\*\*/g, "")
      .replace(/### /g, "")
      .slice(0, 155),
    alternates: {
      canonical: `https://dottmaicobattistello.it/blog/${article.slug}`,
    },
  }
}

export default function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const isLombalgiaArticle =
    article.slug === "lombalgia-approccio-integrato-osteopatia-ozonoterapia"

  const renderInlineContent = (text: string) => {
    const parts = text.split(
      /(\*\*.*?\*\*|Ossigeno-Ozonoterapia|ossigeno-ozonoterapia|Ozonoterapia|ozonoterapia|Osteopatia|osteopatia)/g,
    )

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-primary">
            {part.slice(2, -2)}
          </strong>
        )
      }

      const lower = part.toLowerCase()

      if (
        lower === "ossigeno-ozonoterapia" ||
        lower === "ozonoterapia"
      ) {
        return (
          <AnimatedLink key={index} href="/ozonoterapia">
            {part}
          </AnimatedLink>
        )
      }

      if (lower === "osteopatia") {
        return (
          <AnimatedLink key={index} href="/osteopatia">
            {part}
          </AnimatedLink>
        )
      }

      return part
    })
  }

  const renderArticleContent = () => {
    return article.content
      .split("\n\n")
      .map((paragraph, index) => {
        const trimmed = paragraph.trim()

        if (!trimmed) return null

        if (trimmed.startsWith("### BIBLIOGRAFIA")) {
          return null
        }

        if (trimmed.startsWith("### ")) {
          const title = trimmed.replace("### ", "").trim()

          return (
            <h2
              key={index}
              className="text-2xl md:text-3xl font-bold text-primary mt-10 mb-5 border-b-2 border-primary pb-2"
            >
              {title}
            </h2>
          )
        }

        if (trimmed === "---") {
          return (
            <div
              key={index}
              className="my-8 border-t border-gray-300"
            />
          )
        }

        if (
          article.slug === "infiammazione-cronica-basso-grado" &&
          ["• **Marostica**", "• **Malo**", "• **Schio**", "• **Padova**"].includes(
            trimmed,
          )
        ) {
          const cityLinks: Record<string, string> = {
            Marostica: "/ozono-osteo-marostica",
            Malo: "/ozono-osteo-malo",
            Schio: "/ozono-osteo-schio",
            Padova: "/ozono-osteo-padova",
          }

          const city = trimmed
            .replace("• **", "")
            .replace("**", "")

          return (
            <p key={index} className="text-lg leading-relaxed mb-4">
              •{" "}
              <strong>
                <AnimatedLink href={cityLinks[city]}>
                  {city}
                </AnimatedLink>
              </strong>
            </p>
          )
        }

        if (trimmed.startsWith("• ")) {
          const items = trimmed
            .split("\n")
            .filter((line) => line.trim())
            .map((line) => line.replace(/^•\s*/, ""))

          return (
            <ul
              key={index}
              className="list-disc pl-7 text-lg leading-relaxed mb-6 space-y-2"
            >
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{renderInlineContent(item)}</li>
              ))}
            </ul>
          )
        }

        if (
          isLombalgiaArticle &&
          index === 0 &&
          trimmed.startsWith("**") &&
          trimmed.endsWith("**")
        ) {
          return (
            <p
              key={index}
              className="text-xl md:text-2xl leading-relaxed font-semibold text-gray-700 mb-8"
            >
              {trimmed.slice(2, -2)}
            </p>
          )
        }

        if (
          isLombalgiaArticle &&
          trimmed === "**IL MAL DI SCHIENA CONTINUA A TORNARE?**"
        ) {
          return (
            <div
              key={index}
              className="mt-10 mb-5 text-xl md:text-2xl font-bold text-primary"
            >
              IL MAL DI SCHIENA CONTINUA A TORNARE?
            </div>
          )
        }

        return (
          <p key={index} className="text-lg leading-relaxed mb-4">
            {renderInlineContent(paragraph)}
          </p>
        )
      })
  }

  return (
    <main className="pt-28 min-h-screen">
      <article className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {article.title}
        </h1>

        <p className="text-gray-600 mb-8">
          di Maico Battistello · {article.publishDate}
        </p>

        <div className="relative w-full h-[420px] mb-10">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="prose max-w-none article-content">
          {renderArticleContent()}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Link
              href="/contacts"
              className="flex items-center gap-2 no-underline"
            >
              <Calendar className="h-5 w-5" />
              <span>Richiedi informazioni o prenota una visita</span>
            </Link>
          </Button>
        </div>
      </article>
    </main>
  )
}
