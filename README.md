# J42 Marseille

Official showcase site of the entrepreneurial association of 42 Marseille, developed voluntarily to support the association's online visibility and facilitate contact with prospects.

The application is deployed here: [https://j42marseille.vercel.app/](https://j42marseille.vercel.app/)

## Overview

This project aims to provide a clear, clean and professional web presence for J42 Marseille. It highlights the association, its services and contact information, with simple navigation and an experience centered on making contact.

## Features

- Home page with association presentation.
- Highlighting of offered services: web development, digital consulting and training.
- About section explaining the association's mission.
- Contact form generating a pre-filled email via the mail client.
- Responsive navigation with mobile menu.
- Theme toggle (system, light, dark) with localStorage persistence.
- Section-structured interface for quick reading on desktop and mobile.
- SEO metadata and social sharing (Open Graph and Twitter Card).

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Project Structure

- [src/app/page.tsx](src/app/page.tsx): home page composition.
- [src/app/layout.tsx](src/app/layout.tsx): global layout and metadata.
- [src/app/globals.css](src/app/globals.css): global styles, theme variables and utility classes.
- [src/app/mentions-legales/page.tsx](src/app/mentions-legales/page.tsx): legal notice page.
- [src/components/Navbar.tsx](src/components/Navbar.tsx): main navigation.
- [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx): theme toggle (system/light/dark).
- [src/components/sections/Hero.tsx](src/components/sections/Hero.tsx): introduction block.
- [src/components/sections/Services.tsx](src/components/sections/Services.tsx): services presentation.
- [src/components/sections/About.tsx](src/components/sections/About.tsx): association presentation.
- [src/components/sections/Contact.tsx](src/components/sections/Contact.tsx): contact form.
- [src/components/Footer.tsx](src/components/Footer.tsx): footer and useful links.

## Running Locally

Prerequisites: Node.js (LTS version recommended) and npm.

```bash
npm install
npm run dev
```

The site will be available locally at: [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deployment

The site is designed for easy deployment on Vercel. Next.js configuration enables fast production deployment after building the project.

## Current Status

- Social networks are not yet available.

## About the Project

This site was built voluntarily to support J42 Marseille and provide it with a modern, readable and easy-to-maintain communication platform.
