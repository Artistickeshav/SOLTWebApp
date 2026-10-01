import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Get Involved", description: "Volunteer, partner with or support Spring of Life Trust." };

export default function GetInvolvedPage() {
  return <><PageHero eyebrow="Get involved" title="A healthier future takes all of us." description="Bring your time, experience or support to Spring of Life Trust. We’ll share confirmed next steps as they become available." /><section className="page-body"><Container><div className="page-cards"><article className="page-card" id="volunteer"><h2>Volunteer</h2><p>Share your time and skills in support of community care.</p><Placeholder>[VOLUNTEER FORM URL TO BE PROVIDED]</Placeholder></article><article className="page-card" id="partner"><h2>Partner with us</h2><p>Explore ways to work alongside Spring of Life Trust.</p><Placeholder>[Add verified partnership contact and process.]</Placeholder></article><article className="page-card" id="donate"><h2>Donate</h2><p>Your support can help Spring of Life Trust pursue its mission.</p><Placeholder>[DONATION PROCESS TO BE PROVIDED]<br />[DONATION LINK TO BE PROVIDED]</Placeholder></article></div></Container></section></>;
}
