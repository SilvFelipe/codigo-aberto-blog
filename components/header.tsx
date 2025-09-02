"use client"
import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"
import { SearchDropdown } from "@/components/search-dropdown"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const isArticlePage = pathname?.startsWith("/artigos") || pathname?.startsWith("/categoria")

  if (isArticlePage) {
    return (
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/logo.png" alt="Código Aberto Logo" className="w-full h-full object-cover" />
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-foreground">Código Aberto</h1>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Código Aberto Logo" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-foreground">Código Aberto</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <a 
              href="#featuredPosts" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("featuredPosts")?.scrollIntoView({ behavior: "smooth", block: "center" })
              }}
            >
              Destaques
            </a>
            <a 
              href="#categories" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("categories")?.scrollIntoView({ behavior: "smooth", block: "center" })
              }}
            >
              Categorias
            </a>
            <a 
              href="#recentPosts" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("recentPosts")?.scrollIntoView({ behavior: "smooth", block: "center" })
              }}
            >
              Recentes 
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "center" })
              }}
            >
              Sobre
            </a>
          </nav>

          {/* Search and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchDropdown className="w-48 lg:w-64" />
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Theme Toggle and Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/artigos"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Artigos
              </Link>
              <a
                href="#categories"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Categorias
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <SearchDropdown onClose={() => setIsMenuOpen(false)} />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
