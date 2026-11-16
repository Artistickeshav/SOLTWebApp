import type { Metadata } from "next";
import Image from "next/image";
import { annualInitiatives, focusAreas } from "@/lib/content";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore Spring of Life Trust's focus areas and planned community initiatives.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Three connected ways to care."
        description="Our focus areas reflect the ways health and wellbeing shape everyday life."
      />
      <section className="page-body">
        <Container>
          <div className="page-cards">
            {focusAreas.map((area) => (
              <article className="page-card" key={area.number}>
                <div className="focus-image" style={{ height: 210 }}>
                  <Image src={area.image} alt={area.alt} fill sizes="(max-width: 620px) 100vw, 33vw" />
                </div>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
              </article>
            ))}
          </div>

          <section className="work-initiatives" aria-labelledby="initiatives-title">
            <div className="work-initiatives-heading">
              <p className="eyebrow">Looking ahead</p>
              <h2 id="initiatives-title">Planned community initiatives</h2>
              <p>These priorities bring mobile care, school wellbeing and resource reuse into community-focused work.</p>
            </div>
            <div className="initiative-grid">
              {annualInitiatives.map((initiative) => (
                <article className="initiative-card" key={initiative.number}>
                  <span className="initiative-number">{initiative.number}</span>
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                  <p className="initiative-target">{initiative.target}</p>
                </article>
              ))}
            </div>
            <p className="initiative-disclaimer">Reach and capacity figures are planning estimates, not completed results.</p>
          </section>
        </Container>
      </section>
    </>
  );
}
