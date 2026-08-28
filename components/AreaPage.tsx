import Image from "next/image";
import Button from "./Button";
import CtaBlock from "./CtaBlock";
import IconCard from "./IconCard";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import WhatsappButton from "./WhatsappButton";
import {
  IconArrowRight,
  IconBalance,
  IconBriefcase,
  IconCheck,
  IconColumn,
  IconFileText,
  IconHandshake,
  IconShield,
  IconUsers,
} from "./icons";

export const areaIcons = {
  shield: IconShield,
  balance: IconBalance,
  column: IconColumn,
  handshake: IconHandshake,
  users: IconUsers,
  briefcase: IconBriefcase,
  file: IconFileText,
};

export type AreaContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  servicos: { titulo: string; itens: { titulo: string; texto: string; icone: keyof typeof areaIcons }[] };
  comoAtuamos: { titulo: string; texto: string };
  paraQuem: { titulo: string; texto: string };
  porQue: { titulo: string; itens: string[] };
  cta: { titulo: string; texto: string };
};

type Props = {
  c: AreaContent;
  heroImage: string;
  sectionImage: string;
  crumb: { label: string; href: string };
};

/** Layout padrão de página de área (usado em Cível e Trabalhista). */
export default function AreaPage({ c, heroImage, sectionImage, crumb }: Props) {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: heroImage }}
        crumbs={[{ label: "Áreas de Atuação", href: "/areas-de-atuacao" }, crumb]}
      >
        <WhatsappButton variant="gold" size="lg" />
        <Button href="#servicos" variant="outline" dark size="lg" iconRight={<IconArrowRight size={18} />}>
          O que fazemos
        </Button>
      </PageHero>

      <section id="servicos" className="container-site scroll-mt-24 py-24 sm:py-32">
        <Reveal>
          <SectionHeader eyebrow="Serviços" title={c.servicos.titulo} />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {c.servicos.itens.map((s, i) => {
            const Icon = areaIcons[s.icone];
            return (
              <Reveal as="li" key={s.titulo} delay={i * 90} className="h-full">
                <IconCard as="div" icon={<Icon size={30} />} title={s.titulo} text={s.texto} index={String(i + 1).padStart(2, "0")} className="h-full" />
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="angle-both relative isolate overflow-hidden bg-noite py-28 text-offwhite sm:py-36">
        <Image src={sectionImage} alt="" fill sizes="100vw" className="object-cover opacity-20 saturate-[0.4]" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-noite via-noite/90 to-noite/70" />
        <div className="container-site relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-20">
            <Reveal>
              <span className="medallion mb-7">
                <IconHandshake size={28} />
              </span>
              <SectionHeader dark eyebrow="Metodologia" title={c.comoAtuamos.titulo} />
            </Reveal>
            <Reveal delay={120} className="card-dark p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-gelo/90">{c.comoAtuamos.texto}</p>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="card-dark p-8 sm:p-10">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-dourado/40 bg-dourado/10 text-dourado">
                <IconUsers size={26} />
              </span>
              <h2 className="mt-6 text-2xl text-offwhite sm:text-3xl">{c.paraQuem.titulo}</h2>
              <span aria-hidden="true" className="gold-rule my-5" />
              <p className="max-w-[56ch] text-lg leading-relaxed text-gelo/90">{c.paraQuem.texto}</p>
            </Reveal>
            <Reveal delay={120} className="card-dark p-8 sm:p-10">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-xl border border-dourado/40 bg-dourado/10 text-dourado">
                <IconShield size={26} />
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
        </div>
      </section>

      <CtaBlock title={c.cta.titulo} text={c.cta.texto} />
    </>
  );
}
