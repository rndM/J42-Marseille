'use client'

import React from 'react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`[Contact Web] Nouveau message de ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    const mailtoUrl = `mailto:junior42marseille@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

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
              Vous avez un projet ? Remplissez ce formulaire pour préparer votre email.
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                Ouvrir mon client email
              </button>

              <p className="text-xs text-text-secondary mt-4 italic">
                Note : Ce bouton ouvrira votre logiciel de messagerie par défaut (Outlook, Mail, Gmail...) avec votre message pré-rempli.
              </p>
            </form>
          </div>

          {/* Infos contact */}
          <div className="flex flex-col justify-center">
            <div className="bg-surface-tertiary border border-border-default rounded-xl p-6 space-y-6">
              
              <div>
                <h3 className="text-text-primary font-semibold mb-2">📍 Adresse</h3>
                <p className="text-text-secondary">
                  J42 Marseille<br/>
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
                <p className="text-text-secondary text-sm italic">
                  Réseaux sociaux à venir
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
