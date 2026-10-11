import { Link } from "react-router-dom";
import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { ArrowRight, Wrench, Users, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { tools } from "@/components/home/ToolsSection";

const reasons = [
  {
    icon: ShieldCheck,
    title: "A safer environment for everyone",
    description:
      "Most incidents we investigate start with something small and preventable. Sharing simple checks helps teams catch those issues early — even the ones who will never be our clients.",
  },
  {
    icon: Users,
    title: "Giving back to the community",
    description:
      "Our engineers grew up on open tooling and public research. Publishing what we build is how we keep that exchange alive and how people get to know the way we work.",
  },
];

const Tools = () => {
  return (
    <>
      <PageSeo path="/tools" />
      <Layout seoPath="/tools">
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
            <Breadcrumbs path="/tools" align="center" />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Wrench className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-accent-foreground">
                Community Tools
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tools we build and share
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Small, focused utilities from our engineers — free to use, easy to run, and made to solve
              the problems we keep seeing in real environments.
            </p>
            <AnswerSummary path="/tools" align="center" />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 lg:gap-8 max-w-3xl mx-auto">
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  to={tool.href}
                  className="group block bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/10 transition-colors">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </h2>
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5">
                          {tool.tag}
                        </span>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                      <span className="mt-4 inline-flex items-center font-body text-sm font-semibold text-primary">
                        Run the tool
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        <section className="py-16 lg:py-24 bg-surface">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">
              Why we share them
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="bg-card p-8 border border-border rounded-md shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mb-4">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Suggest a tool or report an issue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <PageFacts path="/tools" />
      </Layout>
    </>
  );
};

export default Tools;
