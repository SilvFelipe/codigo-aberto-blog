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
    recent: false
  },
  {
    id: "2",
    title: "Desmistificando a Inteligência Artificial",
    excerpt:
      "Entenda como a IA funciona, como foi idealizada e como está presente no nosso dia a dia.",
    image: "/images/ai.png",
    category: "IA & ML",
    readTime: "10 min",
    publishDate: "2025-10-14",
    downloadUrl: "/ebooks/artificial_intelligence.pdf",
    featured: true,
    recent: true
  },
  {
    id: "3",
    title: "Machine Learning para Iniciantes",
    excerpt:
      "Entenda como as inteligências artificiais aprendem.",
    image: "/images/machine_learning.png",
    category: "IA & ML",
    readTime: "15 min",
    publishDate: "2025-10-20",
    downloadUrl: "/ebooks/machine_learning.pdf",
    featured: true,
    recent: true
  },
  {
    id: "4",
    title: "Desvendando o Mundo Conectado",
    excerpt:
      "Entenda como funciona a rede de computadores mais famosa do mundo, a Internet.",
    image: "/images/internet.png",
    category: "Internet",
    readTime: "10 min",
    publishDate: "2025-10-31",
    downloadUrl: "/ebooks/internet.pdf",
    featured: true,
    recent: true
  }
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
