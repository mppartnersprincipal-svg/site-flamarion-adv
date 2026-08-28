import type { Metadata } from "next";
import { site } from "./site-config";

export const siteUrl = `https://${site.dominio}`;

type PageMetaInput = {
  /** Título da página (COPY, "Metadados"). */
  title: string;
  /** Se true, usa o título como está (sem o sufixo "| Flamarion Advocacia"). */
  absolute?: boolean;
  description: string;
  /** Caminho da rota, ex.: "/contato". */
  path: string;
};

/**
 * Gera <title>, meta description, canonical e Open Graph/Twitter por página
 * (PRD 8). A imagem OG vem de app/opengraph-image.tsx, injetada pelo Next.
 */
/** Imagem OG padrão (gerada em app/opengraph-image.tsx). Explícita aqui porque
 * um `openGraph` de página substitui o do layout e perderia a imagem por convenção. */
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.nome} — ${site.tagline}`,
};

export function pageMeta({ title, absolute = false, description, path }: PageMetaInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${site.nome}`;
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.nome,
      url,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/** Rotas públicas do site (mapa do PRD, seção 4). Fonte do sitemap. */
export const routes = [
  { path: "/", priority: 1.0 },
  { path: "/o-escritorio", priority: 0.8 },
  { path: "/areas-de-atuacao", priority: 0.9 },
  { path: "/areas/empresarial", priority: 0.9 },
  { path: "/areas/consumidor-aereo", priority: 0.9 },
  { path: "/equipe", priority: 0.7 },
  { path: "/contato", priority: 0.8 },
  { path: "/faq", priority: 0.6 },
] as const;

/**
 * JSON-LD LegalService global (PRD 8). Sem preço/honorários.
 * Telefone e e-mail só entram quando definidos em site-config.ts.
 */
export function legalServiceJsonLd() {
  const [ruaEtc] = site.endereco.split(", Cidade Vera Cruz");
  const tel = site.telefone.replace(/\D/g, "");
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Attorney"],
    "@id": `${siteUrl}/#organization`,
    name: site.nome,
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-monogram-noite.svg`,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Escritório de advocacia com quase 30 anos de trajetória em Goiás e no DF. Atuação em direito empresarial, penal econômico, consumidor e aéreo, cível e trabalhista.",
    ...(tel ? { telephone: `+${tel}` } : {}),
    ...(site.email ? { email: site.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: ruaEtc,
      addressLocality: "Aparecida de Goiânia",
      addressRegion: "GO",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "State", name: "Goiás" },
      { "@type": "State", name: "Distrito Federal" },
      { "@type": "Country", name: "Brasil" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:30",
        closes: "17:30",
      },
    ],
    knowsAbout: [
      "Direito Empresarial",
      "Direito Penal Econômico",
      "Defesa em crimes contra a ordem tributária",
      "Direito do Consumidor",
      "Direito Aéreo",
      "Direito Cível",
      "Direito Trabalhista",
    ],
    employee: [
      {
        "@type": "Person",
        name: "Márcio Flamarion",
        honorificPrefix: "Dr.",
        jobTitle: "Advogado",
        identifier: site.oabMarcio,
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Person",
        name: "Letícia Alves",
        honorificPrefix: "Dra.",
        jobTitle: "Advogada",
        ...(site.oabLeticia ? { identifier: site.oabLeticia } : {}),
        worksFor: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };
}
