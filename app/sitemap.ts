import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-27");
  return routes.map((r) => ({
    url: `${siteUrl}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
