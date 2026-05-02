"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "../lib/whatsapp";

/**
 * Official WhatsApp glyph as inline SVG — lucide doesn't ship a brand icon
 * for WhatsApp, and an accurate logo helps user recognition on the floater.
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 17.2c-.29-.15-1.73-.85-2-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.19-.35.22-.64.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.51-.07-.15-.67-1.6-.91-2.19-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.51.07-.77.37-.27.29-1.01.99-1.01 2.42 0 1.43 1.04 2.81 1.19 3 .15.2 2.05 3.13 4.97 4.39.69.3 1.23.47 1.65.6.69.22 1.32.19 1.82.12.55-.08 1.73-.71 1.97-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.56-.34zM16.03 5.34c-5.88 0-10.66 4.78-10.66 10.66 0 1.88.49 3.71 1.42 5.33l-1.51 5.5 5.64-1.48c1.56.85 3.32 1.3 5.11 1.3 5.88 0 10.66-4.78 10.66-10.66S21.91 5.34 16.03 5.34zm0 19.52c-1.6 0-3.17-.43-4.54-1.24l-.32-.19-3.35.88.89-3.26-.21-.33a8.84 8.84 0 01-1.36-4.72c0-4.89 3.98-8.86 8.87-8.86 4.89 0 8.86 3.98 8.86 8.86 0 4.89-3.97 8.86-8.86 8.86z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  // Only fade the button in after the user has scrolled a bit, so it doesn't
  // compete with the hero CTA on first paint.
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className={`group fixed right-4 bottom-4 z-50 inline-flex items-center gap-3 transition-all duration-300 sm:right-6 sm:bottom-6 ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {/* Tooltip label — desktop only. */}
      <span className="hidden rounded-full border border-white/10 bg-zinc-900/90 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md sm:inline-block">
        Fale no WhatsApp
      </span>

      {/* Round button with a pulsing emerald ring. */}
      <span className="pulse-ring relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-black shadow-[0_10px_30px_-5px_rgba(16,185,129,0.8)] transition-transform duration-200 group-hover:scale-110 group-hover:bg-emerald-400 group-focus-visible:ring-2 group-focus-visible:ring-emerald-300 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-black sm:h-16 sm:w-16">
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}
