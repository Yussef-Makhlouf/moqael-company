import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50">
      <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90" asChild>
        <Link href="tel:+966123456789" aria-label="اتصل بنا">
          <Phone className="h-5 w-5" />
        </Link>
      </Button>
      <Button size="icon" className="rounded-full bg-green-600 hover:bg-green-700" asChild>
        <Link href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب">
          <MessageCircle className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  )
}

