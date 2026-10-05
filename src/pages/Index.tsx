import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import OfferBanner from "@/components/home/OfferBanner";
import AISecuritySection from "@/components/home/AISecuritySection";
import TrustIndicators from "@/components/home/TrustIndicators";
import CTASection from "@/components/home/CTASection";
import ValuesSection from "@/components/home/ValuesSection";
import ToolsSection from "@/components/home/ToolsSection";
import { FEATURES } from "@/config/features";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Red Patronus",
  "url": "https://redpatronus.com",
  "logo": "https://redpatronus.com/rp-logo.svg",
  "description": "DORA-compliant enterprise cybersecurity services including penetration testing, red team operations, and security consulting.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mlynské nivy 48",
    "addressLocality": "Bratislava",
    "postalCode": "821 09",
    "addressCountry": "SK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+421-948-446-778",
    "contactType": "sales",
    "email": "info@redpatronus.com"
  },
  "sameAs": ["https://www.linkedin.com/company/redpatronus"]
};

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Red Patronus | DORA-Compliant Enterprise Cybersecurity Solutions</title>
        <meta
          name="description"
          content="Red Patronus delivers DORA-compliant cybersecurity services for enterprise and financial organizations. Penetration testing, red team operations, and security consulting."
        />
        <link rel="canonical" href="https://redpatronus.com/" />
        <meta property="og:title" content="Red Patronus | DORA-Compliant Enterprise Cybersecurity" />
        <meta property="og:description" content="Enterprise cybersecurity services aligned with Digital Operational Resilience Act requirements." />
        <meta property="og:url" content="https://redpatronus.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <Layout>
        <HeroSection />
        <OfferBanner />
        <ServicesOverview />
        <AISecuritySection />
        {FEATURES.tools && <ToolsSection />}
        <TrustIndicators />
        <ValuesSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
