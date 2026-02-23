import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mastertechnicals.ae",
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.href && {
          item: `https://mastertechnicals.ae${item.href}`,
        }),
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 py-3 text-sm"
      >
        <ol className="flex items-center gap-1 text-muted-foreground">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-primary"
            >
              <Home className="h-3.5 w-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
