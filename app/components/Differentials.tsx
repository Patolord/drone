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
      className="relative w-full border-y border-white/5 bg-zinc-950 px-6 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Por que nos escolher
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Nossos diferenciais
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 80}>
                <div className="group flex h-full flex-col items-start rounded-2xl border border-white/10 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-400/30">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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
