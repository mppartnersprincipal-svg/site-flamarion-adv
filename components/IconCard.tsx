import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  text: string;
  /** Número decorativo (01, 02…) no canto. */
  index?: string;
  dark?: boolean;
  as?: "li" | "div" | "article";
  className?: string;
};

/** Card com ícone em tile, título Fraunces e texto. Usado em credibilidade, serviços, valores. */
export default function IconCard({ icon, title, text, index, dark = false, as: Tag = "li", className = "" }: Props) {
  return (
    <Tag
      className={`group flex h-full flex-col gap-5 p-7 sm:p-8 ${dark ? "card-dark" : "card card-hover"} ${className}`}
    >
      {index && (
        <span
          aria-hidden="true"
          className={`absolute right-6 top-5 font-display text-4xl tabular-nums ${
            dark ? "text-offwhite/10" : "text-gelo/70"
          } transition-colors group-hover:text-dourado/50`}
        >
          {index}
        </span>
      )}
      <span
        className={
          dark
            ? "inline-flex h-13 w-13 items-center justify-center rounded-xl border border-dourado/40 bg-dourado/10 text-dourado"
            : "icon-tile group-hover:border-dourado/60 group-hover:bg-dourado/10 group-hover:text-dourado-texto"
        }
      >
        {icon}
      </span>
      <div>
        <h3 className={`text-[1.4rem] leading-snug ${dark ? "text-offwhite" : "text-marinho"}`}>{title}</h3>
        <p className={`mt-3 leading-relaxed ${dark ? "text-gelo/85" : "text-noite/75"}`}>{text}</p>
      </div>
    </Tag>
  );
}
