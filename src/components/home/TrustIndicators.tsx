import { Award, Building2, Users, Shield, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FEATURES } from "@/config/features";
import bonetLogo from "@/assets/partners/bonet-logo.svg";
import tvojKapitanLogo from "@/assets/partners/tvoj-kapitan.png";
import gentlemanSailingLogo from "@/assets/partners/gentleman-sailing.png";
import hudinyLogo from "@/assets/partners/hudiny.jpeg";
import vigReLogo from "@/assets/partners/vig-re-logo.svg";
import intesoftLogo from "@/assets/partners/intesoft.jpg";
import netpointLogo from "@/assets/partners/netpoint.png";
import drinkskingLogo from "@/assets/partners/drinksking.jpg";
import aiDentalLogo from "@/assets/partners/ai-dental.webp";
import exponeaLogo from "@/assets/partners/exponea.png";
import sakLogo from "@/assets/partners/sak.jpeg";
import phishChipsLogo from "@/assets/partners/phish-and-chips.png";

const trustedPartners = [
  //{ name: "Vienna Insurance Group", logo: vigLogo, url: "https://vig.cz/" },
  ...(FEATURES.vigLogo
    ? [
        { name: "VIG Re", logo: vigReLogo, url: "https://www.vig-re.com/" },
        { name: "Slovenská Advokátska Komora", logo: sakLogo, url: "https://www.sak.sk/", large: true },
      ]
    : []),

  { name: "Exponea", logo: exponeaLogo, url: "https://www.bloomreach.com/" },
  { name: "Intesoft", logo: intesoftLogo, url: "https://www.intesoft.eu/" },
  { name: "netPoint", logo: netpointLogo, url: "https://www.netpoint.sk/" },
  { name: "BONET Systems", logo: bonetLogo, url: "https://bonet.systems/", darkTile: true },
  { name: "Tvoj Kapitan", logo: tvojKapitanLogo, url: "https://www.tvojkapitan.sk/", darkTile: true },
  { name: "Gentleman Sailing", logo: gentlemanSailingLogo, url: "https://www.gentlemansailing.sk/" },
  { name: "Hudiny", logo: hudinyLogo, url: "https://hudiny.sk/", large: true },
  { name: "DrinksKing", logo: drinkskingLogo, url: "https://drinksking.sk/" },
  { name: "AI:Dental", logo: aiDentalLogo, url: "https://www.aidental.ai" },
  { name: "Phish & Chips", logo: phishChipsLogo, url: "https://phishchips.org", large: true },
];

const TrustIndicators = () => {
  const { t } = useLanguage();

  const certifications = [
    { name: "ISO 27001", descKey: "trust.certs.iso" },
    { name: "DORA Compliant", descKey: "trust.certs.dora" },
    { name: "NIS2 Compliant", descKey: "trust.certs.nis2" },
  ];


  const stats = [
    { icon: Shield, value: "15+", labelKey: "trust.statsItems.years" },
    { icon: Building2, value: "20+", labelKey: "trust.statsItems.clients" },
    { icon: Users, value: "10+", labelKey: "trust.statsItems.experts" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Certifications */}
        <div className="text-center mb-12">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
            {t("trust.certificationsLabel")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("trust.certificationsTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-16 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-card border border-border">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">{cert.name}</h3>
              <p className="font-body text-sm text-muted-foreground">{t(cert.descKey)}</p>
            </div>
          ))}
        </div>


        {/* Stats */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <stat.icon className="h-8 w-8 text-primary-foreground/80 mx-auto mb-3" />
                <div className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/80">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        {FEATURES.vigQuote && (
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border mb-16 max-w-4xl mx-auto">
            <Quote className="h-10 w-10 text-primary mb-6" />
            <p className="font-body text-lg lg:text-xl text-foreground leading-relaxed mb-8">
              "Moving a global insurance operation from on-premise systems to the cloud is as much a security
              programme as it is an infrastructure one. Over twelve months Red Patronus ran a phased penetration
              testing programme, a full red team engagement and a security architecture review alongside our
              transformation — finding the issues that mattered, explaining them in business terms and staying with us
              until they were closed. We completed the migration with a demonstrably more resilient, DORA-aligned
              environment than the one we left behind."
            </p>
            <div className="border-t border-border pt-6">
              <div className="font-display text-base font-semibold text-foreground">Milan Padych</div>
              <div className="font-body text-sm text-muted-foreground">COO, VIG Re — Czech Republic</div>
              <div className="font-body text-sm text-primary mt-1">Global Insurance Company Transformation</div>
            </div>
          </div>
        )}


        {/* Partners */}
        <div className="bg-foreground rounded-2xl p-8 lg:p-12 text-center">
          <p className="font-body text-sm text-background/70 uppercase tracking-wider mb-8">{t("trust.partners")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustedPartners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 border border-background/20 hover:border-primary/50 hover:bg-background/20 transition-all duration-300"
              >
                <div
                  className={`${partner.darkTile ? "bg-foreground" : "bg-background"} rounded-md px-4 py-3 flex items-center justify-center w-full h-24`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`${partner.large ? "h-20" : "h-12"} max-h-full w-auto object-contain`}
                  />
                </div>
                <span className="font-body text-sm font-medium text-background">{partner.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
