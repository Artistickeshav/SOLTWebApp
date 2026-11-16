import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = { title: "Get Involved", description: "Volunteer, partner with or support Spring of Life Trust." };

export default function GetInvolvedPage() {
  return <><PageHero eyebrow="Get involved" title="A healthier future takes all of us." description="Bring your time, experience or support to Spring of Life Trust." /><section className="page-body"><Container><div className="page-cards"><article className="page-card"><h2>Volunteer</h2><p>Share your time and skills in support of community care.</p><ButtonLink href="/get-involved#volunteer">Volunteer with us</ButtonLink></article><article className="page-card"><h2>Partner with us</h2><p>Explore ways to work alongside Spring of Life Trust.</p><ButtonLink href="/get-involved#partner">Share partnership interest</ButtonLink></article><article className="page-card"><h2>Donate</h2><p>Your support can help Spring of Life Trust pursue its mission.</p><ButtonLink href="/get-involved#donate">Support our work</ButtonLink></article></div></Container></section></>;
}
