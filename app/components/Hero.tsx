import { ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* VIDEO */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-110 contrast-110"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/video_hero_section.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/40 to-black/60"
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-8">
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

        {/* BOTÕES (aproximados) */}
        <ScrollReveal delay={220}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue to-rose px-8 text-base font-medium text-white shadow-[0_12px_40px_-12px_rgba(92,140,255,0.55)] transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento no WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/35 bg-white/90 px-8 text-base font-medium text-ink"
            >
              Ver serviços
            </a>
          </div>
        </ScrollReveal>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  );
}