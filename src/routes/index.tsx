import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, MessageCircle, ShieldCheck, BadgeCheck, Clock, Sparkles,
  Bug, Leaf, Star, MapPin, ChevronDown, ArrowRight, Calendar,
  Users, Award, ThumbsUp, Search, ClipboardCheck, SprayCan, LifeBuoy, Repeat,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { useReveal } from "@/components/site/useReveal";
import { PHONE_PRIMARY, PHONE_SECONDARY, telLink, waLink, WHATSAPP } from "@/components/site/contact";

import hero from "@/assets/hero.webp";
import imgCockroach from "@/assets/cockroach.webp";
import imgTermite from "@/assets/termite.webp";
import imgRat from "@/assets/rat.webp";
import imgMosquito from "@/assets/mosquito.webp";
import imgAnt from "@/assets/ant.webp";
import imgBedbug from "@/assets/bedbug.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Pest Control of India | Gov't Approved Pest Control Vizianagaram" },
      {
        name: "description",
        content:
          "Gov't approved pest control in Vizianagaram. Safe, no-smell treatment for cockroach, termite, rat, mosquito, ant & bed bug. Same-day service. Long-term warranty.",
      },
      { property: "og:title", content: "National Pest Control of India — Vizianagaram" },
      {
        property: "og:description",
        content:
          "Premium pest control services with safe chemicals, verified experts and same-day booking. Call 8985740048.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "keywords",
        content:
          "pest control Vizianagaram, termite treatment Vizianagaram, cockroach control, residential pest control, commercial pest control, best pest control near me",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "National Pest Control of India",
          image: "https://example.com/og.jpg",
          telephone: ["+91" + PHONE_PRIMARY, "+91" + PHONE_SECONDARY],
          areaServed: "Vizianagaram",
          address: { "@type": "PostalAddress", addressLocality: "Vizianagaram", addressCountry: "IN" },
          priceRange: "₹₹",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1280" },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <PestTypes />
        <EmergencyBanner />
        <Testimonials />
        <Areas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ───────── Hero ───────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div
        className="absolute -top-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"
        style={{ transform: `translateY(${y * 0.15}px)` }}
      />
      <div
        className="absolute -bottom-40 -left-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-success/10 blur-3xl"
        style={{ transform: `translateY(${y * -0.1}px)` }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-semibold text-success">
            <ShieldCheck className="h-3.5 w-3.5" /> Gov't Approved · ISO Certified
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Complete <span className="text-gradient">Pest Control</span> Solutions for Home & Office
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Gov't approved pest control with safe, no-smell treatments. Trusted by 50,000+ homes
            across Vizianagaram with long-term warranty.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telLink()} className="inline-flex items-center gap-2 rounded-full gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-105">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-card transition-transform hover:scale-105">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent">
              <Calendar className="h-4 w-4" /> Book Inspection
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { icon: Leaf, label: "Safe Chemicals" },
              { icon: BadgeCheck, label: "Verified Experts" },
              { icon: Clock, label: "Same Day Service" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 text-center shadow-card">
                <b.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-border shadow-elegant"
            style={{ transform: `translateY(${y * -0.05}px)` }}
          >
            <img src={hero} alt="Professional pest control technician" className="h-full w-full object-cover" width={1600} height={1100} loading="eager" fetchPriority="high" decoding="async" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-5">
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                  <Star className="h-4 w-4 fill-[oklch(0.85_0.18_85)] text-[oklch(0.85_0.18_85)]" /> 4.9/5 · 1,280 Reviews
                </div>
                <div className="mt-1 text-sm font-bold text-foreground">50,000+ Happy Families</div>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 top-10 hidden animate-float rounded-2xl border border-border bg-card p-3 shadow-card md:block">
            <Bug className="h-6 w-6 text-destructive" />
          </div>
          <div className="absolute -right-6 bottom-24 hidden animate-float rounded-2xl border border-border bg-card p-3 shadow-card md:block" style={{ animationDelay: "1s" }}>
            <ShieldCheck className="h-6 w-6 text-success" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Trust strip ───────── */
function TrustStrip() {
  const items = ["Gov't Approved", "ISO Certified", "Safe Chemicals", "Same Day Service", "Long-Term Warranty", "Trained Technicians", "100% Satisfaction"];
  return (
    <section className="border-y border-border bg-surface py-4">
      <div className="mx-auto max-w-7xl overflow-hidden px-4">
        <div className="flex w-max animate-marquee gap-12">
          {[...items, ...items, ...items].map((i, k) => (
            <div key={k} className="flex shrink-0 items-center gap-2 text-sm font-semibold text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-primary" /> {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── About ───────── */
function About() {
  const stats = [
    { v: "15+", l: "Years Experience", icon: Award },
    { v: "50K+", l: "Homes Protected", icon: Users },
    { v: "98%", l: "Repeat Customers", icon: ThumbsUp },
    { v: "24/7", l: "Support Available", icon: Clock },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">About Us</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Vizianagaram's most trusted name in <span className="text-gradient">pest control</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            For over 15 years, National Pest Control of India has protected homes, offices and
            establishments with safe, science-backed pest treatments. Our trained technicians use
            government-approved chemicals and modern equipment to deliver lasting results — without
            harsh smells or risk to your family.
          </p>
          <ul className="mt-6 space-y-3">
            {["Trained & Verified Technicians", "Advanced Tools & Safe Chemicals", "Home Protection Experts", "100% Customer Satisfaction"].map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-success/15 text-success">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <s.icon className="h-7 w-7 text-primary" />
              <div className="mt-4 text-4xl font-extrabold text-foreground">{s.v}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Services ───────── */
const SERVICES = [
  { title: "Cockroach Control", img: imgCockroach, desc: "Gel-bait + spray treatment that eliminates roaches at the source.", benefits: ["Kitchen safe", "No smell", "90-day warranty"] },
  { title: "Termite Treatment", img: imgTermite, desc: "Pre & post-construction termite proofing with anti-termite chemicals.", benefits: ["5–10 yr warranty", "Drilling method", "Wood protection"] },
  { title: "Rat Control", img: imgRat, desc: "Bait stations, glue traps & rodent-proofing for total elimination.", benefits: ["Pet-safe traps", "Sealing entry", "Follow-up visits"] },
  { title: "Mosquito Control", img: imgMosquito, desc: "Indoor & outdoor fogging with larvicide treatment for breeding sites.", benefits: ["Dengue protection", "Garden safe", "Long-lasting"] },
  { title: "Ant Control", img: imgAnt, desc: "Targeted ant gel treatment for kitchens, bathrooms & wall cracks.", benefits: ["Colony killer", "Quick action", "Odourless"] },
  { title: "Bed Bug Treatment", img: imgBedbug, desc: "Mattress, sofa & furniture treatment with steam + chemical method.", benefits: ["100% kill rate", "Fabric safe", "Eggs eliminated"] },
];

function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Premium pest control for every problem
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six specialized services. One trusted team. Backed by warranty.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.title} className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 rounded-full glass px-3 py-1 text-xs font-semibold text-foreground">
                  Warranty Included
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {b}
                    </li>
                  ))}
                </ul>
                <a href={waLink(`Hi, I'm interested in ${s.title}.`)} target="_blank" rel="noreferrer"
                   className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Why Us ───────── */
function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "Gov't Approved Service", d: "Licensed and certified by government authorities." },
    { icon: Leaf, t: "No Smell Treatment", d: "Odourless chemicals safe for daily living." },
    { icon: Users, t: "Safe for Kids & Family", d: "Non-toxic, child & pet-friendly formulations." },
    { icon: BadgeCheck, t: "Long-Term Warranty", d: "Up to 10 years warranty on termite treatment." },
    { icon: Sparkles, t: "Affordable Pricing", d: "Transparent pricing with no hidden charges." },
    { icon: Clock, t: "Fast Response Team", d: "Same-day service across Vizianagaram." },
    { icon: Award, t: "Trained Technicians", d: "Background-verified, expert-level staff." },
    { icon: ThumbsUp, t: "100% Satisfaction", d: "Free re-treatment if issues recur." },
  ];
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            The premium choice for pest control
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="reveal group rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-hero text-primary-foreground transition-transform group-hover:rotate-6">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Process ───────── */
function Process() {
  const steps = [
    { icon: Search, t: "Inspection", d: "We visit your premises and assess pest activity." },
    { icon: ClipboardCheck, t: "Identify Problem", d: "Accurate identification of pest type and source." },
    { icon: SprayCan, t: "Safe Treatment", d: "Targeted treatment with approved chemicals." },
    { icon: LifeBuoy, t: "Prevention Guidance", d: "Tips to keep your home pest-free long term." },
    { icon: Repeat, t: "Follow-up Support", d: "Scheduled visits to ensure 100% elimination." },
  ];
  return (
    <section id="process" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Our Process</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Simple, transparent, effective
          </h2>
        </div>
        <div className="relative mt-14">
          <div className="absolute left-1/2 top-12 hidden h-0.5 w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.t} className="reveal relative rounded-3xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full gradient-hero text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-3 text-xs font-bold text-primary">STEP {i + 1}</div>
                <h3 className="mt-1 text-base font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Pest Types Grid ───────── */
function PestTypes() {
  const pests = [
    { name: "Cockroaches", img: imgCockroach, info: "Carry 33+ types of bacteria. Treat fast." },
    { name: "Rats", img: imgRat, info: "Damage wires, food & spread disease." },
    { name: "Mosquitoes", img: imgMosquito, info: "Cause dengue, malaria & chikungunya." },
    { name: "Termites", img: imgTermite, info: "Silent destroyers of wood & furniture." },
    { name: "Ants", img: imgAnt, info: "Contaminate food, hard to eradicate." },
    { name: "Bed Bugs", img: imgBedbug, info: "Hide in mattresses, cause skin rashes." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Pests We Handle</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Identify your pest problem
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pests.map((p) => (
            <div key={p.name} className="reveal group relative overflow-hidden rounded-2xl border border-border shadow-card aspect-square">
              <img src={p.img} alt={p.name} loading="lazy" width={400} height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                <div className="text-sm font-bold">{p.name}</div>
                <div className="mt-1 max-h-0 overflow-hidden text-xs text-primary-foreground/80 transition-all duration-500 group-hover:max-h-20">
                  {p.info}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Emergency Banner ───────── */
function EmergencyBanner() {
  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-20">
      <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" />
      <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-primary-foreground">
            <Clock className="h-3.5 w-3.5" /> SAME DAY SERVICE
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Need Urgent Pest Control?
          </h2>
          <p className="mt-2 text-primary-foreground/85">
            Call now and our team will be at your doorstep today.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={telLink()} className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-primary shadow-elegant hover:scale-105 transition-transform">
            <Phone className="h-4 w-4" /> Call {PHONE_PRIMARY}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-success px-6 py-3.5 text-sm font-semibold text-success-foreground shadow-elegant hover:scale-105 transition-transform">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", loc: "Vizianagaram", text: "Cockroach problem gone in one visit. Polite team and no smell at all. Highly recommend!" },
    { name: "Rakesh Kumar", loc: "Bobbili", text: "Got termite treatment with 7-year warranty. Very professional and reasonably priced." },
    { name: "Anita Reddy", loc: "Parvathipuram", text: "Same-day service for bed bugs. They were thorough — finally a peaceful sleep!" },
    { name: "Vikram Singh", loc: "Salur", text: "Used them for our office. Mosquito-free since 6 months. Excellent service quality." },
    { name: "Sneha Patel", loc: "Srikakulam", text: "Friendly technicians, safe chemicals. Felt confident with kids around. Will book again." },
    { name: "Arjun Rao", loc: "Visakhapatnam", text: "Best pest control in Vizianagaram. Genuine warranty and follow-up. 5 stars!" },
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Loved by 50,000+ families
          </h2>
        </div>
        <div className="mt-12 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-[340px] shrink-0 rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex items-center gap-1 text-[oklch(0.85_0.18_85)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground">"{r.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-hero text-sm font-bold text-primary-foreground">
                    {r.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{r.name}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Areas ───────── */
function Areas() {
  const areas = ["Vizianagaram", "Bobbili", "Parvathipuram", "Salur", "Cheepurupalli", "Gajapathinagaram", "Nellimarla", "Srikakulam", "Visakhapatnam", "Anakapalle", "Vizag", "Kothavalasa"];
  const types = ["Residential", "Commercial", "Offices", "Apartments", "Restaurants", "Hospitals"];
  return (
    <section id="areas" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Coverage Areas</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Serving Vizianagaram & nearby areas
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <MapPin className="h-5 w-5 text-primary" /> Locations We Cover
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span key={a} className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground">{a}</span>
              ))}
            </div>
          </div>
          <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-card">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <BadgeCheck className="h-5 w-5 text-success" /> Property Types
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {types.map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground">
                  <BadgeCheck className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    { q: "Is pest control safe for children and pets?", a: "Absolutely. We use government-approved, odourless chemicals that are safe for children, pets and the elderly. There's no need to vacate the home." },
    { q: "How long does the treatment last?", a: "Most treatments are effective for 3–6 months. Termite treatment carries a long-term warranty of 5–10 years depending on the package." },
    { q: "Do you offer a warranty on termite treatment?", a: "Yes — we offer up to 10 years of warranty on anti-termite treatment with free re-visits if any activity is found." },
    { q: "Is same-day service available?", a: "Yes. Call before 5 PM and we'll dispatch a technician the same day across Vizianagaram and nearby areas." },
    { q: "How often should I do pest control?", a: "For general pest control, we recommend a quarterly visit. Termite, bed bug and rodent treatments are scheduled per requirement." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="reveal overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="text-base font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Contact ───────── */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Cockroach Control", location: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 80) return toast.error("Enter a valid name");
    if (!/^[6-9]\d{9}$/.test(form.phone)) return toast.error("Enter a valid 10-digit Indian phone");
    if (!form.location.trim()) return toast.error("Enter your location");
    const msg = `*New Booking Request*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Service:* ${form.service}%0A*Location:* ${form.location}%0A*Message:* ${form.message || "—"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };
  const services = ["Cockroach Control", "Termite Treatment", "Rat Control", "Mosquito Control", "Ant Control", "Bed Bug Treatment", "General Pest Control"];

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Get In Touch</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
            Book Today — Get Rid of Pests
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill the form below and we'll connect on WhatsApp instantly. Or call us directly for
            same-day service.
          </p>

          <div className="mt-8 space-y-4">
            {[{n:PHONE_PRIMARY},{n:PHONE_SECONDARY}].map(p => (
              <a key={p.n} href={telLink(p.n)} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Call us</div>
                  <div className="text-base font-bold text-foreground">+91 {p.n}</div>
                </div>
              </a>
            ))}
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-success text-success-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">WhatsApp Support</div>
                <div className="text-base font-bold text-foreground">Chat with us instantly</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Working Hours</div>
                <div className="text-base font-bold text-foreground">Mon–Sun · 8 AM – 9 PM</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="reveal space-y-4 rounded-3xl border border-border bg-card p-7 shadow-elegant">
          <h3 className="text-xl font-bold text-foreground">Request a Free Quote</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={80}
                placeholder="Your full name" className="input" />
            </Field>
            <Field label="Phone">
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g,"").slice(0,10) })}
                placeholder="10-digit mobile" className="input" />
            </Field>
          </div>
          <Field label="Service Needed">
            <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Location">
            <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} maxLength={120}
              placeholder="Area / City" className="input" />
          </Field>
          <Field label="Message (optional)">
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={500}
              rows={3} placeholder="Tell us about the pest problem..." className="input resize-none" />
          </Field>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full gradient-hero py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
            <MessageCircle className="h-4 w-4" /> Send via WhatsApp
          </button>
          <p className="text-center text-xs text-muted-foreground">
            By submitting you'll be redirected to WhatsApp at {PHONE_PRIMARY}.
          </p>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 0.875rem;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-primary) 12%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground">{label}</span>
      {children}
    </label>
  );
}
