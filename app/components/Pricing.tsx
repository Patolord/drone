"use client";

import ScrollReveal from "./ScrollReveal";

export default function Pricing() {
  return (
    <section className="w-full bg-canvas px-6 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
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

        {/* GRID */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2 items-stretch">

          {/* ESQUERDA */}
          <div className="flex flex-col justify-between">

            {/* CARDS CONTATO */}
            <ScrollReveal delay={100}>
              <div className="grid sm:grid-cols-2 gap-4">

                {/* WHATSAPP */}
                <div
                  onClick={() =>
                    window.open(
                      "https://wa.me/5511996153626?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20filmagem%20com%20drone",
                      "_blank"
                    )
                  }
                  className="cursor-pointer rounded-2xl border border-ink/10 bg-surface p-5 flex items-center gap-3 hover:shadow-md transition"
                >
                  <div className="bg-green-100 p-2.5 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.102 1.52 5.834L0 24l6.33-1.655A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.945 0-3.77-.57-5.303-1.55l-.38-.24-3.755.982 1.003-3.66-.247-.378A9.78 9.78 0 012.182 12c0-5.415 4.403-9.818 9.818-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.415-4.403 9.818-9.818 9.818zm5.41-7.364c-.295-.147-1.747-.862-2.018-.96-.27-.098-.467-.147-.664.147-.197.295-.762.96-.935 1.158-.172.197-.344.221-.639.074-.295-.147-1.246-.459-2.372-1.463-.876-.781-1.467-1.745-1.639-2.04-.172-.295-.018-.455.13-.602.133-.132.295-.344.442-.516.147-.172.197-.295.295-.492.098-.197.049-.369-.025-.516-.074-.147-.664-1.6-.91-2.188-.24-.579-.485-.5-.664-.51-.172-.009-.369-.011-.565-.011-.197 0-.516.074-.786.369-.27.295-1.033 1.01-1.033 2.459 0 1.45 1.058 2.85 1.205 3.047.147.197 2.083 3.18 5.045 4.456.705.304 1.255.486 1.684.622.707.225 1.351.193 1.861.117.568-.085 1.747-.713 1.994-1.402.246-.689.246-1.28.172-1.402-.074-.123-.27-.197-.565-.344z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-ink">WhatsApp</p>
                    <p className="text-sm text-muted">(11) 99615-3626</p>
                    <p className="text-xs text-muted">Resposta rápida</p>
                  </div>
                </div>

                {/* INSTAGRAM (Simple Icons) */}
                <div className="cursor-pointer rounded-2xl border border-ink/10 bg-surface p-5 flex items-center gap-3 hover:shadow-md transition">
                  <div className="bg-pink-100 p-2.5 rounded-full flex items-center justify-center">
                    
                    {/* Simple Icons Instagram */}
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-pink-600"
                    >
                      <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5c0 1.966-1.784 3.75-3.75 3.75h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm4.25 2.5a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 2a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm5.25-.88a1.38 1.38 0 110 2.76 1.38 1.38 0 010-2.76z"/>
                    </svg>

                  </div>
                  <div>
                    <p className="font-medium text-ink">Instagram</p>
                    <p className="text-sm text-muted">@seu usuario</p>
                    <p className="text-xs text-muted">Em breve</p>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* MAPA */}
            <ScrollReveal delay={200}>
              <div
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/Rua+Dr.+Olavo+Eg%C3%ADdio,+554+-+Santana,+S%C3%A3o+Paulo+-+SP",
                    "_blank"
                  )
                }
                className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-ink/10 shadow-md hover:shadow-lg transition"
              >
                <iframe
                  src="https://www.google.com/maps?q=Rua+Dr.+Olavo+Egídio,+554+-+Santana,+São+Paulo&output=embed"
                  className="w-full h-[360px] border-0"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

          </div>

          {/* DIREITA - PREÇO */}
          <ScrollReveal>
            <div className="rounded-3xl border-2 border-green-400 bg-surface p-14 text-center shadow-[0_0_25px_rgba(34,197,94,0.25)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.45)] hover:scale-[1.02]">

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
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg"
              >
                Solicitar pelo WhatsApp
              </a>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}