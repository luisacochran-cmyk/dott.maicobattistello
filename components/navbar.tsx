"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
      <header className={`fixed top-0 left-0 right-0 z-50 h-24 transition-all duration-300 backdrop-blur-sm`}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 navbar-gradient"
          style={{
            opacity: isScrolled ? 0.85 : 0.95,
            transition: "opacity 0.3s ease",
          }}
        />
        <div className="container relative z-10 flex h-full items-center justify-between">
        
<div className="container relative z-10 flex h-full items-center justify-between">
  <Link href="/" className="flex items-center gap-3">
    <Image
      src="/images/logo-simbolo.png"
      alt="Dott. Maico Battistello"
      width={64}
      height={64}
      className="h-16 w-16 object-contain"
      priority
      quality={100}
    />

    <div className="hidden sm:flex flex-col leading-tight">
      <span className="text-white text-xl font-bold whitespace-nowrap">
        Dott. Maico Battistello
      </span>
      <span className="text-white/90 text-xs font-medium whitespace-nowrap">
        Medico Legale | Osteopata | Ozonoterapeuta
      </span>
    </div>
  </Link>

  {/* Desktop Navigation */}
         
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/ozonoterapia-osteopatia" className="nav-link font-bold">
                Ozonoterapia + Osteopatia
              </Link>
              <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/ozonoterapia"
                  className="block px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Ozonoterapia
                </Link>
                <Link
                  href="/osteopatia"
                  className="block px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Osteopatia
                </Link>
              </div>
            </div>
            <Link href="/medicina-legale" className="nav-link font-bold">
              Medicina Legale
            </Link>
            <Link href="/chi-sono" className="nav-link font-bold">
              Chi Sono
            </Link>
            <Link href="/blog" className="nav-link font-bold">
              Blog
            </Link>
            <Link href="/contatti" className="nav-link font-bold">
              Contatti
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-transparent relative z-10"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 lg:hidden flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 navbar-gradient"
          style={{
            opacity: 0.95,
          }}
        />
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
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>

        <nav className="relative z-10 flex flex-col p-4 pt-6 space-y-1">
          <Link
            href="/ozonoterapia-osteopatia"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Ozonoterapia + Osteopatia
          </Link>
          <Link
            href="/ozonoterapia"
            className="py-3 px-2 text-lg text-white hover:bg-white/10 rounded-md block mobile-nav-link ml-4"
            onClick={() => toggleMenu(false)}
          >
            Ozonoterapia
          </Link>
          <Link
            href="/osteopatia"
            className="py-3 px-2 text-lg text-white hover:bg-white/10 rounded-md block mobile-nav-link ml-4"
            onClick={() => toggleMenu(false)}
          >
            Osteopatia
          </Link>
          <Link
            href="/medicina-legale"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Medicina Legale
          </Link>
          <Link
            href="/chi-sono"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Chi Sono
          </Link>
          <Link
            href="/blog"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Blog
          </Link>
          <Link
            href="/contatti"
            className="py-3 px-2 text-lg font-bold text-white hover:bg-white/10 rounded-md block mobile-nav-link"
            onClick={() => toggleMenu(false)}
          >
            Contatti
          </Link>
        </nav>
      </div>
    </>
  )
}
