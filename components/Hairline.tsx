type Props = {
  /** `dourado` (padrão, 1px a 50%) ou `gelo` (sólido). */
  tone?: "dourado" | "gelo";
  /** Só decorativo (padrão) ou separador semântico (`<hr>`). */
  decorative?: boolean;
  className?: string;
};

/** Fio de 1px — divisor estrutural no lugar de caixas pesadas (PRD 5.3 / 5.5). */
export default function Hairline({
  tone = "dourado",
  decorative = true,
  className = "",
}: Props) {
  const cls = `${tone === "dourado" ? "hairline" : "border-t border-gelo"} ${className}`;
  return decorative ? (
    <div role="presentation" className={cls} />
  ) : (
    <hr className={`border-0 ${cls}`} />
  );
}
