"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971556557200?text=Hello%20Master%20Technicals%2C%20I%20need%20a%20quote%20for%20home%20maintenance%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:bottom-6 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
