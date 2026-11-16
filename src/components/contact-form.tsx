"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const subject = `Website enquiry from ${String(values.name)}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `UTR Number: ${values.utrNumber || "Not provided"}`,
      `Transaction ID: ${values.transactionId || "Not provided"}`,
      "",
      "Message:",
      String(values.message),
    ].join("\n");
    const params = new URLSearchParams({ view: "cm", fs: "1", to: "soltrustngo@gmail.com", su: subject, body });
    const composeUrl = `https://mail.google.com/mail/?${params.toString()}`;
    window.open(composeUrl, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Your name<input name="name" autoComplete="name" placeholder="Name" required maxLength={120} /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      <label>UTR Number<input name="utrNumber" placeholder="Enter UTR Number" maxLength={100} /></label>
      <label>Transaction ID<input name="transactionId" placeholder="Enter Transaction ID" maxLength={100} /></label>
      <label>How can we help?<textarea name="message" placeholder="Write a message" required maxLength={5000} /></label>
      <button className="button button-primary" type="submit">Open Gmail to send <span aria-hidden="true">↗</span></button>
      {opened && <p className="form-note" role="status">Gmail should open with your details addressed to soltrustngo@gmail.com. Review and send the message in Gmail.</p>}
      {!opened && <p className="form-note">Submitting opens Gmail with your details addressed to soltrustngo@gmail.com. Review and send the message in Gmail.</p>}
      <p className="form-note">Eligible donations and fund contributions may qualify for tax deductions under <a href="https://wm.incometaxindia.gov.in/web/guest/w/section-80g-56" target="_blank" rel="noopener noreferrer">Section 80G</a> of the Income Tax Act, 1961, subject to applicable requirements.</p>
    </form>
  );
}
