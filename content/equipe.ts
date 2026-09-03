import { site } from "@/lib/site-config";

/**
 * Copy de /equipe — COPY_Flamarion_Advocacia.md, seção 6. Texto final, não alterar.
 * RETRATOS: arquivos em public/fotos/ (proporção 4:5, 1400x1750).
 * Enquanto `foto` for undefined, o SocioCard mostra o placeholder do Design System.
 */
export const equipe = {
  meta: {
    title: "Equipe",
    description:
      "Conheça os advogados da Flamarion Advocacia. Dr. Márcio Flamarion (OAB/GO 16.939) e Dra. Letícia Alves, com atuação empresarial, consumidor e tributário.",
  },
  eyebrow: "Equipe",
  h1: "Quem conduz o seu caso",
  intro:
    "O escritório reúne a experiência de quase três décadas de atuação e a energia de uma nova geração, com o mesmo compromisso de sempre: técnica, ética e proximidade.",
  socios: [
    {
      nome: "Dr. Márcio Flamarion",
      cargo: "Advogado",
      oab: site.oabMarcio,
      bio: "Formado em Direito desde 1996 e pós-graduado em Direito Civil e Processo Civil, o Dr. Márcio advoga de forma ininterrupta há quase 30 anos, sempre com escritório próprio. Ao longo da carreira, atuou nas áreas trabalhista, cível, de família e sucessões e criminal, e hoje concentra sua atuação na área empresarial — com destaque para a defesa em crimes contra a ordem tributária. É referência de experiência e continuidade dentro do escritório.",
      foto: { src: "/fotos/retrato-marcio.jpg", alt: "Retrato do Dr. Márcio Flamarion, advogado da Flamarion Advocacia" },
    },
    {
      nome: "Dra. Letícia Alves",
      cargo: "Advogada",
      oab: site.oabLeticia, // vazio → "OAB/GO [a confirmar]"
      bio: "Graduada em Direito em 2026, a Dra. Letícia integra o escritório com foco em direito do consumidor — especialmente direito aéreo — e em direito tributário na esfera cível. Está iniciando pós-graduação em Direito Tributário e Processo Tributário, aprofundando a área que pretende desenvolver dentro da Flamarion Advocacia. Traz um olhar atual e uma atuação atenta e didática para o dia a dia dos clientes.",
      foto: { src: "/fotos/retrato-leticia.jpg", alt: "Retrato da Dra. Letícia Alves, advogada da Flamarion Advocacia" },
    },
  ],
};
