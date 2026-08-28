import Image from "next/image";
import Button from "./Button";
import WhatsappButton from "./WhatsappButton";
import Reveal from "./Reveal";
import { IconPhone } from "./icons";
import { telHref } from "@/lib/site-config";

type Props = {
  title?: string;
  text?: string;
  className?: string;
};

/** CTA de fim de página: foto escurecida, medalhão, título centralizado e dois botões. */
export default function CtaBlock({
  title = "Precisa de orientação jurídica?",
  text = "Converse com a nossa equipe. Avaliamos o seu caso e explicamos, com clareza, os próximos passos.",
  className = "",
}: Props) {
  return (
    <section aria-labelledby="cta-title" className={`relative isolate overflow-hidden bg-noite text-offwhite ${className}`}>
      <Image
        src="/fotos/biblioteca.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25 saturate-[0.5]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-noite via-noite/80 to-noite" />
      <div className="container-site relative py-20 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="medallion mx-auto mb-7">
            <Image src="/brand/logo-monogram-noite.svg" alt="" width={26} height={26} />
          </span>
          <h2 id="cta-title" className="text-3xl text-offwhite sm:text-[44px] sm:leading-[1.1]">
            {title}
          </h2>
          <span aria-hidden="true" className="gold-rule mx-auto mt-5" />
          <p className="mt-6 text-lg leading-relaxed text-gelo/90">{text}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
