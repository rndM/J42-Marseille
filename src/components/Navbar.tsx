'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full section-bg-secondary border-b border-border-default z-50">
      {/* Conteneur principal */}
      <div className="section-container py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="#accueil" className="font-bold text-xl" style={{color: '#ED3491'}}>
            J42 Marseille
          </a>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#accueil" className="nav-link">
            Accueil
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#apropos" className="nav-link">
            À propos
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <a href="https://voting-app-pi-one.vercel.app/" className="nav-link" target="_blank" rel="noopener noreferrer">
            Espace membre
          </a>
          <ThemeToggle />
        </div>

        {/* Bouton Hamburger */}
        <button
          className="md:hidden p-2 nav-link"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-surface-mobile-menu border-t border-border-default px-4 py-3 flex flex-col gap-3">
          <a
            href="#accueil"
            onClick={() => setIsOpen(false)}
            className="py-2 nav-link"
          >
            Accueil
          </a>
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="py-2 nav-link"
          >
            Services
          </a>
          <a
            href="#apropos"
            onClick={() => setIsOpen(false)}
            className="py-2 nav-link"
          >
            À propos
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-2 nav-link"
          >
            Contact
          </a>
          <a
            href="https://voting-app-pi-one.vercel.app/"
            onClick={() => setIsOpen(false)}
            className="py-2 nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Espace membre
          </a>
          <div className="pt-2 border-t border-border-default">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}
