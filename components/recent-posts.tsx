import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getRecentArticles } from "@/lib/articles-data"

export function RecentPosts() {
  const recentPosts = getRecentArticles()

  return (
    <section>
      <div className="text-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Artigos Recentes</h2>
          <p className="text-muted-foreground text-lg">Os conteúdos mais recentes publicados no blog</p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/artigos">
            Ver Todos
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {recentPosts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
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
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

              <div className="flex space-x-3">
                <Button variant="default" className="flex-1 group" asChild>
                  <Link href={`/artigos/${post.id}`}>
                    Ler Artigo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button variant="outline" size="icon" asChild>
                  <a href={post.downloadUrl} download>
                    <Download className="w-4 h-4" />
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
