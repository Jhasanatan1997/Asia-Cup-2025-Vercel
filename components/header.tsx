import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/ottplay-logo.png"
            alt="OTTplay"
            width={120}
            height={40}
            className="h-10 w-auto mix-blend-screen opacity-90"
          />
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
          href="/squads"
          className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-md transition-colors"
        >
          Squads
        </Link>
      </nav>
    </header>
  )
}
