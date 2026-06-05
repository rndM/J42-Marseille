import Link from "next/link"

export default function GeneralFooter() {
  return (
    <footer className="bg-surface-tertiary border-t border-border-default">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <h3 className="font-bold text-xl text-text-primary mb-2">
              J42 Marseille
            </h3>
            <p className="text-text-secondary">
              J42 Marseille
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              Liens
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#accueil" className="footer-link">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#apropos" className="footer-link">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              Suivez-nous
            </h4>
            <p className="text-text-secondary text-sm italic">
              Réseaux sociaux à venir
            </p>
          </div>
        </div>

        {/* Copyright + Mentions légales */}
        <div className="border-t border-border-default mt-8 pt-8 text-center">
          <p className="text-text-muted">
            © 2026 J42 Marseille
          </p>
          <Link href="//mentions-legales" className="footer-link text-sm text-text-muted">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  )
}