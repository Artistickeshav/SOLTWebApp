import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-hero"><Container><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p></Container></section>;
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <div className="placeholder-box">{children}</div>;
}
