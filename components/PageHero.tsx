import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import Eyebrow from "./Eyebrow";

type Crumb = { label: string; href: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  image: { src: string; alt?: string };
  crumbs: Crumb[];
  children?: React.ReactNode;
};

/** Cabeçalho de página interna: foto escurecida, breadcrumb, H1 e intro. */
export default function PageHero({ eyebrow, title, intro, image, crumbs, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-noite text-offwhite">
      <Image
        src={image.src}
        alt={image.alt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35 saturate-[0.6]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-noite via-noite/85 to-noite/40" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noite to-transparent" />
      <div className="container-site relative pt-8 pb-20 sm:pt-10 sm:pb-24 lg:pb-28">
        <Breadcrumb items={crumbs} dark />
        <div className="hero-in mt-10 max-w-3xl sm:mt-14">
          <Eyebrow tone="dourado" className="mb-5">
            {eyebrow}
          </Eyebrow>
          <h1 className="text-4xl text-offwhite sm:text-5xl lg:text-[60px] lg:leading-[1.05]">{title}</h1>
          {intro && <p className="mt-7 max-w-[64ch] text-lg leading-relaxed text-gelo/90 sm:text-xl">{intro}</p>}
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
