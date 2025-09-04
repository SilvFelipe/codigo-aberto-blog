export interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  downloadUrl: string
  image?: string
  featured?: boolean
  recent?: boolean
}

export const articlesData: Article[] = [
  {
    id: "1",
    title: "Cibersegurança para Iniciantes",
    excerpt:
      "Entenda os principais ataques utilizados na internet e aprenda como se proteger.",
    image: "/images/security.png",
    category: "Security",
    readTime: "12 min",
    publishDate: "2025-09-05",
    downloadUrl: "/ebooks/cybersecurity.pdf",
    featured: true,
    recent: true
  },
]

export function getArticleById(id: string): Article | undefined {
  return articlesData.find((article) => article.id === id)
}

export function getFeaturedArticles(): Article[] {
  return articlesData.filter((article) => article.featured)
}

export function getRecentArticles(): Article[] {
  return articlesData.filter((article) => article.recent)
}

export function searchArticles(query: string): Article[] {
  if (!query.trim()) return []

  const searchTerm = query.toLowerCase()
  return articlesData.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm) ||
      article.category.toLowerCase().includes(searchTerm),
  )
}

export function getArticlesByCategory(category: string): Article[] {
  return articlesData.filter((article) => article.category === category)
}

export function getCategories() {
  const categoryMap = new Map<string, number>()

  articlesData.forEach((article) => {
    const count = categoryMap.get(article.category) || 0
    categoryMap.set(article.category, count + 1)
  })

  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "e"),
  }))
}
