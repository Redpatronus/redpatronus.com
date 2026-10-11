import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { UI, getPage, t } from "@/seo/site.js";

const Breadcrumbs = ({ path, align = "left" }: { path: string; align?: "left" | "center" }) => {
  const { language } = useLanguage();
  const crumbs = getPage(path).breadcrumbs;
  if (!crumbs || crumbs.length < 2) return null;

  return (
    <nav
      aria-label={t(UI.breadcrumb, language)}
      className={align === "center" ? "mb-6 flex justify-center" : "mb-6"}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-body text-sm text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          const name = t(crumb.name, language);
          return (
            <li key={`${crumb.path}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span aria-current="page" className="text-foreground">
                  {name}
                </span>
              ) : (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
