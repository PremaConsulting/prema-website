"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { googleReviews, site } from "@/lib/site";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5 text-[#fbbc04]" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M12 17.3 18.2 21l-1.6-7.1L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2l5.4 4.7L5.8 21z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviews() {
  const items = googleReviews.items;
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - visible);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      const next = mq.matches ? 3 : 1;
      setVisible(next);
      setIndex((current) => Math.min(current, Math.max(0, items.length - next)));
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [items.length]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 6000);
    return () => window.clearInterval(id);
  }, [maxIndex]);

  function go(next: number) {
    if (next < 0) setIndex(maxIndex);
    else if (next > maxIndex) setIndex(0);
    else setIndex(next);
  }

  return (
    <section className="bg-[#f7f8fa] py-16 md:py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy md:text-[32px]">
            Google Reviews
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
              <path
                fill="#4285F4"
                d="M22.6 12.2c0-.8-.1-1.6-.2-2.3H12v4.4h5.9c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.3-5 3.3-8.3z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.7-2.8c-1 .7-2.3 1.1-3.9 1.1-3 0-5.5-2-6.4-4.7H1.8v3c1.9 3.8 5.8 6.2 10.2 6.2z"
              />
              <path
                fill="#FBBC05"
                d="M5.6 13.8c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V6.4H1.8C1 8 0.5 9.9 0.5 11.6s.5 3.6 1.3 5.2l3.8-3z"
              />
              <path
                fill="#EA4335"
                d="M12 4.6c1.7 0 3.2.6 4.4 1.7l3.3-3.3C17.7 1.2 15.1.2 12 .2 7.6.2 3.7 2.6 1.8 6.4l3.8 3c.9-2.7 3.4-4.8 6.4-4.8z"
              />
            </svg>
            <p className="text-3xl font-bold text-heading">
              {googleReviews.rating.toFixed(1)}
            </p>
            <Stars />
            <p className="text-sm text-muted">
              Based on {googleReviews.count} Google reviews
            </p>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${index * (100 / visible)}%)`,
              }}
            >
              {items.map((review) => (
                <article
                  key={review.name}
                  className="box-border min-h-[280px] shrink-0 px-2"
                  style={{ flex: `0 0 ${100 / visible}%` }}
                >
                  <div className="flex h-full flex-col bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {review.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-heading">{review.name}</p>
                      <p className="text-xs text-muted">{review.role}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Stars />
                    <span className="text-xs text-muted">{review.when}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                    {review.text}
                  </p>
                  <p className="mt-4 text-xs text-muted">Posted on Google</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous reviews"
            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 items-center justify-center bg-white text-2xl text-brand shadow [transform:translateY(-50%)] md:-left-4"
            onClick={() => go(index - 1)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 items-center justify-center bg-white text-2xl text-brand shadow [transform:translateY(-50%)] md:-right-4"
            onClick={() => go(index + 1)}
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to reviews ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === index ? "bg-brand" : "bg-border"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-dark"
          >
            View all Google reviews
          </a>
          <a
            href={site.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand hover:bg-brand hover:text-white"
          >
            Write a review
          </a>
        </div>
      </Container>
    </section>
  );
}
