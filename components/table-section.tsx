import { Card } from "@/components/ui/card"

export function TableSection() {
  return (
    <section className="px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Group A Table */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Table</h2>
          <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold">GROUP A</span>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-4 text-white/60 text-sm font-medium">
                  <span>Team</span>
                  <span className="text-center">M</span>
                  <span className="text-center">W</span>
                  <span className="text-center">L</span>
                  <span className="text-center">Pts</span>
                </div>

                {[
                  { team: "India", m: 3, w: 3, l: 0, pts: 6 },
                  { team: "Pakistan", m: 3, w: 2, l: 1, pts: 4 },
                  { team: "Bangladesh", m: 3, w: 1, l: 2, pts: 2 },
                  { team: "Afghanistan", m: 3, w: 0, l: 3, pts: 0 },
                ].map((team, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 text-white text-sm py-2 border-b border-white/10">
                    <span className="font-medium">{team.team}</span>
                    <span className="text-center">{team.m}</span>
                    <span className="text-center">{team.w}</span>
                    <span className="text-center">{team.l}</span>
                    <span className="text-center font-bold">{team.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Group B Table */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">&nbsp;</h2>
          <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold">GROUP B</span>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-4 text-white/60 text-sm font-medium">
                  <span>Team</span>
                  <span className="text-center">M</span>
                  <span className="text-center">W</span>
                  <span className="text-center">L</span>
                  <span className="text-center">Pts</span>
                </div>

                {[
                  { team: "Sri Lanka", m: 3, w: 2, l: 1, pts: 4 },
                  { team: "Nepal", m: 3, w: 2, l: 1, pts: 4 },
                  { team: "UAE", m: 3, w: 1, l: 2, pts: 2 },
                  { team: "Hong Kong", m: 3, w: 1, l: 2, pts: 2 },
                ].map((team, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 text-white text-sm py-2 border-b border-white/10">
                    <span className="font-medium">{team.team}</span>
                    <span className="text-center">{team.m}</span>
                    <span className="text-center">{team.w}</span>
                    <span className="text-center">{team.l}</span>
                    <span className="text-center font-bold">{team.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
