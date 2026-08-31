"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Website enquiry from " + name)}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-border bg-[#f7f8fa] p-6 text-sm leading-7">
        Thank you. Your email client should open so you can send the message to{" "}
        {site.email}. We will get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        name="name"
        required
        placeholder="Your Name"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <input
        name="phone"
        required
        placeholder="Phone Number"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Your Message"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <button
        type="submit"
        className="bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
      >
        Send Message
      </button>
    </form>
  );
}
