import type { Metadata } from "next";
import AreaIndex from "@/components/AreaIndex";
import Button from "@/components/Button";
import ContactBlock from "@/components/ContactBlock";
import CtaBlock from "@/components/CtaBlock";
import Eyebrow from "@/components/Eyebrow";
import FaqAccordion from "@/components/FaqAccordion";
import Hairline from "@/components/Hairline";
import SectionHeader from "@/components/SectionHeader";
import SocioCard from "@/components/SocioCard";
import WhatsappButton from "@/components/WhatsappButton";
import { IconBalance, IconHandshake, IconShield } from "@/components/icons";

export const metadata: Metadata = {
  title: "Componentes (dev)",
  robots: { index: false, follow: false },
};

const areas = [
  {
    numero: "01",
    titulo: "Direito Empresarial e Penal Econômico",
    descricao:
      "Assessoria a empresas e defesa técnica em crimes contra a ordem tributária, além do contencioso trabalhista e cível.",
    href: "/areas/empresarial",
  },
  {
    numero: "02",
    titulo: "Direito do Consumidor e Aéreo",
    descricao:
      "Orientação e atuação em atraso e cancelamento de voo, overbooking, extravio de bagagem e perda de conexão.",
    href: "/areas/consumidor-aereo",
  },
  {
    numero: "03",
    titulo: "Direito Cível",
    descricao: "Família e sucessões, restituição de valores e causas cíveis em geral.",
    href: "/areas-de-atuacao",
    linkLabel: "Ver áreas de atuação",
  },
  {
    numero: "04",
    titulo: "Direito Trabalhista",
    descricao: "Propositura de ações trabalhistas e acompanhamento do processo.",
  },
];

const faq = [
  {
    pergunta: "Como funciona o primeiro contato?",
    resposta:
      "O atendimento inicial é feito por WhatsApp ou telefone. Você nos conta o que precisa, entendemos a sua situação e explicamos, de forma clara, os caminhos possíveis e os próximos passos.",
  },
  {
    pergunta: "O escritório atende clientes de fora de Goiás?",
    resposta: "Sim. Atuamos em casos de todo o Brasil, com foco principal em Goiás e no Distrito Federal.",
  },
  {
    pergunta: "Qual o horário de atendimento?",
    resposta: "Segunda a sexta, das 8h às 12h e das 13h30 às 17h30.",
  },
];

function Demo({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="container-site py-16">
      <p className="mb-8 font-mono text-xs text-aco-texto">&lt;{title} /&gt;</p>
      {children}
    </section>
  );
}

export default function ComponentesPage() {
  return (
    <>
      <section className="container-site pt-20 pb-8">
        <SectionHeader
          level={1}
          eyebrow="Página de teste — não indexada"
          title="Componentes reutilizáveis"
          subtitle="Tokens da paleta, Fraunces + Libre Franklin, dourado só em fios e detalhes."
        />
      </section>

      <Demo id="eyebrow" title="Eyebrow + Hairline">
        <div className="space-y-6">
          <Eyebrow>Área 01 — Direito Empresarial</Eyebrow>
          <Hairline />
          <div className="bg-noite p-6">
            <Eyebrow tone="dourado">Área 02 — Direito do Consumidor e Aéreo</Eyebrow>
          </div>
          <Hairline tone="gelo" />
        </div>
      </Demo>

      <Demo id="section-header" title="SectionHeader">
        <SectionHeader
          eyebrow="Áreas de atuação"
          title="No que podemos ajudar"
          subtitle="Atuamos tanto na assessoria preventiva quanto no contencioso, para pessoas físicas e empresas."
        />
        <div className="mt-10 bg-noite p-10">
          <SectionHeader
            dark
            align="center"
            eyebrow="Quem conduz o escritório"
            title="Dois olhares sobre o mesmo compromisso"
          />
        </div>
      </Demo>

      <Demo id="buttons" title="Button / WhatsappButton">
        <div className="flex flex-wrap gap-3">
          <Button href="/areas-de-atuacao">Conhecer as áreas de atuação</Button>
          <Button href="/contato" variant="outline">
            Fale com o escritório
          </Button>
          <WhatsappButton />
          <WhatsappButton variant="outline" />
        </div>
        <div className="mt-6 flex flex-wrap gap-3 bg-noite p-6">
          <Button href="/contato" dark>
            Primário sobre escuro
          </Button>
          <Button href="/contato" dark variant="outline">
            Outline sobre escuro
          </Button>
          <WhatsappButton dark />
        </div>
        <p className="mt-4 text-sm text-aco-texto">
          Os botões de WhatsApp/telefone aparecem desabilitados porque os dados em
          site-config.ts estão vazios (PRD, seção 10).
        </p>
      </Demo>

      <Demo id="area-index" title="AreaIndex — “O Índice” (elemento-assinatura)">
        <SectionHeader eyebrow="Áreas de atuação" title="No que podemos ajudar" className="mb-10" />
        <AreaIndex items={areas} variant="resumido" />
        <p className="mt-12 mb-6 font-mono text-xs text-aco-texto">variant=&quot;completo&quot;</p>
        <AreaIndex items={areas.slice(0, 2)} variant="completo" />
      </Demo>

      <Demo id="icons" title="Ícones do Design System (linha fina)">
        <div className="flex gap-10 text-marinho">
          <IconBalance />
          <IconShield />
          <IconHandshake />
        </div>
      </Demo>

      <Demo id="socio-card" title="SocioCard">
        <div className="space-y-16">
          <SocioCard
            nome="Dr. Márcio Flamarion"
            cargo="Advogado"
            oab="OAB/GO 16.939"
            bio="Formado em Direito desde 1997 e pós-graduado em Direito Civil e Processo Civil, o Dr. Márcio advoga de forma ininterrupta há quase 30 anos, sempre com escritório próprio."
          />
          <SocioCard
            nome="Dra. Letícia Alves"
            cargo="Advogada"
            oab=""
            bio="A Dra. Letícia integra o escritório com foco em direito do consumidor — especialmente direito aéreo — e em direito tributário na esfera cível."
          />
        </div>
      </Demo>

      <Demo id="faq" title="FaqAccordion">
        <FaqAccordion items={faq} />
      </Demo>

      <Demo id="contact-block" title="ContactBlock">
        <ContactBlock endereco />
      </Demo>

      <p className="container-site mb-8 font-mono text-xs text-aco-texto">&lt;CtaBlock /&gt;</p>
      <CtaBlock />
      <CtaBlock
        title="Passou por algum desses problemas?"
        text="Conte o que aconteceu para a nossa equipe. Vamos entender a sua situação e explicar os próximos passos."
      />
    </>
  );
}
