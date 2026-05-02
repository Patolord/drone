import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const regions = [
  "Santana",
  "Tucuruvi",
  "Casa Verde",
  "Vila Maria",
  "Mandaqui",
  "Centro",
  "República",
  "Sé",
  "Bela Vista",
  "Liberdade",
];

export default function ServiceArea() {
  return (
    <section
      id="atendimento"
      className="relative w-full overflow-hidden border-y border-white/5 px-6 py-24 sm:px-8 sm:py-32"
    >
      {/* Subtle accent glow. */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300 uppercase">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            Onde atendemos
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Atendemos{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              Zona Norte e Centro
            </span>{" "}
            de São Paulo
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Deslocamento rápido pela região para garantir agilidade na captação
            e entrega do material. Para outras regiões, consulte-nos pelo
            WhatsApp.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {regions.map((region) => (
              <li
                key={region}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm transition-colors hover:border-emerald-400/40 hover:text-white"
              >
                {region}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
