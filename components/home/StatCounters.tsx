"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function parseStat(value: string) {
  const suffix = value.replace(/[\d,]/g, "");
  const target = Number(value.replace(/[^\d]/g, ""));
  const useComma = value.includes(",");
  return { target, suffix, useComma };
}

function formatStat(n: number, useComma: boolean, suffix: string) {
  const rounded = Math.round(n);
  const body = useComma ? rounded.toLocaleString("en-US") : String(rounded);
  return `${body}${suffix}`;
}

function StatItem({ value, label }: { value: string; label: string }) {
  const { target, suffix, useComma } = parseStat(value);
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() =>
    formatStat(0, useComma, suffix),
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(formatStat(target, useComma, suffix));
      return;
    }

    let frame = 0;
    let started = false;
    const duration = 1800;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3;
          setDisplay(formatStat(target * eased, useComma, suffix));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, suffix, useComma]);

  return (
    <div ref={ref}>
      <p className="text-4xl font-bold text-brand md:text-5xl">{display}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-heading">
        {label}
      </p>
    </div>
  );
}

export default function StatCounters() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
