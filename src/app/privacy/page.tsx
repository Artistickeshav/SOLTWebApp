import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/page-shell";
import { Container } from "@/components/ui";
export const metadata: Metadata = { title: "Privacy" };
export default function PrivacyPage() { return <><PageHero eyebrow="Privacy" title="Your privacy matters." description="Privacy information for Spring of Life Trust website visitors." /><section className="page-body"><Container><div className="page-copy"><Placeholder>[Add a legally reviewed privacy policy covering data collected, purpose, retention, contact and applicable law before collecting personal information.]</Placeholder></div></Container></section></>; }
