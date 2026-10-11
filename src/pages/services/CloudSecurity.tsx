import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, CheckCircle, Server, Lock, Container, Settings } from "lucide-react";

const capabilities = [
  {
    icon: Settings,
    title: "Cloud Configuration Audit",
    description:
      "Comprehensive review of cloud environment configurations against CIS benchmarks and security best practices.",
  },
  {
    icon: Lock,
    title: "IAM Policy Assessment",
    description:
      "Analysis of identity and access management policies to ensure least privilege and proper access controls.",
  },
  {
    icon: Container,
    title: "Container Security",
    description:
      "Security assessment of containerized environments including Docker, Kubernetes, and container orchestration platforms.",
  },
  {
    icon: Server,
    title: "DevSecOps Integration",
    description:
      "Integrate security into your CI/CD pipeline with automated security testing and vulnerability scanning.",
  },
];

const platforms = [
  { name: "Amazon Web Services (AWS)", services: ["EC2", "S3", "Lambda", "EKS", "RDS", "IAM"] },
  { name: "Microsoft Azure", services: ["VMs", "Blob Storage", "AKS", "Functions", "AD"] },
  { name: "Google Cloud Platform", services: ["Compute", "GKE", "Cloud Run", "BigQuery", "IAM"] },
];

const CloudSecurity = () => {
  return (
    <>
      <PageSeo path="/services/cloud-security" />
      <Layout seoPath="/services/cloud-security">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/cloud-security" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <Cloud className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">Cloud Security</span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Cloud Security Services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Secure your cloud infrastructure with comprehensive security assessments designed for AWS, Azure, and
                GCP environments.
              </p>
              <AnswerSummary path="/services/cloud-security" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Assess Your Cloud
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View All Services</Link>
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
                Cloud Security Capabilities
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Comprehensive cloud security services for modern enterprise environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border">
                  <div className="p-3 bg-accent rounded-lg inline-block mb-4">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">Supported Platforms</h2>
              <p className="font-body text-lg text-muted-foreground">
                Deep expertise across all major cloud platforms and their services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">{platform.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {platform.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full font-body text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">What's Included</h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our cloud security assessments provide comprehensive coverage of your cloud environment with
                  actionable remediation guidance.
                </p>
                <div className="space-y-3">
                  {[
                    "Multi-account/subscription review",
                    "Network security architecture analysis",
                    "Data encryption and key management",
                    "Logging and monitoring configuration",
                    "Serverless function security",
                    "Infrastructure as Code review",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-trust-green" />
                      <span className="font-body text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-2xl p-8 lg:p-10 text-primary-foreground">
                <h3 className="font-display text-xl font-semibold mb-6">Assessment Deliverables</h3>
                <ul className="space-y-4">
                  {[
                    "Cloud security posture report",
                    "CIS benchmark compliance mapping",
                    "Risk-prioritized findings",
                    "Remediation runbooks",
                    "Architecture recommendations",
                    "Executive presentation",
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
        <PageFacts path="/services/cloud-security" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Secure Your Cloud Environment
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a comprehensive assessment of your cloud security posture today.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Start Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CloudSecurity;
