import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Events",
  description: "Events and community gatherings from Spring of Life Trust.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Gather, learn and care together."
        description="Event dates and participation details will be shared soon. Volunteers can look forward to certificates, snacks and goodies."
      />
      <section className="page-body">
        <Container>
          <div className="page-copy">
            <p>Check back soon for upcoming events and community gatherings. Volunteers will receive certificates, snacks and goodies.</p>
            <p>Would you like to help bring our events to life? We welcome volunteers to be part of the team.</p>
            <ButtonLink href="/get-involved#volunteer">Volunteer with us</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
