import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Smartphone, Globe } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Bem-vindo ao <span className="text-primary">Código Aberto</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Seu destino para conteúdos de qualidade sobre programação, inteligência artificial, desenvolvimento web e
            mobile. Aprenda com tutoriais práticos e baixe ebooks gratuitos.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
            asChild
          >
            <Link href="/artigos">
              Explorar Artigos
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
