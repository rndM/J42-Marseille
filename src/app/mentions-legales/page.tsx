export default function MentionsLegales() {
  return (
    <div className="min-h-screen section-bg-primary py-20">
      <div className="section-container">
        <h1 className="section-title mb-12">Mentions légales</h1>

        <div className="max-w-4xl space-y-12">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              ÉDITEUR du site internet j42marseille.fr
            </h2>
            <p className="text-text-secondary mb-2">
              J42 Marseille – Association étudiante de l'école 42 Marseille
            </p>
            <p className="text-text-secondary mb-2">
              Association à but non lucratif régie par la loi du 1er juillet 1901 et le décret du 16 août 1901
            </p>
            <p className="text-text-secondary mb-2">
              Ayant pour siège social 19 rue Henri Barbusse – 13001 Marseille
            </p>
            <p className="text-text-secondary">
              Adresse email : junior42marseille@gmail.com
            </p>
          </section>

          {/* Directeur de la publication */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              DIRECTEUR DE LA PUBLICATION du site internet j42marseille.fr
            </h2>
            <p className="text-text-secondary">
              Le Président de l'association J42 Marseille
            </p>
          </section>

          {/* Hébergement */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              HÉBERGEUR du site internet j42marseille.fr
            </h2>
            <p className="text-text-secondary mb-2">
              Vercel Inc.
            </p>
            <p className="text-text-secondary mb-2">
              340 S Lemon Ave #4133
            </p>
            <p className="text-text-secondary mb-2">
              Walnut, CA 91789, USA
            </p>
            <p className="text-text-secondary">
              Site web : https://vercel.com
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              PROPRIÉTÉ INTELLECTUELLE
            </h2>
            <p className="text-text-secondary">
              Aucune exploitation commerciale, même partielle, des données présentes sur le site internet j42marseille.fr ne pourra être effectuée sans l'accord préalable et écrit de l'association J42 Marseille.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="btn-primary">
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
}