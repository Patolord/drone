import {
  Building2,
  Camera,
  PartyPopper,
  Video,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Video,
    title: "Filmagens Aéreas",
    description:
      "Vídeos cinematográficos em 4K com movimentos suaves e planos únicos — perfeitos para institucionais, clipes e conteúdo de marca.",
  },
  {
    icon: Camera,
    title: "Fotografias Profissionais",
    description:
      "Imagens de alta resolução com tratamento profissional para divulgação, campanhas e portfólio.",
  },

  {
    icon: Building2,
    title: "Imobiliárias & Empresas",
    description:
      "Tours aéreos de imóveis, terrenos, obras e empreendimentos. Um diferencial visual que vende mais rápido.",
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
              Soluções completas em imagens aéreas para quem quer se destacar.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  {/* Decorative gradient that appears on hover */}
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
