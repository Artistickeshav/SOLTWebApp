import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Contact Spring of Life Trust." };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="We’d be glad to hear from you." description="Questions about our work, events or ways to get involved? Reach out to Spring of Life Trust." /><section className="page-body"><Container className="contact-layout"><div className="contact-info"><h2>Get in touch</h2><p className="contact-intro">We would love to hear from you. Choose the best way to reach our team.</p><div className="contact-methods"><a className="contact-method" href="https://mail.google.com/mail/?view=cm&amp;to=soltrustngo%40gmail.com" target="_blank" rel="noopener noreferrer"><span className="contact-label">General enquiries</span><span>soltrustngo@gmail.com</span></a><a className="contact-method" href="https://mail.google.com/mail/?view=cm&amp;to=sonu.ework%40gmail.com" target="_blank" rel="noopener noreferrer"><span className="contact-label">Direct contact</span><span>sonu.ework@gmail.com</span></a><a className="contact-method" href="tel:+919810406172"><span className="contact-label">Call us</span><span>+91 98104 06172</span></a></div><div className="contact-addresses"><section className="contact-address"><h3>Registered address</h3><address>C 65, 2nd Floor, JVTS Garden,<br />Near DLF Farms, Chatterpur,<br />New Delhi 110074</address></section><section className="contact-address"><h3>Office address</h3><address>Lobby meeting point,<br />Hotel Sheraton,<br />Saket District Center,<br />Saket, New Delhi 110017</address></section></div></div><div><ContactForm /></div></Container></section></>;
}
