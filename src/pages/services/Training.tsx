import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, CheckCircle, Users, BookOpen, Award } from "lucide-react";

const features = [
  {
    title: "Compliance and Risk Reduction",
    description: "Ensure your team is well-versed in industry regulations and best practices, helping avoid costly legal and financial repercussions.",
  },
  {
    title: "Enhanced Threat Awareness",
    description: "Stay ahead of evolving cyber threats by keeping employees informed about the latest tactics used by cybercriminals.",
  },
  {
    title: "Improved Security Practices",
    description: "Develop a culture of vigilance by teaching practical security measures—from password management to secure device usage.",
  },
  {
    title: "Safeguarding Company Assets",
    description: "Train employees to recognize and prevent attacks that could compromise sensitive data and intellectual property.",
  },
  {
    title: "Regular Updates",
    description: "Our training modules are regularly updated to reflect current trends and threat landscapes.",
  },
  {
    title: "Customized Programs",
    description: "Tailored training programs designed to address your organization's specific security challenges and industry requirements.",
  },
];

const Training = () => {
  return (
    <>
      <PageSeo path="/services/training" />
      <Layout seoPath="/services/training">
        {/* Hero */}
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Breadcrumbs path="/services/training" />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="font-body text-sm font-medium text-accent-foreground">
                  Security Training
                </span>
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Cybersecurity Training
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Our comprehensive cybersecurity training program is designed to empower your employees with the essential knowledge and skills needed to detect, report, and respond to potential security threats.
              </p>
              <AnswerSummary path="/services/training" />
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
        <PageFacts path="/services/training" />
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Build a Security-First Culture
            </h2>
            <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Invest in your team's security awareness and reduce the human element risk in your organization.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-background text-primary hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/contact">
                Start Training Program
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Training;
