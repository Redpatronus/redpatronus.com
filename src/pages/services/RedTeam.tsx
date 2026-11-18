import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Eye, Users, Lock, AlertTriangle } from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Full adversary simulation",
    description: "Realistic attack campaigns mimicking nation-state and advanced persistent threat (APT) tactics, techniques, and procedures.",
  },
  {
    icon: Lock,
    title: "Physical security testing",
    description: "We test physical access controls, surveillance systems and how staff respond to social engineering.",
  },
  {
    icon: AlertTriangle,
    title: "Detection and response testing",
    description: "We check whether your security team detects and responds to advanced attacks in real time.",
  },
  {
    icon: Users,
    title: "Purple team exercises",
    description: "Our red team works alongside your blue team to improve detection.",
  },
];

const scenarios = [
  "Initial access via phishing and social engineering",
  "Assumed breach scenarios",
  "Lateral movement and privilege escalation",
  "Data exfiltration simulation",
  "Ransomware attack simulation",
  "Supply chain attack vectors",
];

const RedTeam = () => {
  return (
    <>
      <PageSeo path="/services/red-team" />
      <Layout seoPath="/services/red-team">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/red-team" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Adversary simulation
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Red team operations
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Realistic adversary simulations that use the tactics of advanced threat actors to test your security controls and your team.
              </p>
              <AnswerSummary path="/services/red-team" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Plan your engagement
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
                Red team capabilities
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Adversary simulation across people, processes and technology.
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

        {/* Attack Scenarios */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Attack scenarios
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  We build each engagement around the threats most relevant to your organization and industry.
                </p>
                <div className="space-y-3">
                  {scenarios.map((scenario, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-trust-green" />
                      <span className="font-body text-foreground">{scenario}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Why red team testing?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Validate security investments and controls",
                    "Test incident detection and response",
                    "Identify gaps in security awareness",
                    "Meet compliance and regulatory requirements",
                    "Find out how well your organization recovers",
                    "Prioritize security improvements",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary-foreground/80 flex-shrink-0 mt-0.5" />
                      <span className="font-body text-primary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <PageFacts path="/services/red-team" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Test your security team
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Find out how your organization would respond to a real attack.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Schedule an engagement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RedTeam;
