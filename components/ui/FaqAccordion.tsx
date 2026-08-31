"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
  size = "md",
}: {
  items: { q: string; a: string }[];
  size?: "md" | "lg";
}) {
  const [open, setOpen] = useState(0);
  const large = size === "lg";

  return (
    <div className="divide-y divide-border border border-border">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 text-left ${
                large ? "px-6 py-5 md:px-8 md:py-6" : "px-5 py-4"
              }`}
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span
                className={`font-semibold text-heading ${
                  large ? "text-base md:text-lg" : ""
                }`}
              >
                {item.q}
              </span>
              <span className={`text-brand ${large ? "text-2xl" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p
                className={`text-foreground ${
                  large
                    ? "px-6 pb-6 text-base leading-8 md:px-8"
                    : "px-5 pb-5 text-sm leading-7"
                }`}
              >
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
