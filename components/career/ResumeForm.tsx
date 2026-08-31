"use client";

import { site } from "@/lib/site";

export default function ResumeForm() {
  return (
    <form
      className="mt-8 max-w-xl space-y-4"
      action={`mailto:${site.hrEmail}`}
      method="post"
      encType="text/plain"
    >
      <input
        name="name"
        required
        placeholder="Full Name"
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
        placeholder="Phone Number"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <textarea
        name="cover"
        rows={5}
        placeholder="Brief introduction / role of interest"
        className="w-full border border-border px-4 py-3 text-sm outline-none focus:border-brand"
      />
      <p className="text-sm text-muted">
        After submitting, please also email your CV to{" "}
        <a href={`mailto:${site.hrEmail}`} className="text-brand">
          {site.hrEmail}
        </a>
        .
      </p>
      <button
        type="submit"
        className="bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
      >
        Upload Resume
      </button>
    </form>
  );
}
