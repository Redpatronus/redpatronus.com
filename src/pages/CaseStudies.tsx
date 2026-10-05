import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Shield, CheckCircle, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CaseStudies = () => {
  const { t } = useLanguage();

  const studyKeys = ["financial", "healthcare", "technology"];
  const testimonialKeys = ["t1", "t2"];

  return (
    <>
      <Helmet>
        <title>Case Studies | Red Patronus - Enterprise Security Success Stories</title>
        <meta name="description" content="Explore how Red Patronus has helped 300+ enterprise organizations achieve DORA compliance and strengthen security." />
        <link rel="canonical" href="https://redpatronus.com/case-studies" />
      </Helmet>
      <Layout>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              {t("caseStudies.heroLabel")}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t("caseStudies.heroTitle")}
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("caseStudies.heroSubtitle")}
            </p>
          </div>
        </section>


        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 lg:space-y-16">
              {studyKeys.map((key) => {
                const results = [
                  t(`caseStudies.studies.${key}.results.0`),
                  t(`caseStudies.studies.${key}.results.1`),
                  t(`caseStudies.studies.${key}.results.2`),
                  t(`caseStudies.studies.${key}.results.3`),
                ];
                return (
                  <div key={key} className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                        {t(`caseStudies.studies.${key}.industry`)}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                      {t(`caseStudies.studies.${key}.title`)}
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          {t("caseStudies.challenge")}
                        </h3>
                        <p className="font-body text-foreground leading-relaxed">
                          {t(`caseStudies.studies.${key}.challenge`)}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          {t("caseStudies.solution")}
                        </h3>
                        <p className="font-body text-foreground leading-relaxed">
                          {t(`caseStudies.studies.${key}.solution`)}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          {t("caseStudies.results")}
                        </h3>
                        <ul className="space-y-2">
                          {results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                              <span className="font-body text-sm text-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
                {t("caseStudies.testimonialsLabel")}
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3">
                {t("caseStudies.testimonialsTitle")}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonialKeys.map((key) => (
                <div key={key} className="bg-card rounded-xl p-8 shadow-card border border-border">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
                    "{t(`caseStudies.testimonials.${key}.quote`)}"
                  </p>
                  <div>
                    <div className="font-body font-semibold text-foreground">{t(`caseStudies.testimonials.${key}.author`)}</div>
                    <div className="font-body text-sm text-muted-foreground">{t(`caseStudies.testimonials.${key}.company`)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              {t("caseStudies.ctaTitle")}
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              {t("caseStudies.ctaSubtitle")}
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                {t("caseStudies.ctaButton")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CaseStudies;
