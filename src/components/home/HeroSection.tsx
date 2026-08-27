import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/icons/CloudLogos";
import { useLanguage } from "@/contexts/LanguageContext";
import LeetText from "./LeetText";

const HeroSection = () => {
  const { t } = useLanguage();

  const highlights = [t("hero.highlight1"), t("hero.highlight2"), t("hero.highlight3")];

  const cloudPlatforms = [
    { name: "AWS", Logo: AWSLogo },
    { name: "Azure", Logo: AzureLogo },
    { name: "Google Cloud", Logo: GCPLogo },
  ];

  return (
    <section className="gradient-hero py-10 lg:py-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in flex flex-col items-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Enterprise Security Partner
          </span>

          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-5 whitespace-pre-line">
            <LeetText text={t("hero.title")} />
          </h1>

          <p className="font-body text-base lg:text-lg text-muted-foreground mb-7 leading-relaxed max-w-2xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">{t("hero.secondaryCta")}</Link>
            </Button>
          </div>

          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <Check className="h-3.5 w-3.5 shrink-0 text-primary" strokeWidth={2.5} />
                <span className="font-body text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* Multi-cloud strip */}
          <div className="w-full max-w-2xl px-4 py-3 bg-card rounded-md border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-x-6 gap-y-2">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Multi-cloud
              </span>
              <div className="flex flex-wrap gap-4 justify-center">
                {cloudPlatforms.map((platform) => (
                  <div key={platform.name} className="flex items-center gap-2">
                    <platform.Logo className="h-4 w-4" />
                    <span className="font-body text-sm text-foreground">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
