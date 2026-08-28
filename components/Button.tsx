import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "outline" | "ghost";

type Props = {
  children: ReactNode;
  href?: string | null;
  /**
   * `gold`   = CTA principal (dourado sólido, texto noite)
   * `primary`= marinho sólido
   * `outline`= borda fina
   * `ghost`  = só texto + seta
   */
  variant?: Variant;
  /** Sobre fundo escuro. */
  dark?: boolean;
  size?: "md" | "lg";
  icon?: ReactNode;
  iconRight?: ReactNode;
  external?: boolean;
  /** Texto do tooltip interno quando `href` é null (dado pendente). */
  pendingTitle?: string;
  className?: string;
};

export const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 motion-safe:hover:-translate-y-0.5 active:translate-y-0";

const sizes = { md: "min-h-11 px-6 py-2.5 text-sm", lg: "min-h-13 px-8 py-3.5 text-[15px]" };

export function buttonStyles(variant: Variant, dark: boolean) {
  switch (variant) {
    case "gold":
      return "bg-dourado text-noite shadow-[var(--shadow-gold)] hover:bg-dourado-claro";
    case "primary":
      return dark
        ? "bg-offwhite text-noite hover:bg-gelo"
        : "bg-marinho text-offwhite shadow-[0_10px_30px_-12px_rgb(26_61_99/0.6)] hover:bg-noite";
    case "outline":
      return dark
        ? "border border-offwhite/35 text-offwhite hover:border-dourado hover:text-dourado-claro"
        : "border border-marinho/30 text-marinho hover:border-dourado hover:bg-white";
    case "ghost":
      return dark
        ? "text-dourado-claro hover:text-dourado px-0"
        : "text-aco-texto hover:text-marinho px-0";
  }
}

export default function Button({
  children,
  href,
  variant = "primary",
  dark = false,
  size = "md",
  icon,
  iconRight,
  external = false,
  pendingTitle = "Dado pendente (lib/site-config.ts)",
  className = "",
}: Props) {
  const cls = `${buttonBase} ${variant === "ghost" ? "min-h-11 text-sm" : sizes[size]} ${buttonStyles(variant, dark)} ${className}`;
  const inner = (
    <>
      {icon}
      {children}
      {iconRight && (
        <span className="transition-transform duration-300 motion-safe:group-hover/btn:translate-x-1">
          {iconRight}
        </span>
      )}
    </>
  );

  if (!href) {
    return (
      <span aria-disabled="true" title={pendingTitle} className={`${cls} cursor-not-allowed opacity-60`}>
        {inner}
      </span>
    );
  }

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const ext = href.startsWith("http");
    return (
      <a href={href} className={cls} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
