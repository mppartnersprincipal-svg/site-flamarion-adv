import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  level?: 1 | 2;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  level = 2,
  align = "left",
  dark = false,
  className = "",
}: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  const size =
    level === 1
      ? "text-4xl sm:text-5xl lg:text-[60px] lg:leading-[1.05]"
      : "text-3xl sm:text-[40px] sm:leading-[1.15]";
  const titleColor = dark ? "text-offwhite" : "text-marinho";
  const subColor = dark ? "text-gelo/90" : "text-noite/75";
  const center = align === "center";

  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <Eyebrow tone={dark ? "dourado" : "aco"} align={align} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <Heading className={`${size} ${titleColor}`}>{title}</Heading>
      <span aria-hidden="true" className={`gold-rule mt-5 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${subColor} max-w-[66ch] ${center ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
