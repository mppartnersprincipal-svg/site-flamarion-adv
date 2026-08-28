import type { Metadata } from "next";
import AreaPage from "@/components/AreaPage";
import { civel as c } from "@/content/civel";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  absolute: true,
  description: c.meta.description,
  path: "/areas/civel",
});

export default function CivelPage() {
  return (
    <AreaPage
      c={c}
      heroImage="/fotos/balanca.jpg"
      sectionImage="/fotos/biblioteca.jpg"
      crumb={{ label: "Direito Cível", href: "/areas/civel" }}
    />
  );
}
