import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { UI, getPage, t } from "@/seo/site.js";

interface LayoutProps {
  children: ReactNode;
  seoPath?: string;
}

const Layout = ({ children, seoPath }: LayoutProps) => {
  const { language } = useLanguage();
  const page = seoPath ? getPage(seoPath) : undefined;
  const content = seoPath && page?.article !== false ? <article>{children}</article> : children;

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-foreground"
      >
        {t(UI.skip, language)}
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-16 lg:pt-20">
        {content}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
