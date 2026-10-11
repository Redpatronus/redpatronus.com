import { useLanguage } from "@/contexts/LanguageContext";
import { getPage, t } from "@/seo/site.js";

const AnswerSummary = ({ path, align = "left" }: { path: string; align?: "left" | "center" }) => {
  const { language } = useLanguage();
  const summary = t(getPage(path).summary, language);
  if (!summary) return null;

  return (
    <p
      id="answer-summary"
      data-seo="summary"
      className={
        align === "center"
          ? "font-body text-base lg:text-lg text-foreground leading-relaxed max-w-3xl mx-auto mt-4"
          : "font-body text-base lg:text-lg text-foreground leading-relaxed max-w-3xl mt-4 mb-8 border-l-2 border-primary pl-4"
      }
    >
      {summary}
    </p>
  );
};

export default AnswerSummary;
