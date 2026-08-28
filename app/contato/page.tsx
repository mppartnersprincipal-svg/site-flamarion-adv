import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactBlock from "@/components/ContactBlock";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import WhatsappButton from "@/components/WhatsappButton";
import { IconGlobe, IconMapPin, IconPhone } from "@/components/icons";
import { contato as c } from "@/content/contato";
import { mapsDirectionsUrl } from "@/lib/maps";
import { telHref } from "@/lib/site-config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: c.meta.title,
  description: c.meta.description,
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        intro={c.intro}
        image={{ src: "/fotos/aperto-de-mao.jpg" }}
        crumbs={[{ label: "Contato", href: "/contato" }]}
      >
        <WhatsappButton variant="gold" size="lg" />
        <Button
          href={telHref()}
          variant="outline"
          dark
          size="lg"
          icon={<IconPhone size={18} />}
          pendingTitle="Telefone pendente (lib/site-config.ts)"
        >
          Ligar para o escritório
        </Button>
      </PageHero>

      <section className="container-site py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <SectionHeader eyebrow="Canais" title="Escolha o canal mais confortável para você" />
            <ContactBlock endereco className="mt-10" />
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <div className="photo-frame rounded-xl">
              <MapEmbed className="aspect-[4/3] w-full lg:min-h-[440px]" />
            </div>
            <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-3 text-sm text-noite/80">
                <IconGlobe size={20} className="shrink-0 text-dourado-texto" />
                {c.nota}
              </p>
              <Button href={mapsDirectionsUrl} variant="primary" icon={<IconMapPin size={18} />} className="shrink-0">
                {c.comoChegar}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
