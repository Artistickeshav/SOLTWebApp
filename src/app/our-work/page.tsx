import type { Metadata } from "next";
import Image from "next/image";
import { focusAreas } from "@/lib/content";
import { PageHero, Placeholder } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Our Work", description: "Explore Spring of Life Trust's focus on women's health, nutrition and community care." };

export default function WorkPage() {
  return <><PageHero eyebrow="Our work" title="Three connected ways to care." description="Our focus areas reflect the ways health and wellbeing shape everyday life. Specific programs will be published as details are verified." /><section className="page-body"><Container><div className="page-cards">{focusAreas.map((area) => <article className="page-card" key={area.number}><div className="focus-image" style={{ height: 210 }}><Image src={area.image} alt={area.alt} fill sizes="(max-width: 620px) 100vw, 33vw" /></div><p className="story-category">FOCUS AREA {area.number}</p><h2>{area.title}</h2><p>{area.description}</p><Placeholder>[Add verified activities, locations and program details.]</Placeholder></article>)}</div></Container></section></>;
}
