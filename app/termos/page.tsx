import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Termos de Serviço — Drone SP",
  description:
    "Termos de Serviço da Drone SP: pacote de captação aérea, extras, autorização de uso de imagem e aceite da proposta pelo WhatsApp.",
};

export default function TermosPage() {
  return (
    <LegalLayout eyebrow="Contrato" title="Termos de Serviço">
      <div className="rounded-2xl border border-blue/20 bg-blue/5 p-5 sm:p-6">
        <p className="mt-0! text-sm leading-relaxed text-ink">
          Pacote a partir de R$900: captação aérea e até 30 minutos brutos.
          Edição e direito de imagem são cobrados à parte, no orçamento.
          A proposta no WhatsApp já traz a descrição completa. Responder{" "}
          <strong className="text-ink">ACEITO</strong> fecha o serviço, o
          preço e o direito de imagem descritos nessa mensagem.
        </p>
      </div>

      <h2>1. Quem somos</h2>
      <p>
        Estes Termos regulam a prestação de serviços de filmagem e fotografia
        aérea pela Drone SP, com atendimento na Zona Norte e Centro de São
        Paulo. Contato: WhatsApp{" "}
        <a href={buildWhatsAppUrl()}>{WHATSAPP_DISPLAY}</a>. Santana, São Paulo.
      </p>

      <h2>2. Objeto</h2>
      <p>
        O pacote-base cobre a captação aérea com drone e a entrega do material
        bruto, de até 30 minutos de gravação. A edição não está inclusa.
      </p>

      <h2>3. Preço</h2>
      <p>
        O valor âncora do pacote-base é R$900, pago via Pix. Esse valor é a
        partir de R$900 e está sujeito a alteração em casos especiais — por
        exemplo distância, horário, restrição de voo, edição ou reserva de
        direito de imagem. O valor válido é sempre o da proposta enviada no
        WhatsApp.
      </p>

      <h2>4. Extras</h2>
      <p>Não estão inclusos no pacote-base e, se contratados, entram na proposta:</p>
      <ul>
        <li>edição do material;</li>
        <li>
          reserva de direito de imagem (sem uso no site, redes ou portfólio);
        </li>
        <li>deslocamento fora da área de atendimento;</li>
        <li>demais exigências atípicas combinadas no orçamento.</li>
      </ul>

      <h2>5. Como contratar</h2>
      <p>
        A proposta enviada no WhatsApp contém a descrição completa: serviço,
        local e data, valor, o que está incluso, extras, direito de imagem e o
        link destes Termos. Ao responder <strong>ACEITO</strong> a essa
        mensagem, o cliente concorda integralmente com a proposta e com estes
        Termos, inclusive com o direito de imagem descrito naquela mensagem.
        Não há segunda confirmação.
      </p>

      <h2>6. Autorização de uso de imagem</h2>
      <p>
        Salvo se a proposta reservar o direito de imagem ao cliente, o pacote
        inclui autorização para a Drone SP usar trechos das imagens no site,
        redes sociais, portfólio e materiais de divulgação do próprio serviço.
        O contratante declara ter autorização para filmar o local (imóvel,
        condomínio, evento ou equivalente) e se responsabiliza por convidados e
        terceiros que apareçam na captação.
      </p>

      <h2>7. Direito de imagem</h2>
      <p>
        Se o cliente quiser reservar o direito de imagem — sem publicação no
        site, redes ou portfólio —, isso é extra, combinado no orçamento e
        descrito na proposta. Nesse caso a Drone SP não usa o material para
        divulgação. O valor desse extra não aparece no site; entra só na
        proposta.
      </p>

      <h2>8. Direitos autorais</h2>
      <p>
        Os direitos autorais sobre as fotos e os vídeos ficam com a Drone SP
        (Lei nº 9.610/1998). O cliente recebe licença para usar o material na
        divulgação do próprio negócio, imóvel ou evento, nos termos da
        proposta.
      </p>

      <h2>9. Local e responsabilidade do cliente</h2>
      <p>
        O cliente garante que pode autorizar o voo e a captação no local
        combinado. A operação segue as regras da ANAC e do DECEA. Interdição de
        espaço aéreo, recusa de vizinhos ou falta de autorização do local
        podem impedir ou reagendar o serviço, sem que isso gere obrigação de
        voar.
      </p>

      <h2>10. Clima e reagendamento</h2>
      <p>
        Voo sujeito a clima, visibilidade e autorização de espaço aéreo. Nesses
        casos a data é reagendada, de comum acordo, sem custo extra pelo
        reagendamento em si.
      </p>

      <h2>11. Entrega e pagamento</h2>
      <p>
        A entrega é do material bruto, de forma digital, após a captação.
        Pagamento via Pix, nas condições da proposta.
      </p>

      <h2>12. Limitação de responsabilidade</h2>
      <p>
        A Drone SP não se responsabiliza por impossibilidade de voo por clima,
        espaço aéreo, recusa de terceiros no local ou restrições legais de
        captação. Danos a terceiros decorrentes de autorização insuficiente do
        cliente quanto ao local ou às pessoas filmadas são de
        responsabilidade do contratante.
      </p>

      <h2>13. Foro</h2>
      <p>
        Fica eleito o foro da Comarca de São Paulo/SP para dirimir eventuais
        controvérsias.
      </p>
    </LegalLayout>
  );
}
