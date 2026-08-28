import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import CtaBlock from "@/components/CtaBlock";
import FaqAccordion from "@/components/FaqAccordion";
import IconCard from "@/components/IconCard";
import InlineCta from "@/components/InlineCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import WhatsappButton from "@/components/WhatsappButton";
import { IconArrowRight, IconBriefcase, IconCalendar, IconClock, IconGlobe, IconPlane } from "@/components/icons";
import { consumidorAereo as c } from "@/content/consumidor-aereo";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  absolute: true,
  description: c.meta.description,
  path: "/areas/consumidor-aereo",
});

const iconesSituacoes = [IconClock, IconCalendar, IconPlane, IconBriefcase, IconGlobe];

export default function ConsumidorAereoPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/aviao.jpg" }}
        crumbs={[
          { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
          { label: "Direito do Consumidor e Aéreo", href: "/areas/consumidor-aereo" },
        ]}
      >
        <WhatsappButton variant="gold" size="lg" label="Contar o que aconteceu" />
        <Button href="#situacoes" variant="outline" dark size="lg" iconRight={<IconArrowRight size={18} />}>
          Ver situações
        </Button>
      </PageHero>

      {/* Situações — grid de cards com ícone */}
      <section id="situacoes" className="container-site scroll-mt-24 py-24 sm:py-32">
        <Reveal>
          <SectionHeader align="center" eyebrow="Situações" title={c.situacoes.titulo} />
        </Reveal>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label={c.situacoes.titulo}>
          {c.situacoes.itens.map((s, i) => {
            const Icon = iconesSituacoes[i % iconesSituacoes.length];
            return (
              <Reveal as="li" key={s.titulo} delay={i * 80} className="h-full">
                <IconCard as="div" icon={<Icon size={26} />} title={s.titulo} text={s.texto} index={String(i + 1).padStart(2, "0")} className="h-full" />
              </Reveal>
            );
          })}
          <Reveal as="li" delay={c.situacoes.itens.length * 80} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-xl bg-gradient-to-br from-dourado-claro via-dourado to-dourado-escuro p-7 text-noite shadow-[var(--shadow-gold)] sm:p-8">
              <div>
                <IconPlane size={34} />
                <h3 className="mt-5 text-[1.4rem] leading-snug text-noite">Passou por alguma dessas situações?</h3>
                <p className="mt-3 text-sm leading-relaxed text-noite/85">Guarde os comprovantes e fale com a equipe. Avaliamos o seu caso sem compromisso.</p>
              </div>
              <div className="mt-6">
                <WhatsappButton variant="primary" label="Falar agora" />
              </div>
            </div>
          </Reveal>
        </ol>
      </section>

      {/* Como atuamos — fundo escuro com foto */}
      <section className="angle-both relative isolate overflow-hidden bg-noite py-28 text-offwhite sm:py-36">
        <Image src="/fotos/aperto-de-mao.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20 saturate-[0.4]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-noite via-noite/90 to-noite/60" />
        <div className="container-site relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
          <Reveal>
            <span className="medallion mb-7">
              <IconGlobe size={26} />
            </span>
            <SectionHeader dark eyebrow="Metodologia" title={c.comoAtuamos.titulo} />
          </Reveal>
          <Reveal delay={120} className="card-dark p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-gelo/90">{c.comoAtuamos.texto}</p>
          </Reveal>
        </div>
        <div className="container-site relative mt-10">
          <InlineCta
            tone="dark"
            title="Teve problemas com o seu voo?"
            text="Guarde os comprovantes e fale com a equipe. Avaliamos a sua situação e explicamos o que a lei prevê."
          />
        </div>
      </section>

      {/* Mini-FAQ */}
      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <SectionHeader eyebrow="Dúvidas" title={c.faq.titulo} subtitle="Respostas objetivas para as perguntas mais comuns sobre problemas com voo." />
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={c.faq.itens} schema />
          </Reveal>
        </div>
        <InlineCta
          className="mt-12"
          title="Ainda tem dúvidas sobre o seu caso?"
          text="Conte o que aconteceu. A orientação inicial é feita por WhatsApp ou telefone."
        />
      </section>

      <CtaBlock title={c.cta.titulo} text={c.cta.texto} />
    </>
  );
}
