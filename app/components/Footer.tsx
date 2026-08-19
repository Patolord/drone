import Link from "next/link";
import { WHATSAPP_DISPLAY } from "../lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-surface px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-muted">
        <p>
          © {year} Drone SP · Filmagem e fotografia aérea · Santana, São Paulo
        </p>
        <p>WhatsApp {WHATSAPP_DISPLAY}</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <Link
            href="/termos"
            className="underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Termos de Serviço
          </Link>
          <Link
            href="/privacidade"
            className="underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Política de Privacidade
          </Link>
        </nav>
      </div>
    </footer>
  );
}
