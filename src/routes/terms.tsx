import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | National Pest Control of India" },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of National Pest Control of India services across Andhra Pradesh.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <article className="prose prose-slate max-w-none space-y-8 text-foreground/80">
          <Section title="1. Introduction">
            Welcome to National Pest Control of India ("we", "us", "our"). By
            booking, accessing, or using our pest control services, you agree to
            be bound by these Terms & Conditions. Please read them carefully
            before availing our services.
          </Section>

          <Section title="2. Services">
            We provide professional pest control services including cockroach
            control, rat control, mosquito control, termite treatment, ant
            control, bed bug treatment, and related sanitation services across
            Andhra Pradesh. All services are delivered by trained technicians
            using government-approved chemicals and methods.
          </Section>

          <Section title="3. Booking & Appointments">
            Service bookings can be made via phone, WhatsApp, or our website
            contact form. Appointment timings are confirmed mutually. The
            customer must ensure access to the premises at the scheduled time.
            Rescheduling requests should be made at least 4 hours in advance.
          </Section>

          <Section title="4. Pricing & Payment">
            Service charges are quoted based on property size, infestation level,
            and treatment type. Final pricing is confirmed before service
            commencement. Payment is due upon completion of service unless
            otherwise agreed. We accept cash, UPI, and bank transfer.
          </Section>

          <Section title="5. Warranty">
            Eligible treatments carry a service warranty as communicated at the
            time of booking. Warranty covers free re-treatment within the
            warranty period if pest activity recurs, subject to the customer
            following post-treatment care instructions.
          </Section>

          <Section title="6. Customer Responsibilities">
            Customers must disclose accurate information about the property,
            infestation, occupants (including pets, infants, and pregnant
            women), and any allergies. Customers should follow pre-treatment
            preparation and post-treatment safety guidelines provided by our
            technicians.
          </Section>

          <Section title="7. Health & Safety">
            We use chemicals approved by the Central Insecticides Board (CIB).
            While our treatments are safe for humans and pets when guidelines
            are followed, we are not liable for adverse reactions caused by
            undisclosed allergies or non-compliance with safety instructions.
          </Section>

          <Section title="8. Limitation of Liability">
            Our liability is limited to the cost of the service rendered. We are
            not responsible for indirect, incidental, or consequential damages
            including damage to personal property arising from access, movement,
            or pest behaviour during or after treatment.
          </Section>

          <Section title="9. Cancellation & Refunds">
            Cancellations made at least 4 hours before the appointment are free
            of charge. Late cancellations or no-shows may incur a visit fee.
            Refunds, if applicable, are processed within 7 business days.
          </Section>

          <Section title="10. Privacy">
            Customer details collected during booking are used solely for
            service delivery, follow-up, and warranty fulfilment. We do not
            sell or share your personal information with third parties.
          </Section>

          <Section title="11. Changes to Terms">
            We reserve the right to update these Terms & Conditions at any time.
            Continued use of our services after changes constitutes acceptance
            of the revised terms.
          </Section>

          <Section title="12. Contact">
            For any questions regarding these terms, contact us at{" "}
            <a href="tel:+918985740048" className="font-medium text-primary hover:underline">
              +91 8985740048
            </a>{" "}
            or{" "}
            <a href="tel:+917095755301" className="font-medium text-primary hover:underline">
              +91 7095755301
            </a>
            .
          </Section>
        </article>

        <div className="mt-12 border-t border-border pt-6">
          <Link to="/" className="text-sm font-medium text-primary hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-foreground">{title}</h2>
      <p className="leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
