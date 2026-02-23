import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#080812",
};

export const metadata: Metadata = {
  title: "ASTRA - Carrera Comercial Gamificada | Vendé Productos para Mascotas",
  description:
    "Unite a ASTRA y ganá hasta $905,760/mes vendiendo productos para mascotas. Sistema gamificado con rangos, logros y herramientas profesionales.",
  keywords: [
    "reventa productos mascotas",
    "negocio mascotas Argentina",
    "ingreso extra",
    "reseller",
    "emprendimiento bajo costo",
    "ASTRA",
  ],
  openGraph: {
    title: "ASTRA - Tu carrera como reseller de productos para mascotas",
    description:
      "Ganá vendiendo productos para mascotas. 5 rangos, márgenes de hasta 67%, herramientas profesionales.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRA - Carrera Comercial Gamificada",
    description:
      "Vendé productos para mascotas y ganá hasta $905,760/mes",
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ASTRA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-astra-bg-deep text-astra-text-primary overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
