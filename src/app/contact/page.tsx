import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Contact", description: "Contact Spring of Life Trust." };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="We’d be glad to hear from you." description="Questions about our work, resources or ways to get involved? Reach out to Spring of Life Trust." /><section className="page-body"><Container className="contact-layout"><div><h2>Get in touch</h2><p>[Add verified email address]</p><p>[Add verified phone number]</p><p>[Add verified postal address, if appropriate]</p><p className="form-note">Contact details are placeholders and must be confirmed before launch.</p></div><div><form className="contact-form"><label>Your name<input name="name" autoComplete="name" placeholder="Name" /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label>How can we help?<textarea name="message" placeholder="Write a message" /></label><button className="button button-primary" type="button">[Contact form endpoint to be connected] <span aria-hidden="true">↗</span></button><p className="form-note">This form is a design preview and does not send messages yet.</p></form></div></Container></section></>;
}
