import { OWNER_TODOS, absoluteUrl, buildJsonLd, localizedList, pages, publicPages, renderLlms, renderRobots, renderSitemap, t } from "../src/seo/site.js";

const titles = new Set();
const descriptions = new Set();
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(message);
}

for (const page of pages) {
  for (const lang of ["en", "sk", "de", "fr"]) {
    const title = t(page.title, lang);
    const description = t(page.description, lang);
    if (!title || !description) fail(`${page.path} ${lang} missing title or description`);
    if (lang === "en") {
      if (titles.has(title)) fail(`Duplicate title: ${title}`);
      titles.add(title);
      if (descriptions.has(description)) fail(`Duplicate description: ${page.path}`);
      descriptions.add(description);
      if (title.length > 65) console.warn(`Long title (${title.length}): ${title}`);
      if (description.length < 80 || description.length > 170) {
        console.warn(`Description length ${description.length}: ${page.path}`);
      }
    }
  }

  if (page.summary) {
    const words = t(page.summary, "en").split(/\s+/).filter(Boolean);
    if (words.length < 25 || words.length > 60) {
      fail(`${page.path} summary has ${words.length} words`);
    }
  }

  if (page.emit === false && page.path !== "/404") continue;

  const ld = buildJsonLd(page.path, "en");
  const serialized = JSON.stringify(ld);
  JSON.parse(serialized);
  if (serialized.includes("<")) fail(`${page.path} JSON-LD contains a raw <`);
  if (ld["@context"] !== "https://schema.org") fail(`${page.path} missing @context`);
  if (!Array.isArray(ld["@graph"]) || ld["@graph"].length < 4) fail(`${page.path} graph too small`);
  for (const node of ld["@graph"]) {
    if (!node["@type"]) fail(`${page.path} node missing @type`);
  }
  const org = ld["@graph"].find((node) => {
    const type = node["@type"];
    return type === "Organization" || (Array.isArray(type) && type.includes("Organization"));
  });
  if (!org) fail("missing Organization");
  if (org.legalName !== "Redpatronus s.r.o.") fail("legalName missing");
  if (org.foundingDate !== "2005") fail("foundingDate missing");
  if (org.address?.streetAddress !== "Mlynské nivy 48" || org.address?.postalCode !== "821 09" || org.address?.addressCountry !== "SK") {
    fail("office address mismatch");
  }
  if (org.geo?.latitude !== 48.1442647 || org.geo?.longitude !== 17.1411326) fail("geo mismatch");
  if (org.taxID !== "2022108022" || org.vatID !== "SK2022108022" || org.identifier?.value !== "35968788" || org.identifier?.propertyID !== "IČO") {
    fail("legal identifiers mismatch");
  }
  if (!org.sameAs?.includes("https://x.com/Redpatronus")) fail("X profile missing from sameAs");
  const offer = org.makesOffer;
  if (!String(offer?.name || "").includes("Limited-time special offer")) fail("pentest offer is not labelled as a special offer");
  if (serialized.includes("Lenardova") || serialized.includes("15+")) fail(`${page.path} still cites a removed address or headline statistic`);
  if (!ld["@graph"].some((node) => node["@type"] === "WebSite")) fail("missing WebSite");
  if (!ld["@graph"].some((node) => node["@type"] === "BreadcrumbList")) fail(`${page.path} missing breadcrumbs`);

  const faqs = localizedList(page.faqs, "en");
  if (faqs.length) {
    const faq = ld["@graph"].find((node) => node["@type"] === "FAQPage");
    if (!faq) fail(`${page.path} missing FAQPage`);
    if (faq.mainEntity.length !== faqs.length) fail(`${page.path} FAQ count mismatch`);
    for (const question of faq.mainEntity) {
      if (!question.name.endsWith("?")) fail(`${page.path} question missing ?: ${question.name}`);
      if (!question.acceptedAnswer?.text) fail(`${page.path} answer missing`);
      if (question.acceptedAnswer.text !== faqs.find((item) => item.q === question.name || item.q?.en === question.name)?.a &&
          question.acceptedAnswer.text.length < 40) {
        fail(`${page.path} short answer: ${question.name}`);
      }
    }
  }
}

const xml = renderSitemap();
for (const page of publicPages().filter((page) => page.inSitemap !== false)) {
  const loc = `<loc>${absoluteUrl(page.path)}</loc>`;
  if (!xml.includes(loc)) fail(`Sitemap missing ${page.path}`);
}
if (xml.includes("/tools<")) fail("Sitemap includes disabled tools routes");

const robots = renderRobots();
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "Amazonbot", "CCBot"]) {
  if (!robots.includes(`User-agent: ${bot}`)) fail(`robots missing ${bot}`);
}
if (/^Disallow:\s+\/\s*$/m.test(robots)) fail("robots disallows the whole site");

const llms = renderLlms();
for (const todo of OWNER_TODOS) {
  if (!llms.includes(todo.text)) fail(`llms.txt missing ${todo.id}`);
}

if (failures) {
  console.error(`${failures} SEO check(s) failed`);
  process.exit(1);
}
console.log(`SEO checks passed for ${pages.length} pages and ${OWNER_TODOS.length} owner placeholders`);
