import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { KeyRound, ArrowRight, CheckCircle, Users, Lock, Settings } from "lucide-react";

const features = [
  {
    title: "Okta as Centralized SSO Platform",
    description: "Leading identity management service providing secure SSO capabilities, enabling users to access multiple applications with one set of credentials.",
  },
  {
    title: "Active Directory Integration",
    description: "Flexibility to incorporate Active Directory as an Identity Provider or any other preferred IdP for seamless authentication.",
  },
  {
    title: "Terraform Management",
    description: "Infrastructure as Code approach using Terraform for consistent, repeatable, and auditable IAM configurations.",
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Seamless integration with your existing CI/CD pipelines ensuring a robust, automated, and agile environment.",
  },
  {
    title: "Simplified User Experience",
    description: "Reduced password fatigue and centralized identity management with robust security policies.",
  },
  {
    title: "Access Control Management",
    description: "Comprehensive access control ensuring proper authentication and authorization across your organization.",
  },
];

const IAM = () => {
  return (
    <>
      <PageSeo path="/services/iam" />
      <Layout seoPath="/services/iam">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/iam" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <KeyRound className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Identity Management
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Identity Access Management
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We provide a comprehensive IAM as a Service solution designed to streamline your authentication processes, enhance security, and improve operational efficiency using Okta, Terraform, and CI/CD pipelines.
              </p>
              <AnswerSummary path="/services/iam" />
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
        <PageFacts path="/services/iam" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Secure Your Identity Infrastructure
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Implement robust IAM solutions that scale with your organization while maintaining security.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Get IAM Solution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IAM;
