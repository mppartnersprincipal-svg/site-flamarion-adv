import Link from "next/link";
import { site, footerNav, whatsappHref, telHref, mailHref } from "@/lib/site-config";
import Logo from "./Logo";
import { IconClock, IconMail, IconMapPin, IconPhone, IconWhatsapp } from "./icons";

const PENDENTE = "[número]";

function Canal({
  icon,
  label,
  valor,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  valor: string;
  href: string | null;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-dourado">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-eyebrow text-gelo/60">{label}</span>
        {href ? (
          <a
            href={href}
            className="inline-flex min-h-8 items-center text-offwhite transition-colors hover:text-dourado-claro"
          >
            {valor}
          </a>
        ) : (
          <span className="text-gelo/70">{valor}</span>
        )}
      </span>
    </li>
  );
}

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-noite-texture text-gelo">
      <div className="container-site pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div className="space-y-6">
            <Logo variant="dark" />
            <p className="max-w-[36ch] text-sm leading-relaxed text-gelo/85">{site.tagline}</p>
            <p className="max-w-[40ch] text-sm leading-relaxed text-gelo/70">
              Quase 30 anos de advocacia em Goiás e no Distrito Federal, com atendimento a clientes de todo o Brasil.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-dourado">Navegação</h2>
            <ul className="mt-5 flex flex-col gap-1 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/o-escritorio" className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro">
                  O Escritório
                </Link>
              </li>
            </ul>
          </nav>

          {/* Áreas */}
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-dourado">Áreas</h2>
            <ul className="mt-5 flex flex-col gap-1 text-sm">
              <li><Link href="/areas/empresarial" className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro">Empresarial e Penal Econômico</Link></li>
              <li><Link href="/areas/consumidor-aereo" className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro">Consumidor e Aéreo</Link></li>
              <li><Link href="/areas/civel" className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro">Direito Cível</Link></li>
              <li><Link href="/areas/trabalhista" className="inline-flex min-h-9 items-center text-offwhite/85 transition-colors hover:text-dourado-claro">Direito Trabalhista</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-eyebrow text-dourado">Contato</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <Canal icon={<IconWhatsapp size={16} />} label="WhatsApp" valor={site.whatsapp || PENDENTE} href={whatsappHref()} />
              <Canal icon={<IconPhone size={16} />} label="Telefone" valor={site.telefone || PENDENTE} href={telHref()} />
              <Canal icon={<IconMail size={16} />} label="E-mail" valor={site.email || "[contato@flamarionadvocacia.com.br]"} href={mailHref()} />
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-dourado"><IconMapPin size={16} /></span>
                <address className="not-italic leading-relaxed text-gelo/85">
                  Segunda Avenida, Qd. 01 B, Lt. 42/44 — Ed. Atlanta Business Center, Sala 15, 2º Andar
                  <br />
                  Cond. Cidade Empresarial — Aparecida de Goiânia/GO
                </address>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-dourado"><IconClock size={16} /></span>
                <span className="text-gelo/85">{site.horario}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 py-6 text-xs leading-relaxed text-gelo/70">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© {ano} {site.nome}. Todos os direitos reservados.</p>
            <p>
              Dr. Márcio Flamarion — {site.oabMarcio} · Dra. Letícia Alves — OAB/GO {site.oabLeticia || "[a confirmar]"}
            </p>
          </div>
          <p className="mt-3">Conteúdo de caráter meramente informativo, em conformidade com o Provimento nº 205/2021 da OAB.</p>
        </div>
      </div>
    </footer>
  );
}
