import { site } from "./site-config";

const q = encodeURIComponent(site.endereco);

/** Rotas no Google Maps até o endereço (PRD 7). */
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;
/** URL do embed (iframe) apontando para o endereço. */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${q}&output=embed&z=16`;
