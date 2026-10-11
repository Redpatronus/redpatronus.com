import Layout from "@/components/layout/Layout";
import PageSeo from "@/components/seo/PageSeo";
import PageFacts from "@/components/seo/PageFacts";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import OfferBanner from "@/components/home/OfferBanner";
import AISecuritySection from "@/components/home/AISecuritySection";
import TrustIndicators from "@/components/home/TrustIndicators";
import CTASection from "@/components/home/CTASection";
import ValuesSection from "@/components/home/ValuesSection";
import ToolsSection from "@/components/home/ToolsSection";
import { FEATURES } from "@/config/features";

const Index = () => {
  return (
    <>
      <PageSeo path="/" />
      <Layout seoPath="/">
        <HeroSection />
        <OfferBanner />
        <ServicesOverview />
        <AISecuritySection />
        {FEATURES.tools && <ToolsSection />}
        <TrustIndicators />
        <ValuesSection />
        <PageFacts path="/" />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
