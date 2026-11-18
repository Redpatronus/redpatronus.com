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
    title: "Better threat awareness",
    description: "Phishing tests teach employees to spot deceptive tactics and tell legitimate messages from malicious ones.",
  },
  {
    title: "Learning by experience",
    description: "Employees who go through a simulated attack remember what to do when a real one arrives.",
  },
  {
    title: "Lower breach risk",
    description: "Regular testing and feedback let you fix weak spots before someone exploits them.",
  },
  {
    title: "Security as a habit",
    description: "Realistic scenarios, repeated over time, make reporting a suspicious email a normal habit.",
  },
  {
    title: "Compliance support",
    description: "Regular assessments support compliance with industry standards and regulatory requirements.",
  },
  {
    title: "Detailed reporting",
    description: "Reports with click rates, reporting rates and what to improve.",
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
                  Phishing simulation
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Phishing simulation services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We send realistic phishing emails to your employees to test and train how they recognize and report phishing.
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
              Test your team's awareness
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Run regular simulations and track how your team improves over time.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Start a simulation
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
