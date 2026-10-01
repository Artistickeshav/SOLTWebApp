import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/page-shell";
import { Container } from "@/components/ui";
export const metadata: Metadata = { title: "Terms" };
export default function TermsPage() { return <><PageHero eyebrow="Terms" title="Website terms." description="Terms for using Spring of Life Trust’s website." /><section className="page-body"><Container><div className="page-copy"><Placeholder>[Add terms reviewed and approved by Spring of Life Trust before launch.]</Placeholder></div></Container></section></>; }
