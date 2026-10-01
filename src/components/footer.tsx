import Link from "next/link";
import { Container } from "@/components/ui";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-about">
            <Link className="brand brand-footer" href="/">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span className="brand-name">spring of life <small>TRUST</small></span>
            </Link>
            <p>Improving lives through healthcare and hope, with women’s health, nutrition and community care at heart.</p>
            <p className="footer-note">Non-profit &amp; non-political</p>
          </div>
          <div className="footer-column"><h3>Explore</h3>{navLinks.slice(0, 4).map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
          <div className="footer-column"><h3>Get involved</h3><Link href="/get-involved">Volunteer</Link><Link href="/get-involved">Partner With Us</Link><Link href="/get-involved">Donate</Link></div>
          <div className="footer-column"><h3>Contact</h3><p>Get in touch with Spring of Life Trust.</p><Link href="/contact">Contact us <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Spring of Life Trust</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
      </Container>
    </footer>
  );
}
