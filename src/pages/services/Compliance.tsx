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
    title: "DORA compliance",
    description: "We map your ICT risk management against the Digital Operational Resilience Act so your financial services organization meets the EU requirements.",
  },
  {
    title: "Recognized benchmarks",
    description: "We build your compliance framework on established benchmarks such as CIS, NIST 2 and DORA, aligned with EU regulation.",
  },
  {
    title: "Scoped to your organization",
    description: "We scope each engagement to your situation, whether you are a small company or a multinational.",
  },
  {
    title: "ICT risk management",
    description: "Find and reduce ICT risks early with a DORA-aligned assessment.",
  },
  {
    title: "GAP Analysis",
    description: "A detailed gap analysis showing where your current controls fall short of DORA and other requirements.",
  },
  {
    title: "Audit support",
    description: "Audit support and documentation for your DORA compliance assessments.",
  },
  {
    title: "Business continuity plan",
    description: "We help you design, implement, and annually test your ICT business continuity and disaster recovery plans. DORA requires every plan to be tested at least once a year.",
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
                  Compliance services
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Compliance, regulation and audits
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We work by the book of DORA (Digital Operational Resilience Act). We combine traditional assessments, gap analysis and ICT risk management to get your organization compliant.
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
              Get ready for your next audit
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Tell us which regulations apply to you and we will plan the assessment.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Start an assessment
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
