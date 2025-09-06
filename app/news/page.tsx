import { Header } from "@/components/header"
import { Card } from "@/components/ui/card"

export default function NewsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-8 sm:py-12 lg:py-16 overflow-x-hidden">
        <div className="container-responsive">
          <h1 className="text-responsive-4xl lg:text-responsive-5xl font-bold text-white mb-6 sm:mb-8">Cricket News</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Featured News */}
            <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm overflow-hidden sm:col-span-2 lg:col-span-3">
              <div className="aspect-video bg-gradient-to-r from-yellow-400 to-orange-500 relative">
                <img
                  src="/cricket-news-stadium-crowd.jpg"
                  alt="Asia Cup 2025 Preview"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <h2 className="text-responsive-xl sm:text-responsive-2xl font-bold text-white mb-2">
                    Asia Cup 2025: Complete Preview and Predictions
                  </h2>
                  <p className="text-white/80 text-responsive-sm sm:text-responsive-base">
                    The most anticipated cricket tournament returns with exciting matchups and fierce competition.
                  </p>
                </div>
              </div>
            </Card>

            {/* News Articles */}
            {[
              {
                title: "India vs Pakistan: The Ultimate Rivalry Returns",
                excerpt: "Two cricket powerhouses clash in what promises to be the match of the tournament.",
                image: "/cricket-match-action.jpg",
              },
              {
                title: "Rising Stars to Watch in Asia Cup 2025",
                excerpt: "Young talents ready to make their mark on the international stage.",
                image: "/young-cricket-player.jpg",
              },
              {
                title: "Tournament Format and Schedule Revealed",
                excerpt: "Everything you need to know about the Asia Cup 2025 format and key dates.",
                image: "/cricket-tournament-schedule.jpg",
              },
              {
                title: "Team Analysis: Strengths and Weaknesses",
                excerpt: "In-depth look at each team's chances and key players to watch.",
                image: "/cricket-team-analysis.jpg",
              },
              {
                title: "Venue Guide: Where the Action Happens",
                excerpt: "A complete guide to all the stadiums hosting Asia Cup matches.",
                image: "/cricket-stadium.jpg",
              },
              {
                title: "Historical Moments in Asia Cup",
                excerpt: "Relive the greatest moments from previous Asia Cup tournaments.",
                image: "/cricket-celebration.jpg",
              },
            ].map((article, index) => (
              <Card
                key={index}
                className="bg-slate-800 border-slate-700 backdrop-blur-sm overflow-hidden hover:bg-slate-700 transition-colors cursor-pointer group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-responsive-base sm:text-responsive-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/70 text-responsive-xs sm:text-responsive-sm">{article.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
