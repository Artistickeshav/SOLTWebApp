import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/page-shell";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn about Spring of Life Trust, its mission and approach to healthcare, women's health, nutrition and community care." };

export default function AboutPage() {
  return <><PageHero eyebrow="About Spring of Life Trust" title="Care shaped around people." description="A non-profit and non-political organization focused on healthcare, hope and healthier communities." /><section className="page-body"><Container><div className="page-copy"><Eyebrow>Our story</Eyebrow><Placeholder>[Add SOLT’s verified founding story, the reason the organization began and the communities it serves.]</Placeholder><h2>Our mission</h2><Placeholder>[Add the approved mission statement.]</Placeholder><h2>Our vision</h2><Placeholder>[Add the approved vision statement.]</Placeholder><h2>Our approach</h2><p>We center women’s health, nutrition and community care. The details of our programs and approach will be shared here as they are confirmed by Spring of Life Trust.</p><h2>Our team</h2><Placeholder>[Add verified team member names, roles and approved biographies.]</Placeholder></div></Container></section></>;
}
