import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";
import FaqAccordion from "@/components/FaqAccordion";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import WhatsappButton from "@/components/WhatsappButton";
import { IconMessage } from "@/components/icons";
import { faq as c } from "@/content/faq";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro="Reunimos aqui as dúvidas mais comuns sobre atendimento, áreas de atuação e como funciona o contato com o escritório."
        image={{ src: "/fotos/balanca.jpg" }}
        crumbs={[{ label: "Perguntas Frequentes", href: "/faq" }]}
      />

      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader eyebrow="Dúvidas" title="Não encontrou a sua pergunta?" subtitle="Fale com a equipe. Ouvimos a sua situação e explicamos os próximos passos." />
            <div className="card mt-8 flex items-start gap-4 p-6">
              <span className="icon-tile shrink-0">
                <IconMessage size={22} />
              </span>
              <div>
                <p className="font-display text-xl text-marinho">Atendimento inicial</p>
                <p className="mt-1 text-sm text-noite/75">Por WhatsApp ou telefone, em horário comercial.</p>
                <div className="mt-4">
                  <WhatsappButton variant="gold" />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqAccordion items={c.itens} schema />
          </Reveal>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
