import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { CTASection } from "@/components/cta-section"
import { services, getServiceBySlug } from "@/lib/services-data"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 4)

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Master Technicals",
      telephone: "+971556557200",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office No.14 X19 England Cluster, International City",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <BreadcrumbNav
        items={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Hero */}
      <section className="bg-foreground py-16 text-background lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <service.icon className="h-8 w-8" />
              </div>
              <h1 className="mb-4 text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
                {service.heroHeadline}
              </h1>
              <p className="mb-8 text-lg text-background/70 leading-relaxed">
                {service.heroSubheadline}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="text-base"
                >
                  <a href="tel:+971556557200">
                    <Phone className="mr-2 h-5 w-5" />
                    Call For Free Quote
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-black hover:bg-background/10 text-base"
                >
                  <a
                    href="https://wa.me/971556557200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 rounded-lg bg-background/5 p-3"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm text-background/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            About Our {service.shortTitle} Services in Dubai
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p>{service.description}</p>
          </div>

          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-foreground">
              What We Offer
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h3 className="mb-4 text-xl font-bold text-foreground text-center">
            {service.shortTitle} Services Across Dubai
          </h3>
          <p className="mb-6 text-center text-muted-foreground">
            We provide {service.shortTitle.toLowerCase()} services in all major
            areas of Dubai, with fast response times and professional results.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Downtown Dubai",
              "Dubai Marina",
              "Business Bay",
              "JBR",
              "Palm Jumeirah",
              "International City",
              "Al Barsha",
              "Jumeirah",
              "Silicon Oasis",
              "Sports City",
              "Motor City",
              "Discovery Gardens",
              "Arabian Ranches",
              "Mirdif",
              "Al Quoz",
              "DIFC",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${service.shortTitle} Services in Dubai?`}
        subtitle="Get a free quote today. Our expert technicians are ready to help."
      />

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            {service.shortTitle} FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Other Services You May Need
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group"
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <other.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {other.shortTitle}
                    </h3>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today for a free, no-obligation quote on any home maintenance service in Dubai."
      />
    </>
  )
}
