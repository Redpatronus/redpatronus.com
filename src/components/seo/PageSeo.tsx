import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { SITE, hreflangLinks, jsonLdString, pageHead, t } from "@/seo/site.js";

const PageSeo = ({ path }: { path: string }) => {
  const { language } = useLanguage();
  const head = pageHead(path, language);
  const keywords = t(head.page.keywords, language);

  return (
    <Helmet>
      <html lang={language} />
      <title>{head.title}</title>
      <meta name="description" content={head.description} />
      <link rel="canonical" href={head.url} />
      <meta name="robots" content={head.robots} />
      <meta name="author" content={SITE.name} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {hreflangLinks(head.page.path).map(([code, href]) => (
        <link key={code} rel="alternate" hrefLang={code} href={href} />
      ))}
      <meta property="og:title" content={head.title} />
      <meta property="og:description" content={head.description} />
      <meta property="og:url" content={head.url} />
      <meta property="og:type" content={head.page.ogType || "website"} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={head.locale} />
      {head.alternates.map((locale) => (
        <meta key={locale} property="og:locale:alternate" content={locale} />
      ))}
      <meta property="og:image" content={SITE.ogImage} />
      <meta property="og:image:alt" content={SITE.ogImageAlt} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content={String(SITE.ogImageWidth)} />
      <meta property="og:image:height" content={String(SITE.ogImageHeight)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={head.title} />
      <meta name="twitter:description" content={head.description} />
      <meta name="twitter:image" content={SITE.ogImage} />
      <meta name="twitter:image:alt" content={SITE.ogImageAlt} />
      <script type="application/ld+json">{jsonLdString(path, language)}</script>
    </Helmet>
  );
};

export default PageSeo;
