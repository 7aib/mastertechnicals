import type { Metadata } from "next"
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  ShieldCheck,
  Clock,
  Handshake,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - Master Technicals Dubai",
  description:
    "Learn about Master Technicals, Dubai's trusted home maintenance company. Led by CEO Ghulam Mustafa, we deliver professional property maintenance services with quality workmanship.",
  openGraph: {
    title: "About Master Technicals - Dubai Home Maintenance Company",
    description:
      "Dubai's trusted home maintenance company delivering professional property maintenance services across all areas.",
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "We believe in transparent pricing, honest assessments, and always doing what is right for our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest quality in every job, no matter how small. Our workmanship speaks for itself.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "When we say we will be there, we will be there. Punctuality and consistency define our service.",
    },
    {
      icon: Handshake,
      title: "Customer First",
      description:
        "Every decision we make is guided by what is best for our customers. Your satisfaction is our success.",
    },
  ]

  return (
    <>
      <BreadcrumbNav items={[{ label: "About Us" }]} />

      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl text-balance">
              Your Trusted Home Maintenance Partner in Dubai
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Master Technicals has been serving homeowners, tenants, and
              property managers across Dubai with professional maintenance
              services. Our commitment to quality workmanship, fair pricing,
              and customer satisfaction sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Built on Trust, Driven by Quality
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                <p>
                  Master Technicals was founded with a simple vision: to
                  provide Dubai residents with reliable, high-quality home
                  maintenance services they can trust. Operating from our
                  office in International City, we have grown to serve
                  thousands of satisfied clients across every corner of Dubai.
                </p>
                <p>
                  Our team of skilled technicians specializes in a wide range
                  of services including plumbing, electrical work, AC
                  maintenance, CCTV installation, networking solutions, and
                  general handyman services. Each team member is carefully
                  vetted, fully licensed, and trained to deliver exceptional
                  results.
                </p>
                <p>
                  What started as a small maintenance company has evolved into
                  one of Dubai&apos;s most trusted property maintenance providers,
                  serving residential communities, commercial buildings, and
                  individual homeowners with equal dedication and
                  professionalism.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
                <p className="text-4xl font-bold">5000+</p>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Jobs Completed
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-8 text-center">
                <p className="text-4xl font-bold text-primary">2000+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Happy Clients
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-8 text-center">
                <p className="text-4xl font-bold text-primary">50+</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Expert Technicians
                </p>
              </div>
              <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
                <p className="text-4xl font-bold">24/7</p>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Emergency Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To lead the home maintenance industry in promoting
                  sustainable living through innovative solutions, exceptional
                  service standards, and a commitment to building lasting
                  relationships with every client we serve across Dubai and the
                  UAE.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver reliable, affordable, and professional home
                  maintenance services that exceed customer expectations. We
                  aim to be every Dubai resident&apos;s first call for any
                  property maintenance need, big or small.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">
                  Our Promise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every job completed to the highest standard. Every client
                  treated with respect and transparency. Every price fair and
                  honest. We stand behind our work with a satisfaction
                  guarantee on every service we provide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Users className="h-12 w-12" />
            </div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Leadership
            </span>
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Ghulam Mustafa
            </h2>
            <p className="mb-6 text-lg text-primary font-medium">
              Chief Executive Officer
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Under the leadership of Ghulam Mustafa, Master Technicals has
              grown from a small maintenance operation into a trusted name in
              Dubai&apos;s property maintenance industry. His hands-on approach,
              dedication to customer satisfaction, and commitment to quality
              have been the driving forces behind the company&apos;s success. With
              years of experience in the field, he continues to lead the team
              with a focus on innovation, reliability, and building lasting
              client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Values
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground text-balance">
              Why Customers Trust Us in Dubai
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Dubai's Best"
        subtitle="Whether you need a one-time repair or an annual maintenance contract, Master Technicals is here to help."
      />
    </>
  )
}
