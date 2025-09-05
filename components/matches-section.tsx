"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const liveMatches = [
  {
    id: 1,
    team1: {
      name: "IND",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381895.png",
    },
    team2: {
      name: "PAK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381891.png",
    },
    score1: "156/4",
    score2: "89/3",
    overs1: "18.2",
    overs2: "12.0",
  },
]

const upcomingMatches = [
  {
    id: 1,
    team1: {
      name: "AFG",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381892.png",
    },
    team2: {
      name: "HK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/383100/383120.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "9 SEP",
    time: "2:30 PM",
  },
  {
    id: 2,
    team1: {
      name: "UAE",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/382100/382186.png",
    },
    team2: {
      name: "IND",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381895.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "10 SEP",
    time: "2:30 PM",
  },
  {
    id: 3,
    team1: {
      name: "BAN",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
    },
    team2: {
      name: "HK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/383100/383120.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "11 SEP",
    time: "2:30 PM",
  },
  {
    id: 4,
    team1: {
      name: "OMN",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381858.png",
    },
    team2: {
      name: "PAK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381891.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "12 SEP",
    time: "2:30 PM",
  },
  {
    id: 5,
    team1: {
      name: "BAN",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
    },
    team2: {
      name: "SL",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "13 SEP",
    time: "2:30 PM",
  },
  {
    id: 6,
    team1: {
      name: "IND",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381895.png",
    },
    team2: {
      name: "PAK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381891.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    date: "14 SEP",
    time: "2:30 PM",
  },
]

const completedMatches = [
  {
    id: 5,
    team1: {
      name: "IND",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381895.png",
    },
    team2: {
      name: "SL",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/340000/340047.png",
    },
    player1: "/placeholder-evki0.png",
    player2: "/placeholder-02xyy.png",
    score1: "184/5",
    score2: "181/8",
    result: "IND won by 3 runs",
    date: "8 SEP",
  },
  {
    id: 6,
    team1: {
      name: "PAK",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/381800/381891.png",
    },
    team2: {
      name: "BAN",
      flag: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/341400/341456.png",
    },
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
    <Card
      className="flex-shrink-0 w-80 border-purple-700 backdrop-blur-sm hover:opacity-90 transition-colors"
      style={{ backgroundColor: "#4e008a" }}
    >
      <div className="p-2 pt-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img src={match.team1.flag || "/placeholder.svg"} alt={match.team1.name} className="w-6 h-6" />
              <span className="text-white font-bold text-xl">{match.team1.name}</span>
            </div>
          </div>

          <div className="text-white text-lg font-bold">VS</div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-xl">{match.team2.name}</span>
              <img src={match.team2.flag || "/placeholder.svg"} alt={match.team2.name} className="w-6 h-6" />
            </div>
          </div>
        </div>

        {type === "live" && (
          <>
            <div className="flex justify-between text-white text-sm mb-3">
              <div className="text-center">
                <div className="font-bold">{match.score1}</div>
                <div className="text-white/60 font-bold">({match.overs1} ov)</div>
              </div>
              <div className="text-center">
                <div className="font-bold">{match.score2}</div>
                <div className="text-white/60 font-bold">({match.overs2} ov)</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-bold text-sm">LIVE</span>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-bold">
                <Play className="w-4 h-4 mr-1" />
                Watch Live
              </Button>
            </div>
          </>
        )}

        {type === "upcoming" && (
          <div className="flex items-center justify-between text-white/80 text-sm">
            <span className="font-bold">
              {match.date} | {match.time}
            </span>
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
                <div className="font-bold">{match.result}</div>
                <div className="text-xs font-bold">{match.date}</div>
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-bold">
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

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
    <div className="px-6 py-8 -mt-10">
      <div className="mb-8">
        {/* Tab buttons moved inline */}
        <div className="flex items-center mb-4" style={{ gap: "30mm" }}>
          <h2 className="text-3xl font-bold text-white">Matches</h2>
          <div className="flex gap-1 bg-slate-800/50 p-1 rounded-lg">
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
        </div>

        {/* Match content */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900/50" onClick={scrollLeft}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900/50" onClick={scrollRight}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto pb-4 scroll-smooth">
          {getMatches().map((match) => (
            <MatchCard key={match.id} match={match} type={activeTab} />
          ))}
        </div>
      </div>
    </div>
  )
}
