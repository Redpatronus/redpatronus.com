import { Link } from "react-router-dom";
import { ArrowRight, Mail, ShieldCheck, Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";

const EMAIL = "info@redpatronus.com";

type Copy = {
  eyebrow: string; title: string; price: string; priceNote: string;
  bonusLabel: string; bonus: string; detailsTitle: string; details: string[];
  cta: string; orEmail: string;
};

const copy: Record<Language, Copy> = {
  en: {
    eyebrow: "Limited offer",
    title: "Professional penetration test",
    price: "€2,000",
    priceNote: "fixed price, excl. VAT",
    bonusLabel: "Zero-findings guarantee",
    bonus: "If we find no vulnerability, next year's pentest is on us — free of charge.",
    detailsTitle: "What's included",
    details: [
      "Web application or external infrastructure scope",
      "Manual testing aligned with OWASP Top 10 and PTES",
      "Up to 5 testing days by certified specialists",
      "Executive summary and technical report with PoC",
      "Risk-prioritized remediation guidance",
      "Free retest of fixed findings and attestation letter",
    ],
    cta: "Book your pentest",
    orEmail: "or write to us directly",
  },
  sk: {
    eyebrow: "Limitovaná ponuka",
    title: "Profesionálny penetračný test",
    price: "2 000 €",
    priceNote: "pevná cena, bez DPH",
    bonusLabel: "Garancia nulových nálezov",
    bonus: "Ak nenájdeme žiadnu zraniteľnosť, pentest v budúcom roku dostanete zdarma.",
    detailsTitle: "Čo test obsahuje",
    details: [
      "Rozsah: webová aplikácia alebo externá infraštruktúra",
      "Manuálne testovanie podľa OWASP Top 10 a PTES",
      "Až 5 testovacích dní certifikovaných špecialistov",
      "Manažérske zhrnutie a technická správa s PoC",
      "Odporúčania na nápravu zoradené podľa rizika",
      "Bezplatný retest opráv a potvrdenie pre audit",
    ],
    cta: "Objednať pentest",
    orEmail: "alebo nám napíšte priamo",
  },
  de: {
    eyebrow: "Limitiertes Angebot",
    title: "Professioneller Penetrationstest",
    price: "2.000 €",
    priceNote: "Festpreis, zzgl. MwSt.",
    bonusLabel: "Null-Befund-Garantie",
    bonus: "Finden wir keine Schwachstelle, erhalten Sie den Pentest im nächsten Jahr kostenlos.",
    detailsTitle: "Leistungsumfang",
    details: [
      "Umfang: Webanwendung oder externe Infrastruktur",
      "Manuelle Tests nach OWASP Top 10 und PTES",
      "Bis zu 5 Testtage durch zertifizierte Spezialisten",
      "Management-Summary und technischer Bericht mit PoC",
      "Risikopriorisierte Empfehlungen zur Behebung",
      "Kostenloser Retest und Bestätigungsschreiben",
    ],
    cta: "Pentest anfragen",
    orEmail: "oder schreiben Sie uns direkt",
  },
  fr: {
    eyebrow: "Offre limitée",
    title: "Test d'intrusion professionnel",
    price: "2 000 €",
    priceNote: "prix fixe, HT",
    bonusLabel: "Garantie zéro vulnérabilité",
    bonus: "Si nous ne trouvons aucune vulnérabilité, le pentest de l'année prochaine est offert.",
    detailsTitle: "Ce qui est inclus",
    details: [
      "Périmètre : application web ou infrastructure externe",
      "Tests manuels selon OWASP Top 10 et PTES",
      "Jusqu'à 5 jours de test par des spécialistes certifiés",
      "Synthèse dirigeants et rapport technique avec PoC",
      "Recommandations de remédiation priorisées",
      "Retest gratuit et lettre d'attestation",
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
              <div className="mt-5 flex items-end gap-3">
                <span className="font-display text-6xl lg:text-7xl font-extrabold tracking-tight">
                  {c.price}
                </span>
                <span className="mb-3 font-body text-sm text-background/70">{c.priceNote}</span>
              </div>

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
                  href={`mailto:${EMAIL}?subject=Pentest%202000%20EUR`}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
