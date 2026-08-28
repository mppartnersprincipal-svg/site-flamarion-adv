import { whatsappHref } from "@/lib/site-config";
import { IconWhatsapp } from "./icons";

/** Botão flutuante de WhatsApp. Não renderiza enquanto o número não estiver em site-config.ts. */
export default function WhatsappFloat() {
  const href = whatsappHref();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 items-center gap-0 rounded-full bg-dourado pl-4 pr-4 text-noite shadow-[var(--shadow-gold)] transition-all hover:bg-dourado-claro motion-safe:animate-[float-in_400ms_ease-out]"
    >
      <IconWhatsapp size={26} fill="#0a1931" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:ml-2 group-hover:max-w-40">
        Falar no WhatsApp
      </span>
    </a>
  );
}
