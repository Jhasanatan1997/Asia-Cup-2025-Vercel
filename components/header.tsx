"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative">
      <div className="container-responsive">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 z-20 relative">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/ottplay-icon-logo.png" 
                alt="OTTplay" 
                width={90} 
                height={60} 
                className="h-12 w-auto sm:h-15 lg:h-16" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 xl:w-24 xl:h-24 bg-purple-400 rounded-full flex flex-col items-center justify-center text-white py-1">
                <div className="text-lg xl:text-xl font-bold italic leading-none">ASIA</div>
                <div className="text-lg xl:text-xl font-bold italic leading-none -mt-0.5">CUP</div>
                <div className="text-sm xl:text-base font-bold italic -mt-0.5">2025</div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection("matches")}
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors text-responsive-base"
            >
              Matches
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors text-responsive-base"
            >
              News
            </button>
            <button
              onClick={() => scrollToSection("table")}
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors text-responsive-base"
            >
              Table
            </button>
            <button
              onClick={() => scrollToSection("squads")}
              className="text-slate-300 hover:text-white px-3 py-2 rounded-md transition-colors text-responsive-base"
            >
              Squads
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-20 relative p-2 text-white hover:text-slate-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-10 bg-black/90 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
            {/* Asia Cup Logo for Mobile */}
            <div className="w-32 h-32 bg-purple-400 rounded-full flex flex-col items-center justify-center text-white py-2 mb-8">
              <div className="text-2xl font-bold italic leading-none">ASIA</div>
              <div className="text-2xl font-bold italic leading-none -mt-1">CUP</div>
              <div className="text-lg font-bold italic -mt-1">2025</div>
            </div>

            <nav className="flex flex-col items-center space-y-6">
              <button
                onClick={() => scrollToSection("matches")}
                className="text-slate-300 hover:text-white px-6 py-3 rounded-md transition-colors text-xl font-medium"
              >
                Matches
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-slate-300 hover:text-white px-6 py-3 rounded-md transition-colors text-xl font-medium"
              >
                News
              </button>
              <button
                onClick={() => scrollToSection("table")}
                className="text-slate-300 hover:text-white px-6 py-3 rounded-md transition-colors text-xl font-medium"
              >
                Table
              </button>
              <button
                onClick={() => scrollToSection("squads")}
                className="text-slate-300 hover:text-white px-6 py-3 rounded-md transition-colors text-xl font-medium"
              >
                Squads
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
