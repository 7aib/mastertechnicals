import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - Master Technicals Dubai",
  description:
    "Contact Master Technicals for professional home maintenance services in Dubai. Call +971556557200 or fill out our form for a free quote. Available 24/7 for emergencies.",
  openGraph: {
    title: "Contact Master Technicals - Home Maintenance Dubai",
    description:
      "Get in touch for a free quote on home maintenance services across Dubai. 24/7 emergency service available.",
  },
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 55 655 7200"],
      href: "tel:+971556557200",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+971 55 655 7200"],
      href: "https://wa.me/971556557200",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@mastertechnicals.com"],
      href: "mailto:contact@mastertechnicals.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Office No.14 X19 England Cluster",
        "International City, Dubai, UAE",
      ],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Sat - Thu: 10:00 AM - 10:00 PM",
        "Friday: 2:00 PM - 10:00 PM",
        "Emergency: 24/7",
      ],
    },
  ]

  return (
    <>
      <BreadcrumbNav items={[{ label: "Contact Us" }]} />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Get In Touch
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
              Contact Master Technicals
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a maintenance issue or need a free quote? Reach out to us via
              phone, WhatsApp, email, or fill out the form below. We respond to
              all inquiries within 1 hour during working hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {info.title}
                      </h3>
                      {info.details.map((detail) =>
                        info.href ? (
                          <a
                            key={detail}
                            href={info.href}
                            className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {detail}
                          </a>
                        ) : (
                          <p
                            key={detail}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.3906!3d25.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6127a1f0b0f5%3A0x69e4a4d2ac0b9e47!2sInternational%20City%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Master Technicals office location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-2 text-2xl font-bold text-foreground">
                    Get a Free Quote
                  </h2>
                  <p className="mb-6 text-muted-foreground">
                    Fill out the form below and we will get back to you within 1
                    hour during working hours.
                  </p>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
