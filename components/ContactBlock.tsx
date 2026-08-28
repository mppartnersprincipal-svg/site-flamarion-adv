import type { ReactNode } from "react";
import { site, whatsappHref, telHref, mailHref } from "@/lib/site-config";
import { IconClock, IconMail, IconMapPin, IconPhone, IconWhatsapp } from "./icons";

type Props = {
  endereco?: boolean;
  className?: string;
};

type Item = { icon: ReactNode; label: string; valor: string; href: string | null; extra?: string };

/** Canais de contato em cards (dados de site-config.ts). */
export default function ContactBlock({ endereco = false, className = "" }: Props) {
  const items: Item[] = [
    { icon: <IconWhatsapp size={22} />, label: "WhatsApp", valor: site.whatsapp || "[número]", href: whatsappHref(), extra: "Abrir conversa" },
    { icon: <IconPhone size={22} />, label: "Telefone", valor: site.telefone || "[número]", href: telHref(), extra: "Clique para ligar" },
    { icon: <IconMail size={22} />, label: "E-mail", valor: site.email || "[contato@flamarionadvocacia.com.br]", href: mailHref() },
    ...(endereco ? [{ icon: <IconMapPin size={22} />, label: "Endereço", valor: site.endereco, href: null }] : []),
    { icon: <IconClock size={22} />, label: "Horário de atendimento", valor: site.horario, href: null },
  ];

  return (
    <dl className={`grid gap-4 ${className}`}>
      {items.map((it) => {
        const pendente = it.valor.startsWith("[");
        return (
          <div key={it.label} className="card card-hover flex items-start gap-5 p-5 sm:p-6">
            <span className="icon-tile shrink-0">{it.icon}</span>
            <div className="min-w-0">
              <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-aco-texto">{it.label}</dt>
              <dd className="mt-1 min-w-0 leading-relaxed text-noite break-words [overflow-wrap:anywhere]">
                {it.href ? (
                  <a
                    href={it.href}
                    target={it.href.startsWith("http") ? "_blank" : undefined}
                    rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-medium text-marinho underline decoration-dourado/60 underline-offset-4 hover:decoration-dourado"
                  >
                    {it.valor}
                  </a>
                ) : (
                  <span className={pendente ? "opacity-60" : undefined}>{it.valor}</span>
                )}
                {it.extra && it.href && <span className="ml-2 text-sm text-aco-texto">· {it.extra}</span>}
              </dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
