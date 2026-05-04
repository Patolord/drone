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
            "linear-gradient(120deg, rgba(255,152,204,0.25) 0%, rgba(92,140,255,0.12) 35%, rgba(18,11,6,0.55) 70%, rgba(18,11,6,0.88) 100%), url('/hero.jpg')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/35 via-ink/55 to-ink/90"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-8">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            São Paulo · Zona Norte e Centro
          </span>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-tight tracking-[-0.5px] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Filmagens e Fotos Profissionais com{" "}
            <span className="bg-gradient-to-r from-rose to-blue bg-clip-text text-transparent">
              Drone
            </span>{" "}
            em São Paulo
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed tracking-[-0.36px] text-white/90 sm:text-lg md:text-xl">
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
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue to-rose px-8 text-base font-medium text-white shadow-[0_12px_40px_-12px_rgba(92,140,255,0.55)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_16px_48px_-12px_rgba(255,152,204,0.45)] focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none"
            >
              <MessageCircle
                className="h-5 w-5 transition-transform group-hover:rotate-[-8deg]"
                strokeWidth={1.5}
                aria-hidden
              />
              Solicitar Orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/35 bg-white/90 px-8 text-base font-medium text-ink shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue/40 hover:text-blue focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors duration-300 ease-out hover:text-rose motion-safe:animate-bounce"
      >
        <ChevronDown className="h-7 w-7" aria-hidden />
      </a>
    </section>
  );
}
