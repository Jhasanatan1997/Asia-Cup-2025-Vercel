"use client"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

interface NewsArticle {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
}

export function NewsSection() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)

  const fetchNews = async () => {
    try {
      const response = await fetch("/api/news")
      const data = await response.json()
      setNewsArticles(data.articles)
    } catch (error) {
      console.error("Error fetching news:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()

    // Set up interval to fetch news every 10 minutes (600,000 ms)
    const interval = setInterval(fetchNews, 10 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container-responsive">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white">Latest News</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-slate-800 border-slate-700 animate-pulse">
                <div className="aspect-video bg-slate-700"></div>
                <div className="p-3 sm:p-4">
                  <div className="h-3 sm:h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-5 sm:h-6 bg-slate-700 rounded mb-2"></div>
                  <div className="h-3 sm:h-4 bg-slate-700 rounded"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container-responsive">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-750 transition-colors cursor-pointer group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-slate-400 mb-2">{article.date}</div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
