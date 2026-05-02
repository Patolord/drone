import { ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background image + gradient overlay.
          Drop your hero photo in /public/hero.jpg. A gradient fallback
          keeps the hero looking good even when the file is missing. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%), url('/hero.jpg')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/60 to-black"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300 uppercase">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            São Paulo · Zona Norte e Centro
          </span>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Filmagens e Fotos Profissionais com{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              Drone
            </span>{" "}
            em São Paulo
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Atendimento rápido na Zona Norte e Centro da cidade. Equipamento
            profissional, imagens em alta resolução e entrega ágil.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar orçamento pelo WhatsApp"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 text-base font-semibold text-black shadow-[0_10px_40px_-10px_rgba(16,185,129,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_14px_50px_-10px_rgba(16,185,129,0.8)] focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:outline-none"
            >
              <MessageCircle
                className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]"
                aria-hidden
              />
              Solicitar Orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-base font-medium text-white backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none"
            >
              Ver serviços
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll-down hint. */}
      <a
        href="#servicos"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 transition-colors hover:text-emerald-400 motion-safe:animate-bounce"
      >
        <ChevronDown className="h-7 w-7" aria-hidden />
      </a>
    </section>
  );
}
