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
      className="relative w-full overflow-hidden border-y border-ink/8 bg-canvas px-6 py-24 sm:px-8 sm:py-32"
    >
      {/* Subtle accent glow. */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose/25 to-blue/20 blur-3xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/25 bg-blue/8 px-4 py-1.5 text-xs font-medium tracking-wide text-blue uppercase">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            Onde atendemos
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2 className="mt-6 text-balance text-[40px] leading-tight tracking-[-0.5px] text-ink">
            Atendemos{" "}
            <span className="bg-gradient-to-r from-blue to-rose bg-clip-text text-transparent">
              Zona Norte e Centro
            </span>{" "}
            de São Paulo
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed tracking-[-0.36px] text-muted sm:text-lg">
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
                className="rounded-full border border-ink/12 bg-surface px-4 py-1.5 text-sm tracking-[-0.36px] text-ink shadow-sm transition-all duration-300 ease-out hover:border-blue/35 hover:text-blue"
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
