import Link from "next/link";
import { whatsappHref } from "@/lib/site-config";
import { IconWhatsapp } from "./icons";

/**
 * Botão flutuante de WhatsApp (canto inferior direito), verde oficial com anel pulsante.
 * Enquanto o número não estiver em site-config.ts, leva para /contato.
 */
export default function WhatsappFloat() {
  const href = whatsappHref("Olá! Gostaria de uma orientação jurídica.");
  const cls =
    "group fixed bottom-5 right-5 z-40 inline-flex h-14 items-center rounded-full bg-[#25D366] px-4 text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] transition-all hover:bg-[#1ebe5b] motion-safe:animate-[float-in_400ms_ease-out] sm:bottom-6 sm:right-6";
  const inner = (
    <>
      <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 motion-safe:animate-[wa-pulse_2.2s_ease-out_infinite]" />
      <IconWhatsapp size={28} fill="#ffffff" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-44">
        Falar no WhatsApp
      </span>
    </>
  );

  if (!href) {
    return (
      <Link href="/contato" aria-label="Falar no WhatsApp" className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className={cls}>
      {inner}
    </a>
  );
}
