"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const formContent = {
  volunteer: {
    title: "Volunteer with us",
    intro: "Tell us how you would like to support Spring of Life Trust.",
    fields: ["Your name", "Email address", "Phone number", "Your skills or availability"],
    note: "Your details will be added to an email addressed to soltrustngo@gmail.com.",
  },
  partner: {
    title: "Partner with us",
    intro: "Share a little about your organisation and how you would like to collaborate.",
    fields: ["Your name", "Organisation", "Email address", "Phone number", "How would you like to partner?"],
    note: "Your details will be added to an email addressed to soltrustngo@gmail.com.",
  },
  donate: {
    title: "Support our work",
    intro: "Leave your details and preferred contribution. We will share verified donation steps when available.",
    fields: ["Your name", "Email address", "Phone number", "Preferred contribution amount"],
    note: "This form does not process payments. Your details will be added to an email addressed to soltrustngo@gmail.com.",
  },
} as const;

type FormKind = keyof typeof formContent;

export function InvolvementForms() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeForm, setActiveForm] = useState<FormKind | null>(null);
  const [previewNotice, setPreviewNotice] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== "/get-involved") return;
      const kind = url.hash.slice(1);
      if (kind !== "volunteer" && kind !== "partner" && kind !== "donate") return;
      event.preventDefault();
      setPreviewNotice(false);
      setActiveForm(kind);
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeForm && !dialog.open) dialog.showModal();
    if (!activeForm && dialog.open) dialog.close();
  }, [activeForm]);

  if (!activeForm) {
    return <dialog className="involvement-dialog" ref={dialogRef} onClose={() => setActiveForm(null)} />;
  }

  const content = formContent[activeForm];
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    const body = Object.entries(values)
      .map(([field, value]) => `${field}: ${value}`)
      .join("\n");
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "soltrustngo@gmail.com",
      su: `${content.title} — Spring of Life Trust`,
      body,
    });
    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer");
    setPreviewNotice(true);
  };

  return (
    <dialog className="involvement-dialog" ref={dialogRef} aria-labelledby="involvement-title" onClose={() => setActiveForm(null)} onClick={(event) => { if (event.target === dialogRef.current) setActiveForm(null); }}>
      <div className="involvement-dialog-inner">
        <button className="involvement-close" type="button" aria-label="Close form" onClick={() => setActiveForm(null)}>×</button>
        <p className="eyebrow">Spring of Life Trust</p>
        <h2 id="involvement-title">{content.title}</h2>
        <p className="involvement-intro">{content.intro}</p>
        <form className="involvement-form" onSubmit={onSubmit}>
          {content.fields.map((field) => {
            const longAnswer = field.includes("skills") || field.includes("partner?");
            const isOrganization = field === "Organisation";
            return <label key={field}>{field}{longAnswer ? <textarea name={field} rows={3} required /> : <input name={field} type={field === "Email address" ? "email" : field === "Phone number" ? "tel" : field === "Preferred contribution amount" ? "number" : "text"} min={field === "Preferred contribution amount" ? "1" : undefined} required autoComplete={isOrganization ? "organization" : field === "Your name" ? "name" : field === "Email address" ? "email" : field === "Phone number" ? "tel" : undefined} />}</label>;
          })}
          <button className="button button-primary" type="submit">Open Gmail to send</button>
          {previewNotice && <p className="form-note" role="status">Gmail should open with your details addressed to soltrustngo@gmail.com. Review and send the message in Gmail.</p>}
          <p className="form-note">{content.note}</p>
          {activeForm === "donate" && <p className="form-note">Eligible donations and fund contributions may qualify for tax deductions under <a href="https://wm.incometaxindia.gov.in/web/guest/w/section-80g-56" target="_blank" rel="noopener noreferrer">Section 80G</a> of the Income Tax Act, 1961, subject to applicable requirements.</p>}
        </form>
      </div>
    </dialog>
  );
}
