import { Code, Lightbulb, GraduationCap } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-20 section-bg-secondary">
      <div className="section-container">

        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Accompagnement sur mesure pour vos projets digitaux
          </p>
        </div>

        {/* Grille de 3 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Carte 1 */}
          <div className="card-service">
            <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Développement Web
            </h3>
            <p className="text-text-secondary">
              Sites vitrines, applications web, e-commerce
            </p>
          </div>

          {/* Carte 2 */}
          <div className="card-service">
            <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Conseil Digital
            </h3>
            <p className="text-text-secondary">
              Audit, stratégie, accompagnement technique
            </p>
          </div>

          {/* Carte 3 */}
          <div className="card-service">
            <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Formation
            </h3>
            <p className="text-text-secondary">
              Ateliers, workshops, montée en compétence
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}