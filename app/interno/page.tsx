import type { Metadata } from "next";
import CopyProposal from "../components/CopyProposal";
import LegalLayout from "../components/LegalLayout";

export const metadata: Metadata = {
  title: "Modelos de proposta — Drone SP",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function InternoPage() {
  return (
    <LegalLayout eyebrow="Referência" title="Modelos de proposta">
      <p>
        Textos para envio no WhatsApp no fechamento do serviço. Preencher local
        e data antes do envio. O aceite é a resposta ACEITO à mensagem
        enviada.
      </p>
      <ul>
        <li>Pacote-base: autorização de uso de imagem inclusa.</li>
        <li>
          Direito de imagem: reserva do direito pelo contratante, sem
          publicação; valor extra na proposta.
        </li>
      </ul>
      <CopyProposal />
    </LegalLayout>
  );
}
