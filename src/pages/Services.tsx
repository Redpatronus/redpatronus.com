import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Shield, Radar, GraduationCap, ClipboardCheck, KeyRound, Fish, Activity, ArrowRight, CheckCircle, Cloud } from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/icons/CloudLogos";
import { useLanguage } from "@/contexts/LanguageContext";

const cloudPlatforms = [
  { name: "AWS", Logo: AWSLogo, bgColor: "bg-[#FF9900]/10 hover:bg-[#FF9900]/20 border-[#FF9900]/30" },
  { name: "Azure", Logo: AzureLogo, bgColor: "bg-[#0089D6]/10 hover:bg-[#0089D6]/20 border-[#0089D6]/30" },
  { name: "GCP", Logo: GCPLogo, bgColor: "bg-[#4285F4]/10 hover:bg-[#4285F4]/20 border-[#4285F4]/30" },
];

const serviceItems = [
  { icon: Target, key: "offensive", href: "/services/offensive" },
  { icon: Cloud, key: "cloud", href: "/services/cloud-security", hasCloudPlatforms: true },
  { icon: Shield, key: "defensive", href: "/services/defensive" },
  { icon: Radar, key: "etsm", href: "/services/etsm" },
  { icon: GraduationCap, key: "training", href: "/services/training" },
  { icon: ClipboardCheck, key: "compliance", href: "/services/compliance" },
  { icon: KeyRound, key: "iam", href: "/services/iam" },
  { icon: Fish, key: "phishing", href: "/services/phishing" },
  { icon: Activity, key: "siem", href: "/services/siem" },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>DORA-Compliant Security Services | Red Patronus</title>
        <meta name="description" content="Red Patronus DORA-compliant cybersecurity services: penetration testing, red team, cloud security, compliance audits, IAM, and security training for enterprises." />
        <link rel="canonical" href="https://redpatronus.com/services" />
      </Helmet>
      <Layout>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              {t("servicesPage.heroLabel")}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t("servicesPage.heroTitle")}
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("servicesPage.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 lg:space-y-16">
              {serviceItems.map((service) => {
                const features = [0, 1, 2, 3, 4, 5].map((i) =>
                  t(`servicesPage.items.${service.key}.features.${i}`)
                );
                return (
                  <div key={service.key} className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                      <div>
                        <div className="p-3 bg-accent rounded-lg inline-block mb-4">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                          {t(`servicesPage.items.${service.key}.title`)}
                        </h2>
                        <p className="font-body text-muted-foreground leading-relaxed mb-6">
                          {t(`servicesPage.items.${service.key}.description`)}
                        </p>
                        <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <Link to={service.href}>
                            {t("services.learnMore")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>

                        {service.hasCloudPlatforms && (
                          <div className="mt-6 pt-6 border-t border-border/50">
                            <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">
                              {t("servicesPage.securingCloud")}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cloudPlatforms.map((platform) => (
                                <div key={platform.name} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors ${platform.bgColor}`}>
                                  <platform.Logo className="h-4 w-4" />
                                  <span className="text-sm font-semibold text-foreground">{platform.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="bg-secondary/50 rounded-xl p-6">
                        <h3 className="font-display text-base font-semibold text-foreground mb-5">
                          {t("servicesPage.keyCapabilities")}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border/50">
                              <div className="p-1 bg-primary/10 rounded-md mt-0.5">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              </div>
                              <span className="font-body text-sm text-foreground leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t("servicesPage.customTitle")}
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("servicesPage.customSubtitle")}
            </p>
            <Button size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                {t("servicesPage.customButton")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
