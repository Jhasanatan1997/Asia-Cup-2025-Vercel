import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 mt-8 sm:mt-12 md:mt-14 text-center">
      <div className="container-responsive">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-responsive-4xl sm:text-responsive-5xl lg:text-responsive-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-balance leading-tight">
            Watch 2025 Asia Cup
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
            <p className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-bold text-white">
              LIVE on
            </p>
            <Image 
              src="/ottplay-icon-logo.png" 
              alt="OTTplay" 
              width={180} 
              height={90} 
              className="object-contain w-32 h-auto sm:w-40 md:w-44 lg:w-48 xl:w-52" 
            />
          </div>

          <div className="flex justify-center">
            <Link
              href="https://www.ottplay.com/digital-plan/sports365?activePlan=ott_sports365_quarterly&couponCode=OTTSPRQ399"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 hover:opacity-90 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-responsive-base sm:text-responsive-lg lg:text-responsive-xl rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="hidden sm:inline">SUBSCRIBE TO SPORTS365</span>
                <span className="sm:hidden">SUBSCRIBE NOW</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
