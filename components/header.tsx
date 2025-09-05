import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <div className="text-white">
            <div className="text-sm font-medium">cricket@</div>
            <div className="text-lg font-bold">OTTplay</div>
          </div>
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <div className="flex items-center gap-2 bg-slate-800/60 rounded-full px-4 py-2 border border-slate-700">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-slate-900 font-bold text-xs">ASIA CUP</span>
          </div>
        </div>
        <Link
          href="/matches"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          Matches
        </Link>
        <Link
          href="/news"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          News
        </Link>
        <Link
          href="/table"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          Table
        </Link>
        <Link
          href="/stats"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          Stats
        </Link>
        <Link
          href="/players"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          Players
        </Link>
      </nav>
    </header>
  )
}
