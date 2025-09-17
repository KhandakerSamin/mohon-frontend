"use client"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme() // get current theme

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src={theme === "dark" ? "/NewLogoDark.png" : "/NewLogo.png"}
                alt="Md Abul Hashem Logo"
                width={140}
                height={50}
                priority
                className="h-auto w-auto object-contain"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/x-tra" className="transition-colors text-sm font-medium hover:opacity-80">
                X-TRa
              </Link>
              <Link href="/about" className="transition-colors text-sm font-medium hover:opacity-80">
                About Me
              </Link>
              <a href="#resume" className="transition-colors text-sm font-medium hover:opacity-80">
                Resume
              </a>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-6 bg-foreground rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-foreground rounded-full transform transition-all duration-200 ease-out ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-foreground rounded-full transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b shadow-xl transform transition-all duration-500 ease-out bg-background text-foreground ${
            isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"
          }`}
        >
          <div className="px-6 py-8">
            <nav className="space-y-1">
              <Link
                href="/x-tra"
                className="group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:opacity-80"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg flex items-center gap-3 font-medium">
                  <ArrowUpRight /> X-TRa
                </span>
              </Link>

              <Link
                href="/about"
                className="group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:opacity-80"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg flex items-center gap-3 font-medium">
                  <ArrowUpRight /> About Me
                </span>
              </Link>

              <a
                href="#resume"
                className="group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:opacity-80"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg flex items-center gap-3 font-medium">
                  <ArrowUpRight /> Resume
                </span>
              </a>
            </nav>

            <div
              className={`mt-8 pt-6 border-t transform transition-all duration-500 ease-out ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
