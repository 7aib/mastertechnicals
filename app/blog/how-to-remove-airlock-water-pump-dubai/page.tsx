import type { Metadata } from "next"
import { AlertTriangle, Droplets, Info, Settings, ShieldCheck, Wrench } from "lucide-react"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "How to Remove an Airlock from Your Water Pump in Dubai | Quick Fix",
  description:
    "Is your water pump sputtering or not pumping water? Learn how to fix an airlock like a pro. Find out why airlocks happen in Dubai homes and how to easily bleed your water pump.",
  openGraph: {
    title: "Is Your Water Pump Sputtering? Here is How to Fix an Airlock Like a Pro",
    description:
      "If your pump is running but no water is coming out, you likely have an airlock. Discover the easiest ways to bleed your pump and restore your water pressure instantly.",
    type: "article",
  },
}

export default function BlogPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Is Your Water Pump Sputtering? Here is How to Fix an Airlock Like a Pro",
    description: "If your pump is running but no water is coming out, you likely have an airlock. Discover how to fix it easily.",
    author: {
      "@type": "Organization",
      name: "Master Technicals",
    },
    publisher: {
      "@type": "Organization",
      name: "Master Technicals",
      logo: {
        "@type": "ImageObject",
        url: "https://mastertechnicals.com/logo.png",
      },
    },
    datePublished: "2026-03-18",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mastertechnicals.com/blog/how-to-remove-airlock-water-pump-dubai",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbNav
        items={[
          { label: "Blog", href: "/blog" },
          { label: "How to Fix a Water Pump Airlock" },
        ]}
      />

      <article className="pb-16 pt-8 md:pb-24">
        {/* Header section */}
        <header className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-sm font-medium text-primary">
            <span className="rounded-full bg-primary/10 px-3 py-1">Plumbing</span>
            <span>•</span>
            <time dateTime="2026-03-18">March 18, 2026</time>
          </div>
          <h1 className="mb-6 text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Is Your Water Pump Sputtering? Here is How to Fix an Airlock Like a Pro
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            There is nothing more frustrating than turning on your tap in the middle of a hot Dubai afternoon only to hear a coughing, sputtering sound—or worse, nothing at all.
          </p>
        </header>

        {/* Hero Image replacement using styling */}
        <div className="mx-auto mt-12 max-w-5xl px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/80 to-accent/80 shadow-2xl flex items-center justify-center">
            <Droplets className="h-32 w-32 text-primary-foreground opacity-50" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-xl font-bold text-white md:text-3xl">How to Remove an Airlock from Your Water Pump</h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto mt-12 max-w-3xl px-4">
          <div className="prose prose-lg mx-auto max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
            <p>
              If your water pump is running but no water is coming out, you likely have an airlock. An airlock occurs when air becomes trapped in the pipes or the pump casing, preventing the water from flowing. While it sounds serious, it’s often a simple fix. In this guide, the experts at Master Technicals (your Water Pump Repair Guru) will show you the easiest ways to bleed your pump and restore your water pressure instantly.
            </p>

            <h2 className="flex items-center gap-2 mt-12 mb-6 text-2xl font-bold text-foreground">
              <Settings className="h-6 w-6 text-primary" />
              Why Airlocks Happen in Dubai Homes
            </h2>
            
            <p>
              Before diving into the fix, it is helpful to understand why airlocks happen in the first place. In Dubai, extreme heat and typical plumbing setups can make airlocks a common issue:
            </p>

            <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                <Wrench className="mb-3 h-8 w-8 text-secondary-foreground" />
                <h3 className="mb-2 font-bold text-foreground">Recent Repairs</h3>
                <p className="text-sm text-muted-foreground">If you recently had a pipe fixed or replaced, air likely entered the system during the process.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                <AlertTriangle className="mb-3 h-8 w-8 text-secondary-foreground" />
                <h3 className="mb-2 font-bold text-foreground">Empty Tanks</h3>
                <p className="text-sm text-muted-foreground">If your main water tank ran dry unexpectedly, the pump may have sucked in air instead of water.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
                <Droplets className="mb-3 h-8 w-8 text-secondary-foreground" />
                <h3 className="mb-2 font-bold text-foreground">Small Leaks</h3>
                <p className="text-sm text-muted-foreground">Even a tiny pinhole leak in the suction line can pull air into the pump over time.</p>
              </div>
            </div>

            <h2 className="mt-12 mb-6 text-2xl font-bold text-foreground">
              How to Bleed Your Pump and Remove the Airlock
            </h2>

            <p>
              Follow these simple steps to remove the trapped air from your water pump system. Note: Before starting, make sure your water tank actually has water in it!
            </p>

            <ol className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <div>
                  <strong className="block text-foreground mb-1">Turn Off the Power</strong>
                  <p>Never work on a water pump while it is connected to power. Switch off the breaker to ensure your safety.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                <div>
                  <strong className="block text-foreground mb-1">Locate the Bleed Valve or Priming Plug</strong>
                  <p>Check the top of your pump casing for a small plug or valve. This is designed to let air escape. Slowly open it using a wrench or screwdriver.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                <div>
                  <strong className="block text-foreground mb-1">Let the Air Escape</strong>
                  <p>As you open the valve, you should hear a hissing sound as the trapped air is pushed out. Wait until water starts flowing out smoothly with no bubbles. Once you see a steady stream of water, quickly tighten the plug back up. Turn the power back on and listen for your pump running smoothly!</p>
                </div>
              </li>
            </ol>

            <div className="not-prose mt-12 rounded-2xl border-l-4 border-l-accent bg-accent/5 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <Info className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h3 className="mb-2 font-bold text-foreground text-lg">Professional Tip</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you’ve tried to bleed the pump and the pressure still won't return, you might have a failing seal or an issue with the impeller. <strong>Don’t risk burning out the motor by letting it run dry.</strong> Contact our Water Pump Repair Dubai team for 24/7 assistance to prevent costly damage.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                      <a href="tel:+971556557200">Call Now for 24/7 Assist</a>
                    </Button>
                    <Button asChild variant="outline" className="border-border bg-card/50 shadow-sm hover:bg-card">
                      <a href="https://wa.me/971556557200" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </article>

      <CTASection 
        title="Need Professional Pump Repair?"
        subtitle="Our expert technicians are available 24/7 across Dubai to solve any water pump issues."
      />
    </>
  )
}
