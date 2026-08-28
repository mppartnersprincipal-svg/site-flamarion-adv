import { IconChevronRight } from "./icons";

export type FaqItem = { pergunta: string; resposta: string };

type Props = {
  items: FaqItem[];
  /** Emite JSON-LD `FAQPage` (PRD 8). Ligar apenas uma vez por página. */
  schema?: boolean;
  className?: string;
};

/**
 * Accordion em cards com <details>/<summary> nativos — acessível por teclado, sem JS.
 */
export default function FaqAccordion({ items, schema = false, className = "" }: Props) {
  const jsonLd = schema
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((i) => ({
          "@type": "Question",
          name: i.pergunta,
          acceptedAnswer: { "@type": "Answer", text: i.resposta },
        })),
      }
    : null;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {items.map((item, i) => (
        <details
          key={i}
          className="group card open:border-dourado/60 open:shadow-[var(--shadow-card-hover)]"
        >
          <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-5 text-left [&::-webkit-details-marker]:hidden sm:px-7">
            <span
              aria-hidden="true"
              className="font-display text-lg tabular-nums text-dourado-texto"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-display text-xl text-marinho sm:text-[1.35rem]">{item.pergunta}</span>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gelo/70 text-aco-texto transition-all group-open:rotate-90 group-open:border-dourado group-open:bg-dourado/10 group-open:text-dourado-texto">
              <IconChevronRight size={18} />
            </span>
          </summary>
          <div className="px-6 pb-6 pl-[calc(1.5rem+2.9rem)] leading-relaxed text-noite/80 sm:px-7 sm:pl-[calc(1.75rem+2.9rem)]">
            {item.resposta}
          </div>
        </details>
      ))}
    </div>
  );
}
