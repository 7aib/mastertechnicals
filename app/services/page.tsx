import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { CTASection } from "@/components/cta-section"
import { services } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Home Maintenance Services in Dubai",
  description:
    "Explore our complete range of professional home maintenance services in Dubai. Plumbing, electrical, AC repair, CCTV installation, networking and more. Call +971556557200.",
  openGraph: {
    title: "All Home Maintenance Services - Master Technicals Dubai",
    description:
      "Complete range of professional home maintenance services in Dubai. Licensed technicians, 24/7 emergency service.",
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Services" }]} />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
              Professional Home Maintenance Services in Dubai
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Master Technicals offers a comprehensive range of property
              maintenance and handyman services to keep your home or office in
              perfect condition. All services backed by licensed technicians and
              a satisfaction guarantee.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {service.heroSubheadline}
                    </p>
                    <ul className="mb-5 flex flex-col gap-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      View Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
