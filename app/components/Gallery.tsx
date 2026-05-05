"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
};

const items: GalleryItem[] = [
  {
    type: "video",
    src: "/videos/video01.mp4",
    alt: "Vídeo drone 1",
    caption: "Projeto real · Drone",
  },
  {
    type: "video",
    src: "/videos/video02.mp4",
    alt: "Vídeo drone 2",
    caption: "Captação do dia a dia",
  },
  {
    type: "video",
    src: "/videos/video03.mp4",
    alt: "Vídeo drone 3",
    caption: "Filmagem simples",
  },
  {
    type: "video",
    src: "/videos/video04.mp4",
    alt: "Vídeo drone 4",
    caption: "Serviço rápido",
  },
  {
    type: "video",
    src: "/videos/video05.mp4",
    alt: "Vídeo drone 5",
    caption: "Acompanhamento de obra",
  },
];

const AUTOPLAY_MS = 5000;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setIndex((v) => (v + 1) % items.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((v) => (v - 1 + items.length) % items.length);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

  // Autoplay (só funciona para imagens, vídeos se controlam sozinhos)
  useEffect(() => {
    const currentItem = items[index];

    if (isPaused || currentItem.type === "video") return;

    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isPaused, index, next]);

  // Navegação por teclado
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
            aria-label="Galeria de vídeos e imagens aéreas"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="relative mt-14 overflow-hidden rounded-3xl border border-ink/10 bg-canvas shadow-[0_12px_48px_-16px_rgba(18,11,6,0.12)] focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none"
          >
            {/* TRACK */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {items.map((item, i) => (
                <div
                  key={item.src + index}
                  className="relative aspect-[16/9] w-full shrink-0 sm:aspect-[21/9]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-rose/35 via-blue/20 to-ink/80"
                  />

                  {item.type === "video" ? (
                    <video
                      key={item.src + index}
                      src={item.src}
                      className="relative h-full w-full object-cover"
                      autoPlay
                      muted
                      playsInline
                      onEnded={next}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="relative h-full w-full object-cover"
                    />
                  )}

                  {item.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/45 to-transparent p-5 sm:p-8">
                      <p className="text-sm font-medium text-white sm:text-base">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* BOTÕES */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-white/40 bg-ink/45 p-3 text-white backdrop-blur-md hover:scale-105"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-white/40 bg-ink/45 p-3 text-white backdrop-blur-md hover:scale-105"
            >
              <ChevronRight />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-gradient-to-r from-blue to-rose"
                      : "w-3 bg-white/50"
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
