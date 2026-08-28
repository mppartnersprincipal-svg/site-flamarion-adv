import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBlock from "@/components/CtaBlock";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { areas as c } from "@/content/areas";
import { areaImages } from "@/lib/area-images";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/areas-de-atuacao",
});

export default function AreasDeAtuacaoPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/tribunal.jpg" }}
        crumbs={[{ label: "Áreas de Atuação", href: "/areas-de-atuacao" }]}
      />

      {/* Índice completo — cards horizontais com foto */}
      <section className="container-site py-24 sm:py-32" aria-label="Áreas de atuação">
        <Reveal>
          <SectionHeader eyebrow="O Índice" title="Quatro frentes, um mesmo ponto de partida" />
        </Reveal>
        <ol className="mt-14 flex flex-col gap-8">
          {c.indice.map((item, i) => {
            const img = areaImages[item.numero];
            const par = i % 2 === 1;
            return (
              <Reveal as="li" key={item.numero} delay={60}>
                <article className={`card card-hover group grid overflow-hidden md:grid-cols-[1fr_1.4fr] ${par ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-noite md:aspect-auto md:min-h-[20rem]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover saturate-[0.7] transition-transform duration-700 motion-safe:group-hover:scale-105"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-noite/70 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-dourado/50 bg-noite/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-eyebrow text-dourado backdrop-blur">
                      {img.categoria}
                    </span>
                    <span aria-hidden="true" className="absolute bottom-5 left-5 font-display text-4xl text-dourado">
                      {item.numero}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <span className="sr-only">Área {item.numero}: </span>
                    <h2 className="text-2xl sm:text-3xl">{item.titulo}</h2>
                    <span aria-hidden="true" className="gold-rule my-5" />
                    <p className="max-w-[60ch] leading-relaxed text-noite/80">{item.descricao}</p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-marinho px-6 text-sm font-medium text-offwhite transition-colors hover:bg-noite"
                      >
                        {item.linkLabel ?? "Conhecer a área"}
                        <IconArrowRight size={18} className="transition-transform motion-safe:group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-aco-texto">
                        <IconCheck size={16} className="text-dourado-texto" /> Atendimento por WhatsApp ou telefone
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <CtaBlock />
    </>
  );
}
