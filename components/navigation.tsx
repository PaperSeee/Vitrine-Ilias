"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { X, Menu } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] glass-effect">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gradient" onClick={closeMenu}>
            Ilias Développeur
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              À propos
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                className="animate-glow shadow-lg"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}>
            <div className="pt-4 pb-2 space-y-3">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === "/" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className={`block py-2 px-4 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname === "/about" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground"
                }`}
              >
                À propos
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                <Button
                  size="sm"
                  className="w-full animate-glow shadow-lg"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
