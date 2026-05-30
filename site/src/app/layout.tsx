import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agentic Agency - Développement web, applications métier et mobiles",
  description:
    "Agence de développement web, applications métier et mobiles. Pratiques de delivery modernes pour des livrables fiables.",
  metadataBase: new URL("https://agentic-agency.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Agentic Agency",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 627,
        alt: "Agentic Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agentic Agency",
    url: "https://agentic-agency.fr",
    description:
      "Agence de développement web, applications métier et mobiles. Pratiques de delivery modernes pour des livrables fiables.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "contact@agentic-agency.com",
    },
  };

  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-[#1e3a5f] focus:rounded-md focus:shadow-lg"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <JsonLd data={organizationSchema} />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
