"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type GalleryItem = {
  src: string;
  alt: string;
  /** Optional caption shown as an overlay. */
  caption?: string;
};

// Drop your photos in /public/gallery/ with these filenames, or replace the list.
const items: GalleryItem[] = [
  { src: "/gallery/1.jpg", alt: "Vista aérea da cidade ao entardecer", caption: "Vista aérea · Entardecer" },
  { src: "/gallery/2.jpg", alt: "Imagem aérea de evento corporativo", caption: "Cobertura de evento" },
  { src: "/gallery/3.jpg", alt: "Vista de imóvel com drone", caption: "Tour imobiliário" },
  { src: "/gallery/4.jpg", alt: "Paisagem urbana de São Paulo vista de cima", caption: "Zona Norte · SP" },
  { src: "/gallery/5.jpg", alt: "Imagem aérea de casamento ao ar livre", caption: "Casamento ao ar livre" },
  { src: "/gallery/6.jpg", alt: "Obra vista de cima com drone", caption: "Acompanhamento de obra" },
];

const AUTOPLAY_MS = 5000;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setIndex((v) => (v + 1) % items.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((v) => (v - 1 + items.length) % items.length),
    [],
  );
  const goTo = useCallback((i: number) => setIndex(i), []);

  // Auto-play, paused on hover/focus.
  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isPaused, next]);

  // Keyboard navigation when the carousel has focus.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      id="galeria"
      className="relative w-full bg-surface px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-widest text-blue uppercase">
              Galeria
            </p>
            <h2 className="mt-3 text-balance text-[40px] leading-tight tracking-[-0.5px] text-ink sm:mx-auto">
              Um pouco do nosso trabalho
            </h2>
            <p className="mt-4 text-pretty text-base tracking-[-0.36px] text-muted sm:text-lg">
              Imagens capturadas em projetos reais na Zona Norte e Centro de São
              Paulo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Galeria de imagens aéreas"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="relative mt-14 overflow-hidden rounded-3xl border border-ink/10 bg-canvas shadow-[0_12px_48px_-16px_rgba(18,11,6,0.12)] focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none"
          >
            {/* Slides track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((item, i) => (
                <div
                  key={item.src}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${items.length}`}
                  aria-hidden={i !== index}
                  className="relative aspect-[16/9] w-full shrink-0 sm:aspect-[21/9]"
                >
                  {/* Fallback gradient behind the image — keeps the slide pretty
                      even if the photo file hasn't been added yet. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-rose/35 via-blue/20 to-ink/80"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="relative h-full w-full object-cover"
                    onError={(e) => {
                      // Hide broken image so the gradient fallback shows.
                      (e.currentTarget as HTMLImageElement).style.visibility =
                        "hidden";
                    }}
                  />
                  {item.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent p-5 sm:p-8">
                      <p className="text-sm font-medium tracking-[-0.36px] text-white sm:text-base">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Prev / next buttons */}
            <button
              type="button"
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/40 bg-ink/45 p-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:border-rose/50 hover:bg-ink/60 focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none sm:left-5 sm:p-3"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/40 bg-ink/45 p-2.5 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 hover:border-rose/50 hover:bg-ink/60 focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none sm:right-5 sm:p-3"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
            </button>

            {/* Dot indicators */}
            <div className="absolute right-0 bottom-4 left-0 flex items-center justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Ir para a imagem ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none ${
                    i === index
                      ? "w-8 bg-gradient-to-r from-blue to-rose"
                      : "w-3 bg-white/50 hover:bg-white/85"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
