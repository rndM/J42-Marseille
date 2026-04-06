import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Couleurs primaires - Charte Graphique 42 (en référence)
        // À utiliser via les tokens sémantiques ci-dessous
        '42-blue': '#00BABC',
        '42-noir': '#1b1b1b',
        '42-blanc': '#ffffff',
        
        // Palette secondaire - Charte Graphique 42 (pour référence)
        'bubbles': '#E7FEFE',
        'bright-gray': '#E6F4F1',
        'dark-slate-gray': '#324848',
        'cadet-gray': '#95B0B0',
        'cg-blue': '#048091',
        'royal-pink': '#ED3491',
        'light-cobalt-blue': '#96A3EB',
        'dark-cerulean': '#173D7A',
        'violet': '#66008C',
        
        // Tokens sémantiques (À UTILISER toujours - dérivés de globals.css)
        // Ces variables CSS sont dynamiques selon le thème clair/sombre
        surface: {
          primary: 'var(--surface-primary)',
          secondary: 'var(--surface-secondary)',
          tertiary: 'var(--surface-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: {
          default: 'var(--border-default)',
          subtle: 'var(--border-subtle)',
        },
      },
    },
  },
  plugins: [],
};

export default config;