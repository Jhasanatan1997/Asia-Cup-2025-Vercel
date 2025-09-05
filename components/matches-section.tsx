"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const liveMatches = [
  {
    id: 1,
    team1: { name: "IND", flag: "/afghanistan-flag.png" },
    team2: { name: "PAK", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    score1: "156/4",
    score2: "89/2",
    overs1: "18.3",
    overs2: "12.1",
    status: "LIVE",
  },
  {
    id: 2,
    team1: { name: "SL", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    score1: "201/6",
    score2: "45/1",
    overs1: "20.0",
    overs2: "6.2",
    status: "LIVE",
  },
]

const upcomingMatches = [
  {
    id: 3,
    team1: { name: "AFG", flag: "/afghanistan-flag.png" },
    team2: { name: "NEP", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "10 SEP",
    time: "2:30 PM",
  },
  {
    id: 4,
    team1: { name: "UAE", flag: "/afghanistan-flag.png" },
    team2: { name: "HK", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "11 SEP",
    time: "7:00 PM",
  },
]

const completedMatches = [
  {
    id: 5,
    team1: { name: "IND", flag: "/afghanistan-flag.png" },
    team2: { name: "SL", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    score1: "184/5",
    score2: "181/8",
    result: "IND won by 3 runs",
    date: "8 SEP",
  },
  {
    id: 6,
    team1: { name: "PAK", flag: "/afghanistan-flag.png" },
    team2: { name: "BAN", flag: "/bangladesh-flag.png" },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    score1: "159/7",
    score2: "142/9",
    result: "PAK won by 17 runs",
    date: "7 SEP",
  },
]

function MatchCard({ match, type }: { match: any; type: "live" | "upcoming" | "completed" }) {
  return (
    <Card className="flex-shrink-0 w-80 bg-purple-900 border-purple-700 backdrop-blur-sm hover:bg-purple-800 transition-colors">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <img
              src={match.player1 || "/placeholder.svg"}
              alt="Player 1"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex items-center gap-1">
              <img src={match.team1.flag || "/placeholder.svg"} alt={match.team1.name} className="w-6 h-6 rounded" />
              <span className="text-white font-bold text-sm">{match.team1.name}</span>
            </div>
          </div>

          <div className="text-white text-lg font-bold">VS</div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-sm">{match.team2.name}</span>
              <img src={match.team2.flag || "/placeholder.svg"} alt={match.team2.name} className="w-6 h-6 rounded" />
            </div>
            <img
              src={match.player2 || "/placeholder.svg"}
              alt="Player 2"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>

        {type === "live" && (
          <>
            <div className="flex justify-between text-white text-sm mb-3">
              <div className="text-center">
                <div className="font-bold">{match.score1}</div>
                <div className="text-white/60">({match.overs1} ov)</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{match.score2}</div>
                <div className="text-white/60">({match.overs2} ov)</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-bold text-sm">{match.status}</span>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm">
                <Play className="w-4 h-4 mr-1" />
                Watch Live
              </Button>
            </div>
          </>
        )}

        {type === "upcoming" && (
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span>
              {match.date} | {match.time}
            </span>
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded"></div>
            </div>
          </div>
        )}

        {type === "completed" && (
          <>
            <div className="flex justify-between text-white text-sm mb-3">
              <div className="text-center">
                <div className="font-bold">{match.score1}</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{match.score2}</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-white/80 text-sm">
                <div className="font-medium">{match.result}</div>
                <div className="text-xs">{match.date}</div>
              </div>
              <Button className="bg-cyan-400 hover:bg-cyan-300 text-black px-4 py-2 text-sm font-bold shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                Highlights
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

export function MatchesSection() {
  const [activeTab, setActiveTab] = useState<"live" | "upcoming" | "completed">("live")

  const getMatches = () => {
    switch (activeTab) {
      case "live":
        return liveMatches
      case "upcoming":
        return upcomingMatches
      case "completed":
        return completedMatches
      default:
        return liveMatches
    }
  }

  const getTabTitle = () => {
    switch (activeTab) {
      case "live":
        return "Live Matches"
      case "upcoming":
        return "Upcoming Matches"
      case "completed":
        return "Completed Matches"
      default:
        return "Live Matches"
    }
  }

  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6">Matches</h2>

        {/* Tab buttons */}
        <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg mb-6 w-fit">
          <Button
            onClick={() => setActiveTab("live")}
            className={`px-6 py-2 text-sm font-medium transition-all ${
              activeTab === "live"
                ? "bg-red-600 text-white shadow-lg"
                : "bg-transparent text-white/70 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            Live
          </Button>
          <Button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 text-sm font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-transparent text-white/70 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            Upcoming
          </Button>
          <Button
            onClick={() => setActiveTab("completed")}
            className={`px-6 py-2 text-sm font-medium transition-all ${
              activeTab === "completed"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-transparent text-white/70 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            Completed
          </Button>
        </div>

        {/* Match content */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">{getTabTitle()}</h3>
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
          {getMatches().map((match) => (
            <MatchCard key={match.id} match={match} type={activeTab} />
          ))}
        </div>
      </div>
    </div>
  )
}
