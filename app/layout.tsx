import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { StickyCallBar } from "@/components/sticky-call-bar"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: {
    default: "Best Handyman Services in Dubai | Affordable Home Repairs",
    template: "%s | Master Technicals Dubai",
  },
  description:
    "Professional handyman services in Dubai. From TV mounting, drilling, curtain installation, plumbing, electrical repairs, carpentry work, and furniture assembly. Affordable home repairs across Dubai.",
  keywords: [
    "Handyman Services Dubai",
    "Handyman Dubai",
    "TV Mounting Dubai",
    "Curtain Installation Dubai",
    "Drilling Services Dubai",
    "Furniture Assembly Dubai",
    "Plumbing Services Dubai",
    "Electrical Services Dubai",
    "Painting Services Dubai",
    "Home Maintenance Dubai",
    "Emergency Handyman Dubai",
    "Property Maintenance Dubai",
    "Electrician Dubai",
    "AC repair Dubai",
    "Water heater repair Dubai",
    "CCTV installation Dubai",
    "Carpentry services Dubai",
  ],
  authors: [{ name: "Master Technicals" }],
  creator: "Master Technicals",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://mastertechnicals.com",
    siteName: "Master Technicals",
    title: "Best Handyman Services in Dubai | Affordable Home Repairs",
    description:
      "Professional handyman services in Dubai. From TV mounting, drilling, curtain installation, plumbing, electrical repairs, carpentry work, and furniture assembly. Affordable home repairs across Dubai.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Handyman Services in Dubai | Affordable Home Repairs",
    description:
      "Professional handyman services in Dubai. From TV mounting, drilling, curtain installation, plumbing, electrical repairs, carpentry work, and furniture assembly. Affordable home repairs across Dubai.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#1a56db",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppButton />
        <StickyCallBar />
        <Analytics />
      </body>
    </html>
  )
}
