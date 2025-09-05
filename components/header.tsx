import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/ottplay-icon-logo.png" alt="OTTplay" width={60} height={40} className="h-10 w-auto" />
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-purple-400 rounded-full flex flex-col items-center justify-center text-white px-1">
            <div className="text-[9px] font-bold italic leading-tight">ASIA</div>
            <div className="text-[9px] font-bold italic leading-tight -mt-0.5">CUP</div>
            <div className="text-[7px] font-bold italic -mt-0.5">2025</div>
          </div>
        </div>
        {/* End of change */}

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
