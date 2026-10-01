import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";
import { healthyLifestylePlanPdfUrl } from "@/lib/content";

export const metadata: Metadata = { title: "Health Resources", description: "Health, nutrition and healthy living resources from Spring of Life Trust." };

export default function ResourcesPage() {
  return <><PageHero eyebrow="Resources" title="Useful knowledge for everyday wellbeing." description="Resources from Spring of Life Trust, including guidance on nutrition and healthy living." /><section className="page-body"><Container><div className="page-cards"><article className="page-card" id="30-day-plan"><p className="story-category">NUTRITION &amp; HEALTHY LIVING</p><h2>30-Day Healthy Lifestyle Eating Plan</h2><p>Practical guidance for healthier everyday choices.</p><p>A practical 30-day guide designed to support healthier everyday eating habits.</p>{healthyLifestylePlanPdfUrl ? <a className="button button-primary" href={healthyLifestylePlanPdfUrl}>View the 30-Day Plan <span aria-hidden="true">↗</span></a> : <p className="resource-availability">Plan access details will be available here soon.</p>}</article><article className="page-card"><p className="story-category">HEALTH RESOURCES</p><h2>Guides &amp; articles</h2><p>Information for women, families and community care.</p></article><article className="page-card"><p className="story-category">UPDATES</p><h2>Articles &amp; updates</h2><p>Notes and announcements from Spring of Life Trust.</p></article></div></Container></section></>;
}
