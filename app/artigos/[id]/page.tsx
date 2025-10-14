import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getArticleById } from "@/lib/articles-data"
import { Header } from "@/components/header"

import { SecurityArticle } from "@/components/articles/security-article"
import { ArtificialIntelligenceArticle } from "@/components/articles/artificial-intelligence-article"

const articleComponents = {
  "1": SecurityArticle,
  "2": ArtificialIntelligenceArticle,
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)

  if (!article) {
    notFound()
  }

  const ArticleComponent = articleComponents[params.id as keyof typeof articleComponents]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link
            href="/artigos"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar aos artigos
          </Link>

          {/* Article Header */}
          <header className="mb-8 lg:mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
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
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {article.title}
            </h1>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href={article.downloadUrl} download>
                  <Download className="w-4 h-4 mr-2" />
                  Baixar eBook
                </a>
              </Button>
            </div>
          </header>

          {/* Article Body - Componente específico */}
          {ArticleComponent && <ArticleComponent />}

          {/* Download Section */}
          <div className="mt-12 p-6 lg:p-8 bg-secondary/50 rounded-lg border border-border">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Gostou do conteúdo?</h3>
              <p className="text-muted-foreground mb-6">Baixe o eBook completo e tenha todo o conteúdo sempre à mão!</p>
              <Button size="lg" asChild>
                <a href={article.downloadUrl} download>
                  <Download className="w-5 h-5 mr-2" />
                  Baixar eBook Gratuito
                </a>
              </Button>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
