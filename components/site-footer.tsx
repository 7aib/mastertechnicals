import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react"
import { services } from "@/lib/services-data"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 flex flex-col items-start gap-3">
              <Image
                src="/logo.png"
                alt="Master Technicals Logo"
                width={120}
                height={35}
                className="rounded-lg object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-background/80">Master Technicals</span>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-background/70">
              Your trusted partner for professional home maintenance services
              across Dubai. Licensed, insured, and committed to quality
              workmanship since day one.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+971556557200"
                className="flex items-center gap-2 text-background/80 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                +971 55 655 7200
              </a>
              <a
                href="mailto:contact@mastertechnicals.com"
                className="flex items-center gap-2 text-background/80 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                contact@mastertechnicals.com
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Office No.14 X19 England Cluster, International City, Dubai,
                  UAE
                </span>
              </div>
              <div className="flex items-start gap-2 text-background/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Sat-Thu: 10AM-10PM
                  <br />
                  Fri: 2PM-10PM
                  <br />
                  Emergency: 24/7
                </span>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-4 text-base font-bold">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-3 w-3" />
                    {service.shortTitle} Services
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-bold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "All Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    <ChevronRight className="h-3 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 mt-8 text-base font-bold">Service Areas</h3>
            <ul className="flex flex-col gap-2">
              {[
                "Downtown Dubai",
                "Dubai Marina",
                "Business Bay",
                "JBR",
                "Palm Jumeirah",
                "International City",
                "Al Barsha",
                "Jumeirah",
              ].map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-1 text-sm text-background/70"
                >
                  <ChevronRight className="h-3 w-3" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Google Maps */}
          <div>
            <h3 className="mb-4 text-base font-bold">Find Us</h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.168!2d55.3906!3d25.1657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6127a1f0b0f5%3A0x69e4a4d2ac0b9e47!2sInternational%20City%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Master Technicals location in International City, Dubai"
              />
            </div>
            <p className="mt-3 text-sm text-background/70">
              Serving all major areas across Dubai with quick response times and
              professional service.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-center text-xs text-background/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Master Technicals. All rights
            reserved.
          </p>
          <p>Professional Home Maintenance Services in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}
