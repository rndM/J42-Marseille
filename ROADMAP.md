# ROADMAP - JE 42 Marseille

## Objectif

Landing page responsive - Next.js + Tailwind - Déploiement Vercel

---

## Maquette

```sh
┌─────────────────────────────────────────────────────┐
│ LOGO              Accueil Services À propos Contact │
├─────────────────────────────────────────────────────┤
│                                                     │
│           TITRE                                     │
│           Sous-titre explicatif                     │
│           [Bouton CTA]                              │
│                                                     │
├─────────────────────────────────────────────────────┤
│           Section "À propos"                        │
│           Texte + image placeholder                 │
├─────────────────────────────────────────────────────┤
│           Section "Services"                        │
│           3 cartes                                  │
├─────────────────────────────────────────────────────┤
│           Section "Contact"                         │
│           Formulaire + infos                        │
├─────────────────────────────────────────────────────┤
│           FOOTER                                    │
└─────────────────────────────────────────────────────┘
```

---

## ✅ Setup

- [x] `npx create-next-app@latest j42marseille`
  - TypeScript ✓
  - Tailwind ✓
  - ESLint ✓
  - App Router ✓
  - src/ directory ✓
- [x] `cd j42marseille`
- [x] `npm install -D prettier eslint-config-prettier`
- [x] Créer `.prettierrc`
- [x] Tester `npm run dev` → http://localhost:3000

---

## Composants

### Navbar

- [x] Logo + nom JE
- [x] Menu desktop (Accueil, Services, À propos, Contact)
- [x] Hamburger mobile
- [x] Toggle de thème
- [x] Scroll fluide vers ancres
- [x] Fermeture menu au clic

### Hero Section

- [x] Titre principal
- [x] Sous-titre
- [x] CTA bouton
- [x] Padding responsive

### Section À propos

- [x] Titre
- [x] Texte descriptif
- [x] Image équipe (students.png) avec next/image

### Section Services

- [x] 3 cartes
- [x] Icônes (lucide-react)
- [x] Hover effects

### Section Contact

- [x] Formulaire (nom, email, message)
- [x] Infos contact
- [x] Réseaux sociaux (masqués - à venir)

### Footer

- [x] Mentions légales (page créée)
- [x] Copyright
- [x] Liens sociaux (masqués - à venir)

---

## Design

### Figma (light)

- [ ] Récupérer logo
- [ ] Noter couleurs (hex)
- [ ] Vérifier espacements
- [ ] Exporter assets si besoin

### Ajustements code

- [x] Appliquer couleurs perso
- [x] Ajuster typography
- [x] Espacements précis
- [x] Animations hover

---

## Responsive

- [x] Test mobile (< 768px)
- [x] Test tablette (768-1024px)
- [x] Test desktop (> 1024px)
- [x] Menu hamburger OK
- [x] Textes lisibles
- [x] Images adaptatives (next/image)

---

## Déploiement

- [x] `npm run build` (test local)
- [x] Push GitHub
- [x] Connecter Vercel
- [x] Deploy
- [x] Test prod

---

## 🛠️ Tech Stack

- **Framework** : Next.js 16+ (App Router)
- **Styling** : Tailwind CSS
- **Icônes** : lucide-react
- **Form** : HTML natif + JS
- **Hébergement** : Vercel

---

## Structure dossiers

```
j42marseille/
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── ThemeToggle.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── sections/
│           ├── About.tsx
│           ├── Contact.tsx
│           ├── Hero.tsx
│           └── Services.tsx
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── tailwind.config.ts
```

---

## Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [Vercel Deploy](https://vercel.com/docs)

---

## Notes

- Inspo : https://42boost.fr/
- Priorité : Mobile-first
- Code propre > Features
- Itérations rapides
- Logo dédié non présent à ce stade.
- Les liens sociaux sont des placeholders.
- Les tests responsive restent à valider manuellement.
- Image équipe students.png intégrée dans la section À propos (26/04/2026).
- Page Mentions légales créée (27/04/2026).

---

**Dernière MAJ** : 27/04/2026  
**Statut** : En cours
