import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative px-6 py-20 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4 text-balance">Watch 2025 Asia Cup</h1>
        <p className="text-4xl font-bold text-white mb-8">LIVE on OTTplay</p>

        <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 text-lg rounded-lg">
          SUBSCRIBE TO SPORTS365
        </Button>
      </div>
    </section>
  )
}
