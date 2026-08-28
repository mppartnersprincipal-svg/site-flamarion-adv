"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  /** Atraso em ms (escalonar cards). */
  delay?: number;
  className?: string;
};

/**
 * Revela o bloco ao entrar na viewport (IntersectionObserver, sem dependências).
 * Sem JS o conteúdo permanece visível (classe aplicada só no cliente).
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("reveal");
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties} className={className}>
      {children}
    </Tag>
  );
}
