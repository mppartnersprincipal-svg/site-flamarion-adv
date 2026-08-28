"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site-config";
import { mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/maps";
import { IconMapPin } from "./icons";

/**
 * Embed do Google Maps com "fachada": o iframe (pesado) só carrega ao clicar.
 * Sem JS, o link abre o Maps.
 */
export default function MapEmbed({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative isolate overflow-hidden rounded-xl border border-gelo/60 bg-noite shadow-[var(--shadow-card)] ${className}`}>
      {loaded ? (
        <iframe
          src={mapsEmbedUrl}
          title={`Mapa — ${site.nome}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="block h-full w-full grayscale-[35%]"
        />
      ) : (
        <>
          <Image src="/fotos/fachada.jpg" alt="" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover opacity-40 saturate-[0.5]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-noite via-noite/60 to-noite/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-offwhite">
            <span className="medallion">
              <IconMapPin size={24} />
            </span>
            <p className="max-w-[36ch] text-sm leading-relaxed text-gelo/90">
              Edifício Atlanta Business Center — Condomínio Cidade Empresarial, Aparecida de Goiânia/GO
            </p>
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex min-h-11 items-center rounded-full bg-dourado px-6 py-2.5 text-sm font-medium text-noite shadow-[var(--shadow-gold)] transition-colors hover:bg-dourado-claro"
            >
              Ver o mapa
            </button>
            <a
              href={mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-sm text-gelo underline decoration-dourado/60 underline-offset-4 hover:decoration-dourado"
            >
              Abrir no Google Maps
            </a>
          </div>
        </>
      )}
    </div>
  );
}
