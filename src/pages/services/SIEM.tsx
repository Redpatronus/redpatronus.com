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
    title: "Immediate Threat Identification",
    description: "Detect security issues the moment they arise with real-time monitoring and alerting.",
  },
  {
    title: "Comprehensive Log Analysis",
    description: "Gain in-depth insights through meticulous analysis of security events and system logs.",
  },
  {
    title: "Swift Incident Response",
    description: "Minimize potential damage with quick response capabilities and automated remediation.",
  },
  {
    title: "Authentication Monitoring",
    description: "Keep a vigilant eye on all login attempts and authentication events across your systems.",
  },
  {
    title: "Audit Log Management",
    description: "Complete tracking and monitoring of system changes and user activities for compliance.",
  },
  {
    title: "Security Event Correlation",
    description: "Advanced correlation of security events to identify patterns and potential threats.",
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
                  SIEM Services
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                SIEM & Audit Logging
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                In our SIEM project, we focus on the real-time monitoring of security events. This critical service enables us to identify threats, anomalies, and unauthorized activities as they occur, ensuring rapid detection and response.
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
              Maintain Complete Visibility
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              With our SIEM solution, rest assured that your business is continuously guarded against emerging threats.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Implement SIEM
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
