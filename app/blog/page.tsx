import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Blog - Home Maintenance Tips Dubai",
  description:
    "Read expert tips, guides, and advice on home maintenance in Dubai from Master Technicals. AC maintenance, plumbing tips, electrical safety and more.",
  openGraph: {
    title: "Home Maintenance Blog - Master Technicals Dubai",
    description:
      "Expert tips and guides on home maintenance in Dubai. Stay informed with Master Technicals.",
  },
}

const posts = [
  {
    slug: "ac-maintenance-tips-dubai-summer",
    title: "Essential AC Maintenance Tips for Dubai Summers",
    excerpt:
      "Keep your AC running efficiently during the hot Dubai summer with these professional maintenance tips from our expert technicians.",
    date: "2026-02-15",
    readTime: "5 min read",
    category: "AC Maintenance",
  },
  {
    slug: "common-plumbing-issues-dubai",
    title: "5 Most Common Plumbing Issues in Dubai Homes",
    excerpt:
      "From low water pressure to blocked drains, discover the most common plumbing problems in Dubai and how to prevent them.",
    date: "2026-02-10",
    readTime: "4 min read",
    category: "Plumbing",
  },
  {
    slug: "choosing-right-cctv-system",
    title: "How to Choose the Right CCTV System for Your Dubai Property",
    excerpt:
      "A comprehensive guide to selecting the best security camera system for your home or business in Dubai.",
    date: "2026-02-05",
    readTime: "6 min read",
    category: "Security",
  },
  {
    slug: "electrical-safety-tips-home",
    title: "Electrical Safety Tips Every Dubai Homeowner Should Know",
    excerpt:
      "Protect your family and property with these essential electrical safety practices recommended by our certified electricians.",
    date: "2026-01-28",
    readTime: "5 min read",
    category: "Electrical",
  },
  {
    slug: "improve-wifi-coverage-villa",
    title: "How to Improve WiFi Coverage in Your Dubai Villa",
    excerpt:
      "Struggling with dead zones? Here are proven solutions to get fast, reliable WiFi throughout your entire property.",
    date: "2026-01-20",
    readTime: "4 min read",
    category: "Networking",
  },
  {
    slug: "water-heater-maintenance-guide",
    title: "Complete Water Heater Maintenance Guide for Dubai",
    excerpt:
      "Extend the lifespan of your water heater and reduce energy bills with our comprehensive maintenance guide.",
    date: "2026-01-15",
    readTime: "5 min read",
    category: "Plumbing",
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Blog" }]} />

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
              Home Maintenance Tips & Guides
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expert advice and practical tips to help you maintain your Dubai
              property. From AC care to plumbing, electrical safety to security
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="group h-full transition-all hover:shadow-lg hover:border-primary/30"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-lg font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-12 text-center text-muted-foreground">
            More articles coming soon. Stay tuned for expert home maintenance
            tips and guides for Dubai residents.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
