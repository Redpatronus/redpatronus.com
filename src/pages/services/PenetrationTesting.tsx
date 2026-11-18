import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, CheckCircle, Shield, Network, Smartphone, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web application testing",
    description: "Web application testing covering the OWASP Top 10, business logic flaws and authentication vulnerabilities.",
  },
  {
    icon: Network,
    title: "Network penetration testing",
    description: "Internal and external network tests that find vulnerabilities in infrastructure, services and configuration.",
  },
  {
    icon: Smartphone,
    title: "Mobile application testing",
    description: "Security testing for iOS and Android applications, including API analysis and data storage assessment.",
  },
  {
    icon: Shield,
    title: "API security testing",
    description: "REST, GraphQL and SOAP APIs tested for authentication, authorization and injection vulnerabilities.",
  },
];

const methodology = [
  { phase: "1. Reconnaissance", description: "Information gathering and attack surface mapping" },
  { phase: "2. Enumeration", description: "Detailed service and vulnerability identification" },
  { phase: "3. Exploitation", description: "Controlled exploitation to validate vulnerabilities" },
  { phase: "4. Post-Exploitation", description: "Assessment of potential lateral movement and impact" },
  { phase: "5. Reporting", description: "Detailed findings with prioritized remediation guidance" },
];

const PenetrationTesting = () => {
  return (
    <>
      <PageSeo path="/services/penetration-testing" />
      <Layout seoPath="/services/penetration-testing">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/penetration-testing" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Target className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Offensive security
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Penetration testing services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                We find and confirm vulnerabilities in your applications, networks and infrastructure by testing them the way a real attacker would.
              </p>
              <AnswerSummary path="/services/penetration-testing" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Request an assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View all services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Testing capabilities
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                What we test across your attack surface.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border">
                  <div className="p-3 bg-accent rounded-lg inline-block mb-4">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our methodology
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our methodology follows established industry practice. We test thoroughly and keep the impact on your operations low.
                </p>
                <div className="space-y-4">
                  {methodology.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-body font-semibold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-body font-semibold text-foreground">{item.phase}</h3>
                        <p className="font-body text-base text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  What you'll receive
                </h3>
                <ul className="space-y-4">
                  {[
                    "Executive summary for leadership",
                    "Technical findings with proof of concept",
                    "Risk-prioritized vulnerability list",
                    "Detailed remediation guidance",
                    "Retest to verify fixes",
                    "Attestation letter for compliance",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-trust-green" />
                      <span className="font-body text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <PageFacts path="/services/penetration-testing" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to test your defenses?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Tell us what you want tested and we will send you a proposal.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Get started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default PenetrationTesting;
