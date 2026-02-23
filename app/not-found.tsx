import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for does not exist or has been moved. Let us
        help you find what you need.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            View Services
          </Link>
        </Button>
      </div>
    </div>
  )
}
