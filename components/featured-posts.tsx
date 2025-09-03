import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getFeaturedArticles } from "@/lib/articles-data"

export function FeaturedPosts() {
  const featuredPosts = getFeaturedArticles()

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Artigos em Destaque</h2>
        <p className="text-muted-foreground text-lg">Os conteúdos mais populares e atualizados da nossa comunidade</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="flex flex-col space-y-3">
                <Button variant="default" className="w-full group" asChild>
                  <Link href={`/artigos/${post.id}`}>
                    Ler Artigo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={post.downloadUrl} download>
                    <Download className="mr-2 w-4 h-4" />
                    Baixar eBook
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
