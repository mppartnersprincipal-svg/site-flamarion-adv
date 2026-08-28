import type { Metadata } from "next";
import CtaBlock from "@/components/CtaBlock";
import IconCard from "@/components/IconCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SocioCard from "@/components/SocioCard";
import { IconBalance, IconHandshake, IconShield } from "@/components/icons";
import { equipe as c } from "@/content/equipe";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/escritorio.jpg" }}
        crumbs={[{ label: "Equipe", href: "/equipe" }]}
      />

      <section className="container-site py-24 sm:py-32" aria-label="Sócios">
        <div className="flex flex-col gap-10">
          {c.socios.map((s, i) => (
            <Reveal key={s.nome} delay={i * 100}>
              <SocioCard nome={s.nome} cargo={s.cargo} oab={s.oab} bio={s.bio} foto={s.foto} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-gelo/50 bg-white py-24 sm:py-32">
        <div className="container-site">
          <Reveal>
            <SectionHeader align="center" eyebrow="O mesmo compromisso" title="Técnica, ética e proximidade" />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: <IconBalance size={30} />, t: "Técnica", d: "Estudo e preparo em cada área em que atuamos, do consultivo ao contencioso." },
              { icon: <IconShield size={30} />, t: "Ética", d: "Compromisso e responsabilidade com cada cliente, ao longo de quase 30 anos." },
              { icon: <IconHandshake size={30} />, t: "Proximidade", d: "Acompanhamento direto e comunicação clara sobre cada etapa do caso." },
            ].map((v, i) => (
              <Reveal as="li" key={v.t} delay={i * 90} className="h-full">
                <IconCard as="div" icon={v.icon} title={v.t} text={v.d} className="h-full" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
