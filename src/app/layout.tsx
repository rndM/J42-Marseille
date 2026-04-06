import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JE 42 Marseille",
  description: "La Junior Entreprise de l'école 42 Marseille accompagne vos projets digitaux.",

  // OpenGraph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "JE 42 Marseille",
    description: "Accompagnement de projets digitaux par des étudiants de 42 Marseille",
    url: "https://je-42marseille.vercel.app",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
