export const WHATSAPP_NUMBER = "5511996153626";

export const DEFAULT_MESSAGE =
  "Olá, gostaria de solicitar um orçamento de filmagem com drone";

export function buildWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
