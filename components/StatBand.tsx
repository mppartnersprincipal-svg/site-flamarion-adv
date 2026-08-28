import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type Stat = { valor: string; label: string; icon: ReactNode };

type Props = { items: Stat[]; className?: string };

/** Faixa de números (referência Lexora): valor grande em Fraunces, ícone dourado, label. */
export default function StatBand({ items, className = "" }: Props) {
  return (
    <ul className={`grid grid-cols-2 gap-6 lg:grid-cols-4 ${className}`}>
      {items.map((s, i) => (
        <Reveal as="li" key={s.label} delay={i * 90} className="flex flex-col items-center text-center">
          <span className="mb-4 text-dourado">{s.icon}</span>
          <span className="font-display text-4xl text-offwhite sm:text-5xl">{s.valor}</span>
          <span aria-hidden="true" className="gold-rule my-3 w-8" />
          <span className="text-sm text-gelo/90">{s.label}</span>
        </Reveal>
      ))}
    </ul>
  );
}
