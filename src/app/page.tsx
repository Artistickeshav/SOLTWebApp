import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { contentCategories, focusAreas, healthyLifestylePlanPdfUrl, impactPillars, instagramUrl } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image"><Image src="/images/community-care.jpg" alt="Illustrative image of people together in a community setting" fill priority sizes="100vw" /></div>
        <Container className="hero-content">
          <Eyebrow light>Spring of Life Trust · Non-profit &amp; non-political</Eyebrow>
          <h1 id="hero-title">Improving lives through <em>healthcare &amp; hope.</em></h1>
          <p className="hero-lede">Women’s Health <span aria-hidden="true">·</span> Nutrition <span aria-hidden="true">·</span> Community Care</p>
          <div className="hero-actions"><ButtonLink href="/our-work">Explore our work</ButtonLink><ButtonLink href="/get-involved" variant="outline">Get involved</ButtonLink></div>
        </Container>
        <Container className="hero-bottom"><span>Care begins with listening</span><span>Scroll to explore <ArrowDown size={13} aria-hidden="true" /></span></Container>
      </section>

      <section className="intro"><Container className="intro-grid">
        <div><Eyebrow>A little about us</Eyebrow><h2 className="section-heading" style={{ marginBottom: 0 }}><span style={{ display: "block", color: "var(--blue-deep)", font: "400 clamp(37px, 4.5vw, 56px)/1.1 var(--font-serif), Georgia, serif", letterSpacing: "-.04em" }}>Health is where hope takes root.</span></h2></div>
        <div className="intro-aside"><p>Spring of Life Trust is a non-profit and non-political organization working to improve lives through healthcare, nutrition and community care. We believe better health begins with awareness, access to the right information and compassionate support.</p><ButtonLink href="/about" variant="text">Meet Spring of Life Trust</ButtonLink></div>
      </Container></section>

      <section className="focus"><Container>
        <SectionHeading eyebrow="Where we focus" title="Care that meets people where they are." description="Our work is shaped around three connected parts of everyday wellbeing." />
        <div className="focus-grid">{focusAreas.map((area) => <article className="focus-card" key={area.number}>
          <div className="focus-image"><Image src={area.image} alt={area.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 33vw, 380px" /></div>
          <div className="focus-meta"><span>{area.number} / Focus area</span><ArrowRight size={15} aria-hidden="true" /></div>
          <h3>{area.title}</h3><p>{area.description}</p><ButtonLink href="/our-work" variant="text">Explore this focus</ButtonLink>
        </article>)}</div>
      </Container></section>

      <section className="programs"><Container>
        <div className="programs-heading"><SectionHeading eyebrow="Our work" title="Good health grows through connection." description="Our work brings together women’s health, nutrition and community care, with a focus on creating awareness, encouraging healthier choices and supporting everyday wellbeing." /></div>
        <div className="program-list">
          {focusAreas.map((area) => <article className="program-row" key={area.number}><span className="program-index">{area.number}</span><h3>{area.title}</h3><p>{area.workDescription}</p><span className="program-arrow" aria-hidden="true">↗</span></article>)}
        </div>
        <div className="program-foot"><ButtonLink href="/our-work" variant="outline">Explore our work <ArrowRight size={14} /></ButtonLink></div>
      </Container></section>

      <section className="impact"><Container className="impact-layout">
        <div className="impact-copy"><Eyebrow>Impact, with care</Eyebrow><h2 className="section-heading" style={{ marginBottom: 0 }}><span style={{ display: "block", color: "var(--blue-deep)", font: "400 clamp(37px, 4.5vw, 56px)/1.1 var(--font-serif), Georgia, serif", letterSpacing: "-.04em" }}>A commitment measured in care.</span></h2><ButtonLink href="/impact" variant="text">Our approach to impact</ButtonLink></div>
        <div><div className="impact-pillars">{impactPillars.map((pillar) => <article className="impact-pillar" key={pillar.title}><h3>{pillar.title}</h3><p>{pillar.description}</p></article>)}</div><p className="verify-note">Our measurable impact will be shared here as verified data becomes available.</p></div>
      </Container></section>

      <section className="story-feature"><Container className="story-feature-grid">
        <div className="feature-photo"><Image src="/images/care-conversation.jpg" alt="Illustrative image of a healthcare professional using a phone" fill sizes="(max-width: 620px) 100vw, 50vw" /></div>
        <div className="story-copy"><Eyebrow>Healthcare &amp; hope in action</Eyebrow><h2>Care begins with listening.</h2><p>We believe meaningful change starts by understanding people, their needs and the communities around them. Through healthcare, nutrition and community care, Spring of Life Trust works toward healthier lives and a stronger sense of hope.</p><ButtonLink href="/about" variant="text">Discover our approach</ButtonLink></div>
      </Container></section>

      <section className="resource-band"><Container className="resource-card">
        <div className="resource-visual"><Image src={focusAreas[1].image} alt="Illustrative image of fresh foods arranged for a meal" fill sizes="(max-width: 620px) 100vw, 50vw" /></div>
        <div><Eyebrow>Healthy living</Eyebrow><h2>30-Day Healthy Lifestyle Eating Plan</h2><p>Practical guidance for healthier everyday choices.</p><p>A practical 30-day guide designed to support healthier everyday eating habits.</p><ButtonLink href={healthyLifestylePlanPdfUrl || "/resources#30-day-plan"}>View the 30-Day Plan</ButtonLink></div>
      </Container></section>

      <section className="stories"><Container>
        <div className="stories-top"><SectionHeading eyebrow="Explore our resources" title="Health, nutrition and community." description="Explore resources and information around the areas at the heart of Spring of Life Trust." /><ButtonLink href="/resources" variant="text">Explore resources</ButtonLink></div>
        <div className="story-grid">{contentCategories.map((category) => <article className="story-card" key={category.title}><div className="story-image"><Image src={category.image} alt={category.alt} fill sizes="(max-width: 620px) 100vw, 33vw" /></div><p className="story-category">Resources</p><h3>{category.title}</h3><p>{category.description}</p></article>)}</div>
      </Container></section>

      <section className="involved"><Container className="involved-layout"><div><Eyebrow light>There’s a place for you here</Eyebrow><h2>Care grows when we grow it together.</h2></div><div className="involved-options"><ButtonLink href="/get-involved#volunteer" variant="outline">Volunteer</ButtonLink><ButtonLink href="/get-involved#partner" variant="outline">Partner with us</ButtonLink><ButtonLink href="/get-involved#donate" variant="outline">Donate</ButtonLink></div></Container></section>

      <section className="social"><Container><div className="social-header"><div><Eyebrow>Stay connected</Eyebrow><h2>Life, in the everyday.</h2></div><a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">@springoflifetrust <span aria-hidden="true">↗</span></a></div><div className="social-grid" aria-label="Illustrative community and wellbeing imagery"><div className="social-tile"><Image src={focusAreas[0].image} alt="Illustrative stock image related to women’s health" fill sizes="(max-width: 620px) 50vw, 25vw" /></div><div className="social-tile"><Image src={focusAreas[1].image} alt="Illustrative stock image of fresh foods" fill sizes="(max-width: 620px) 50vw, 25vw" /></div><div className="social-tile"><Image src={focusAreas[2].image} alt="Illustrative stock image of a group spending time together" fill sizes="(max-width: 620px) 50vw, 25vw" /></div><div className="social-tile"><Image src="/images/community-gathering.jpg" alt="Illustrative stock image of a community gathering" fill sizes="(max-width: 620px) 50vw, 25vw" /></div></div><p className="social-placeholder">Illustrative imagery; these are not photographs of Spring of Life Trust activities.</p></Container></section>

      <section className="final-cta"><Container><Eyebrow light>A healthier future, together</Eyebrow><h2>Together, we can create healthier communities.</h2><p>Bring your time, ideas or support to Spring of Life Trust.</p><ButtonLink href="/get-involved">Get involved</ButtonLink></Container></section>
    </>
  );
}
