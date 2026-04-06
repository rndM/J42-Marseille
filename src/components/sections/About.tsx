export default function About() {
  return (
    <section id="apropos" className="py-20 section-bg-primary">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Texte */}
          <div className="text-center md:text-left">
            <h2 className="section-title md:!text-left">
              Qui sommes-nous ?
            </h2>
            <p className="section-subtitle md:!text-left mb-6">
              La Junior Entreprise de 42 Marseille est une association étudiante 
              qui accompagne les entreprises dans leurs projets digitaux.
            </p>
            <p className="text-text-secondary mb-8">
              Composée d'étudiants passionnés de l'école 42, nous mettons notre 
              expertise technique et notre créativité au service de vos besoins.
            </p>
            <a href="#contact" className="btn-primary">
              Nous contacter
            </a>
          </div>

          {/* Placeholder image */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square bg-surface-tertiary border border-border-default rounded-xl flex items-center justify-center">
              <span className="text-text-muted text-center px-4">
                Illustration ou photo équipe<br/>
                <span className="text-sm">(à remplacer plus tard)</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
