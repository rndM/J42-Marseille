
# J42 Marseille

Site vitrine officiel de l'association entrepreneuriale de l’école 42 Marseille, développé bénévolement pour accompagner l’association dans sa visibilité en ligne et faciliter la prise de contact avec ses prospects.

L’application est déployée ici : [https://j42marseille.vercel.app/](https://j42marseille.vercel.app/)

## Présentation

Ce projet a pour objectif de proposer une présence web claire, sobre et professionnelle à la J42 Marseille. Il met en avant l’association, ses services et ses coordonnées, avec une navigation simple et une expérience centrée sur la prise de contact.

## Fonctionnalités

- Page d’accueil avec présentation de l'association.
- Mise en avant des services proposés : développement web, conseil digital et formation.
- Section À propos pour expliquer la mission de l’association.
- Formulaire de contact générant un email pré-rempli via le client de messagerie.
- Navigation responsive avec menu mobile.
- Toggle de thème (système, clair, sombre) avec persistance en localStorage.
- Interface structurée en sections pour une lecture rapide sur desktop et mobile.
- Métadonnées SEO et partage social (Open Graph et Twitter Card).

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Structure du projet

- [src/app/page.tsx](src/app/page.tsx) : composition de la page d'accueil.
- [src/app/layout.tsx](src/app/layout.tsx) : layout global et métadonnées.
- [src/app/globals.css](src/app/globals.css) : styles globaux, variables de thème et classes utilitaires.
- [src/app/mentions-legales/page.tsx](src/app/mentions-legales/page.tsx) : page des mentions légales.
- [src/components/Navbar.tsx](src/components/Navbar.tsx) : navigation principale.
- [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx) : bascule de thème (system/light/dark).
- [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx) : bloc d'introduction.
- [src/components/sections/Services.tsx](src/components/sections/Services.tsx) : présentation des services.
- [src/components/sections/About.tsx](src/components/sections/About.tsx) : présentation de l'association.
- [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx) : formulaire de contact.
- [src/components/Footer.tsx](src/components/Footer.tsx) : pied de page et liens utiles.

## Lancer le projet en local

Prérequis : Node.js (version LTS recommandée) et npm.

```bash
npm install
npm run dev
```

Le site sera disponible en local à l’adresse suivante : [http://localhost:3000](http://localhost:3000)

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Déploiement

Le site est pensé pour un déploiement simple sur Vercel. La configuration Next.js permet une mise en production rapide après construction du projet.

## État actuel

- Les réseaux sociaux ne sont pas encore disponibles.

## À propos du projet

Ce site a été réalisé bénévolement afin de soutenir la J42 Marseille et de lui offrir un support de communication moderne, lisible et facile à maintenir.

