import {
  Building2,
  Camera,
  Video,
  Check,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

const services: Service[] = [
  {
    icon: Video,
    title: "Filmagens Aéreas",
    description:
      "Captação simples e eficiente para mostrar locais, negócios ou conteúdos do dia a dia.",
    highlights: [
      "Entrega rápida",
      "Movimentos suaves",
      "Qualidade 4K",
    ],
  },
  {
    icon: Camera,
    title: "Fotografias com Drone",
    description:
      "Fotos aéreas claras e bem posicionadas para redes sociais e divulgação.",
    highlights: [
      "Alta resolução",
      "Pronto para postar",
      "Edição leve",
    ],
  },
  {
    icon: Building2,
    title: "Imóveis e Negócios",
    description:
      "Imagens que ajudam a mostrar melhor seu espaço e atrair mais clientes.",
    highlights: [
      "Valoriza o local",
      "Mais visualizações",
      "Destaque no anúncio",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full bg-surface px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-widest text-blue uppercase">
              Serviços
            </p>
            <h2 className="mt-3 max-w-2xl text-balance text-[40px] leading-tight tracking-[-0.5px] text-ink sm:mx-auto">
              O que fazemos
            </h2>
            <p className="mt-4 text-pretty text-base tracking-[-0.36px] text-muted sm:text-lg">
              Imagens aéreas simples, rápidas e prontas para usar no seu dia a dia.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 80}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/8 bg-gradient-to-b from-surface to-canvas/80 p-10 shadow-[0_8px_40px_-12px_rgba(18,11,6,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_16px_48px_-12px_rgba(92,140,255,0.18)]">
                  
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/12 to-rose/12 text-blue ring-1 ring-inset ring-blue/20 transition-colors group-hover:from-blue/18 group-hover:to-rose/18">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>

                  <h3 className="text-xl tracking-[-0.5px] text-ink sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed tracking-[-0.36px] text-muted sm:text-base">
                    {service.description}
                  </p>

                  {/* DIFERENCIAIS (NOVO) */}
                  <ul className="mt-5 space-y-2">
                    {service.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-blue/80"
                      >
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Glow effect */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-gradient-to-br from-rose/20 to-blue/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}