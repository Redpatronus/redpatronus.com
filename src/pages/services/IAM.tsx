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
    title: "Okta as the central SSO platform",
    description: "Okta provides single sign-on, so users reach multiple applications with one set of credentials.",
  },
  {
    title: "Active Directory integration",
    description: "Use Active Directory or any other IdP you prefer as the identity provider.",
  },
  {
    title: "Managed with Terraform",
    description: "IAM configuration kept as code in Terraform, so changes are repeatable and auditable.",
  },
  {
    title: "CI/CD pipeline integration",
    description: "IAM changes go through your existing CI/CD pipelines and are deployed automatically.",
  },
  {
    title: "Simpler for users",
    description: "Fewer passwords to remember, identities managed in one place, and consistent security policies.",
  },
  {
    title: "Access control",
    description: "Authentication and authorization rules applied across your whole organization.",
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
                  Identity management
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Identity and access management
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We run IAM as a service on Okta, Terraform and CI/CD pipelines, which simplifies authentication for your users and makes access easier to control.
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
              Secure your identity infrastructure
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Set up IAM that keeps up as your organization grows.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Talk to us about IAM
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
