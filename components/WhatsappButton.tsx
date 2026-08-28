import Button from "./Button";
import { IconWhatsapp } from "./icons";
import { whatsappHref } from "@/lib/site-config";

type Props = {
  label?: string;
  variant?: "primary" | "gold" | "outline";
  dark?: boolean;
  size?: "md" | "lg";
  className?: string;
};

/** Botão de WhatsApp da marca. Sem número definido, fica desabilitado com aviso interno (PRD 10). */
export default function WhatsappButton({
  label = "Falar no WhatsApp",
  variant = "primary",
  dark = false,
  size = "md",
  className = "",
}: Props) {
  return (
    <Button
      href={whatsappHref()}
      variant={variant}
      dark={dark}
      size={size}
      icon={<IconWhatsapp fill={variant === "gold" ? "#0a1931" : "#25D366"} />}
      pendingTitle="Número de WhatsApp pendente (lib/site-config.ts)"
      className={className}
    >
      {label}
    </Button>
  );
}
