import type { Metadata } from "next";
import { Fraunces, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import { legalServiceJsonLd, siteUrl } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable", // fonte variável: pesos 400–600 via CSS + eixo óptico
  axes: ["opsz"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** Metadados base — cada página sobrescreve title/description/OG via lib/seo.ts. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.nome} | Advocacia empresarial e direito do consumidor em Goiás`,
    template: `%s | ${site.nome}`,
  },
  description:
    "Escritório com quase 30 anos de trajetória em Goiás e no DF. Atuação em direito empresarial, penal econômico, consumidor e aéreo, cível e trabalhista. Fale com a nossa equipe.",
  applicationName: site.nome,
  openGraph: { type: "website", locale: "pt_BR", siteName: site.nome },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${libreFranklin.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {/* JSON-LD LegalService/Attorney global (PRD 8) — sem preço */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd()) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-offwhite focus:px-4 focus:py-2"
        >
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
