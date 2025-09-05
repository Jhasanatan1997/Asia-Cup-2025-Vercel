import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const matches = [
  {
    id: 1,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "1:30 PM",
  },
  {
    id: 2,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "1:30 PM",
  },
  {
    id: 3,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "1:30 PM",
  },
  {
    id: 4,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "1:30 PM",
  },
  {
    id: 5,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "1:30 PM",
  },
]

export function MatchesSection() {
  return (
    <section className="px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold text-white">Matches</h2>
          <div className="flex gap-2">
            <Link
              href="/?filter=upcoming"
              className="text-white bg-blue-900 hover:bg-blue-800 px-4 py-2 rounded-md transition-colors"
            >
              Upcoming
            </Link>
            <Link
              href="/?filter=past"
              className="text-white/80 hover:text-white hover:bg-blue-900/50 px-4 py-2 rounded-md transition-colors"
            >
              Past
            </Link>
            <Link
              href="/?filter=all"
              className="text-white/80 hover:text-white hover:bg-blue-900/50 px-4 py-2 rounded-md transition-colors"
            >
              All
            </Link>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900/50">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900/50">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {matches.map((match) => (
          <Link key={match.id} href={`/match/${match.id}`}>
            <Card className="flex-shrink-0 w-64 bg-purple-900 border-purple-700 backdrop-blur-sm hover:bg-purple-800 transition-colors cursor-pointer">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={match.player1 || "/placeholder.svg"}
                      alt="Player 1"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex items-center gap-1">
                      <img
                        src={match.team1.flag || "/placeholder.svg"}
                        alt={match.team1.name}
                        className="w-6 h-6 rounded"
                      />
                      <span className="text-white font-bold text-sm">{match.team1.name}</span>
                    </div>
                  </div>

                  <div className="text-white text-lg font-bold">VS</div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-bold text-sm">{match.team2.name}</span>
                      <img
                        src={match.team2.flag || "/placeholder.svg"}
                        alt={match.team2.name}
                        className="w-6 h-6 rounded"
                      />
                    </div>
                    <img
                      src={match.player2 || "/placeholder.svg"}
                      alt="Player 2"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-white/80 text-sm">
                  <span>
                    {match.date} | {match.time}
                  </span>
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
