import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = { title: "Stories & Updates", description: "Stories and updates from Spring of Life Trust." };

export default function StoriesPage() {
  return <><PageHero eyebrow="Stories & updates" title="Stories from our community." description="A place for updates and stories connected to Spring of Life Trust’s work." /><section className="page-body"><Container><div className="page-copy"><p>New stories and updates will appear here.</p><ButtonLink href="/resources" variant="text">Explore health resources</ButtonLink></div></Container></section></>;
}
