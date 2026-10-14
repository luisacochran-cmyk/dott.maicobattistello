import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbProps {
  items: {
    label: string
    href: string
  }[]
  showTitle?: boolean
}

export default function Breadcrumb({
  items,
  showTitle = false,
}: BreadcrumbProps) {
  const currentPage = items[items.length - 1]?.label || ""

  return (
    <section className="w-full border-b border-[#DDE8F1] bg-gradient-to-r from-[#EFF5FA] via-[#F8FAFC] to-[#EFF5FA]">
      <div className="container mx-auto px-4 py-3 md:py-4">
        {showTitle && (
          <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {currentPage}
          </h1>
        )}

        <nav aria-label="Percorso di navigazione">
          <ol className="flex flex-wrap items-center gap-y-2 text-sm md:text-base">
            <li className="flex items-center">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-medium text-[#0066CC] transition-colors hover:text-[#004E9D]"
              >
                <Home className="h-4 w-4" aria-hidden="true" />
                <span className="group-hover:underline">Home</span>
              </Link>
            </li>

            {items.slice(1).map((item, index) => {
              const isLast = index === items.length - 2

              return (
                <li key={`${item.href}-${index}`} className="flex items-center">
                  <ChevronRight
                    className="mx-2 h-4 w-4 text-[#9AB2C9] md:mx-3"
                    aria-hidden="true"
                  />

                  {isLast ? (
                    <span
                      className="font-semibold text-[#294866]"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium text-[#0066CC] transition-colors hover:text-[#004E9D] hover:underline"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </section>
  )
}
