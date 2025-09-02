import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedPosts } from "@/components/featured-posts"
import { RecentPosts } from "@/components/recent-posts"
import { Categories } from "@/components/categories"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">
          <section id="featuredPosts">
            <FeaturedPosts />
          </section>
          <section id="categories">
            <Categories />
          </section>
          <section id="recentPosts">
            <RecentPosts />
          </section>
        </div>
      </main>
      <section id="about">
        <Footer />
      </section>
    </div>
  )
}
