import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "Spring of Life Trust | Healthcare & Hope", template: "%s | Spring of Life Trust" },
  description: "Spring of Life Trust is a non-profit and non-political organization focused on women's health, nutrition and community care.",
  openGraph: { title: "Spring of Life Trust", description: "Improving lives through healthcare & hope.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main">{children}</main><Footer /></body></html>;
}
