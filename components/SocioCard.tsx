import Image from "next/image";
import Eyebrow from "./Eyebrow";

type Props = {
  nome: string;
  cargo: string;
  oab: string;
  bio: string;
  foto?: { src: string; alt: string };
  /** Compacto (Home) ou completo (Equipe). */
  variant?: "compacto" | "completo";
  className?: string;
};

function Placeholder({ nome }: { nome: string }) {
  const iniciais = nome
    .replace(/^Dra?\.\s*/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-marinho via-noite to-noite">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#4a7fa7,transparent_55%)]" />
      <span className="font-display text-6xl text-dourado/70">{iniciais}</span>
    </div>
  );
}

/** Card de sócio — retrato (ou placeholder), OAB, bio. */
export default function SocioCard({ nome, cargo, oab, bio, foto, variant = "completo", className = "" }: Props) {
  if (variant === "compacto") {
    return (
      <article className={`card card-hover group overflow-hidden ${className}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-noite">
          {foto ? (
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              /* Retratos são 4:5; em caixa 4:3 o object-position mantém o rosto no terço superior. */
              className="object-cover object-[center_15%] transition-transform duration-700 motion-safe:group-hover:scale-105"
            />
          ) : (
            <Placeholder nome={nome} />
          )}
          <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-dourado" />
        </div>
        <div className="p-7">
          <Eyebrow rule={false} className="text-dourado-texto">
            {cargo} — {oab || "OAB/GO [a confirmar]"}
          </Eyebrow>
          <h3 className="mt-2 text-2xl text-marinho">{nome}</h3>
          <p className="mt-3 line-clamp-4 leading-relaxed text-noite/75">{bio}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`card overflow-hidden lg:grid lg:grid-cols-[22rem_1fr] ${className}`}>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-noite lg:aspect-auto lg:min-h-[28rem]">
        {foto ? (
          <Image src={foto.src} alt={foto.alt} fill sizes="(min-width: 1024px) 22rem, 100vw" className="object-cover" />
        ) : (
          <Placeholder nome={nome} />
        )}
        <span aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1 bg-dourado lg:block" />
      </div>
      <div className="p-8 sm:p-10 lg:p-12">
        <Eyebrow>{cargo} — {oab || "OAB/GO [a confirmar]"}</Eyebrow>
        <h2 className="mt-3 text-3xl text-marinho sm:text-4xl">{nome}</h2>
        <span aria-hidden="true" className="gold-rule my-6" />
        <p className="max-w-[62ch] text-lg leading-relaxed text-noite/80">{bio}</p>
      </div>
    </article>
  );
}
