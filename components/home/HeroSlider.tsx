"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ButtonLink from "@/components/ui/ButtonLink";
import Container from "@/components/ui/Container";
import { heroSlides } from "@/lib/site";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => go(index + 1), 7000);
    return () => window.clearInterval(id);
  }, [go, index]);

  const slide = heroSlides[index];

  return (
    <section className="relative h-[480px] overflow-hidden md:h-[600px]">
      {heroSlides.map((item, i) => (
        <Image
          key={item.image}
          src={item.image}
          alt=""
          fill
          priority={i === 0}
          quality={95}
          className={`object-cover object-center transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />

      <Container className="relative flex h-full flex-col justify-center py-16 md:py-20">
        <div key={index} className="max-w-3xl">
          <h1 className="hero-rise text-[32px] font-bold leading-[1.12] text-white md:text-[50px] md:leading-[56px]">
            {slide.title}{" "}
            <span className="block">{slide.highlight}</span>
          </h1>
          <p className="hero-rise hero-rise-delay-1 mt-5 max-w-xl text-base leading-7 text-white/95 md:text-lg">
            {slide.text}
          </p>
          <div className="hero-rise hero-rise-delay-2 mt-8 flex flex-wrap gap-3">
            {slide.links.map((link, i) => (
              <ButtonLink
                key={link.href}
                href={link.href}
                variant={i === 0 ? "primary" : "white"}
              >
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>

      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-white/90 hover:text-white md:flex"
        onClick={() => go(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-white/90 hover:text-white md:flex"
        onClick={() => go(index + 1)}
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {heroSlides.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-white ${
              i === index ? "bg-transparent" : "bg-white/50"
            }`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </section>
  );
}
