import { Link } from "react-router-dom";
import { ArrowRight, Mail, ShieldCheck, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const EMAIL = "info@redpatronus.com";

type Copy = {
  eyebrow: string; title: string; oldPrice: string; price: string; priceNote: string; offerNote: string;
  bonusLabel: string; bonus: string; detailsTitle: string; details: string[];
  optionsTitle: string; options: { price: string; label: string }[];
  cta: string; orEmail: string;
};

const copy: Record<Language, Copy> = {
  en: {
    eyebrow: "Black Friday special deal",
    title: "Automated penetration test",
    oldPrice: "€3,000", price: "€1,000",
    priceNote: "excl. VAT",
    offerNote: "Valid for orders placed by 12 December 2026.",
    bonusLabel: "Zero-findings guarantee",
    bonus: "If we find no vulnerability, next year's pentest is free.",
    detailsTitle: "What's included",
    details: [
      "Automated, unauthenticated security test",
      "Web application or external infrastructure scope",
      "Security testing aligned with OWASP Top 10 and PTES",
      "Executive summary and technical report with PoC",
      "Risk-prioritized remediation guidance",
    ],
    optionsTitle: "Optional add-ons",
    options: [
      { price: "+€1,000", label: "Delivery within 24 hours (invoiced immediately)" },
      { price: "+€1,000", label: "Authenticated testing" },
    ],
    cta: "Book your pentest",
    orEmail: "or write to us directly",
  },
  sk: {
    eyebrow: "Black Friday špeciálna ponuka",
    title: "Automatizovaný penetračný test",
    oldPrice: "3 000 €", price: "1 000 €",
    priceNote: "bez DPH",
    offerNote: "Platí pre objednávky do 12. 12. 2026.",
    bonusLabel: "Garancia nulových nálezov",
    bonus: "Ak nenájdeme žiadnu zraniteľnosť, pentest v budúcom roku dostanete zdarma.",
    detailsTitle: "Čo test obsahuje",
    details: [
      "Automatizovaný, neautentifikovaný bezpečnostný test",
      "Rozsah: webová aplikácia alebo externá infraštruktúra",
      "Testovanie podľa OWASP Top 10 a PTES",
      "Manažérske zhrnutie a technická správa s PoC",
      "Odporúčania na nápravu zoradené podľa rizika",
    ],
    optionsTitle: "Voliteľné doplnky",
    options: [
      { price: "+1 000 €", label: "Dodanie do 24 hodín (fakturácia ihneď)" },
      { price: "+1 000 €", label: "Autentifikované testovanie" },
    ],
    cta: "Objednať pentest",
    orEmail: "alebo nám napíšte priamo",
  },
  de: {
    eyebrow: "Black-Friday-Sonderangebot",
    title: "Automatisierter Penetrationstest",
    oldPrice: "3.000 €", price: "1.000 €",
    priceNote: "zzgl. MwSt.",
    offerNote: "Gültig für Bestellungen bis 12.12.2026.",
    bonusLabel: "Null-Befund-Garantie",
    bonus: "Finden wir keine Schwachstelle, erhalten Sie den Pentest im nächsten Jahr kostenlos.",
    detailsTitle: "Leistungsumfang",
    details: [
      "Automatisierter, nicht authentifizierter Sicherheitstest",
      "Umfang: Webanwendung oder externe Infrastruktur",
      "Tests nach OWASP Top 10 und PTES",
      "Management-Summary und technischer Bericht mit PoC",
      "Risikopriorisierte Empfehlungen zur Behebung",
    ],
    optionsTitle: "Optionale Erweiterungen",
    options: [
      { price: "+1.000 €", label: "Lieferung innerhalb von 24 Stunden (sofortige Rechnung)" },
      { price: "+1.000 €", label: "Authentifizierte Tests" },
    ],
    cta: "Pentest anfragen",
    orEmail: "oder schreiben Sie uns direkt",
  },
  fr: {
    eyebrow: "Offre spéciale Black Friday",
    title: "Test d'intrusion automatisé",
    oldPrice: "3 000 €", price: "1 000 €",
    priceNote: "HT",
    offerNote: "Valable pour toute commande avant le 12/12/2026.",
    bonusLabel: "Garantie zéro vulnérabilité",
    bonus: "Si nous ne trouvons aucune vulnérabilité, le pentest de l'année prochaine est offert.",
    detailsTitle: "Ce qui est inclus",
    details: [
      "Test de sécurité automatisé, non authentifié",
      "Périmètre : application web ou infrastructure externe",
      "Tests selon OWASP Top 10 et PTES",
      "Synthèse dirigeants et rapport technique avec PoC",
      "Recommandations de remédiation priorisées",
    ],
    optionsTitle: "Options supplémentaires",
    options: [
      { price: "+1 000 €", label: "Livraison sous 24 heures (facturation immédiate)" },
      { price: "+1 000 €", label: "Tests authentifiés" },
    ],
    cta: "Réserver un pentest",
    orEmail: "ou écrivez-nous directement",
  },
};

const OfferBanner = () => {
  const { language } = useLanguage();
  const c = copy[language] ?? copy.en;

  return (
    <section className="bg-background pt-12 lg:pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-foreground via-foreground to-primary text-background shadow-elegant">
          {/* decorative grid + glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/60 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 p-8 lg:p-12">
            {/* Left: offer */}
            <div className="flex flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-sm border border-background/20 bg-background/10 px-3 py-1 font-body text-xs font-semibold uppercase tracking-[0.18em]">
                <ShieldCheck className="h-3.5 w-3.5" />
                {c.eyebrow}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-5 leading-tight">
                {c.title}
              </h2>
              <div className="mt-5 flex flex-wrap items-end gap-3">
                <span className="mb-2 font-display text-2xl lg:text-3xl font-semibold text-background/50 line-through">
                  {c.oldPrice}
                </span>
                <span className="font-display text-6xl lg:text-7xl font-extrabold tracking-tight">
                  {c.price}
                </span>
                <span className="mb-3 font-body text-sm text-background/70">{c.priceNote}</span>
              </div>
              <p className="mt-2 font-body text-sm text-background/70">{c.offerNote}</p>

              <div className="mt-6 flex gap-3 rounded-md border border-background/20 bg-background/10 p-4 backdrop-blur-sm">
                <Gift className="h-6 w-6 shrink-0 text-background" />
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-background/80">
                    {c.bonusLabel}
                  </p>
                  <p className="font-body mt-1 font-medium leading-snug">{c.bonus}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Button size="lg" asChild className="bg-background text-primary hover:bg-background/90">
                  <Link to="/contact">
                    {c.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href={`mailto:${EMAIL}?subject=Black%20Friday%20Pentest%201000%20EUR`}
                  className="inline-flex items-center gap-2 font-body text-sm text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>{c.orEmail}: <span className="underline underline-offset-4">{EMAIL}</span></span>
                </a>
              </div>
            </div>

            {/* Right: details */}
            <div className="rounded-md border border-background/15 bg-background/5 p-6 lg:p-8">
              <h3 className="font-display text-lg font-semibold mb-5">{c.detailsTitle}</h3>
              <ul className="space-y-3.5">
                {c.details.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-primary">
                      <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm lg:text-base text-background/90">{d}</span>
                  </li>
                ))}
              </ul>
              <h3 className="font-display text-lg font-semibold mt-8 mb-4">{c.optionsTitle}</h3>
              <ul className="space-y-3">
                {c.options.map((o) => (
                  <li key={o.label} className="flex items-start gap-3 rounded-sm border border-background/15 bg-background/5 px-3 py-2.5">
                    <span className="shrink-0 font-display text-sm font-bold">{o.price}</span>
                    <span className="font-body text-sm text-background/90">{o.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
