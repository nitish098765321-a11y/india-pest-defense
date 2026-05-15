import { Phone, MessageCircle, MapPin, Mail, Bug } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, telLink, waLink } from "./contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-hero">
              <Bug className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-bold">National Pest Control of India</div>
              <div className="text-[10px] uppercase tracking-wider text-success">Gov't Approved</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Trusted pest control services across Andhra Pradesh with safe, no-smell treatments and
            long-term warranty.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              "Cockroach Control",
              "Rat Control",
              "Mosquito Control",
              "Termite Treatment",
              "Ant Control",
              "Bed Bug Treatment",
            ].map((s) => (
              <li key={s}>
                <a href="#services" className="hover:text-primary-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              ["#why", "Why Choose Us"],
              ["#process", "Our Process"],
              ["#areas", "Coverage Areas"],
              ["#faq", "FAQs"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-primary-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a href={telLink(PHONE_PRIMARY)} className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone className="h-4 w-4" /> +91 {PHONE_PRIMARY}
              </a>
            </li>
            <li>
              <a href={telLink(PHONE_SECONDARY)} className="flex items-center gap-2 hover:text-primary-foreground">
                <Phone className="h-4 w-4" /> +91 {PHONE_SECONDARY}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp Support
              </a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> All over Andhra Pradesh</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> Mon–Sun · 8 AM – 9 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} National Pest Control of India. All rights reserved.</p>
          <p>Pest Control · Termite · Cockroach · Rat · Mosquito · Andhra Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
