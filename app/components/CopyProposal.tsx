"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { buildProposalMessage } from "../lib/whatsapp";

function subscribe() {
  return () => {};
}

function getOriginSnapshot() {
  return window.location.origin;
}

function getOriginServerSnapshot() {
  return "";
}

type Variant = {
  title: string;
  hint: string;
  imageRightsReserved: boolean;
  extrasLine: string;
  total: string;
};

const variants: Variant[] = [
  {
    title: "Pacote-base",
    hint: "Autorização de uso de imagem no site e no portfólio.",
    imageRightsReserved: false,
    extrasLine: "nenhum",
    total: "R$900",
  },
  {
    title: "Com direito de imagem",
    hint: "Reserva do direito pelo contratante. Sem publicação. Extra na proposta.",
    imageRightsReserved: true,
    extrasLine: "direito de imagem R$300",
    total: "R$1.200 (R$900 + R$300 direito de imagem)",
  },
];

function ProposalCard({
  variant,
  termsUrl,
}: {
  variant: Variant;
  termsUrl: string;
}) {
  const [copied, setCopied] = useState(false);
  const message = useMemo(
    () =>
      buildProposalMessage({
        termsUrl,
        extrasLine: variant.extrasLine,
        total: variant.total,
        imageRightsReserved: variant.imageRightsReserved,
      }),
    [termsUrl, variant],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-ink/10 bg-surface p-5">
      <p className="text-sm font-medium text-ink">{variant.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{variant.hint}</p>
      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-xl bg-canvas p-4 text-left text-xs leading-relaxed text-ink">
        {message}
      </pre>
      <button
        type="button"
        onClick={() => void copy()}
        className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        {copied ? "Copiado" : "Copiar proposta"}
      </button>
    </div>
  );
}

export default function CopyProposal() {
  const origin = useSyncExternalStore(
    subscribe,
    getOriginSnapshot,
    getOriginServerSnapshot,
  );
  const termsUrl = origin ? `${origin}/termos` : "/termos";

  return (
    <div className="mt-8 grid gap-5">
      {variants.map((variant) => (
        <ProposalCard
          key={variant.title}
          variant={variant}
          termsUrl={termsUrl}
        />
      ))}
    </div>
  );
}
