import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Fish, ArrowRight, CheckCircle, Mail, AlertTriangle, Users } from "lucide-react";

const features = [
  {
    title: "Enhanced Threat Awareness",
    description: "Phishing tests help employees identify deceptive tactics, enabling them to better distinguish between legitimate communications and potential threats.",
  },
  {
    title: "Reinforce Best Practices",
    description: "By experiencing simulated attacks, employees gain firsthand insight into effective security behaviors.",
  },
  {
    title: "Reduce Risk of Breaches",
    description: "Regular testing and feedback allow your organization to address vulnerabilities before they can be exploited.",
  },
  {
    title: "Promote Security-First Culture",
    description: "Continuous engagement through realistic scenarios fosters a proactive security mindset across your organization.",
  },
  {
    title: "Compliance Support",
    description: "Regular assessments support compliance with industry standards and regulatory requirements.",
  },
  {
    title: "Detailed Reporting",
    description: "Comprehensive reports showing click rates, reporting rates, and areas for improvement.",
  },
];

const Phishing = () => {
  return (
    <>
      <PageSeo path="/services/phishing" />
      <Layout seoPath="/services/phishing">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/phishing" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Fish className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Phishing Simulation
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Phishing Simulation Services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our Phishing Simulation Services are designed to empower your organization by proactively testing and reinforcing your employees' ability to recognize and respond to phishing threats.
              </p>
              <AnswerSummary path="/services/phishing" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-2 bg-accent rounded-lg inline-block mb-4">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <PageFacts path="/services/phishing" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Test Your Team's Awareness
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Regular phishing simulations are a critical component of a robust cybersecurity strategy.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Start Simulation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Phishing;
