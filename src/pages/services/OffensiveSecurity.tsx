import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, CheckCircle, Shield, Crosshair, Bug } from "lucide-react";

const features = [
  {
    title: "Red team engagements",
    description:
      "We simulate advanced attacks against your IT infrastructure, applications and networks to see how far an attacker gets.",
  },
  {
    title: "AI-assisted penetration testing",
    description:
      "We use AI to automate parts of penetration testing, so we find vulnerabilities faster and more thoroughly than with manual testing alone.",
  },
  {
    title: "Web penetration tests",
    description:
      "Testing based on the OWASP methodology, to find vulnerabilities in your web applications before attackers do.",
  },
  {
    title: "Infrastructure penetration tests",
    description:
      "Network and infrastructure testing to find weaknesses in your environment.",
  },
  {
    title: "Attack simulation and post-exploitation",
    description:
      "After the initial breach, we show how an attacker could move further through your environment.",
  },
  {
    title: "Engagement levels",
    description:
      "Black-box, grey-box or white-box testing, depending on what you need.",
  },
  {
    title: "Social engineering tests and phishing campaigns",
    description: "We test the human side through phishing, vishing and physical security assessments.",
  },
];

const OffensiveSecurity = () => {
  return (
    <>
      <PageSeo path="/services/offensive" />
      <Layout seoPath="/services/offensive">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/offensive" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Target className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">Offensive security</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Offensive security services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We test your organization the way a real attacker would. Our red team finds vulnerabilities, checks
                how your defenses respond and tells you what to fix first.
              </p>
              <AnswerSummary path="/services/offensive" />
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
        <PageFacts path="/services/offensive" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to test your defenses?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us and we will scope a test for your environment.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Link to="/contact">
                Request a quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default OffensiveSecurity;
