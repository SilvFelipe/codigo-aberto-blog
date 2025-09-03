import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-8">
          {/* Logo e Descrição */}
          <div className="md:w-2/3">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/images/logo.png" alt="Código Aberto Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Código Aberto</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Seu destino para conteúdos de qualidade sobre tecnologia. Compartilhamos conhecimento através de artigos
              práticos e ebooks gratuitos para ajudar desenvolvedores a evoluir em suas carreiras.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Código Aberto. Todos os direitos reservados. Feito com ❤️ para a comunidade de desenvolvedores.
          </p>
        </div>
      </div>
    </footer>
  )
}
