import Button from "./Button";
import Reveal from "./Reveal";
import WhatsappButton from "./WhatsappButton";
import { IconPhone } from "./icons";
import { telHref } from "@/lib/site-config";

type Props = {
  title?: string;
  text?: string;
  /** `gold` (faixa dourada, sobre fundo claro) ou `dark` (vidro, sobre fundo escuro). */
  tone?: "gold" | "dark";
  className?: string;
};

/** CTA intermediário de dobra — compacto, horizontal, com WhatsApp + telefone. */
export default function InlineCta({
  title = "Quer conversar sobre o seu caso?",
  text = "Atendimento inicial por WhatsApp ou telefone, em horário comercial.",
  tone = "gold",
  className = "",
}: Props) {
  const gold = tone === "gold";
  return (
    <Reveal
      className={`${
        gold
          ? "rounded-2xl bg-gradient-to-r from-dourado-claro via-dourado to-dourado-escuro text-noite shadow-[var(--shadow-gold)]"
          : "card-dark text-offwhite"
      } flex flex-col gap-6 p-7 sm:p-8 lg:flex-row lg:items-center lg:justify-between ${className}`}
    >
      <div className="max-w-[52ch]">
        <p className={`font-display text-2xl leading-snug ${gold ? "text-noite" : "text-offwhite"}`}>{title}</p>
        <p className={`mt-1.5 text-sm leading-relaxed ${gold ? "text-noite/80" : "text-gelo/85"}`}>{text}</p>
      </div>
      <div className="flex flex-wrap gap-3 lg:shrink-0">
        <WhatsappButton variant={gold ? "primary" : "gold"} />
        <Button
          href={telHref()}
          variant="outline"
          dark={!gold}
          icon={<IconPhone size={18} />}
          pendingTitle="Telefone pendente (lib/site-config.ts)"
          className={gold ? "border-noite/30 text-noite hover:border-noite hover:bg-transparent" : ""}
        >
          Ligar
        </Button>
      </div>
    </Reveal>
  );
}
