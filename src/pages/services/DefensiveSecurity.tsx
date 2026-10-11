import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, CheckCircle, Eye, Server, Lock } from "lucide-react";

const features = [
  {
    title: "Security Operations Center (SOC)",
    description:
      "24/7 monitoring of your systems and networks with continuous internal security scanning and automatic web security scanning.",
  },
  {
    title: "AI-Powered Infrastructure & Application Security",
    description:
      "Use AI-driven tools to continuously test your defenses, simulating real-world attacks and identifying weaknesses before adversaries do.",
  },
  {
    title: "DevSecOps Integration",
    description:
      "Seamlessly integrate security into your development lifecycle with automated security testing and continuous monitoring.",
  },
  {
    title: "Business Continuity Planning",
    description:
      "Comprehensive planning to ensure your organization can continue operations during and after security incidents.",
  },
  {
    title: "Threat Detection & Response",
    description: "Advanced threat detection capabilities with swift incident response to minimize potential damage.",
  },
  {
    title: "Asset & Risk Management",
    description:
      "Complete visibility and management of all your digital assets with security-focused tracking and monitoring.",
  },
  {
    title: "Identity Access Management",
    description: "Robust IAM solutions to ensure proper access controls and authentication across your organization.",
  },
];

const DefensiveSecurity = () => {
  return (
    <>
      <PageSeo path="/services/defensive" />
      <Layout seoPath="/services/defensive">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/defensive" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">Defensive Security</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Defensive Security Services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We deliver comprehensive IT security solutions designed to safeguard your organization against evolving
                cyber threats. Our defensive security services cover a full spectrum of protection measures—from
                proactive security operations to continuous scanning.
              </p>
              <AnswerSummary path="/services/defensive" />
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
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <PageFacts path="/services/defensive" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Strengthen Your Defenses
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let us help you build a robust defensive security strategy tailored to your organization's needs.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default DefensiveSecurity;
