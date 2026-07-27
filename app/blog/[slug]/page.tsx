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
    description: article.content.slice(0, 155),
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

  const paragraphs = article.content.split("\n\n")
    const renderArticleContent = () => {
    return article.content
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
        const paragraphs = article.content.split("\n\n")
        const currentParagraph = paragraphs[index] || ""
        return !currentParagraph.startsWith("### BIBLIOGRAFIA")
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
