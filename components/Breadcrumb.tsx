import Link from "next/link";
import { site } from "@/lib/site-config";
import { IconChevronRight } from "./icons";

type Crumb = { label: string; href: string };

/** Trilha de navegação + JSON-LD BreadcrumbList (PRD 8) para páginas internas. */
export default function Breadcrumb({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const trail: Crumb[] = [{ label: "Início", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://${site.dominio}${c.href}`,
    })),
  };
  const link = dark ? "text-gelo/80 hover:text-dourado-claro" : "text-aco-texto hover:text-marinho";
  const current = dark ? "text-offwhite" : "text-noite/70";
  const sep = dark ? "text-gelo/40" : "text-gelo";
  return (
    <nav aria-label="Trilha de navegação" className="text-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className={current}>{c.label}</span>
              ) : (
                <Link href={c.href} className={`inline-flex min-h-11 items-center transition-colors ${link}`}>
                  {c.label}
                </Link>
              )}
              {!last && <IconChevronRight size={14} className={sep} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
