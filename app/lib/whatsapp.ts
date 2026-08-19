export const WHATSAPP_NUMBER = "5511996153626";
export const WHATSAPP_DISPLAY = "(11) 99615-3626";

export const DEFAULT_MESSAGE =
  "Olá, gostaria de solicitar um orçamento de filmagem com drone";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type ProposalInput = {
  termsUrl: string;
  locationDate?: string;
  extrasLine?: string;
  total?: string;
  imageRightsReserved?: boolean;
};

/** Proposta completa enviada no fechamento. O cliente responde só ACEITO. */
export function buildProposalMessage({
  termsUrl,
  locationDate = "[preencher]",
  extrasLine = "nenhum",
  total = "R$900",
  imageRightsReserved = false,
}: ProposalInput): string {
  const imageLine = imageRightsReserved
    ? "Direito de imagem: reservado ao cliente. Sem uso no site, redes ou portfólio."
    : "Incluso: captação e autorização de uso de imagem no site, redes e portfólio.";

  return [
    "*Proposta — Drone SP*",
    "Serviço: captação aérea, até 30 min brutos, entrega do material bruto.",
    `Local / data: ${locationDate}`,
    `Valor: ${total} (Pix).`,
    imageLine,
    "Não incluso (se contratado, entra em extras): edição; reserva de direito de imagem; demais casos especiais.",
    `Extras desta proposta: ${extrasLine}.`,
    `Termos: ${termsUrl}`,
    "Respondendo *ACEITO*, você concorda com esta proposta e com os Termos (incluindo o direito de imagem acima).",
  ].join("\n");
}
