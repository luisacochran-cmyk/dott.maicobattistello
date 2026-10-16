"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NavbarProps {
  onMenuToggle?: (isOpen: boolean) => void
}

export default function Navbar({ onMenuToggle = () => {} }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleMenu(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = (isOpen: boolean) => {
    setIsMenuOpen(isOpen)
    onMenuToggle(isOpen)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-20 lg:h-24 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/10"
            : "bg-primary"
        }`}
      >
        <div className="container relative z-10 flex h-full items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-simbolo.png"
              alt="Dott. Maico Battistello"
              width={64}
              height={64}
              className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain"
              priority
              quality={100}
            />

            <div className="flex flex-col leading-tight">
              <span className="text-white text-base sm:text-xl font-bold tracking-tight whitespace-nowrap">
                Dott. Maico Battistello
              </span>
              <span className="text-white/80 text-[10px] sm:text-sm font-medium whitespace-nowrap">
                Medico Legale | Osteopata | Ozonoterapeuta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[0.95rem] xl:text-base font-semibold text-white">
            <div className="relative group">
              <Link href="/ozonoterapia-osteopatia" className="nav-link">
                Ozonoterapia + Osteopatia
              </Link>

              {/* pt-3 crea un "ponte" invisibile: il menu non si chiude passando dalla voce alla tendina */}
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="w-60 overflow-hidden rounded-2xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                  <Link
                    href="/ozonoterapia"
                    className="block px-5 py-2.5 font-medium text-slate-700 hover:bg-[#F0EAE0] hover:text-primary transition-colors"
                  >
                    Ozonoterapia
                  </Link>
                  <Link
                    href="/osteopatia"
                    className="block px-5 py-2.5 font-medium text-slate-700 hover:bg-[#F0EAE0] hover:text-primary transition-colors"
                  >
                    Osteopatia
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/medicina-legale" className="nav-link">
              Medicina Legale
            </Link>
            <Link href="/chi-sono" className="nav-link">
              Chi Sono
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contatti" className="nav-link">
              Contatti
            </Link>

            {/* Pulsante Prenota: solo su schermi larghi, dove c'è spazio */}
            <Link
              href="/contatti"
              className="hidden xl:inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 font-semibold text-primary shadow-sm transition-colors hover:bg-[#F0EAE0]"
            >
              <Calendar className="h-4 w-4" />
              <span>Prenota</span>
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 relative z-10"
            onClick={() => toggleMenu(!isMenuOpen)}
            aria-label="Apri il menu"
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 lg:hidden flex flex-col overflow-y-auto bg-primary transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative z-10 flex justify-between items-center h-20 px-4 border-b border-white/20">
          <Link href="/" className="flex items-center" onClick={() => toggleMenu(false)}>
            <Image
              src="/images/nuovologo.png"
              alt="Dr. Maico Battistello Logo"
              width={260}
              height={60}
              className="h-14 w-auto"
              priority
              quality={100}
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => toggleMenu(false)}
            aria-label="Chiudi il menu"
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>

        <nav className="relative z-10 flex flex-col p-4 pt-6 space-y-1">
          <Link
            href="/ozonoterapia-osteopatia"
            className="py-3 px-2 text-xl font-semibold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Ozonoterapia + Osteopatia
          </Link>
          <Link
            href="/ozonoterapia"
            className="py-3 px-2 text-lg text-white/85 hover:bg-white/10 rounded-md block mobile-nav-link ml-4"
            onClick={() => toggleMenu(false)}
          >
            Ozonoterapia
          </Link>
          <Link
            href="/osteopatia"
            className="py-3 px-2 text-lg text-white/85 hover:bg-white/10 rounded-md block mobile-nav-link ml-4"
            onClick={() => toggleMenu(false)}
          >
            Osteopatia
          </Link>
          <Link
            href="/medicina-legale"
            className="py-3 px-2 text-xl font-semibold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Medicina Legale
          </Link>
          <Link
            href="/chi-sono"
            className="py-3 px-2 text-xl font-semibold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Chi Sono
          </Link>
          <Link
            href="/blog"
            className="py-3 px-2 text-xl font-semibold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Blog
          </Link>
          <Link
            href="/contatti"
            className="py-3 px-2 text-xl font-semibold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Contatti
          </Link>
        </nav>

        {/* Pulsante Prenota in fondo al menu mobile */}
        <div className="relative z-10 mt-auto p-4 pb-10">
          <Link
            href="/contatti"
            onClick={() => toggleMenu(false)}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-lg font-semibold text-primary shadow-md transition-colors hover:bg-[#F0EAE0]"
          >
            <Calendar className="h-5 w-5" />
            <span>Prenota una visita</span>
          </Link>
        </div>
      </div>
    </>
  )
}
