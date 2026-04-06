'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-bg-secondary">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Formulaire */}
          <div>
            <h2 className="section-title md:!text-left">
              Contactez-nous
            </h2>
            <p className="section-subtitle md:!text-left mb-8">
              Vous avez un projet ? Écrivez-nous et nous vous recontacterons sous 48h.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2">
                  Nom complet
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border-default text-text-primary focus:outline-none focus:border-primary transition"
                  placeholder="Votre nom"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border-default text-text-primary focus:outline-none focus:border-primary transition"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-surface-primary border border-border-default text-text-primary focus:outline-none focus:border-primary transition resize-none"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary w-full md:w-auto">
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Infos contact */}
          <div className="flex flex-col justify-center">
            <div className="bg-surface-tertiary border border-border-default rounded-xl p-6 space-y-6">
              
              <div>
                <h3 className="text-text-primary font-semibold mb-2">📍 Adresse</h3>
                <p className="text-text-secondary">
                  Junior Entreprise - 42 Marseille<br/>
                  19 Rue Henri Barbusse<br/>
                  13001 Marseille, France
                </p>
              </div>
              
              <div>
                <h3 className="text-text-primary font-semibold mb-2">📧 Email</h3>
                <a href="mailto:junior42marseille@gmail.com" className="text-text-secondary hover:text-primary transition">
                  junior42marseille@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-text-primary font-semibold mb-2">🔗 Réseaux</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-text-secondary hover:text-primary transition">LinkedIn</a>
                  <a href="#" className="text-text-secondary hover:text-primary transition">GitHub</a>
                  <a href="#" className="text-text-secondary hover:text-primary transition">Instagram</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
