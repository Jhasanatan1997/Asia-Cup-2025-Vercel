"use client"

import { Card } from "@/components/ui/card"
import Link from "next/link"
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
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Latest News</h2>
            <Link href="/news" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              View All News →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-slate-800 border-slate-700 animate-pulse">
                <div className="aspect-video bg-slate-700"></div>
                <div className="p-4">
                  <div className="h-4 bg-slate-700 rounded mb-2"></div>
                  <div className="h-6 bg-slate-700 rounded mb-2"></div>
                  <div className="h-4 bg-slate-700 rounded"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Latest News</h2>
          <Link href="/news" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-750 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-400 mb-2">{article.date}</div>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-3">{article.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
