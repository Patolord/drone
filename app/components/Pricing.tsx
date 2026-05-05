import ScrollReveal from "./ScrollReveal";
import { MessageCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full bg-canvas px-6 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">
        
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-medium tracking-widest text-blue uppercase">
              Preço
            </p>

            <h2 className="mt-3 text-[44px] leading-tight tracking-[-0.5px] text-ink">
              Simples e direto
            </h2>

            <p className="mt-4 text-muted text-base sm:text-lg">
              Serviço por hora, sem complicação. Ideal para quem precisa de imagens rápidas e eficientes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-16">
            
            <div className="mx-auto max-w-xl rounded-3xl border border-ink/10 bg-surface p-14 text-center shadow-[0_8px_40px_-12px_rgba(18,11,6,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)]">

              <h3 className="text-2xl font-semibold text-ink">
                Plano único
              </h3>

              <p className="mt-2 text-sm text-muted">
                Ideal para serviços rápidos do dia a dia
              </p>

              <div className="mt-8">
                <span className="text-5xl font-bold text-ink">
                  R$150
                </span>
                <span className="text-muted text-lg">/hora</span>
              </div>

              <p className="mt-2 text-sm text-muted">
                Pagamento via Pix
              </p>

              <ul className="mt-8 space-y-3 text-sm text-muted">
                <li>✔ Captação com drone</li>
                <li>✔ Imagens em alta qualidade</li>
                <li>✔ Entrega rápida</li>
                <li>✔ Ideal para pequenos projetos</li>
              </ul>

              <a
                href="https://wa.me/5511996153626?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20filmagem%20com%20drone"
                target="_blank"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 active:scale-95 relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <MessageCircle size={18} />
                  Solicitar pelo WhatsApp
                </span>

                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}