import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Award,
  ThumbsUp,
  Star,
  ArrowRight,
  CheckCircle2,
  Hammer,
  Paintbrush,
  Layout,
  Truck,
  ShieldAlert,
  Sun,
  Monitor,
  Scissors,
  Zap,
  Droplets,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { services } from "@/lib/services-data"
import { CTASection } from "@/components/cta-section"

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background lg:py-28">
      <Image
        src="/images/hero-bg.jpg"
        alt="Professional home maintenance services in Dubai"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary">
            Trusted Home Maintenance in Dubai
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
            Professional Handyman Services Dubai
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-background/70 md:text-xl">
            Looking for <strong>reliable handyman services in Dubai</strong>? Our professional team provides fast and affordable home repair and installation services for apartments, villas, and offices across Dubai. From small fixes to complete installations, our experienced handymen ensure every job is completed safely and professionally.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-background/70 md:text-xl">
            We specialize in <strong>TV mounting, drilling, curtain installation, plumbing, electrical repairs, carpentry work, and furniture assembly</strong>. Our goal is to make home maintenance easy for Dubai residents by providing skilled technicians, quality materials, and on-time service.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-background/70 md:text-xl">
            Whether you need a quick repair or a full installation, our <strong>handyman Dubai experts</strong> are ready to help with efficient and affordable solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="text-base"
            >
              <a href="tel:+971556557200">
                <Phone className="mr-2 h-5 w-5" />
                Call Now - Free Quote
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
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-background/60">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              24/7 Emergency Service
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Free Estimates
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Comprehensive Home Maintenance Services in Dubai
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a full range of property maintenance and handyman services
            to keep your home or office in perfect condition.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/30 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.shortTitle}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    {service.heroSubheadline.substring(0, 100)}...
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CoreHandymanServices() {
  const coreServices = [
    {
      title: "Electrical Services",
      icon: Zap,
      description: "Installing light fixtures, ceiling fans, switches, sockets, and minor troubleshooting.",
      link: "/electrician-services-dubai"
    },
    {
      title: "Plumbing Services",
      icon: Droplets,
      description: "Repairing leaky taps, shower heads, toilets, drains, and installing bathroom fixtures.",
      link: "/plumbing-services-dubai"
    },
    {
      title: "Carpentry & Furniture",
      icon: Hammer,
      description: "Assembling furniture (IKEA, etc.), repairing doors, cabinets, and furniture fixing.",
      link: "/carpentry-furniture-dubai"
    },
    {
      title: "Painting & Decorating",
      icon: Paintbrush,
      description: "Interior painting, touch-ups, hanging pictures, and fixing shelves.",
      link: "/painting-decorating-dubai"
    },
    {
      title: "Home Improvement & Maintenance",
      icon: Home,
      description: "TV wall mounting, installing curtains/blinds, sealing gaps with silicone, and fixing curtain rods.",
      link: "/handyman-services-dubai"
    },
    {
      title: "Walls & Floors",
      icon: Layout,
      description: "Drywall repair, filling drill holes, and basic tiling repairs.",
      link: "/walls-floors-dubai"
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Expert Solutions
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Core Handyman Services List
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional repair and maintenance solutions for your home or office in Dubai.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-lg border-primary/5">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecializedDubaiServices() {
  const specializedServices = [
    {
      title: "Moving Assistance",
      icon: Truck,
      description: "Disassembling/assembling furniture and removing fixtures during move-in or move-out.",
      link: "/moving-assistance-dubai"
    },
    {
      title: "Safety & Smart Home",
      icon: ShieldAlert,
      description: "Installing child-safety latches, smoke detectors, and smart home gadgets.",
      link: "/safety-smart-home-dubai"
    },
    {
      title: "Seasonal Upgrades",
      icon: Sun,
      description: "Fixing outdoor patio items, balcony furniture repairs, and cleaning.",
      link: "/seasonal-upgrades-dubai"
    }
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Dubai Specialists
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Specialized Dubai Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Curated maintenance services specifically designed for Dubai's unique property needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {specializedServices.map((service) => (
            <Card key={service.title} className="group overflow-hidden transition-all hover:shadow-xl border-none shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
                >
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function JobberSection() {
  return (
    <section className="py-16 bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
          <Monitor className="h-10 w-10 text-primary" />
        </div>
        <h2 className="mb-6 text-4xl font-bold text-balance">
          Manage Your Home Maintenance with Jobber
        </h2>
        <p className="mb-10 text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
          We use <strong>Jobber</strong> to provide you with professional quotes, easy scheduling, and seamless invoicing. Experience the most modern way to manage your property maintenance in Dubai.
        </p>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button asChild size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20">
            <a href="tel:+971556557200">Request Quote via Jobber</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-bold border-background/20 text-black hover:bg-background/10">
            <a href="https://wa.me/971556557200">Chat for Booking</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance">
          Why Choose Our Handyman Services in Dubai
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Dubai residents trust our services because we focus on quality, reliability, and customer satisfaction.
        </p>
        <ul className="space-y-2 text-lg text-muted-foreground">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
            Skilled and experienced handymen
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
            Affordable pricing with clear quotes
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
            Fast booking through phone or WhatsApp
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
            Professional tools and materials
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
            Clean and tidy work after completion
          </li>
        </ul>
        <p className="text-lg text-muted-foreground leading-relaxed mt-6">
          Our team is dedicated to delivering <strong>trusted handyman services Dubai residents can rely on</strong>.
        </p>
      </div>
    </section>
  )
}

function BookingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance">
          Book Affordable Handyman Services in Dubai
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Booking a handyman is simple. Contact us with your job details and location, and we will provide a quick quote. Our technician will arrive on time with the necessary tools to complete the job efficiently.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Get in touch today for <strong>professional handyman services in Dubai</strong> and enjoy reliable home repair solutions at affordable prices.
        </p>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Clock,
      title: "Quick Response",
      description:
        "Our team responds within 1-2 hours for emergency calls. Same-day service available for standard bookings across all areas of Dubai.",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Emergency Services",
      description:
        "Plumbing emergencies, electrical faults, or AC breakdowns at midnight? Our emergency team is available around the clock, 365 days a year.",
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description:
        "All our technicians are fully licensed, certified, and insured. We comply with all Dubai Municipality regulations for home maintenance work.",
    },
    {
      icon: ThumbsUp,
      title: "Quality Workmanship",
      description:
        "We use premium materials and tools to deliver lasting results. Every job comes with a satisfaction guarantee and service warranty.",
    },
  ]

  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Master Technicals
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Dubai&apos;s Trusted Home Maintenance Partner
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thousands of homeowners and property managers trust us for reliable,
            professional maintenance services across Dubai.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <reason.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      role: "Villa Owner, Dubai Marina",
      text: "Master Technicals has been our go-to for home maintenance for over a year. Their plumbing and electrical team is extremely professional, and they always arrive on time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Apartment Tenant, Business Bay",
      text: "Called them for an emergency AC repair on a Friday evening. Their technician arrived within an hour and fixed the issue quickly. Great service at a fair price. Will definitely call again.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      role: "Property Manager, International City",
      text: "We manage over 50 units and rely on Master Technicals for all maintenance work. Their team is dependable, skilled, and their pricing is always transparent. A truly professional company.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from homeowners and property managers across Dubai who trust
            Master Technicals for their maintenance needs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { value: "5000+", label: "Jobs Completed" },
    { value: "2000+", label: "Happy Clients" },
    { value: "50+", label: "Expert Technicians" },
    { value: "24/7", label: "Emergency Service" },
  ]

  return (
    <section className="border-y border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question:
        "What areas in Dubai do you serve for home maintenance services?",
      answer:
        "Master Technicals provides home maintenance services across all areas of Dubai including Downtown Dubai, Dubai Marina, JBR, Business Bay, Palm Jumeirah, International City, Al Barsha, Jumeirah, Silicon Oasis, Sports City, Motor City, and more. We cover the entire Dubai emirate with quick response times.",
    },
    {
      question: "Do you offer emergency handyman services in Dubai?",
      answer:
        "Yes, we offer 24/7 emergency services for urgent issues like burst pipes, electrical faults, AC breakdowns, and other emergencies. Our emergency response team aims to reach your location within 1 hour across Dubai.",
    },
    {
      question: "How much do your home maintenance services cost?",
      answer:
        "Our pricing varies by service type and complexity. We provide free estimates before starting any work, with transparent pricing and no hidden charges. Basic handyman services start from AED 150. Contact us for a detailed quote.",
    },
    {
      question: "Are your technicians licensed and insured?",
      answer:
        "Yes, all our technicians are fully licensed by Dubai Municipality, certified in their respective trades, and covered by comprehensive insurance. You can trust that the work will be done safely and to the highest standards.",
    },
    {
      question: "Do you offer annual maintenance contracts?",
      answer:
        "Yes, we offer customizable annual maintenance contracts (AMCs) for residential and commercial properties. AMCs include regular inspections, priority service, discounted rates, and peace of mind that your property is well-maintained year-round.",
    },
    {
      question: "How quickly can you respond to a service request?",
      answer:
        "For standard bookings, we typically schedule service within 2-4 hours or at your preferred time. For emergency services, our team aims to arrive within 1 hour. We serve all major areas of Dubai and maintain a fleet ready to dispatch at any time.",
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Find answers to common questions about our home maintenance services
            in Dubai.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
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
  )
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Master Technicals",
    image: "https://mastertechnicals.com/images/hero-bg.jpg",
    description:
      "Professional handyman services in Dubai. Plumbing, electrical, carpentry, AC repair and home maintenance with same-day service. Call now.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No.14 X19 England Cluster, International City",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1657,
      longitude: 55.3906,
    },
    url: "https://mastertechnicals.com",
    telephone: "+971556557200",
    email: "mastertechnicls@gmail.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "14:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsSection />
      <CoreHandymanServices />
      <SpecializedDubaiServices />
      <JobberSection />
      <ServicesSection />
      <WhyChooseSection />
      <BookingSection />
      <WhyChooseUsSection />
      <CTASection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection
        title="Ready to Get Started?"
        subtitle="Contact us today for a free, no-obligation quote. Available 24/7 for emergency services across Dubai."
      />
    </>
  )
}
