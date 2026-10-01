import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferBanner = () => (
  <section className="bg-background pt-10 lg:pt-14">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="relative overflow-hidden rounded-md border border-primary/30 bg-card shadow-card">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-primary" />
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8 pl-8 lg:pl-10">
          <div className="p-3 bg-accent rounded-md self-start">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <div className="flex-1">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Špeciálna ponuka
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-2">
              Penetračný test za <span className="text-primary">2 000 EUR</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl">
              <strong className="text-foreground">Bonus:</strong> Ak nenájdeme žiadnu zraniteľnosť,
              pentest v budúcom roku dostanete zdarma.
            </p>
          </div>
          <Button size="lg" asChild className="shrink-0">
            <Link to="/contact">
              Mám záujem
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default OfferBanner;
