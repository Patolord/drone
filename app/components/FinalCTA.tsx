import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/whatsapp";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative w-full px-6 py-24 sm:px-8 sm:py-32"
    >
      <ScrollReveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-zinc-900 to-black p-10 text-center shadow-2xl sm:p-16">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-64 w-[80%] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl"
          />

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Precisa de imagens aéreas profissionais?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-zinc-300 sm:text-lg">
            Fale com a gente no WhatsApp e receba um orçamento personalizado em
            poucos minutos.
          </p>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp e solicitar orçamento"
            className="group mt-10 inline-flex h-16 items-center justify-center gap-3 rounded-full bg-emerald-500 px-10 text-base font-semibold text-black shadow-[0_15px_50px_-10px_rgba(16,185,129,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_20px_60px_-10px_rgba(16,185,129,0.9)] focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:outline-none sm:text-lg"
          >
            <MessageCircle className="h-6 w-6" aria-hidden />
            Falar no WhatsApp
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </a>

          <p className="mt-6 text-xs text-zinc-500">
            Resposta rápida · Seg a Sáb · Zona Norte e Centro de São Paulo
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
