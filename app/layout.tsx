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
  title: "Drone SP — Filmagem e Fotografia Aérea | Zona Norte e Centro",
  description:
    "Serviços profissionais de filmagem e fotografia com drone em São Paulo. Atendimento na Zona Norte e Centro. Eventos, imóveis, empresas e produções audiovisuais.",
  keywords: [
    "drone São Paulo",
    "filmagem com drone",
    "fotografia aérea",
    "drone zona norte",
    "drone centro SP",
    "imagens aéreas",
    "cobertura de eventos com drone",
  ],
  openGraph: {
    title: "Drone SP — Filmagem e Fotografia Aérea",
    description:
      "Filmagens e fotos profissionais com drone em São Paulo. Zona Norte e Centro.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}
