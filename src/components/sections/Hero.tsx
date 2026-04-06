export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 section-bg-primary">
      <div className="section-container text-center">

        {/* Titre principal */}
        <h1 className="section-title text-4xl md:text-6xl">
          Transformez vos idées en réalité
        </h1>

        {/* Sous-titre */}
        <p className="section-subtitle text-lg md:text-xl">
          La Junior Entreprise de 42 Marseille vous accompagne dans vos projets digitaux
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