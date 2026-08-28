"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site-config";
import Logo from "./Logo";
import WhatsappButton from "./WhatsappButton";
import { IconClock, IconMapPin } from "./icons";

export default function Header() {
  const pathname = usePathname();
  return <HeaderInner key={pathname} pathname={pathname} />;
}

function HeaderInner({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 text-offwhite">
      {/* Barra superior — horário e cidade (referência Lyonexy) */}
      <div
        className={`hidden border-b border-white/10 bg-noite text-xs text-gelo/80 transition-[max-height,opacity] duration-300 md:block ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="container-site flex h-9 items-center justify-between">
          <span className="inline-flex items-center gap-2">
            <IconClock size={14} className="text-dourado" />
            {site.horario}
          </span>
          <span className="inline-flex items-center gap-2">
            <IconMapPin size={14} className="text-dourado" />
            Aparecida de Goiânia/GO · Atendimento em todo o Brasil
          </span>
        </div>
      </div>

      <div
        className={`border-b border-white/10 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-noite/95 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.5)]" : "bg-noite/85"
        }`}
      >
        <div className="container-site flex h-18 items-center justify-between gap-6">
          <Logo variant="dark" />

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-block py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-dourado after:transition-transform after:duration-300 hover:text-dourado-claro hover:after:scale-x-100 ${
                        active ? "text-dourado-claro after:scale-x-100" : "text-offwhite/90 after:scale-x-0"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:block">
            <WhatsappButton variant="gold" />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-offwhite md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="menu-mobile" aria-label="Principal (celular)" className="border-t border-white/10 bg-noite md:hidden">
            <ul className="container-site flex flex-col py-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block border-b border-white/5 py-3.5 text-base font-medium text-offwhite">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <WhatsappButton variant="gold" className="w-full" />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
