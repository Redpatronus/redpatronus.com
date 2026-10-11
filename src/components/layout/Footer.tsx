import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE } from "@/seo/site.js";
import logoRedpatronus from "@/assets/rp-logo-footer.svg";


const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoRedpatronus} alt="Red Patronus" className="h-10 w-auto" />
            </Link>
            <p className="font-body text-sm text-background/70 mb-6 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/redpatronus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Redpatronus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/Redpatronus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <nav aria-label={t("footer.services")}>
            <h2 className="font-display text-lg font-semibold mb-4">{t("footer.services")}</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/penetration-testing"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("footer.pentest")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/red-team"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("footer.redTeam")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/offensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.offensive.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/defensive"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.defensive.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cloud-security"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.cloud.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.compliance.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security-consulting"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.consulting.title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/training"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("services.training.title")}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={t("footer.company")}>
            <h2 className="font-display text-lg font-semibold mb-4">{t("footer.company")}</h2>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("nav.caseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/hiring"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("nav.hiring")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-lg font-semibold mb-4">{t("footer.contactInfo")}</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/60" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/60" />
                <a
                  href={`tel:${SITE.telephone}`}
                  className="font-body text-sm text-background/70 hover:text-background transition-colors"
                >
                  {SITE.telephoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-background/60 mt-0.5" />
                <span className="font-body text-sm text-background/70">
                  {SITE.address.street}<br />
                  {SITE.address.postal} {SITE.address.locality}<br />
                  {SITE.address.countryName}
                </span>
              </li>
            </ul>
            <p className="font-body text-xs text-background/50 mt-4 leading-relaxed">
              {SITE.legalName}<br />
              IČO {SITE.ico}<br />
              DIČ {SITE.dic} · IČ DPH {SITE.vatId}
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <p className="font-body text-sm text-background/60">
              © {new Date().getFullYear()} Red Patronus. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
