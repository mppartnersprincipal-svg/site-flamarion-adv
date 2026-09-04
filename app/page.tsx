import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AreaCard from "@/components/AreaCard";
import Button from "@/components/Button";
import CtaBlock from "@/components/CtaBlock";
import Eyebrow from "@/components/Eyebrow";
import IconCard from "@/components/IconCard";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import SocioCard from "@/components/SocioCard";
import StatBand from "@/components/StatBand";
import WhatsappButton from "@/components/WhatsappButton";
import {
  IconArrowRight,
  IconBalance,
  IconBriefcase,
  IconCalendar,
  IconCheck,
  IconClock,
  IconColumn,
  IconGlobe,
  IconHandshake,
  IconMapPin,
  IconWhatsapp,
  IconShield,
  IconUsers,
} from "@/components/icons";
import { home } from "@/content/home";
import { equipe } from "@/content/equipe";
import { areaImages } from "@/lib/area-images";
import { mapsDirectionsUrl } from "@/lib/maps";
import { site } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: home.meta.title,
  absolute: true,
  description: home.meta.description,
  path: "/",
});

const icones = { column: IconColumn, handshake: IconHandshake, balance: IconBalance };

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-noite text-offwhite">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <Image
            src="/fotos/hero-justica.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-30 saturate-[0.7] motion-safe:animate-[slow-zoom_18s_ease-out_forwards]"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-noite via-noite/90 to-noite/60" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-noite to-transparent" />

        <div className="container-site relative grid min-h-[600px] items-center gap-16 py-20 sm:min-h-[680px] lg:min-h-[780px] lg:grid-cols-[1fr_minmax(0,27rem)] lg:gap-14 lg:py-28 xl:grid-cols-[1fr_minmax(0,31rem)] xl:gap-20">
          <div className="hero-in max-w-2xl">
            <Eyebrow tone="dourado" className="mb-6">
              {home.hero.eyebrow}
            </Eyebrow>
            <h1 className="text-[2.75rem] leading-[1.08] text-offwhite sm:text-6xl lg:text-[76px] lg:leading-[1.03]">
              {home.hero.h1}
            </h1>
            <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-gelo/90 sm:text-xl">{home.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/areas-de-atuacao" variant="gold" size="lg" iconRight={<IconArrowRight size={18} />}>
                {home.hero.cta1}
              </Button>
              <WhatsappButton variant="outline" dark size="lg" label={home.hero.cta2} />
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gelo/80">
              <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-dourado" /> Desde 1997</li>
              <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-dourado" /> {site.oabMarcio}</li>
              <li className="inline-flex items-center gap-2"><IconCheck size={16} className="text-dourado" /> Goiás, DF e todo o Brasil</li>
            </ul>
          </div>

          {/* Retrato institucional da dupla — moldura dourada + legenda por advogado */}
          <figure className="relative mx-auto w-full max-w-md motion-safe:animate-[hero-in_800ms_cubic-bezier(0.2,0.7,0.2,1)_400ms_both] lg:mx-0 lg:max-w-none">
            <span
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-2xl border-l-2 border-t-2 border-dourado/70 sm:-left-4 sm:-top-4 sm:h-24 sm:w-24"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-2xl border-b-2 border-r-2 border-dourado/70 sm:-bottom-4 sm:-right-4 sm:h-24 sm:w-24"
            />
            <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-[0_30px_70px_-30px_rgb(0_0_0/0.75)]">
              <Image
                src="/fotos/equipe-flamarion.jpg"
                alt="Dr. Márcio Flamarion e Dra. Letícia Alves no escritório da Flamarion Advocacia, em Goiânia"
                width={2000}
                height={1667}
                priority
                sizes="(min-width: 1280px) 31rem, (min-width: 1024px) 27rem, (min-width: 640px) 28rem, 100vw"
                className="w-full object-cover"
              />
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-dourado" />
              <figcaption className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-noite/90">
                <div className="px-4 py-3.5 sm:px-5">
                  <span className="block font-display text-[15px] leading-snug text-offwhite sm:text-base">Dr. Márcio Flamarion</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-dourado sm:text-[11px]">
                    Direito empresarial
                  </span>
                </div>
                <div className="px-4 py-3.5 sm:px-5">
                  <span className="block font-display text-[15px] leading-snug text-offwhite sm:text-base">Dra. Letícia Alves</span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-dourado sm:text-[11px]">
                    Consumidor e tributário
                  </span>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ===== FAIXA DE AÇÕES RÁPIDAS (sobreposta ao hero) ===== */}
      <section aria-label="Atalhos" className="container-site relative z-10 -mt-14 lg:-mt-16">
        <ul className="grid overflow-hidden rounded-xl border border-gelo/50 bg-white shadow-[var(--shadow-card-hover)] md:grid-cols-3">
          {[
            { icon: <IconWhatsapp size={26} fill="currentColor" />, sup: "Atendimento inicial", titulo: "Fale no WhatsApp", href: "/contato" },
            { icon: <IconBriefcase size={26} />, sup: "Assessoria e contencioso", titulo: "Áreas de atuação", href: "/areas-de-atuacao" },
            { icon: <IconUsers size={26} />, sup: "Quem conduz o seu caso", titulo: "Conheça a equipe", href: "/equipe" },
          ].map((a) => (
            <li key={a.titulo} className="border-b border-gelo/50 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <Link href={a.href} className="group flex items-center gap-5 px-6 py-6 transition-colors hover:bg-offwhite sm:px-8">
                <span className="icon-tile shrink-0 group-hover:border-dourado/60 group-hover:bg-dourado/10 group-hover:text-dourado-texto">
                  {a.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-eyebrow text-dourado-texto">{a.sup}</span>
                  <span className="mt-0.5 block font-display text-xl text-marinho">{a.titulo}</span>
                </span>
                <IconArrowRight size={20} className="text-aco-texto transition-transform motion-safe:group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== QUEM SOMOS + PAINEL DOURADO ===== */}
      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <span className="medallion mb-8">
              <IconColumn size={30} />
            </span>
            <SectionHeader eyebrow={home.credibilidade.eyebrow} title="Trajetória sólida. Atuação próxima." />
            <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-noite/80">{home.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/o-escritorio" variant="primary" iconRight={<IconArrowRight size={18} />}>
                Conhecer o escritório
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-dourado-claro via-dourado to-dourado-escuro p-7 shadow-[var(--shadow-gold)] sm:p-9">
              <ul className="divide-y divide-noite/15">
                {home.credibilidade.itens.map((item) => {
                  const Icon = icones[item.icone];
                  return (
                    <li key={item.titulo} className="flex gap-5 py-5 first:pt-0">
                      <Icon size={40} className="shrink-0 text-noite" />
                      <div>
                        <h3 className="text-xl text-noite">{item.titulo}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-noite/80">{item.texto}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="relative mt-7 overflow-hidden rounded-xl bg-noite p-7 text-offwhite">
                <Image src="/brand/logo-monogram-dourado.svg" alt="" width={140} height={140} className="pointer-events-none absolute -right-6 -top-6 opacity-10" />
                <p className="font-display text-3xl leading-tight sm:text-[2.1rem]">
                  Quase <span className="text-gold-gradient">30 anos</span> de advocacia contínua
                </p>
                <span aria-hidden="true" className="gold-rule mt-4" />
                <p className="mt-4 text-sm text-gelo/85">Escritório próprio e atuação ininterrupta desde 1997.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== NÚMEROS + ÁREAS (fundo escuro, cortes diagonais) ===== */}
      <section className="angle-both bg-noite-texture py-28 text-offwhite sm:py-36">
        <div className="container-site">
          <Reveal className="text-center">
            <span className="medallion mx-auto mb-7">
              <Image src="/brand/logo-monogram-noite.svg" alt="" width={26} height={26} />
            </span>
            <SectionHeader dark align="center" eyebrow="Compromisso" title="Nosso compromisso. A sua tranquilidade." />
          </Reveal>

          <StatBand
            className="mt-16"
            items={[
              { valor: "1997", label: "Advogando desde", icon: <IconCalendar size={30} /> },
              { valor: "30", label: "Quase três décadas de atuação", icon: <IconColumn size={30} /> },
              { valor: "04", label: "Frentes de atuação", icon: <IconBalance size={30} /> },
              { valor: "GO · DF", label: "Foco regional, atendimento nacional", icon: <IconGlobe size={30} /> },
            ]}
          />

          <div className="mt-24 flex flex-col gap-6 sm:mt-28 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader dark eyebrow={home.indice.eyebrow} title={home.indice.titulo} />
            <Link
              href="/areas-de-atuacao"
              className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-dourado-claro"
            >
              {home.indice.linkTodas}
              <IconArrowRight size={18} className="transition-transform motion-safe:group-hover:translate-x-1" />
            </Link>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-label="Áreas de atuação">
            {home.indice.itens.map((item, i) => (
              <Reveal as="li" key={item.numero} delay={i * 90}>
                <AreaCard
                  item={{
                    ...item,
                    image: areaImages[item.numero],
                    categoria: areaImages[item.numero].categoria,
                  }}
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== SÓCIOS ===== */}
      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <span className="medallion mb-8">
              <IconUsers size={26} />
            </span>
            <SectionHeader eyebrow={home.socios.eyebrow} title={home.socios.titulo} />
            <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-noite/80">{home.socios.texto}</p>
            <div className="mt-9">
              <Button href="/equipe" variant="outline" iconRight={<IconArrowRight size={18} />}>
                {home.socios.link}
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {equipe.socios.map((s, i) => (
              <Reveal key={s.nome} delay={i * 120}>
                <SocioCard variant="compacto" nome={s.nome} cargo={s.cargo} oab={s.oab} bio={s.bio} foto={s.foto} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMO TRABALHAMOS (3 passos) ===== */}
      <section className="border-y border-gelo/50 bg-white py-24 sm:py-32">
        <div className="container-site">
          <Reveal>
            <SectionHeader
              align="center"
              eyebrow="Como funciona"
              title="Do primeiro contato ao acompanhamento do caso"
              subtitle="Um caminho simples e transparente, para que você entenda cada etapa."
            />
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: <IconWhatsapp size={26} fill="currentColor" />, t: "Primeiro contato", d: "Você nos conta o que precisa por WhatsApp ou telefone. Ouvimos com atenção e sem pressa." },
              { icon: <IconShield size={26} />, t: "Análise do caso", d: "Estudamos a sua situação e explicamos, com clareza, o que a lei prevê e os caminhos possíveis." },
              { icon: <IconHandshake size={26} />, t: "Acompanhamento próximo", d: "Conduzimos a demanda com comunicação direta sobre cada etapa relevante." },
            ].map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 100} className="h-full">
                <IconCard as="div" icon={p.icon} title={p.t} text={p.d} index={String(i + 1).padStart(2, "0")} className="h-full" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeader eyebrow={home.localizacao.eyebrow} title="Aparecida de Goiânia, com atendimento em todo o Brasil" />
            <p className="mt-7 max-w-[50ch] text-lg leading-relaxed text-noite/80">{home.localizacao.texto}</p>
            <ul className="mt-8 grid gap-3 text-sm">
              <li className="flex items-center gap-3 rounded-lg border border-gelo/60 bg-white px-4 py-3">
                <IconMapPin size={18} className="text-dourado-texto" /> Ed. Atlanta Business Center, Sala 15, 2º andar
              </li>
              <li className="flex items-center gap-3 rounded-lg border border-gelo/60 bg-white px-4 py-3">
                <IconClock size={18} className="text-dourado-texto" /> {site.horario}
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapsDirectionsUrl} variant="primary" icon={<IconMapPin size={18} />}>
                {home.localizacao.comoChegar}
              </Button>
              <Button href="/contato" variant="outline">
                Contato
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="photo-frame rounded-xl">
            <MapEmbed className="aspect-[4/3] w-full lg:aspect-[16/11]" />
          </Reveal>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
