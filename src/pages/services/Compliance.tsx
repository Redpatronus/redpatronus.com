import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight, CheckCircle, FileText, Scale, Search } from "lucide-react";

const features = [
  {
    title: "DORA Compliance",
    description: "Full alignment with Digital Operational Resilience Act requirements, ensuring your financial services organization meets EU regulatory standards for ICT risk management.",
  },
  {
    title: "Proven Expertise, Global Standards",
    description: "We leverage internationally recognized benchmarks like CIS, NIST 2, and DORA to build a robust compliance framework aligned with EU regulations.",
  },
  {
    title: "Tailored to Your Needs",
    description: "Fully customizable services to address your specific challenges, whether you're a small enterprise or a multinational corporation.",
  },
  {
    title: "Proactive Risk Management",
    description: "Identify and mitigate ICT risks before they become threats with our comprehensive DORA-aligned assessment approach.",
  },
  {
    title: "GAP Analysis",
    description: "Detailed gap analysis to identify where your current security posture falls short of DORA and other compliance requirements.",
  },
  {
    title: "Audit Support",
    description: "Complete audit support and documentation to help you pass DORA compliance assessments with confidence.",
  },
  {
    title: "Business Continuity Plan",
    description: "We help you design, implement, and annually test your ICT business continuity and disaster recovery plans — meeting DORA's strict requirement to validate all plans at least once a year.",
  },
];

const Compliance = () => {
  return (
    <>
      <PageSeo path="/services/compliance" />
      <Layout seoPath="/services/compliance">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/compliance" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <ClipboardCheck className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Compliance Services
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Compliance and Regulation / Audits
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our services are delivered by the book of DORA (Digital Operational Resilience Act) compliance. We help your organization not only meet but exceed stringent standards with our innovative blend of traditional assessments, GAP analysis, and ICT risk management methodologies.
              </p>
              <AnswerSummary path="/services/compliance" />
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
        <PageFacts path="/services/compliance" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Achieve Compliance Excellence
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let us help you navigate complex compliance requirements and achieve your regulatory goals.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
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

export default Compliance;
