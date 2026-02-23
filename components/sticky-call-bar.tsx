"use client"

import { Phone, MessageCircle } from "lucide-react"

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-border bg-card shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden">
      <a
        href="tel:+971556557200"
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-primary transition-colors"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <div className="w-px bg-border" />
      <a
        href="https://wa.me/971556557200"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-[#25D366] transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  )
}
