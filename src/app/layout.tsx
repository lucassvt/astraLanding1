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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.astrapet.com.ar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080812",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ASTRA | Vendé productos para mascotas y ganá hasta $1.000.000/mes",
    template: "%s | ASTRA",
  },
  description:
    "Emprendé en el mercado pet de mayor crecimiento. Vendé productos para mascotas con márgenes de hasta 70%, herramientas profesionales, catálogo inteligente y sistema de niveles. Sin horarios, sin jefes, sin límites.",
  keywords: [
    "venta productos mascotas",
    "emprendimiento mascotas Argentina",
    "reventa productos pet",
    "negocio mascotas",
    "ingreso extra Argentina",
    "trabajo independiente",
    "seller productos mascotas",
    "ASTRA",
    "ASTRA pet",
    "vender alimento mascotas",
    "accesorios mascotas mayorista",
    "dropshipping mascotas Argentina",
    "emprender sin inversión",
    "ganar dinero desde casa",
    "trabajo on demand",
    "mercado pet Argentina",
    "productos importados mascotas",
    "cuotas productos mascotas",
  ],
  authors: [{ name: "ASTRA", url: SITE_URL }],
  creator: "ASTRA",
  publisher: "ASTRA",
  openGraph: {
    title: "ASTRA | Emprendé vendiendo productos para mascotas",
    description:
      "Ganá hasta $1.000.000/mes vendiendo productos para mascotas. Márgenes de hasta 70%, 5 niveles de crecimiento, catálogo de +134 productos y herramientas profesionales.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "ASTRA",
    images: [
      {
        url: "/images/og-astra.png",
        width: 1200,
        height: 630,
        alt: "ASTRA - Emprendé vendiendo productos para mascotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTRA | Vendé productos para mascotas y ganá hasta $1.000.000/mes",
    description:
      "Emprendé en el mercado pet de mayor crecimiento. Sin horarios, sin jefes, márgenes de hasta 70%.",
    images: ["/images/og-astra.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ASTRA",
  },
  category: "business",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "ASTRA",
      url: SITE_URL,
      description:
        "Programa de venta de productos para mascotas con sistema gamificado de niveles y herramientas profesionales.",
      inLanguage: "es-AR",
    },
    {
      "@type": "Organization",
      name: "ASTRA",
      url: SITE_URL,
      description:
        "ASTRA es un programa de reventa de productos para mascotas con sistema de niveles, márgenes crecientes y herramientas profesionales.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto puedo ganar con ASTRA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo de tu dedicación, podés ganar entre $322.920 y más de $1.000.000 por mes. Los márgenes van del 29% al 70% según el producto y tu nivel.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito experiencia previa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. ASTRA incluye capacitaciones guiadas, herramientas profesionales y un onboarding rápido para que puedas empezar a vender desde el día uno.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona el sistema de niveles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ASTRA tiene 5 rangos (Aprendiz, Iniciado, Avanzado, Experto y Maestro). Subís de nivel ganando XP con cada venta, desbloqueando mejores márgenes y beneficios exclusivos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo ofrecer cuotas a mis clientes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. ASTRA te permite ofrecer opciones de pago en cuotas a tus clientes, ayudándote a cerrar más ventas.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-astra-bg-deep text-astra-text-primary overscroll-none`}
      >
        {children}
      </body>
    </html>
  );
}
