import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { UI, getPage, localizedList, navLabel, t } from "@/seo/site.js";

type Cell = string | { en: string; sk?: string; de?: string; fr?: string };

const PageFacts = ({ path }: { path: string }) => {
  const { language } = useLanguage();
  const page = getPage(path);
  const faqs = localizedList(page.faqs, language) as { q: Cell; a: Cell }[];
  const related = (page.related || []) as string[];

  if (!faqs.length && !related.length) return null;

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border" aria-labelledby={faqs.length ? "faq-heading" : undefined}>
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {faqs.length > 0 && (
          <div id="faq">
            <h2 id="faq-heading" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {t(UI.faq, language)}
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={t(faq.q, language)}>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{t(faq.q, language)}</h3>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{t(faq.a, language)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <nav aria-label={t(UI.related, language)} className={faqs.length ? "mt-16" : ""}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">{t(UI.related, language)}</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {related.map((relatedPath) => (
                <li key={relatedPath}>
                  <Link to={relatedPath} className="font-body text-sm font-medium text-primary hover:underline underline-offset-4">
                    {navLabel(getPage(relatedPath), language)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageFacts;
