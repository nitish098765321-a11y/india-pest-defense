import { MessageCircle, Phone } from "lucide-react";
import { telLink, waLink } from "./contact";

export function FloatingActions() {
  return (
    <>
      {/* WhatsApp - bottom right */}
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.17_148)] text-white shadow-elegant animate-pulse-ring transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      {/* Mobile Book / Call - bottom left on mobile */}
      <a
        href={telLink()}
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full gradient-hero px-5 py-3 text-sm font-semibold text-primary-foreground shadow-elegant md:hidden"
      >
        <Phone className="h-4 w-4" /> Book Service
      </a>
    </>
  );
}
