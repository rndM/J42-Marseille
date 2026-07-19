import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 section-bg-primary relative overflow-hidden">
      <HeroBackground />
      <div className="section-container text-center relative z-10">

        {/* Titre principal */}
        <h1 className="section-title text-4xl md:text-6xl">
          Transformez vos idées en réalité
        </h1>

        {/* Sous-titre */}
        <p className="section-subtitle text-lg md:text-xl">
          La J42 Marseille vous accompagne dans vos projets digitaux
          avec l'expertise d'étudiants passionnés.
        </p>

        {/* Bouton CTA */}
        <div>
          <a href="#contact" className="btn-primary">
            Démarrer un projet
          </a>
        </div>

      </div>
    </section>
  )
}