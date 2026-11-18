import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, CheckCircle, FileText, Eye, AlertTriangle } from "lucide-react";

const features = [
  {
    title: "Immediate threat identification",
    description: "Real-time monitoring and alerting flag security issues as they happen.",
  },
  {
    title: "Log analysis",
    description: "Detailed analysis of security events and system logs.",
  },
  {
    title: "Fast incident response",
    description: "Quick response and automated remediation limit the damage.",
  },
  {
    title: "Authentication monitoring",
    description: "We watch login attempts and authentication events across your systems.",
  },
  {
    title: "Audit log management",
    description: "System changes and user activity are tracked and kept for compliance.",
  },
  {
    title: "Security event correlation",
    description: "Events are correlated to reveal patterns and possible threats.",
  },
];

const SIEM = () => {
  return (
    <>
      <PageSeo path="/services/siem" />
      <Layout seoPath="/services/siem">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/siem" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Activity className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  SIEM services
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                SIEM and audit logging
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our SIEM service monitors security events in real time. We spot threats, anomalies and unauthorized activity as they occur and respond quickly.
              </p>
              <AnswerSummary path="/services/siem" />
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
        <PageFacts path="/services/siem" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              See what happens in your systems
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              We set up SIEM and audit logging so security events in your environment are monitored around the clock.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Set up SIEM
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SIEM;
