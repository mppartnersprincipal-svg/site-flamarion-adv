/**
 * Dados centralizados do escritório (PRD, seção 7.2).
 * Campos vazios são PENDÊNCIAS do cliente (PRD, seção 10) — nunca publicar
 * um número/e-mail falso. Enquanto vazios, os componentes exibem estado neutro.
 */
export const site = {
  nome: "Flamarion Advocacia",
  tagline: "Direito com técnica, trajetória e proximidade.",
  whatsapp: "+55 62 99940-1316", // número único do escritório
  telefone: "+55 62 99940-1316",
  email: "advocaciaflamarion@gmail.com",
  endereco:
    "Segunda Avenida, Qd. 01 B, Lt. 42/44, Edifício Atlanta Business Center, Sala 15, 2º Andar, Condomínio Cidade Empresarial, Cidade Vera Cruz, Aparecida de Goiânia/GO",
  horario: "Segunda a sexta, das 8h às 12h e das 13h30 às 17h30",
  oabMarcio: "OAB/GO 16.939",
  oabLeticia: "", // PENDENTE — inscrição prevista para setembro/2026
  dominio: "flamarionadvocacia.com.br",
};

export const nav = [
  { label: "O Escritório", href: "/o-escritorio" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
] as const;

export const footerNav = [
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Equipe", href: "/equipe" },
  { label: "Contato", href: "/contato" },
  { label: "Perguntas Frequentes", href: "/faq" },
] as const;

/** Link do WhatsApp; retorna null enquanto o número não for definido. */
export function whatsappHref(mensagem?: string): string | null {
  const digits = site.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const text = mensagem ? `?text=${encodeURIComponent(mensagem)}` : "";
  return `https://wa.me/${digits}${text}`;
}

export function telHref(): string | null {
  const digits = site.telefone.replace(/\D/g, "");
  return digits ? `tel:+${digits}` : null;
}

export function mailHref(): string | null {
  return site.email ? `mailto:${site.email}` : null;
}
