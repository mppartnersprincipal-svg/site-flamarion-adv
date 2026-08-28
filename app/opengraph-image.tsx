import { ImageResponse } from "next/og";
import { site } from "@/lib/site-config";

export const alt = `${site.nome} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem Open Graph padrão: monograma dourado + nome + tagline sobre azul-noite. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(120deg, #0d2140 0%, #0A1931 100%)",
          color: "#F6FAFD",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="88" height="88" viewBox="0 0 120 120" fill="none" stroke="#C8A96A" strokeWidth="11" strokeLinejoin="round" strokeLinecap="round">
            <path d="M16 22 H84 L106 104" />
            <path d="M42 22 V104" />
            <path d="M42 62 H66" />
          </svg>
          <div style={{ display: "flex", fontSize: 44, letterSpacing: 8, textTransform: "uppercase" }}>
            Flamarion Advocacia
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ width: 96, height: 2, background: "#C8A96A", opacity: 0.7 }} />
          <div style={{ display: "flex", fontSize: 54, lineHeight: 1.15, maxWidth: 900 }}>
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#B3CFE5",
            }}
          >
            Aparecida de Goiânia · Goiás e Distrito Federal
          </div>
        </div>
      </div>
    ),
    size,
  );
}
