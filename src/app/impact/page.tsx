import type { Metadata } from "next";
import { impactPillars } from "@/lib/content";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Impact & Transparency", description: "Spring of Life Trust impact information and transparency resources." };

export default function ImpactPage() {
  return <><PageHero eyebrow="Impact & transparency" title="Progress, shared with care." description="Our work is guided by a commitment to health, nutrition, community and hope." /><section className="page-body"><Container><div className="impact-pillars impact-pillars-page">{impactPillars.map((pillar) => <article className="impact-pillar" key={pillar.title}><h2>{pillar.title}</h2><p>{pillar.description}</p></article>)}</div><p className="verify-note">Our measurable impact will be shared here as verified data becomes available.</p><div className="page-copy"><h2>Reports &amp; transparency</h2><p>Information about reports and organizational transparency will be shared here.</p></div></Container></section></>;
}
