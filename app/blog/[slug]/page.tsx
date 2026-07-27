import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getArticleBySlug } from "../articles"

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

        <div className="space-y-5">
          {paragraphs.map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold mt-10 mb-4"
                >
                  {paragraph.replace("### ", "")}
                </h2>
              )
            }

            return (
              <p
                key={index}
                className="text-lg leading-relaxed whitespace-pre-line"
              >
                {paragraph}
              </p>
            )
          })}
        </div>
      </article>
    </main>
  )
}
