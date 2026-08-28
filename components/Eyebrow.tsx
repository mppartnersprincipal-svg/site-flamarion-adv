import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** `aco` (padrão) ou `dourado` (acento, tipicamente sobre fundo escuro). */
  tone?: "aco" | "dourado";
  /** Filete dourado antes do texto (estilo "— EYEBROW"). */
  rule?: boolean;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
};

/** Label em caixa alta com tracking (PRD 5.2 / 5.5). */
export default function Eyebrow({
  children,
  tone = "aco",
  rule = true,
  align = "left",
  as: Tag = "p",
  className = "",
}: Props) {
  const color = tone === "dourado" ? "text-dourado" : "text-aco-texto";
  const line = tone === "dourado" ? "bg-dourado" : "bg-dourado";
  return (
    <Tag
      className={`inline-flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-eyebrow ${color} ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      {rule && <span aria-hidden="true" className={`h-px w-8 ${line}`} />}
      <span>{children}</span>
      {rule && align === "center" && <span aria-hidden="true" className={`h-px w-8 ${line}`} />}
    </Tag>
  );
}
