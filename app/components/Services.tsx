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
    icon: PartyPopper,
    title: "Cobertura de Eventos",
    description:
      "Casamentos, festas corporativas, shows e eventos esportivos vistos de um ângulo inesquecível.",
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
      className="relative w-full px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Serviços
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              O que fazemos
            </h2>
            <p className="mt-4 text-pretty text-base text-zinc-400 sm:text-lg">
              Soluções completas em imagens aéreas para quem quer se destacar.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 80}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/5">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-400/30 transition-colors group-hover:bg-emerald-500/25">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {service.description}
                  </p>
                  {/* Decorative gradient that appears on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-emerald-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
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
