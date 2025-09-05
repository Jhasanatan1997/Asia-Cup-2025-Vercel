import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MatchesSection } from "@/components/matches-section"
import { TableSection } from "@/components/table-section"
import { NewsSection } from "@/components/news-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="matches">
          <MatchesSection />
        </div>
        <div id="table">
          <TableSection />
        </div>
        <div id="news">
          <NewsSection />
        </div>
      </main>
    </div>
  )
}
