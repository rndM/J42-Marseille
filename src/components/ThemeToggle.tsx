'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  // Initialiser le thème au chargement
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    // Gérer explicitement le cas null
    const initialTheme: 'light' | 'dark' | 'system' =
      (saved === 'light' || saved === 'dark' || saved === 'system') ? saved : 'system'

    setTheme(initialTheme)
    applyTheme(initialTheme)
  }, [])

  // Appliquer le thème
  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const html = document.documentElement

    if (newTheme === 'system') {
      html.removeAttribute('data-theme')
    } else {
      html.setAttribute('data-theme', newTheme)
    }

    // Mettre à jour l'état APRES avoir appliqué le thème
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Toggle entre les 3 modes : system → light → dark → system
  const toggleTheme = () => {
    const next: 'light' | 'dark' | 'system' =
      theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system'
    applyTheme(next)
  }

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-surface-tertiary transition flex items-center gap-2 border border-border-default md:border-none" aria-label={`Thème: ${theme}`} title={`Thème: ${theme} (cliquer pour changer)`}>
      {theme === 'dark' ? (
        <Moon className="text-text-secondary" size={20} />
      ) : theme === 'light' ? (
        <Sun className="text-text-secondary" size={20} />
      ) : (
        <Laptop className="text-text-secondary" size={20} />
      )}
      <span className="md:hidden text-text-secondary text-sm font-medium">Changer le thème</span>
    </button>
  )
}