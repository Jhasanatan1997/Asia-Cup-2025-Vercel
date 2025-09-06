import { Card } from "@/components/ui/card"

export function TableSection() {
  const groupATeams = [
    { team: "India", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "Oman", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "Pakistan", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "UAE", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
  ]

  const groupBTeams = [
    { team: "Sri Lanka", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "Hong Kong", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "Bangladesh", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
    { team: "Afghanistan", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
  ]

  const TableCard = ({ title, teams }: { title: string; teams: typeof groupATeams }) => (
    <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm">
      <div className="p-3 sm:p-4 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-bold text-sm sm:text-base">{title}</span>
        </div>

        {/* Mobile: Horizontal scroll table */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-full">
            <div className="grid grid-cols-6 gap-2 sm:gap-4 text-xs sm:text-sm font-bold mb-2 min-w-max">
              <span className="text-white min-w-20">Team</span>
              <span className="text-center text-white min-w-8">M</span>
              <span className="text-center text-green-400 min-w-8">W</span>
              <span className="text-center text-red-400 min-w-8">L</span>
              <span className="text-center text-white min-w-12">NRR</span>
              <span className="text-center text-white min-w-10">Pts</span>
            </div>

            <div className="space-y-1 sm:space-y-2">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-2 sm:gap-4 text-white text-xs sm:text-sm py-2 border-b border-white/10 items-center min-w-max"
                >
                  <span className="font-medium min-w-20 truncate">{team.team}</span>
                  <span className="text-center min-w-8">{team.m}</span>
                  <span className="text-center text-green-400 min-w-8">{team.w}</span>
                  <span className="text-center text-red-400 min-w-8">{team.l}</span>
                  <span className="text-center min-w-12">{team.nrr}</span>
                  <span className="text-center font-bold min-w-10">{team.pts}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container-responsive">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6 sm:mb-8">Table</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Group A Table */}
            <div>
              <TableCard title="GROUP A" teams={groupATeams} />
            </div>

            {/* Group B Table */}
            <div>
              <TableCard title="GROUP B" teams={groupBTeams} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
