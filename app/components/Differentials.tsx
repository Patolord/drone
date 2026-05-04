import {
  Award,
  Clock,
  ImageIcon,
  Zap,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

type Differential = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const differentials: Differential[] = [
  {
    icon: Zap,
    title: "Atendimento Rápido",
    description: "Resposta em minutos e agendamento flexível.",
  },
  {
    icon: Award,
    title: "Equipamento Profissional",
    description: "Drones com câmera de alta performance e estabilização.",
  },
  {
    icon: ImageIcon,
    title: "Alta Qualidade de Imagem",
    description: "Filmagens em 4K e fotos tratadas com precisão.",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Material editado e entregue em poucos dias.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative w-full border-y border-ink/8 bg-canvas px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium tracking-widest text-blue uppercase">
              Por que nos escolher
            </p>
            <h2 className="mt-3 text-balance text-[40px] leading-tight tracking-[-0.5px] text-ink sm:mx-auto">
              Nossos diferenciais
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="group flex h-full flex-col items-start rounded-3xl border border-ink/8 bg-surface p-8 shadow-[0_8px_32px_-12px_rgba(18,11,6,0.06)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_14px_40px_-12px_rgba(92,140,255,0.15)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/12 to-rose/12 text-blue ring-1 ring-inset ring-blue/20">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg tracking-[-0.5px] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed tracking-[-0.36px] text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
