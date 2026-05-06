"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type GalleryItem = {
  type: "video";
  src: string;
  alt: string;
  caption?: string;
};

const items: GalleryItem[] = [
  { src: "/videos/video01.mp4", alt: "Vídeo 1", caption: "Projeto praia · Guarujá" },
  { src: "/videos/video02.mp4", alt: "Vídeo 2", caption: "projeto sitio · festa junina" },
  { src: "/videos/video03.mp4", alt: "Vídeo 3", caption: "Projeto Ilha · Litoral" },
  { src: "/videos/video04.mp4", alt: "Vídeo 4", caption: "Projeto Tênis · Zona Norte" },
  { src: "/videos/video05.mp4", alt: "Vídeo 5", caption: "Projeto Nature Flow · Costa" },
  { src: "/videos/video06.mp4", alt: "Vídeo 6", caption: "Projeto Residencial · placa Solar" },
  { src: "/videos/video07.mp4", alt: "Vídeo 7", caption: "Projeto Mapeamento Aéreo · Zona Leste" },
  { src: "/videos/video08.mp4", alt: "Vídeo 8", caption: "Projeto Vista Urbana · Centro" },
  { src: "/videos/video09.mp4", alt: "Vídeo 9", caption: "Projeto Apresentação de Terreno · Rural" },
  { src: "/videos/video10.mp4", alt: "Vídeo 10", caption: "Projeto Inspeção Estrutural · Residencial" },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

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
            <h2 className="mt-3 text-[40px] leading-tight text-ink">
              Um pouco do nosso trabalho
            </h2>
            <p className="mt-4 text-base text-muted sm:text-lg">
              Imagens capturadas em projetos reais na Zona Norte e Centro de São Paulo.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div
            ref={trackRef}
            tabIndex={0}
            className="relative mt-14 overflow-hidden rounded-3xl border border-ink/10 bg-canvas shadow-lg"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
              {items.map((item, i) => (
                <div
                  key={item.src + index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  {/* OVERLAY MAIS LEVE */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />

                  {/* VIDEO */}
                  <video
                    key={item.src + index}
                    src={item.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onLoadedData={(e) => {
                      e.currentTarget.currentTime = 0;
                    }}
                    onEnded={next}
                  />

                  {/* TEXTO */}
                  {item.caption && (
                    <div className="absolute bottom-0 left-0 z-20 p-6">
                      <p className="text-white font-semibold text-sm sm:text-base">
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
              className="absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white"
            >
              <ChevronRight />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
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
