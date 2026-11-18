import { Link } from "react-router-dom";
import { Wrench, ArrowRight, Github, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const tools = [
  {
    icon: Radar,
    name: "IP Reputation Checker",
    description:
      "Check any IPv4 address against Redpatronus internet-scanner intelligence and our honeypot-fed blocklists, and get a plain-language verdict in one click.",
    tag: "Threat Intel",
    href: "/tools/ip-reputation",
  },
];


const ToolsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              Tools
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Free tools from the Red Patronus team
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We build small, practical utilities and share them with the security community. A safer
            internet helps everyone, and people can see how we work.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 mb-12 max-w-3xl mx-auto">
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
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5">
                      {tool.tag}
                    </span>
                  </div>
                  <p className="font-body text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </Link>
          ))}

        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/tools">
              Explore all tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              <Github className="mr-2 h-4 w-4" />
              Suggest a tool
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
