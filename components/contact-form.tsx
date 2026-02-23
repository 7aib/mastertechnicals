"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { services } from "@/lib/services-data"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We have received your message and will get back to you within 1 hour
          during working hours. For urgent issues, please call us directly at{" "}
          <a href="tel:+971556557200" className="text-primary font-medium">
            +971 55 655 7200
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your full name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+971 XX XXX XXXX"
            required
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="service">Service Needed *</Label>
          <Select name="service" required>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.slug} value={service.slug}>
                  {service.shortTitle}
                </SelectItem>
              ))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Property Location in Dubai</Label>
        <Input
          id="location"
          name="location"
          placeholder="e.g. Dubai Marina, Business Bay, etc."
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Describe Your Issue *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please describe the maintenance issue or service you need..."
          rows={4}
          required
        />
      </div>
      <Button type="submit" size="lg" className="text-base">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to be contacted regarding your
        service request. We respect your privacy and will never share your
        information.
      </p>
    </form>
  )
}
