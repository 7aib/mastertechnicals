"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Clock,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services-data"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      {/* <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Sat-Thu: 10AM-10PM | Fri: 2PM-10PM
            </span>
            <a href="mailto:contact@mastertechnicals.com" className="flex items-center gap-1.5 hover:underline transition-colors cursor-pointer">
              <Mail className="h-3.5 w-3.5" />
              contact@mastertechnicals.com
            </a>
          </div>
          <a
            href="tel:+971556557200"
            className="flex items-center gap-1.5 font-semibold"
          >
            <Phone className="h-3.5 w-3.5" />
            +971 55 655 7200
          </a>
        </div>
      </div> */}

      {/* Main nav */}
      <nav className="border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Master Technicals Logo"
              width={150}
              height={40}
              className="rounded-lg object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-foreground">
                Master Technicals
              </span>
              <span className="text-xs text-muted-foreground">
                Home Maintenance Dubai
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                      pathname === link.href ||
                        pathname.startsWith("/services/")
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 w-72 rounded-lg border border-border bg-card p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        <service.icon className="h-4 w-4 text-primary" />
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary",
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild>
              <a href="tel:+971556557200">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-foreground"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col gap-1 pb-2 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-2 rounded-md py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          <service.icon className="h-4 w-4 text-primary" />
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm font-medium text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild className="w-full">
                <a href="tel:+971556557200">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
