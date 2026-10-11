import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { OWNER_TODOS, UI, getPage, localizedList, navLabel, t } from "@/seo/site.js";

type Cell = string | { en: string; sk?: string; de?: string; fr?: string };
type FactRow = { cells: Cell[]; todo?: string };
type FactTable = {
  caption: Cell;
  headers: Cell[];
  rows: FactRow[];
  todo?: string;
};

const PageFacts = ({ path }: { path: string }) => {
  const { language } = useLanguage();
  const page = getPage(path);
  const tables = localizedList(page.tables, language) as FactTable[];
  const faqs = localizedList(page.faqs, language) as { q: Cell; a: Cell }[];
  const related = (page.related || []) as string[];
  const todoIds = new Set<string>();
  tables.forEach((table) => {
    if (table.todo) todoIds.add(table.todo);
    table.rows.forEach((row) => {
      if (row.todo) todoIds.add(row.todo);
    });
  });
  const comments = OWNER_TODOS.filter((todo) => todoIds.has(todo.id));

  if (!tables.length && !faqs.length && !related.length) return null;

  const headingId = tables.length ? "key-facts-heading" : "faq-heading";

  return (
    <section className="py-16 lg:py-24 bg-background border-t border-border" aria-labelledby={headingId}>
      {comments.length > 0 && (
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: comments.map((todo) => `<!-- ${todo.text.replace(/-->/g, "")} -->`).join("\n"),
          }}
        />
      )}
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {tables.length > 0 && (
          <>
            <h2 id="key-facts-heading" className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
              {t(UI.keyFacts, language)}
            </h2>
            <div className="space-y-10">
              {tables.map((table, tableIndex) => (
                <div key={tableIndex} className="overflow-x-auto rounded-xl border border-border bg-card shadow-card" data-todo={table.todo}>
                  <table className="w-full text-left border-collapse">
                    <caption className="font-body text-sm text-muted-foreground text-left px-4 py-3 border-b border-border">
                      {t(table.caption, language)}
                    </caption>
                    <thead className="bg-surface">
                      <tr>
                        {table.headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            scope="col"
                            className="font-body text-sm font-semibold text-foreground px-4 py-3 border-b border-border"
                          >
                            {t(header, language)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-b border-border last:border-0" data-todo={row.todo}>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex} className="font-body text-sm text-foreground px-4 py-3 align-top">
                              {cellIndex === 0 ? <span className="font-semibold">{t(cell, language)}</span> : t(cell, language)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </>
        )}

        {faqs.length > 0 && (
          <div id="faq" className={tables.length ? "mt-16" : ""}>
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
          <nav aria-label={t(UI.related, language)} className="mt-16">
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
