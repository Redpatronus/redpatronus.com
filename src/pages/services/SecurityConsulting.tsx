import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileSearch, CheckCircle, ClipboardCheck, FileText, Shield, Scale } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Compliance Assessment",
    description: "Gap analysis and readiness assessments for SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, and other regulatory frameworks.",
  },
  {
    icon: Shield,
    title: "Security Architecture Review",
    description: "Comprehensive review of your security architecture, identifying weaknesses and recommending improvements.",
  },
  {
    icon: FileText,
    title: "Policy Development",
    description: "Development of security policies, procedures, and standards tailored to your organization's needs.",
  },
  {
    icon: Scale,
    title: "Risk Assessment",
    description: "Comprehensive risk assessments identifying, analyzing, and prioritizing security risks to your organization.",
  },
];

const frameworks = [
  "SOC 2 Type I & II",
  "ISO 27001",
  "PCI-DSS",
  "HIPAA",
  "GDPR",
  "NIST Cybersecurity Framework",
  "CIS Controls",
  "CMMC",
];

const SecurityConsulting = () => {
  return (
    <>
      <PageSeo path="/services/security-consulting" />
      <Layout seoPath="/services/security-consulting">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/security-consulting" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <FileSearch className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Strategic Security
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Security Consulting Services
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Strategic security guidance to help your organization build and maintain a robust security program that meets regulatory requirements and industry best practices.
              </p>
              <AnswerSummary path="/services/security-consulting" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Schedule Consultation
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

        {/* Services */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Consulting Services
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Expert guidance to strengthen your security posture and achieve compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border">
                  <div className="p-3 bg-accent rounded-lg inline-block mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks */}
        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Compliance Frameworks
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our team has deep expertise across a wide range of compliance frameworks and can help you achieve and maintain certifications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {frameworks.map((framework, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-trust-green" />
                      <span className="font-body text-foreground">{framework}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Engagement Deliverables
                </h3>
                <ul className="space-y-4">
                  {[
                    "Current state assessment report",
                    "Gap analysis with remediation roadmap",
                    "Policy and procedure templates",
                    "Control implementation guidance",
                    "Executive-level presentations",
                    "Ongoing support and advisory",
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
        <PageFacts path="/services/security-consulting" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Need Strategic Security Guidance?
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you build a security program that meets your business objectives.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SecurityConsulting;
