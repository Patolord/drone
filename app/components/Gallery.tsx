"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY_VIDEOS, muxPosterUrl } from "../lib/video-urls";
import MuxBgVideo from "./MuxBgVideo";
import ScrollReveal from "./ScrollReveal";

const items = GALLERY_VIDEOS.map((item) => ({
  ...item,
  posterSrc: muxPosterUrl(item.playbackId),
}));

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  const next = useCallback(() => {
    setIndex((v) => (v + 1) % items.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((v) => (v - 1 + items.length) % items.length);
  }, []);

  const goTo = useCallback((i: number) => setIndex(i), []);

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

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(Boolean(entry?.isIntersecting));
      },
      { rootMargin: "160px 0px", threshold: 0.04 },
    );

    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="relative w-full bg-surface px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-widest text-blue uppercase">
              Galeria
            </p>
            <h2 className="mt-3 text-[40px] leading-tight text-ink">
              Um pouco do nosso trabalho
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Imagens capturadas em projetos reais na Zona Norte e Centro de São
              Paulo.
            </p>
            <p className="mt-2 text-sm text-muted">
              Imagens publicadas com autorização dos clientes.
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
            className="relative mt-14 overflow-hidden rounded-3xl border border-ink/10 bg-canvas shadow-lg focus-visible:ring-2 focus-visible:ring-blue focus-visible:outline-none"
          >
            <div className="relative aspect-video w-full sm:aspect-21/9">
              {items.map((item, i) => {
                const isActive = i === index;
                const shouldStream = isActive && sectionVisible;

                return (
                  <div
                    key={item.playbackId}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? "z-10 opacity-100"
                        : "z-0 opacity-0 [content-visibility:auto]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 z-10 bg-linear-to-t from-black/30 via-transparent to-transparent"
                    />

                    {shouldStream ? (
                      <MuxBgVideo
                        playbackId={item.playbackId}
                        posterSrc={item.posterSrc}
                        maxResolution="1080p"
                        preload="auto"
                        className="absolute inset-0"
                      />
                    ) : (
                      <Image
                        src={item.posterSrc}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 72rem"
                        aria-hidden="true"
                        className="object-cover"
                      />
                    )}

                    {item.caption && (
                      <div className="absolute bottom-0 left-0 z-20 p-6">
                        <p className="text-sm font-semibold text-white sm:text-base">
                          {item.caption}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={prev}
              aria-label="Mostrar item anterior da galeria"
              className="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white"
            >
              <ChevronLeft aria-hidden />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Mostrar próximo item da galeria"
              className="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white"
            >
              <ChevronRight aria-hidden />
            </button>

            <div className="absolute bottom-4 z-30 flex w-full justify-center gap-2">
              {items.map((item, i) => (
                <button
                  key={item.playbackId}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === index ? "true" : undefined}
                  aria-label={`Mostrar item ${i + 1} da galeria: ${item.caption}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-green-500" : "w-3 bg-white/50"
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
