import { Card } from "@/components/ui/card"

export function TableSection() {
  return (
    <section className="px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Group A Table */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Table</h2>
          <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm h-80">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold">GROUP A</span>
              </div>

              <div className="space-y-2 flex-1">
                <div className="grid grid-cols-6 gap-4 text-sm font-bold">
                  <span className="text-white">Team</span>
                  <span className="text-center text-white">M</span>
                  <span className="text-center text-green-400">W</span>
                  <span className="text-center text-red-400">L</span>
                  <span className="text-center text-white">NRR</span>
                  <span className="text-center text-white">Pts</span>
                </div>

                {[
                  { team: "India", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "Oman", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "Pakistan", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "UAE", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                ].map((team, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 gap-4 text-white text-sm py-2 border-b border-white/10 h-10 items-center"
                  >
                    <span className="font-medium">{team.team}</span>
                    <span className="text-center">{team.m}</span>
                    <span className="text-center text-green-400">{team.w}</span>
                    <span className="text-center text-red-400">{team.l}</span>
                    <span className="text-center">{team.nrr}</span>
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
          <Card className="bg-slate-800 border-slate-700 backdrop-blur-sm h-80">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold">GROUP B</span>
              </div>

              <div className="space-y-2 flex-1">
                <div className="grid grid-cols-6 gap-4 text-sm font-bold">
                  <span className="text-white">Team</span>
                  <span className="text-center text-white">M</span>
                  <span className="text-center text-green-400">W</span>
                  <span className="text-center text-red-400">L</span>
                  <span className="text-center text-white">NRR</span>
                  <span className="text-center text-white">Pts</span>
                </div>

                {[
                  { team: "SL", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "HK", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "Bangladesh", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                  { team: "Afghanistan", m: 0, w: 0, l: 0, nrr: 0, pts: 0 },
                ].map((team, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 gap-4 text-white text-sm py-2 border-b border-white/10 h-10 items-center"
                  >
                    <span className="font-medium">{team.team}</span>
                    <span className="text-center">{team.m}</span>
                    <span className="text-center text-green-400">{team.w}</span>
                    <span className="text-center text-red-400">{team.l}</span>
                    <span className="text-center">{team.nrr}</span>
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
