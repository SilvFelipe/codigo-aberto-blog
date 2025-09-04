"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Shield } from "lucide-react"
import { getCategories } from "@/lib/articles-data"
import { useRouter } from "next/navigation"

const categoryIcons: Record<string, any> = {
  Security: Shield
}

const categoryColors: Record<string, string> = {
  Security: "text-blue-500"
}

export function Categories() {
  const router = useRouter()
  const categories = getCategories()

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/categoria/${categorySlug}`)
  }

  return (
    <section>
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Categorias</h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Explore nossos conteúdos organizados por área de conhecimento
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category) => {
          const IconComponent = categoryIcons[category.name] || Code
          const colorClass = categoryColors[category.name] || "text-blue-500"

          return (
            <Card
              key={category.name}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border hover:border-primary/50"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`p-2 sm:p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}>
                    <IconComponent
                      className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass} group-hover:text-primary transition-colors`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">
                      Artigos sobre {category.name.toLowerCase()}
                    </p>
                    <span className="text-xs text-primary font-medium">{category.count} artigos</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
