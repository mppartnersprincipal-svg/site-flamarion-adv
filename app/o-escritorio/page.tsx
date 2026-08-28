import type { Metadata } from "next";
import Image from "next/image";
import CtaBlock from "@/components/CtaBlock";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { IconBalance, IconColumn, IconHandshake, IconShield } from "@/components/icons";
import { oEscritorio as c } from "@/content/o-escritorio";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/o-escritorio",
});

const icones = { balance: IconBalance, handshake: IconHandshake, shield: IconShield, column: IconColumn };

export default function OEscritorioPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/biblioteca.jpg" }}
        crumbs={[{ label: "O Escritório", href: "/o-escritorio" }]}
      />

      {/* Foto da fachada com moldura + blocos numerados */}
      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <figure className="photo-frame relative aspect-[4/5] overflow-hidden rounded-xl bg-marinho">
              <Image
                src={c.foto.src}
                alt={c.foto.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover saturate-[0.7]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-noite/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 p-6 text-offwhite">
                <p className="font-display text-2xl">Desde 1996</p>
                <span aria-hidden="true" className="gold-rule mt-3" />
                <p className="mt-3 text-sm text-gelo/90">Escritório próprio e atuação ininterrupta</p>
              </figcaption>
            </figure>
          </Reveal>

          <ol className="flex flex-col gap-6">
            {c.blocos.map((b, i) => (
              <Reveal as="li" key={b.titulo} delay={i * 100}>
                <article className="card card-hover p-8 sm:p-10">
                  <span aria-hidden="true" className="font-display text-4xl text-dourado-texto tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-3xl">{b.titulo}</h2>
                  <span aria-hidden="true" className="gold-rule my-5" />
                  <p className="max-w-[60ch] leading-relaxed text-noite/80">{b.texto}</p>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Valores */}
      <section className="angle-top bg-noite-texture py-28 text-offwhite sm:py-36">
        <div className="container-site">
          <Reveal>
            <SectionHeader dark align="center" eyebrow={c.valores.eyebrow} title="O que orienta a nossa forma de trabalhar" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.valores.itens.map((v, i) => {
              const Icon = icones[v.icone];
              return (
                <Reveal as="li" key={v.palavra} delay={i * 90} className="h-full">
                  <IconCard as="div" dark icon={<Icon size={30} />} title={v.palavra} text={v.texto} className="h-full" />
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
