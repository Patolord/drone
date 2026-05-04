import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative w-full bg-surface px-6 py-24 sm:px-8 sm:py-32"
    >
      <ScrollReveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-blue/20 bg-gradient-to-br from-blue/12 via-rose/8 to-canvas p-10 text-center shadow-[0_16px_56px_-20px_rgba(92,140,255,0.25)] sm:p-16">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-r from-rose/30 to-blue/25 blur-3xl"
          />

          <h2 className="text-balance text-[40px] leading-tight tracking-[-0.5px] text-ink sm:mx-auto">
            Precisa de imagens aéreas profissionais?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base tracking-[-0.36px] text-muted sm:text-lg">
            Fale com a gente no WhatsApp e receba um orçamento personalizado em
            poucos minutos.
          </p>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp e solicitar orçamento"
            className="group mt-10 inline-flex h-16 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue to-rose px-10 text-base font-medium text-white shadow-[0_14px_48px_-14px_rgba(255,152,204,0.45)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_56px_-14px_rgba(92,140,255,0.4)] focus-visible:ring-2 focus-visible:ring-orange focus-visible:outline-none sm:text-lg"
          >
            <MessageCircle className="h-6 w-6" strokeWidth={1.5} aria-hidden />
            Falar no WhatsApp
            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              strokeWidth={1.5}
              aria-hidden
            />
          </a>

          <p className="mt-6 text-xs tracking-[-0.36px] text-muted">
            Resposta rápida · Seg a Sáb · Zona Norte e Centro de São Paulo
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
