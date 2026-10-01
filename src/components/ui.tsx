import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, description, centered = false }: {
  eyebrow?: string; title: string; description?: string; centered?: boolean;
}) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "" }: {
  href: string; children: ReactNode; variant?: "primary" | "outline" | "text"; className?: string;
}) {
  return <Link className={`button button-${variant} ${className}`} href={href}>{children}<span aria-hidden="true">↗</span></Link>;
}
