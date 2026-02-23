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
    default:
      "Master Technicals - Professional Home Maintenance Services in Dubai",
    template: "%s | Master Technicals Dubai",
  },
  description:
    "Master Technicals offers 24/7 professional home maintenance, handyman, plumbing, electrical, AC repair, CCTV installation and more across Dubai. Call +971556557200 for a free quote.",
  keywords: [
    "home maintenance services in Dubai",
    "handyman services in Dubai",
    "property maintenance Dubai",
    "emergency handyman Dubai",
    "AC repair Dubai",
    "plumbing services Dubai",
    "electrical services Dubai",
    "water heater repair Dubai",
    "CCTV installation Dubai",
    "satellite installation Dubai",
    "networking solutions Dubai",
  ],
  authors: [{ name: "Master Technicals" }],
  creator: "Master Technicals",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://mastertechnicals.ae",
    siteName: "Master Technicals",
    title:
      "Master Technicals - Professional Home Maintenance Services in Dubai",
    description:
      "24/7 professional home maintenance, handyman, plumbing, electrical, AC repair and more across Dubai. Licensed & insured technicians.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Master Technicals - Professional Home Maintenance Services in Dubai",
    description:
      "24/7 professional home maintenance, handyman, plumbing, electrical, AC repair and more across Dubai.",
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
