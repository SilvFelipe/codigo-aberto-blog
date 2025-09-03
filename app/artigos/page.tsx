import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { articlesData } from "@/lib/articles-data"
import { Header } from "@/components/header"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Todos os Artigos</h1>
          <p className="text-xl text-muted-foreground">Explore nossa coleção completa de conteúdos sobre tecnologia</p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
            >
              {article.image && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
              )}

              <CardHeader>
                {!article.image && (
                  <div className="mb-2">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                )}
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishDate).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>

                <div className="flex flex-col space-y-3">
                  <Button variant="default" className="w-full group" asChild>
                    <Link href={`/artigos/${article.id}`}>
                      Ler Artigo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={article.downloadUrl} download>
                      <Download className="mr-2 w-4 h-4" />
                      Baixar eBook
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-secondary/50 rounded-lg p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Gostou do conteúdo?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nosso blog está sempre sendo atualizado com novos conteúdos sobre as tecnologias mais atuais do mercado.
            </p>
            <Button size="lg" asChild>
              <Link href="/">
                Voltar ao Início
                <ArrowLeft className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
