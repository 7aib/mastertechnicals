import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({
  title = "Need Professional Home Maintenance?",
  subtitle = "Get a free quote today. Our expert team is ready to help with any home maintenance task across Dubai.",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-balance">{title}</h2>
        <p className="mb-8 text-lg text-primary-foreground/80">{subtitle}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-card text-primary hover:bg-card/90"
          >
            <a href="tel:+971556557200">
              <Phone className="mr-2 h-5 w-5" />
              Call +971 55 655 7200
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10"
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
    </section>
  )
}
