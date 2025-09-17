"use client"
import { ArrowRightToLine, ArrowUpRight, CornerDownRight, MoveUpRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ThemeToggle } from "./ThemeToggle"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl bg-[#F5F5F5] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            {/* <Link href="/">
            <div className="text-lg sm:text-xl font-bold leading-tight"
            style={{
              background: 'linear-gradient(180deg, #191918 0%, rgba(25, 25, 24, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              <span className="block">Md Abul</span>
              <span className="block">Hashem</span>
            </div>
            </Link> */}
            <Link href="/" className="inline-block">
              <Image
                src="/NewLogo.png"
                alt="Md Abul Hashem Logo"
                width={140} 
                height={50}   
                priority      
                className="h-auto w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="x-tra"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                X-TRa
              </a>
              <a
                href="about"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                About Me
              </a>
              <a
                href="#resume"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
              >
                Resume
              </a>
            </div>

            <ThemeToggle />

            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none rounded-lg"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6 relative">
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 rounded-full transform transition-all duration-300 ease-out ${isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 rounded-full transform transition-all duration-200 ease-out ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-gray-900 rounded-full transform transition-all duration-300 ease-out ${isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#F5F5F5] backdrop-blur-xl border-b border-gray-100/50 shadow-xl transform transition-all duration-500 ease-out ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible"
            }`}
        >
          <div className="px-6 py-8">
            <nav className="space-y-1">
              <a
                href="x-tra"
                className={`group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:bg-gray-50 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                style={{ transitionDelay: isMenuOpen ? "100ms" : "0ms" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg flex justify-start items-center gap-3 font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
                  <ArrowUpRight />
                  X-TRa
                </span>
              </a>

              <a
                href="about"
                className={`group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:bg-gray-50 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200 flex justify-start items-center gap-3">
                  <ArrowUpRight />
                  About Me
                </span>
              </a>

              <a
                href="#resume"
                className={`group block py-4 px-4 rounded-xl transform transition-all duration-300 ease-out hover:bg-gray-50 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                style={{ transitionDelay: isMenuOpen ? "300ms" : "0ms" }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-200 flex justify-start items-center gap-3">
                  <ArrowUpRight />
                  Resume
                </span>
              </a>
            </nav>

            <div
              className={`mt-8 pt-6 border-t border-gray-200/50 transform transition-all duration-500 ease-out ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              style={{ transitionDelay: isMenuOpen ? "400ms" : "0ms" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-gray-600 font-medium">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .hero-section,
        .background-content,
        main > section:not(.navbar-section) {
          transition: filter 0.3s ease-out;
        }
        
        body:has(.navbar-menu-open) .hero-section,
        body:has(.navbar-menu-open) .background-content,
        body:has(.navbar-menu-open) main > section:not(.navbar-section) {
          filter: blur(2px);
        }
      `}</style>
    </>
  )
}

export default Navbar
