import type { SVGProps } from "react";

/**
 * Ícones do Design System (Design System/assets/icons) como componentes.
 * UI: stroke 1.5 / viewBox 24. Marca: stroke 1.4 / viewBox 48.
 */
type P = SVGProps<SVGSVGElement> & { size?: number };

function base(size: number | undefined, vb: number, stroke: number, rest: P) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${vb} ${vb}`,
    width: size ?? vb,
    height: size ?? vb,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export const IconPhone = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconMail = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-10 7L2 7" />
  </svg>
);

export const IconClock = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const IconMapPin = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconArrowRight = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconChevronRight = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

/** WhatsApp — único ícone com cor própria (verde do WhatsApp), PRD 9. */
export const IconWhatsapp = ({ size = 18, ...r }: P) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="#25D366"
    aria-hidden="true"
    {...r}
  >
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3C4.1 15 3.7 13.5 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.2-8.3 8.2z" />
  </svg>
);

/* Ícones de marca (48px, stroke 1.4) */
export const IconBalance = ({ size, ...r }: P) => (
  <svg {...base(size, 48, 1.4, r)}>
    <path d="M24 9v31" />
    <path d="M16 40h16" />
    <path d="M8 14h32" />
    <circle cx="24" cy="7" r="2" />
    <path d="M8 14l-4.5 10M8 14l4.5 10" />
    <path d="M2.5 24a5.5 4 0 0 0 11 0" />
    <path d="M40 14l-4.5 10M40 14l4.5 10" />
    <path d="M34.5 24a5.5 4 0 0 0 11 0" />
  </svg>
);

export const IconShield = ({ size, ...r }: P) => (
  <svg {...base(size, 48, 1.4, r)}>
    <path d="M24 5l15 5.5V23c0 9.5-6.5 16-15 20-8.5-4-15-10.5-15-20V10.5z" />
    <rect x="21" y="21" width="6" height="6" transform="rotate(45 24 24)" />
  </svg>
);

export const IconHandshake = ({ size, ...r }: P) => (
  <svg {...base(size, 48, 1.4, r)}>
    <path d="M4 19h7l9 9c1.5 1.5 4 1.5 5 0" />
    <path d="M44 19h-7l-8 8" />
    <path d="M20 15h9" />
    <path d="M11 19l9-4" />
    <path d="M22 30l-2.5 2.5M26.5 27.5L24 30" />
  </svg>
);

export const IconColumn = ({ size, ...r }: P) => (
  <svg {...base(size, 48, 1.4, r)}>
    <path d="M13 11l11-5 11 5" />
    <path d="M12 15h24" />
    <path d="M16 19v16M24 19v16M32 19v16" />
    <path d="M14 39h20" />
    <path d="M11 43h26" />
  </svg>
);

/* Ícones adicionais (UI, viewBox 24, stroke 1.5) */
export const IconPlane = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

export const IconBriefcase = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M2 13h20" />
  </svg>
);

export const IconUsers = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconFileText = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </svg>
);

export const IconCheck = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const IconCalendar = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const IconGlobe = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const IconGavel = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="m14 13-7.5 7.5a2.1 2.1 0 1 1-3-3L11 10" />
    <path d="m16 16 6-6" />
    <path d="m8 8 6-6" />
    <path d="m9 7 8 8" />
    <path d="m21 11-8-8" />
  </svg>
);

export const IconMessage = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconQuote = ({ size, ...r }: P) => (
  <svg {...base(size, 24, 1.5, r)}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .01-1 1v3" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .01-1 1v3" />
  </svg>
);
