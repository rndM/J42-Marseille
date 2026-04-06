export default function Footer() {
  return (
    <footer className="bg-surface-tertiary border-t border-border-default">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <h3 className="font-bold text-xl text-text-primary mb-2">
              JE 42 Marseille
            </h3>
            <p className="text-text-secondary">
              La Junior Entreprise de l'école 42 Marseille
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              Liens
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="footer-link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#apropos" className="footer-link">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              Suivez-nous
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright + Mentions légales */}
        <div className="border-t border-border-default mt-8 pt-8 text-center">
          <p className="text-text-muted">
            © 2026 JE 42 Marseille
          </p>
          <a href="#" className="footer-link text-sm text-text-muted">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  )
}