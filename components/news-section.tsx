import { Card } from "@/components/ui/card"
import Link from "next/link"

export function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      title: "Asia Cup 2025: Tournament Schedule Released",
      excerpt:
        "The complete fixture list for Asia Cup 2025 has been announced with matches starting from September 9th.",
      image: "/cricket-tournament-schedule.jpg",
      date: "2 hours ago",
    },
    {
      id: 2,
      title: "Afghanistan Squad Analysis for Asia Cup",
      excerpt:
        "Breaking down Afghanistan's 15-man squad selection and key players to watch in the upcoming tournament.",
      image: "/cricket-team-analysis.jpg",
      date: "4 hours ago",
    },
    {
      id: 3,
      title: "Dubai Stadium Ready to Host Asia Cup Matches",
      excerpt:
        "The iconic Dubai International Cricket Stadium has been confirmed as one of the venues for Asia Cup 2025.",
      image: "/cricket-stadium.jpg",
      date: "6 hours ago",
    },
  ]

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
