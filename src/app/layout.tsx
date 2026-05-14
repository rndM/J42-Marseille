import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";

// Police primaire: Raleway (similaire à Futura PT recommandée par la charte 42)
// Variantes: Light (300), Light Italic (300i), Regular (400), Medium (500), Bold (700), Bold Italic (700i)
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
});

// Police secondaire: Montserrat (alternative)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "JE 42 Marseille",
  description: "J42 Marseille accompagne vos projets digitaux.",

  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "JE 42 Marseille",
    description: "Accompagnement de projets digitaux par des étudiants de 42 Marseille",
    url: "https://j42marseille.vercel.app",
    siteName: "JE 42 Marseille",
    locale: "fr_FR",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "JE 42 Marseille",
    description: "Accompagnement de projets digitaux par des étudiants de 42 Marseille",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${raleway.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {/* <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body> */}
    </html>
  );
}
