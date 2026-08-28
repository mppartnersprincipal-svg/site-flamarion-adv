import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./icons";

export type AreaCardItem = {
  numero: string;
  titulo: string;
  descricao: string;
  href?: string;
  linkLabel?: string;
  image: { src: string; alt: string };
  categoria?: string;
};

type Props = { item: AreaCardItem; headingLevel?: 2 | 3; className?: string };

/** Card de área com foto, categoria e título sobre gradiente (referência Lyonexy). */
export default function AreaCard({ item, headingLevel = 3, className = "" }: Props) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const Wrapper = item.href ? Link : "div";
  const wrapperProps = item.href ? { href: item.href } : {};

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={`group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-xl bg-noite text-offwhite shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] ${className}`}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover saturate-[0.7] transition-transform duration-700 ease-out motion-safe:group-hover:scale-105"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-noite via-noite/70 to-noite/10" />
      <span
        aria-hidden="true"
        className="absolute left-6 top-6 font-display text-3xl text-dourado/80 transition-colors group-hover:text-dourado"
      >
        {item.numero}
      </span>
      <div className="relative p-6 sm:p-7">
        {item.categoria && (
          <span className="mb-3 inline-block rounded-full border border-dourado/50 bg-noite/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-dourado backdrop-blur">
            {item.categoria}
          </span>
        )}
        <Heading className="text-[1.5rem] leading-snug text-offwhite">{item.titulo}</Heading>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gelo/85">{item.descricao}</p>
        {item.href && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-dourado-claro">
            {item.linkLabel ?? "Ver área"}
            <IconArrowRight size={18} className="transition-transform motion-safe:group-hover:translate-x-1" />
          </span>
        )}
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-dourado transition-transform duration-500 group-hover:scale-x-100"
      />
    </Wrapper>
  );
}
