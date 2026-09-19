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
    <section className="w-full border-b border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-4">
        {showTitle && (
          <h1 className="mb-3 text-2xl font-bold text-gray-900 md:text-3xl">
            {currentPage}
          </h1>
        )}

        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-y-2 text-sm md:text-base">

            {/* HOME */}
            <li className="flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-2 font-medium text-blue-700 transition-colors hover:text-blue-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-blue-100 transition group-hover:bg-blue-100">
                  <Home className="h-4 w-4" aria-hidden="true" />
                </span>

                <span>Home</span>
              </Link>
            </li>

            {/* BREADCRUMB ITEMS */}
            {items.slice(1).map((item, index) => {
              const isLast = index === items.slice(1).length - 1

              return (
                <li
                  key={`${item.href}-${index}`}
                  className="flex items-center"
                >
                  <ChevronRight
                    className="mx-2 h-4 w-4 text-blue-300 md:mx-3"
                    aria-hidden="true"
                  />

                  {isLast ? (
                    <span
                      className="rounded-full bg-blue-600 px-4 py-1.5 font-semibold text-white shadow-sm"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium text-blue-700 transition-colors hover:text-blue-900 hover:underline"
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
