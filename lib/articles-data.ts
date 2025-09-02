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
}

export const articlesData: Article[] = [
  {
    id: "1",
    title: "Introdução ao React 18: Novas Features e Concurrent Rendering",
    excerpt:
      "Descubra as principais novidades do React 18, incluindo Concurrent Features, Suspense melhorado e como migrar seus projetos.",
    image: "/react-18-coding.png",
    category: "React",
    readTime: "8 min",
    publishDate: "2024-01-15",
    downloadUrl: "/ebooks/react-18-guide.pdf",
    featured: true,
  },
  {
    id: "2",
    title: "Machine Learning com Python: Do Zero ao Deploy",
    excerpt:
      "Um guia completo para começar com Machine Learning usando Python, scikit-learn e como fazer deploy de modelos em produção.",
    image: "/machine-learning-python-ai.png",
    category: "IA & ML",
    readTime: "12 min",
    publishDate: "2024-01-10",
    downloadUrl: "/ebooks/ml-python-guide.pdf",
    featured: true,
  },
  {
    id: "3",
    title: "Desenvolvimento Mobile com React Native: Guia Prático",
    excerpt:
      "Aprenda a criar aplicativos mobile multiplataforma com React Native, desde a configuração até a publicação nas lojas.",
    image: "/react-native-mobile-dev.png",
    category: "Mobile",
    readTime: "10 min",
    publishDate: "2024-01-05",
    downloadUrl: "/ebooks/react-native-guide.pdf",
    featured: true,
  },
  {
    id: "4",
    title: "TypeScript 5.0: Novidades e Melhorias de Performance",
    excerpt: "Conheça as principais features do TypeScript 5.0 e como elas podem melhorar seu código.",
    category: "TypeScript",
    readTime: "6 min",
    publishDate: "2024-01-20",
    downloadUrl: "/ebooks/typescript-5-guide.pdf",
  },
  {
    id: "5",
    title: "Docker para Desenvolvedores: Containerização Simplificada",
    excerpt: "Aprenda Docker do básico ao avançado e como usar containers no desenvolvimento.",
    category: "DevOps",
    readTime: "9 min",
    publishDate: "2024-01-18",
    downloadUrl: "/ebooks/docker-guide.pdf",
  },
  {
    id: "6",
    title: "Next.js 14: App Router e Server Components",
    excerpt: "Guia completo sobre o App Router do Next.js 14 e como usar Server Components.",
    category: "Next.js",
    readTime: "11 min",
    publishDate: "2024-01-16",
    downloadUrl: "/ebooks/nextjs-14-guide.pdf",
  },
  {
    id: "7",
    title: "Testes Automatizados com Jest e Testing Library",
    excerpt: "Como implementar testes eficazes em aplicações React usando Jest e Testing Library.",
    category: "Testes",
    readTime: "7 min",
    publishDate: "2024-01-14",
    downloadUrl: "/ebooks/testing-guide.pdf",
  },
]

export function getArticleById(id: string): Article | undefined {
  return articlesData.find((article) => article.id === id)
}

export function getFeaturedArticles(): Article[] {
  return articlesData.filter((article) => article.featured)
}

export function getRecentArticles(): Article[] {
  return articlesData.filter((article) => !article.featured)
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
