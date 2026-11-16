"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="Spring of Life Trust home" onClick={() => setOpen(false)}>
          <Image className="brand-logo" src="/images/solt-logo.png" alt="Spring of Life Trust" width={140} height={122} priority />
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        <div className={`nav-links${open ? " nav-open" : ""}`} id="primary-menu">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          {navLinks.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="nav-donate" href="/get-involved#donate" onClick={() => setOpen(false)}>Donate <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  );
}
