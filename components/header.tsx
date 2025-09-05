import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ottplay-icon-logo.png" alt="OTTplay" width={90} height={60} className="h-15 w-auto" />
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-24 h-24 bg-purple-400 rounded-full flex flex-col items-center justify-center text-white py-1">
            <div className="text-xl font-bold italic leading-none">ASIA</div>
            <div className="text-xl font-bold italic leading-none -mt-0.5">CUP</div>
            <div className="text-base font-bold italic -mt-0.5">2025</div>
          </div>
        </div>

        <Link href="/matches" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">
          Matches
        </Link>
        <Link href="/news" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">
          News
        </Link>
        <Link href="/table" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">
          Table
        </Link>
        <Link href="/squads" className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors">
          Squads
        </Link>
      </nav>
    </header>
  )
}
