"use client"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { searchArticles, type Article } from "@/lib/articles-data"
import Link from "next/link"

interface SearchDropdownProps {
  className?: string
  onClose?: () => void
}

export function SearchDropdown({ className, onClose }: SearchDropdownProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Article[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchArticles(searchQuery)
      setSearchResults(results)
      setIsOpen(true)
    } else {
      setSearchResults([])
      setIsOpen(false)
    }
  }, [searchQuery])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleResultClick = () => {
    setIsOpen(false)
    setSearchQuery("")
    onClose?.()
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="search"
          placeholder="Buscar artigos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {isOpen && searchResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            {searchResults.map((article) => (
              <Link
                key={article.id}
                href={`/artigos/${article.id}`}
                onClick={handleResultClick}
                className="block p-3 hover:bg-muted rounded-lg transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{article.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{article.excerpt}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span className="bg-secondary px-2 py-1 rounded text-xs">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isOpen && searchQuery.trim() && searchResults.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="p-4 text-center text-muted-foreground">Nenhum artigo encontrado para "{searchQuery}"</div>
        </Card>
      )}
    </div>
  )
}
