import Link from "next/link";
import { IconArrowRight } from "./icons";
import Hairline from "./Hairline";

export type AreaItem = {
  numero: string; // "01"
  titulo: string;
  descricao: string;
  href?: string;
  linkLabel?: string;
};

type Props = {
  items: AreaItem[];
  /** `resumido` (Home) ou `completo` (página de Áreas) — muda densidade. */
  variant?: "resumido" | "completo";
  /** Nível do título de cada área: h3 sob uma seção com h2 (Home), h2 direto sob o H1 (página de Áreas). */
  headingLevel?: 2 | 3;
  className?: string;
};

/**
 * "O Índice" — elemento-assinatura (PRD 5.5).
 * Sumário jurídico numerado: 01·02·03·04, fios dourados entre itens,
 * nome da área em Fraunces, descrição em Libre Franklin.
 */
export default function AreaIndex({ items, variant = "resumido", headingLevel = 3, className = "" }: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const pad = variant === "completo" ? "py-10 sm:py-12" : "py-7 sm:py-9";
  const titleSize =
    variant === "completo" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl";

  return (
    <div className={className}>
      <Hairline />
      <ol className="list-none m-0 p-0" aria-label="Áreas de atuação">
      {items.map((item) => {
        const inner = (
          <div className={`grid gap-4 sm:gap-8 sm:grid-cols-[4.5rem_1fr_auto] items-baseline ${pad}`}>
            {/* Numeração com informação real — organiza as frentes (PRD 5.5) */}
            <span
              aria-hidden="true"
              className="font-display text-2xl text-dourado-texto tabular-nums tracking-wide"
            >
              {item.numero}
            </span>
            <div className="min-w-0">
              <span className="sr-only">Área {item.numero}: </span>
              <Heading
                className={`${titleSize} text-marinho transition-colors group-hover:text-noite`}
              >
                {item.titulo}
              </Heading>
              <p className="mt-3 max-w-[64ch] text-noite/80 leading-relaxed">
                {item.descricao}
              </p>
            </div>
            {item.href && (
              <span className="inline-flex items-center gap-2 self-center text-sm font-medium text-aco-texto">
                <span className="border-b border-transparent transition-colors group-hover:border-dourado">
                  {item.linkLabel ?? "Ver área"}
                </span>
                <IconArrowRight
                  size={18}
                  className="transition-transform motion-safe:group-hover:translate-x-1"
                />
              </span>
            )}
          </div>
        );

        return (
          <li key={item.numero}>
            {item.href ? (
              <Link
                href={item.href}
                className="group block no-underline rounded-[2px] focus-visible:outline-offset-4"
              >
                {inner}
              </Link>
            ) : (
              <div className="group">{inner}</div>
            )}
            <Hairline />
          </li>
        );
      })}
      </ol>
    </div>
  );
}
