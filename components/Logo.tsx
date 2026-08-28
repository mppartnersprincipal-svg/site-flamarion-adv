import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site-config";

type Props = { variant?: "light" | "dark"; className?: string };

/** Monograma "FA" + wordmark. `dark` = sobre fundo escuro. */
export default function Logo({ variant = "light", className = "" }: Props) {
  const mono =
    variant === "dark"
      ? "/brand/logo-monogram-dourado.svg"
      : "/brand/logo-monogram-marinho.svg";
  const text = variant === "dark" ? "text-offwhite" : "text-marinho";
  return (
    <Link
      href="/"
      aria-label={`${site.nome} — página inicial`}
      className={`inline-flex min-h-11 items-center gap-3 ${className}`}
    >
      <Image src={mono} alt="" width={28} height={28} priority />
      <span
        className={`font-display text-lg font-semibold tracking-[0.18em] uppercase ${text}`}
      >
        Flamarion
      </span>
    </Link>
  );
}
