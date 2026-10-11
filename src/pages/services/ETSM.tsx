import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Radar, ArrowRight, CheckCircle, Globe, Search, AlertTriangle } from "lucide-react";

const features = [
  {
    title: "Comprehensive Data Analysis",
    description: "We gather and scrutinize public information from social media, forums, public databases, and more to understand what sensitive details are accessible to cyber adversaries.",
  },
  {
    title: "Proactive Threat Detection",
    description: "Our system continuously monitors public services for signs of emerging threats, enabling rapid response to any potential security breaches.",
  },
  {
    title: "Actionable Insights",
    description: "By analyzing the information attackers could use against you, we identify key focus areas for improving your security posture.",
  },
  {
    title: "Enhanced Situational Awareness",
    description: "Unlock valuable insights and stay informed with real-time monitoring, ensuring you know exactly what potential attackers already know.",
  },
  {
    title: "OSINT Tools Integration",
    description: "Leveraging Censys, Shodan, ProjectDiscovery, SSLabs, and our own fuzzing tools for comprehensive threat intelligence.",
  },
  {
    title: "Automated Surveillance",
    description: "Continuous, automated surveillance of publicly available data to stay one step ahead of potential threats.",
  },
];

const ETSM = () => {
  return (
    <>
      <PageSeo path="/services/etsm" />
      <Layout seoPath="/services/etsm">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/etsm" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Radar className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Threat Monitoring
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                External Threat & Security Monitoring
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our External Threat & Security Monitoring service harnesses the power of OSINT to provide continuous, automated surveillance of publicly available data, ensuring your organization stays one step ahead of potential threats.
              </p>
              <AnswerSummary path="/services/etsm" />
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
        <PageFacts path="/services/etsm" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Know What Your Adversaries Know
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get comprehensive visibility into your external threat landscape with our monitoring suite.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Start Monitoring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ETSM;
