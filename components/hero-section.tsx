import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative px-6 py-20 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4 text-balance">Watch 2025 Asia Cup</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <p className="text-4xl font-bold text-white">LIVE on</p>
          <Image src="/ottplay-icon-logo.png" alt="OTTplay" width={180} height={90} className="object-contain" />
        </div>

        <Link
          href="https://www.ottplay.com/digital-plan/sports365?activePlan=ott_sports365_quarterly&couponCode=OTTSPRQ399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-green-500 hover:bg-green-600 hover:opacity-90 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            SUBSCRIBE TO SPORTS365
          </Button>
        </Link>
      </div>
    </section>
  )
}
