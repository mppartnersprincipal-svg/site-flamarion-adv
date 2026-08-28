/**
 * Verificação de SEO on-page (PRD 8) contra um servidor local.
 * Uso: node scripts/seo-check.mjs [baseUrl]   (padrão http://localhost:3005)
 */
const base = process.argv[2] ?? "http://localhost:3005";
const routes = [
  "/",
  "/o-escritorio",
  "/areas-de-atuacao",
  "/areas/empresarial",
  "/areas/consumidor-aereo",
  "/equipe",
  "/contato",
  "/faq",
];

const seen = { title: new Map(), desc: new Map() };
let problems = 0;
const fail = (r, msg) => {
  problems++;
  console.log(`  ✗ ${r}: ${msg}`);
};

const meta = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]+${attr}="${name}"[^>]*content="([^"]*)"`, "i");
  const alt = new RegExp(`<meta[^>]+content="([^"]*)"[^>]*${attr}="${name}"`, "i");
  return (html.match(re) ?? html.match(alt))?.[1] ?? null;
};

for (const r of routes) {
  const html = await (await fetch(base + r)).text();
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? null;
  const desc = meta(html, "name", "description");
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1] ?? null;
  const og = {
    title: meta(html, "property", "og:title"),
    desc: meta(html, "property", "og:description"),
    image: meta(html, "property", "og:image"),
    url: meta(html, "property", "og:url"),
  };
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) =>
    JSON.parse(m[1]),
  );
  const types = ld.map((o) => (Array.isArray(o["@type"]) ? o["@type"].join("+") : o["@type"]));
  const ldText = JSON.stringify(ld);

  console.log(`\n${r}`);
  console.log(`  title: ${title}`);
  console.log(`  description: ${desc?.slice(0, 80)}…`);
  console.log(`  canonical: ${canonical}`);
  console.log(`  og: title=${!!og.title} desc=${!!og.desc} image=${og.image ? "sim" : "NÃO"} url=${og.url}`);
  console.log(`  h1: ${h1} | json-ld: ${types.join(", ")}`);

  if (!title) fail(r, "sem <title>");
  if (!desc) fail(r, "sem meta description");
  if (desc && desc.length > 170) fail(r, `description longa (${desc.length})`);
  if (!canonical) fail(r, "sem canonical");
  if (!og.title || !og.desc || !og.image) fail(r, "Open Graph incompleto");
  if (h1 !== 1) fail(r, `${h1} <h1> (esperado 1)`);
  if (!types.some((t) => t.includes("LegalService"))) fail(r, "sem JSON-LD LegalService");
  if (r !== "/" && !types.includes("BreadcrumbList")) fail(r, "sem BreadcrumbList");
  if ((r === "/faq" || r === "/areas/consumidor-aereo") && !types.includes("FAQPage")) fail(r, "sem FAQPage");
  if (/price|honor[aá]rio|R\$/i.test(ldText)) fail(r, "JSON-LD contém preço/honorários");
  if (seen.title.has(title)) fail(r, `title duplicado com ${seen.title.get(title)}`);
  if (seen.desc.has(desc)) fail(r, `description duplicada com ${seen.desc.get(desc)}`);
  seen.title.set(title, r);
  seen.desc.set(desc, r);
}

for (const f of ["/sitemap.xml", "/robots.txt", "/opengraph-image", "/icon.svg"]) {
  const res = await fetch(base + f);
  const ok = res.ok;
  console.log(`\n${f}: ${res.status} ${res.headers.get("content-type")}`);
  if (!ok) fail(f, `status ${res.status}`);
  if (f === "/sitemap.xml") {
    const xml = await res.text();
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    console.log(`  ${urls.length} URLs: ${urls.join(", ")}`);
    if (urls.length !== routes.length) fail(f, `esperado ${routes.length} URLs`);
  }
  if (f === "/robots.txt") console.log("  " + (await res.text()).replace(/\n/g, "\n  "));
}

console.log(problems ? `\n${problems} problema(s) encontrado(s).` : "\nTudo OK.");
process.exit(problems ? 1 : 0);
