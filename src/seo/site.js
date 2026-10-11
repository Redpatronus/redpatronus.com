/**
 * Site-wide entity data and structured-data builders.
 * Facts here are copied from pages already in this repo. Do not add a number
 * that the site does not state. Missing figures are OWNER_TODOS.
 */

import { pages } from "./pages.js";

export const SITE = {
  name: "Red Patronus",
  alternateName: "Redpatronus",
  url: "https://redpatronus.com",
  email: "info@redpatronus.com",
  telephone: "+421948446778",
  telephoneDisplay: "+421 948 446 778",
  logo: "https://redpatronus.com/rp-logo.svg",
  ogImage: "https://redpatronus.com/og-image.png",
  ogImageWidth: 1028,
  ogImageHeight: 300,
  ogImageAlt: "Red Patronus logo",
  updated: "2026-10-11",
  sameAs: [
    "https://www.linkedin.com/company/redpatronus",
    "https://github.com/Redpatronus",
  ],
  description:
    "Red Patronus is a cybersecurity company in Bratislava, Slovakia. It provides penetration testing, red team operations, defensive monitoring, cloud security on AWS, Azure and Google Cloud, and DORA-aligned consulting for enterprises and financial organisations.",
  addresses: [
    {
      source: "Address on the contact page",
      street: "Lenardova 1147/12",
      locality: "Bratislava",
      postal: "851 01",
      country: "SK",
    },
    {
      source: "Address in the site footer",
      street: "Mlynské nivy 48",
      locality: "Bratislava",
      postal: "821 09",
      country: "SK",
    },
  ],
};

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** Placeholders the owner must replace with real data. Also written to llms.txt and HTML comments. */
export const OWNER_TODOS = [
  {
    id: "address",
    text: "TODO(owner): Confirm the public business address. The contact page lists Lenardova 1147/12, Bratislava 851 01, Slovakia. The footer lists Mlynské nivy 48, Bratislava 821 09, Slovakia. Structured data publishes both, each labelled with the place it appears. Remove the one that is not current.",
  },
  {
    id: "exact-stats",
    text: "TODO(owner): Replace the published ranges with exact figures if you want them cited: homepage shows 15+ years of excellence, 20+ enterprise clients, and 10+ security experts. No exact client count, headcount, or assessment volume is in the repo.",
  },
  {
    id: "other-prices",
    text: "TODO(owner): Add published prices for every service other than the professional penetration test. The only price on the site is €3,000 excluding VAT for a web application or external infrastructure pentest.",
  },
  {
    id: "founders",
    text: "TODO(owner): Add founder and team names, roles, and real profile URLs if Person schema should name people. No founder or employee name is published on the site (the VIG Re quote is feature-flagged off and names a client, not staff).",
  },
  {
    id: "og-image",
    text: "TODO(owner): Add a 1200×630 social share image. Open Graph currently uses the existing logo PNG at /og-image.png (1028×300).",
  },
  {
    id: "sameas",
    text: "TODO(owner): Add any other official profile URLs (Google Business Profile, X, Facebook, YouTube, Crunchbase). The site only links LinkedIn (https://www.linkedin.com/company/redpatronus) and GitHub (https://github.com/Redpatronus).",
  },
  {
    id: "job-dates",
    text: "TODO(owner): Add datePosted and validThrough for the Junior Security / Infrastructure Engineer role if it should be eligible for Google for Jobs. The Slovak careers page states 1,800 EUR per month gross; the English version of the same page does not show a salary figure in the original listing.",
  },
  {
    id: "case-studies",
    text: "TODO(owner): Confirm the figures already printed on /case-studies before treating them as citable: 47 critical vulnerabilities, zero breaches during transformation, SOC 2 Type II, 40% fewer security incidents, 2M+ patient records, training for 5,000 staff, and a 95% vulnerability remediation rate. They are reproduced from that page only, not presented as new company-wide statistics.",
  },
  {
    id: "certifications",
    text: "TODO(owner): State whether ISO 27001, DORA, and NIS2 are certifications held, formal attestations, or alignment targets, and add certificate IDs if they exist. The homepage lists them under Certifications & Standards and does not publish certificate numbers. Unused translation strings mention CREST, SOC 2, and OSCP, but those are not rendered.",
  },
  {
    id: "legal-name",
    text: "TODO(owner): Add the registered legal name and company ID (for example the Slovak obchodné meno and IČO) if they should appear in Organization schema. They are not in the repo.",
  },
  {
    id: "geo",
    text: "TODO(owner): Add latitude and longitude for the confirmed office if LocalBusiness geo coordinates should be published. They are not in the repo.",
  },
  {
    id: "founding-date",
    text: "TODO(owner): Confirm whether schema.org foundingDate should be 2005. The Slovak careers page says the company has been on the market since 2005 (na trhu od roku 2005). The English careers text does not state a year, so foundingDate is intentionally omitted from JSON-LD until you confirm it.",
  },
  {
    id: "search-console",
    text: "TODO(owner): After deploy, verify the site in Google Search Console and Bing Webmaster Tools and submit https://redpatronus.com/sitemap.xml. Paste verification tokens here if you want them added as meta tags.",
  },
];

export const UI = {
  breadcrumb: L("Breadcrumb", "Navigácia", "Brotkrumen", "Fil d'Ariane"),
  keyFacts: L("Key facts", "Kľúčové fakty", "Wichtige Fakten", "Faits clés"),
  faq: L("Frequently asked questions", "Často kladené otázky", "Häufig gestellte Fragen", "Questions fréquentes"),
  related: L("Related pages", "Súvisiace stránky", "Verwandte Seiten", "Pages associées"),
  skip: L("Skip to content", "Preskočiť na obsah", "Zum Inhalt springen", "Aller au contenu"),
};

const OG_LOCALE = { en: "en_US", sk: "sk_SK", de: "de_DE", fr: "fr_FR" };

export function L(en, sk, de, fr) {
  if (sk == null) return en;
  return { en, sk, de: de ?? en, fr: fr ?? en };
}

export function t(value, lang = "en") {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && ("en" in value || "sk" in value || "de" in value || "fr" in value)) {
    return value[lang] || value.en || "";
  }
  return String(value);
}

export function localizedList(value, lang = "en") {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return value[lang] || value.en || [];
}

export function absoluteUrl(path) {
  if (!path || path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path}`;
}

export function getPage(path) {
  const page = pages.find((entry) => entry.path === path);
  if (!page) throw new Error(`Unknown SEO path: ${path}`);
  return page;
}

export function navLabel(page, lang = "en") {
  if (page.navLabel) return t(page.navLabel, lang);
  const last = page.breadcrumbs[page.breadcrumbs.length - 1];
  return t(last.name, lang);
}

export function publicPages() {
  return pages.filter((page) => page.emit !== false);
}

function postalAddress(address) {
  return {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.locality,
    postalCode: address.postal,
    addressCountry: address.country,
  };
}

export function pentestOffer() {
  return {
    "@type": "Offer",
    "@id": `${SITE.url}/#pentest-offer`,
    name: "Professional penetration test",
    description:
      "Fixed price, excluding VAT, for a web application or external infrastructure. Testing is aligned with OWASP Top 10 and PTES. Includes an executive summary, a technical report with proof of concept, and risk-prioritized remediation guidance. If no vulnerability is found, the next year's pentest is free of charge.",
    price: "3000",
    priceCurrency: "EUR",
    url: `${SITE.url}/services/penetration-testing`,
    seller: { "@id": ORG_ID },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "3000",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
  };
}

function organizationNode() {
  const servicePages = pages.filter((page) => page.schema === "Service");
  return {
    "@type": ["ProfessionalService", "Organization"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: `${SITE.url}/`,
    logo: SITE.logo,
    image: SITE.ogImage,
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.telephone,
    address: postalAddress(SITE.addresses[0]),
    location: SITE.addresses.map((address) => ({
      "@type": "Place",
      name: address.source,
      address: postalAddress(address),
    })),
    areaServed: [
      { "@type": "Country", name: "Slovakia" },
      { "@type": "Place", name: "Europe" },
    ],
    knowsLanguage: ["en", "sk", "de", "fr"],
    knowsAbout: [
      "Penetration testing",
      "Red team operations",
      "Cloud security",
      "Digital Operational Resilience Act",
      "NIS2",
      "ISO 27001",
    ],
    sameAs: SITE.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.telephone,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: ["English", "Slovak", "German", "French"],
      areaServed: "Europe",
    },
    makesOffer: pentestOffer(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Red Patronus cybersecurity services",
      itemListElement: servicePages.map((page) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: t(page.serviceName || page.navLabel, "en"),
          url: absoluteUrl(page.path),
        },
      })),
    },
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE.url}/`,
    name: SITE.name,
    alternateName: SITE.alternateName,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: ["en", "sk", "de", "fr"],
  };
}

function faqNode(page, lang, url) {
  const faqs = localizedList(page.faqs, lang);
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url: `${url}#faq`,
    isPartOf: { "@id": `${url}#webpage` },
    inLanguage: lang,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: t(faq.q, lang),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(faq.a, lang),
      },
    })),
  };
}

function serviceNode(page, lang, url) {
  const node = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: t(page.serviceName, lang),
    serviceType: t(page.serviceName, lang),
    description: t(page.description, lang),
    url,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Europe" },
    brand: { "@type": "Brand", name: SITE.name },
  };
  if (page.path === "/services/penetration-testing") {
    node.offers = pentestOffer();
  }
  return node;
}

export function buildJsonLd(path, lang = "en") {
  const page = getPage(path);
  const url = absoluteUrl(page.path);
  const title = t(page.title, lang);
  const description = t(page.description, lang);
  const graph = [organizationNode(), websiteNode()];

  graph.push({
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: page.breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: t(crumb.name, lang),
      item: absoluteUrl(crumb.path),
    })),
  });

  const webPage = {
    "@type": page.pageType || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: lang,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SITE.ogImage,
      width: SITE.ogImageWidth,
      height: SITE.ogImageHeight,
    },
  };

  if (page.summary) {
    webPage.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: ["#answer-summary", "#faq"],
    };
  }

  if (page.schema === "Service") {
    const service = serviceNode(page, lang, url);
    webPage.mainEntity = { "@id": service["@id"] };
    graph.push(service);
  }

  graph.push(webPage);

  if (page.faqs) {
    graph.push(faqNode(page, lang, url));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function jsonLdString(path, lang = "en") {
  return JSON.stringify(buildJsonLd(path, lang)).replace(/</g, "\\u003c");
}

export function hreflangLinks(path) {
  const url = absoluteUrl(path);
  return [
    ["en", `${url}${url.includes("?") ? "&" : "?"}lang=en`],
    ["sk", `${url}${url.includes("?") ? "&" : "?"}lang=sk`],
    ["de", `${url}${url.includes("?") ? "&" : "?"}lang=de`],
    ["fr", `${url}${url.includes("?") ? "&" : "?"}lang=fr`],
    ["x-default", url],
  ];
}

export function pageHead(path, lang = "en") {
  const page = getPage(path);
  const title = t(page.title, lang);
  const description = t(page.description, lang);
  const url = absoluteUrl(page.path);
  const locale = OG_LOCALE[lang] || OG_LOCALE.en;
  const alternates = Object.entries(OG_LOCALE)
    .map(([, value]) => value)
    .filter((value) => value !== locale);
  return { page, title, description, url, locale, alternates, robots: page.robots || "index, follow" };
}

export function renderHead(path, lang = "en") {
  const head = pageHead(path, lang);
  const links = hreflangLinks(head.page.path);
  const keywords = t(head.page.keywords, lang);
  const lines = [
    `<!-- TODO(owner): placeholders are listed in ${SITE.url}/llms.txt under "Placeholders for the owner". -->`,
    `<title data-rh="true">${escapeHtml(head.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escapeAttr(head.description)}" />`,
    `<link data-rh="true" rel="canonical" href="${head.url}" />`,
    `<meta data-rh="true" name="robots" content="${head.robots}" />`,
    `<meta data-rh="true" name="author" content="${SITE.name}" />`,
    keywords ? `<meta data-rh="true" name="keywords" content="${escapeAttr(keywords)}" />` : "",
    ...links.map(
      ([code, href]) => `<link data-rh="true" rel="alternate" hreflang="${code}" href="${href}" />`,
    ),
    `<meta data-rh="true" property="og:title" content="${escapeAttr(head.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${escapeAttr(head.description)}" />`,
    `<meta data-rh="true" property="og:url" content="${head.url}" />`,
    `<meta data-rh="true" property="og:type" content="${head.page.ogType || "website"}" />`,
    `<meta data-rh="true" property="og:site_name" content="${SITE.name}" />`,
    `<meta data-rh="true" property="og:locale" content="${head.locale}" />`,
    ...head.alternates.map(
      (value) => `<meta data-rh="true" property="og:locale:alternate" content="${value}" />`,
    ),
    `<meta data-rh="true" property="og:image" content="${SITE.ogImage}" />`,
    `<meta data-rh="true" property="og:image:alt" content="${SITE.ogImageAlt}" />`,
    `<meta data-rh="true" property="og:image:type" content="image/png" />`,
    `<meta data-rh="true" property="og:image:width" content="${SITE.ogImageWidth}" />`,
    `<meta data-rh="true" property="og:image:height" content="${SITE.ogImageHeight}" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${escapeAttr(head.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${escapeAttr(head.description)}" />`,
    `<meta data-rh="true" name="twitter:image" content="${SITE.ogImage}" />`,
    `<meta data-rh="true" name="twitter:image:alt" content="${SITE.ogImageAlt}" />`,
    `<script data-rh="true" type="application/ld+json">${jsonLdString(path, lang)}</script>`,
  ];
  return lines.filter(Boolean).join("\n    ");
}

export function renderTodoComments() {
  return OWNER_TODOS.map((todo) => `<!-- ${todo.text.replace(/-->/g, "")} -->`).join("\n    ");
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

export function renderSitemap() {
  const urls = publicPages()
    .filter((page) => page.inSitemap !== false)
    .map((page) => {
      const loc = absoluteUrl(page.path);
      const alternates = hreflangLinks(page.path)
        .map(
          ([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${href}" />`,
        )
        .join("\n");
      return `  <url>
    <loc>${loc}</loc>
${alternates}
    <lastmod>${SITE.updated}</lastmod>
    <changefreq>${page.changefreq || "monthly"}</changefreq>
    <priority>${page.priority ?? "0.7"}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
  "Bytespider",
  "cohere-ai",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Googlebot",
  "Bingbot",
];

export function renderRobots() {
  const groups = [
    ["*"],
    ...AI_CRAWLERS.map((name) => [name]),
  ];
  const blocks = groups
    .map(
      ([name]) => `User-agent: ${name}
Allow: /
Disallow: /api/`,
    )
    .join("\n\n");
  return `# Red Patronus (${SITE.url}/)
# AI crawlers are allowed. Nothing in the repo previously blocked them.
# Machine-readable summary: ${SITE.url}/llms.txt

${blocks}

Sitemap: ${SITE.url}/sitemap.xml
`;
}

export function renderLlms() {
  const lines = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.description} A professional penetration test is listed at €3,000 excluding VAT.`);
  lines.push("");
  lines.push(
    "The website is available in English, Slovak, German, and French. Add ?lang=en, ?lang=sk, ?lang=de, or ?lang=fr. Canonical URLs do not include the lang parameter.",
  );
  lines.push("");
  lines.push("## Key facts published on the site");
  lines.push("");
  lines.push(`- Brand name: ${SITE.name} (also written ${SITE.alternateName} in some headings and the GitHub organisation).`);
  lines.push(`- Email: ${SITE.email}`);
  lines.push(`- Phone: ${SITE.telephoneDisplay}`);
  for (const address of SITE.addresses) {
    lines.push(
      `- ${address.source}: ${address.street}, ${address.postal} ${address.locality}, Slovakia.`,
    );
  }
  lines.push("- Homepage figures: 15+ years of excellence, 20+ enterprise clients, 10+ security experts.");
  lines.push("- Slovak careers page: on the market since 2005.");
  lines.push(
    "- Published price: professional penetration test, €3,000 excluding VAT, for a web application or external infrastructure, aligned with OWASP Top 10 and PTES. If no vulnerability is found, the next year's pentest is free of charge.",
  );
  lines.push("- Contact page response time: within 24 hours.");
  lines.push(
    "- Homepage certifications and standards listed: ISO 27001 (information security), DORA (EU Digital Operational Resilience Act), NIS2 (EU network and information security directive). Certificate IDs are not published.",
  );
  lines.push(`- Linked profiles: ${SITE.sameAs.join(", ")}.`);
  lines.push("- Open role: Junior Security / Infrastructure Engineer, Bratislava. Slovak listing states 1,800 EUR per month gross, full-time contractor (živnosť), suitable for graduates.");
  lines.push("");
  lines.push("## Services");
  lines.push("");
  for (const page of pages.filter((entry) => entry.schema === "Service")) {
    lines.push(`- [${t(page.serviceName, "en")}](${absoluteUrl(page.path)}): ${t(page.description, "en")}`);
  }
  lines.push("");
  lines.push("## Pages");
  lines.push("");
  for (const page of publicPages().filter((entry) => entry.inSitemap !== false)) {
    lines.push(`- [${navLabel(page, "en")}](${absoluteUrl(page.path)}): ${t(page.description, "en")}`);
  }
  lines.push("");
  lines.push("## Case study figures already on /case-studies");
  lines.push("");
  lines.push(
    "These are engagement results printed on the case studies page. They are not company-wide totals. Confirm them before citing (see placeholders).",
  );
  lines.push(
    "- Financial services, global insurance cloud move: 47 critical vulnerabilities, zero breaches during the transformation, SOC 2 Type II, 40% reduction in security incidents. Work described: 12 months of phased penetration testing, a red team engagement, and a security architecture review.",
  );
  lines.push(
    "- Healthcare: 2M+ patient records secured, full HIPAA compliance, zero-trust architecture, security awareness training for 5,000 staff.",
  );
  lines.push(
    "- Technology / SaaS: SOC 2 Type II, 95% vulnerability remediation rate, IPO security due diligence, ongoing red team programme.",
  );
  lines.push("");
  lines.push("## Placeholders for the owner");
  lines.push("");
  for (const todo of OWNER_TODOS) {
    lines.push(`- ${todo.text}`);
  }
  lines.push("");
  return lines.join("\n");
}

export { pages };
