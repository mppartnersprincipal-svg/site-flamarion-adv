import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { trabalhista as c } from "@/content/trabalhista";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  absolute: true,
  description: c.meta.description,
  path: "/areas/trabalhista",
});

export default function TrabalhistaPage() {
  return (
    <AreaPage
      c={c}
      heroImage="/fotos/aperto-de-mao.jpg"
      sectionImage="/fotos/escritorio.jpg"
      crumb={{ label: "Direito Trabalhista", href: "/areas/trabalhista" }}
    />
  );
}
