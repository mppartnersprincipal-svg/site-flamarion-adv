import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CtaBlock from "@/components/CtaBlock";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import WhatsappButton from "@/components/WhatsappButton";
import { IconArrowRight, IconBalance, IconBriefcase, IconCheck, IconColumn, IconHandshake, IconShield } from "@/components/icons";
import { empresarial as c } from "@/content/empresarial";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/areas/empresarial",
});

const icones = { shield: IconShield, balance: IconBalance, column: IconColumn, handshake: IconHandshake };

export default function EmpresarialPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/assinatura.jpg" }}
        crumbs={[
          { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
          { label: "Direito Empresarial e Penal Econômico", href: "/areas/empresarial" },
        ]}
      >
        <WhatsappButton variant="gold" size="lg" />
        <Button href="#servicos" variant="outline" dark size="lg" iconRight={<IconArrowRight size={18} />}>
          O que fazemos
        </Button>
      </PageHero>

      {/* Destaque — defesa em crimes contra a ordem tributária */}
      <section className="container-site -mt-10 relative z-10 sm:-mt-12">
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl bg-gradient-to-br from-dourado-claro via-dourado to-dourado-escuro shadow-[var(--shadow-gold)] lg:grid-cols-[auto_1fr]">
            <div className="flex items-center justify-center bg-noite/10 p-8 lg:p-12">
              <IconShield size={72} className="text-noite" />
            </div>
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-noite/70">Foco do escritório</p>
              <h2 className="mt-2 text-2xl text-noite sm:text-3xl">{c.destaque.titulo}</h2>
              <p className="mt-5 max-w-[66ch] leading-relaxed text-noite/85">{c.destaque.texto}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Serviços */}
      <section id="servicos" className="container-site scroll-mt-24 py-24 sm:py-32">
        <Reveal>
          <SectionHeader eyebrow="Serviços" title={c.servicos.titulo} />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {c.servicos.itens.map((s, i) => {
            const Icon = icones[s.icone];
            return (
              <Reveal as="li" key={s.titulo} delay={i * 90} className="h-full">
                <IconCard as="div" icon={<Icon size={30} />} title={s.titulo} text={s.texto} index={String(i + 1).padStart(2, "0")} className="h-full" />
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* Para quem é / Por que a Flamarion — fundo escuro com foto */}
      <section className="angle-top relative isolate overflow-hidden bg-noite py-28 text-offwhite sm:py-36">
        <Image src="/fotos/escritorio.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20 saturate-[0.4]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-noite via-noite/90 to-noite/70" />
        <div className="container-site relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="card-dark p-8 sm:p-10">
            <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-dourado/40 bg-dourado/10 text-dourado">
              <IconBriefcase size={26} />
            </span>
            <h2 className="mt-6 text-2xl text-offwhite sm:text-3xl">{c.paraQuem.titulo}</h2>
            <span aria-hidden="true" className="gold-rule my-5" />
            <p className="max-w-[56ch] text-lg leading-relaxed text-gelo/90">{c.paraQuem.texto}</p>
          </Reveal>
          <Reveal delay={120} className="card-dark p-8 sm:p-10">
            <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-dourado/40 bg-dourado/10 text-dourado">
              <IconHandshake size={26} />
            </span>
            <h2 className="mt-6 text-2xl text-offwhite sm:text-3xl">{c.porQue.titulo}</h2>
            <span aria-hidden="true" className="gold-rule my-5" />
            <ul className="space-y-4">
              {c.porQue.itens.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-relaxed text-gelo/90">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dourado text-noite">
                    <IconCheck size={14} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBlock title={c.cta.titulo} text={c.cta.texto} />
    </>
  );
}
