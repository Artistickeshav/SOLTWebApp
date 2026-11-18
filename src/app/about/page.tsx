import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";
import { MomentsGallery } from "@/components/moments-gallery";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Spring of Life Trust founder Ms. Sonu Singh (Sonia) and learn about the mission, leadership and community health work behind the organization.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Spring of Life Trust"
        title="Care shaped around people."
        description="A non-profit and non-political organization focused on healthcare, hope and healthier communities."
      />
      <section className="founder-profile-section">
        <Container>
          <div className="founder-profile">
            <Image
              className="founder-portrait"
              src="/images/founder-sonu-singh.jpg"
              alt="Ms. Sonu Singh (Sonia), founder of Spring of Life Trust"
              width={900}
              height={1200}
              sizes="(max-width: 760px) 100vw, 34vw"
            />
            <div className="founder-bio">
              <h2>Meet Our Founder</h2>
              <h3>Ms. Sonu Singh (Sonia)</h3>
              <p>
                A visionary in community healthcare and humanitarian service, Ms. Sonu Singh (Sonia) has dedicated her life&apos;s work to ensuring equitable health access and robust blood donation initiatives. She brings decades of public health expertise and leadership to the mission of Spring of Life Trust, driving forward its core initiatives in healthcare accessibility, nutrition programs and voluntary blood donation across India.
              </p>
              <p>
                Ms. Singh&apos;s distinguished journey in public service began as a founding member of the Rotary Blood Bank, a flagship project of Rotary International. For nearly two decades, she served as the organization&apos;s CCO, working closely under the leadership of Mr. Sudharshan Aggarwal, former Rajya Sabha member and Governor of Uttarakhand and Sikkim. During her 20-year tenure, she was instrumental in scaling the institution into a cornerstone of voluntary blood donation and life-saving healthcare infrastructure.
              </p>
              <p>
                Her profound impact on public health policy extends to the national level. Recognized for her deep sectoral knowledge and operational leadership, Ms. Singh has served on the task force for the National AIDS Control Organisation (NACO) and contributed her strategic expertise to NITI Aayog, helping to shape vital health frameworks and community welfare policies for the nation.
              </p>
              <p>
                In recognition of her exceptional, tangible commitment to community service, she is a proud recipient of the prestigious Paul Harris Award. Today, Ms. Singh continues to channel her unwavering passion into Spring of Life Trust, working tirelessly to empower vulnerable communities and transform lives through accessible, compassionate healthcare.
              </p>
              <div className="founder-affiliations" aria-label="Founder service affiliations">
                <p className="eyebrow">Service &amp; leadership</p>
                <div className="founder-affiliation-logos">
                  <div className="founder-affiliation-logo founder-affiliation-logo-blood-bank">
                    <Image
                      src="/images/rotary-blood-bank-delhi.webp"
                      alt="Rotary Blood Bank Delhi — Every Drop Counts"
                      width={1200}
                      height={800}
                      sizes="(max-width: 760px) 45vw, 200px"
                    />
                  </div>
                  <div className="founder-affiliation-logo founder-affiliation-logo-rotary">
                    <Image
                      src="/images/rotary-membership.png"
                      alt="Rotary logo"
                      width={3200}
                      height={1200}
                      sizes="(max-width: 760px) 45vw, 240px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="page-body">
        <Container>
          <div className="page-copy">
            <h2>Our Story</h2>
            <p>
              Spring of Life Trust was founded by Ms. Sonu Singh (Sonia) with a vision to make healthcare awareness, nutrition and community wellbeing more accessible.
            </p>
            <p>
              The Trust was registered on 4 August 2026.
            </p>
            <p>
              Inspired by the belief that a healthier society begins with informed and empowered individuals, the Trust focuses on addressing an often-overlooked concern: women, particularly homemakers, frequently prioritise their families while overlooking their own health and nutritional needs.
            </p>
            <p>
              Through its three pillars: <strong>Women&apos;s Health, Nutrition and Community Care</strong>, Spring of Life Trust strives to promote health awareness, encourage informed lifestyle choices and foster healthier, more supportive communities.
            </p>
            <p>
              Building on its founder&apos;s longstanding commitment to public healthcare and humanitarian service, the Trust envisions a future where healthcare awareness is accessible to all and every individual has the opportunity to prioritise their wellbeing.
            </p>
            <h2>Our Mission</h2>
            <p>
              To empower women and underserved communities through accessible healthcare awareness, nutrition education and compassionate care. We promote preventive health and informed choices, bringing people together to build healthier, more inclusive communities where dignity and wellbeing are accessible to all.
            </p>
            <h2>Our vision</h2>
            <p>To create a healthier, more empowered society where every individual has the opportunity to thrive through accessible healthcare, better nutrition and stronger, more compassionate communities.</p>
            <h2>Our Approach</h2>
            <p>
              We believe lasting change begins with awareness, compassion and collective action. Through women&apos;s health initiatives, nutrition awareness and community engagement, we work to empower individuals, encourage healthier choices and build stronger, healthier communities.
            </p>
            <p>
              By bringing people, knowledge and care together, we strive to make wellbeing a shared priority.
            </p>
          </div>
        </Container>
      </section>
      <MomentsGallery />

    </>
  );
}





