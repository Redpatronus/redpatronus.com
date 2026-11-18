import { Users, Mountain, Network, Shield, Wind, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  {
    icon: Users,
    title: "One flight, one team",
    description:
      "We fly as one team, not a hierarchy of rank. A title tells you what someone is responsible for. It does not make them worth more than anyone else.",
  },
  {
    icon: Mountain,
    title: "Eagle vision, equal ground",
    description:
      "We aim high and keep our feet on the ground. Everyone gets the same respect, the same rules and the same access to what they need to do good work. Leadership earns its place through vision and accountability, not perks or special comfort.",
  },
  {
    icon: Network,
    title: "No one flies off with the nest",
    description:
      "What we build here belongs to the team: the knowledge, the relationships, the clients, the methods. None of it is private property to be carried off quietly and used against the people who helped create it. If you grow here, you give back: share what you know, respect others' work, and if you leave, leave the trust intact.",
  },
  {
    icon: Shield,
    title: "Guard the nest",
    description:
      "A nest is kept safe by a thousand small habits, not one heroic moment. Every access rule, every deadline, every clean handover, every decision written down. That is how we keep each other safe. We guard the nest by respecting the details.",
  },
  {
    icon: Wind,
    title: "No panic, no drama",
    description:
      "Storms happen. We don't panic. When something breaks, we name it, fix it and move on, without pointing fingers or overreacting to small things. Staying calm under pressure is a skill, and we practise it on purpose.",
  },
  {
    icon: Leaf,
    title: "Protect the sky we share",
    description:
      "We take ESG seriously and try to make responsible choices for the environment, our people and the communities around us. In practice that means efficient infrastructure, ethical partnerships and transparent governance.",
  },
];

const ValuesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <span className="font-body text-xs font-bold tracking-[0.2em] text-primary uppercase">
            {t("about.valuesLabel")}
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6">
            The principles we work by
          </h2>
          <p className="font-body text-muted-foreground italic">
            How we work together, lead and look after what we build.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="group bg-card p-8 border border-border rounded-md shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
