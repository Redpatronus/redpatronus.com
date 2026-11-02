import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Hiring from "./pages/Hiring";
import Tools from "./pages/Tools";
import IpReputation from "./pages/tools/IpReputation";
import { FEATURES } from "@/config/features";

import PenetrationTesting from "./pages/services/PenetrationTesting";
import RedTeam from "./pages/services/RedTeam";
import SecurityConsulting from "./pages/services/SecurityConsulting";
import CloudSecurity from "./pages/services/CloudSecurity";
import OffensiveSecurity from "./pages/services/OffensiveSecurity";
import DefensiveSecurity from "./pages/services/DefensiveSecurity";
import ETSM from "./pages/services/ETSM";
import Training from "./pages/services/Training";
import Compliance from "./pages/services/Compliance";
import IAM from "./pages/services/IAM";
import Phishing from "./pages/services/Phishing";
import SIEM from "./pages/services/SIEM";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import GoogleAnalytics from "./components/GoogleAnalytics";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <GoogleAnalytics />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
              <Route path="/services/red-team" element={<RedTeam />} />
              <Route path="/services/security-consulting" element={<SecurityConsulting />} />
              <Route path="/services/cloud-security" element={<CloudSecurity />} />
              <Route path="/services/offensive" element={<OffensiveSecurity />} />
              <Route path="/services/defensive" element={<DefensiveSecurity />} />
              <Route path="/services/etsm" element={<ETSM />} />
              <Route path="/services/training" element={<Training />} />
              <Route path="/services/compliance" element={<Compliance />} />
              <Route path="/services/iam" element={<IAM />} />
              <Route path="/services/phishing" element={<Phishing />} />
              <Route path="/services/siem" element={<SIEM />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hiring" element={<Hiring />} />
              {FEATURES.tools && (
                <>
                  <Route path="/tools" element={<Tools />} />
                  <Route path="/tools/ip-reputation" element={<IpReputation />} />
                </>
              )}

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
