import Link from "next/link";
import type { ReactNode } from "react";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export default function LegalLayout({
  eyebrow,
  title,
  children,
}: LegalLayoutProps) {
  return (
    <main className="flex flex-1 flex-col bg-canvas">
      <header className="border-b border-ink/10 bg-surface px-6 py-5 sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-medium tracking-[-0.36px] text-ink transition-colors hover:text-blue"
          >
            Drone SP
          </Link>
          <Link
            href="/"
            className="text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Voltar ao início
          </Link>
        </div>
      </header>

      <article className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-medium tracking-widest text-blue uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[36px] leading-tight tracking-[-0.5px] text-ink sm:text-[44px]">
          {title}
        </h1>
        <div className="legal-prose mt-12">{children}</div>
      </article>
    </main>
  );
}
