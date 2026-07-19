'use client'
import Link from "next/link"

export default function GeneralHeader() {

  return (
    <nav className="fixed top-0 w-full section-bg-secondary border-b border-border-default z-50">
      {/* Conteneur principal */}
      <div className="section-container py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" className="font-bold text-xl" style={{color: '#ED3491'}}>
            J42 Marseille
          </Link>
        </div>
      </div>
    </nav>
  )
}
