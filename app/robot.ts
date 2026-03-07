import type { MetadataRoute } from "next"

export default function robot(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://mastertechnicals.ae/sitemap.xml",
  }
}