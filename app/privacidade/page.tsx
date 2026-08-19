import type { Metadata } from "next";
import LegalLayout from "../components/LegalLayout";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Política de Privacidade — Drone SP",
  description:
    "Como a Drone SP trata dados pessoais no site, no WhatsApp e nas imagens aéreas, conforme a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <LegalLayout eyebrow="LGPD" title="Política de Privacidade">
      <p>
        Esta política descreve como a Drone SP trata dados pessoais no site e
        na prestação do serviço, nos termos da Lei nº 13.709/2018 (LGPD).
      </p>

      <h2>1. Controlador</h2>
      <p>
        Drone SP, filmagem e fotografia aérea em São Paulo. Contato: WhatsApp{" "}
        <a href={buildWhatsAppUrl()}>{WHATSAPP_DISPLAY}</a>. Santana, São Paulo.
      </p>

      <h2>2. Quais dados tratamos</h2>
      <ul>
        <li>número de telefone e mensagens enviadas pelo WhatsApp;</li>
        <li>nome, briefing, local e data do serviço, quando você informa;</li>
        <li>
          imagens e áudios captados no trabalho, que podem identificar pessoas.
        </li>
      </ul>
      <p>
        O site não usa cookies de analytics nem formulários. O contato é feito
        pelo WhatsApp.
      </p>

      <h2>3. Para que usamos</h2>
      <ul>
        <li>responder orçamentos e prestar o serviço;</li>
        <li>enviar a proposta e registrar o aceite;</li>
        <li>
          divulgar trechos no site, redes e portfólio, quando a proposta incluir
          autorização de uso de imagem;
        </li>
        <li>cumprir obrigações legais, se houver.</li>
      </ul>

      <h2>4. Base legal</h2>
      <p>
        Tratamos dados para executar o contrato (orçamento e serviço), para
        contato pré-contratual e, quando a proposta autorizar uso de imagem,
        com base nessa autorização. Imagens que identificam pessoas são dados
        pessoais.
      </p>

      <h2>5. Compartilhamento</h2>
      <p>
        Não vendemos dados. Podemos compartilhar apenas o necessário com
        ferramentas de comunicação (WhatsApp) e se a lei exigir.
      </p>

      <h2>6. Conservação</h2>
      <p>
        Mensagens e materiais ficam o tempo necessário para o serviço, para
        portfólio quando autorizado, e para eventuais obrigações legais.
      </p>

      <h2>7. Seus direitos</h2>
      <p>
        Você pode solicitar confirmação de tratamento, acesso, correção,
        anonimização, eliminação, informação sobre compartilhamentos e
        revogação da autorização de uso de imagem, nos termos dos arts. 9º e
        18 da LGPD, pelo WhatsApp{" "}
        <a href={buildWhatsAppUrl()}>{WHATSAPP_DISPLAY}</a>.
      </p>
      <p>
        A revogação do uso de imagem para portfólio vale para o futuro e não
        desfaz o serviço já prestado. Materiais já publicados podem ser
        retirados em prazo razoável após o pedido.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Esta política pode ser atualizada. A versão vigente é a publicada nesta
        página.
      </p>
    </LegalLayout>
  );
}
