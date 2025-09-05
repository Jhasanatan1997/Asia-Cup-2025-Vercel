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
        <MatchesSection />
        <TableSection />
        <NewsSection />
      </main>
    </div>
  )
}
