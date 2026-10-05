import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "sk" | "de" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const SUPPORTED_LANGUAGES: Language[] = ["en", "sk", "de", "fr"];

const detectBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") return "en";
  const langs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const l of langs) {
    const code = l.toLowerCase().split("-")[0] as Language;
    if (SUPPORTED_LANGUAGES.includes(code)) return code;
  }
  return "en";
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl && SUPPORTED_LANGUAGES.includes(fromUrl as Language)) {
      localStorage.setItem("language", fromUrl);
      return fromUrl as Language;
    }
    const saved = localStorage.getItem("language");
    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) return saved as Language;
    return detectBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      caseStudies: "Case Studies",
      tools: "Tools",
      contact: "Contact",
      hiring: "We're Hiring",
      contactUs: "Contact Us",
    },
    hero: {
      highlight1: "DORA-aligned security controls",
      highlight2: "Cloud-certified security specialists",
      highlight3: "24/7 incident response for Enterprise",
      title: "Cybersecurity excellence for the enterprise.\nTrusted.\nSecured.\nCompliant.",
      subtitle:
        "Protecting your digital assets with cutting-edge security services, penetration testing, and DORA-compliant solutions. We are your trusted partner in cybersecurity excellence.",
      cta: "Get Started",
      secondaryCta: "Our Services",
    },
    services: {
      title: "Our Security Services",
      subtitle:
        "Comprehensive cybersecurity solutions tailored to protect your organization from evolving threats while ensuring DORA compliance.",
      viewAll: "View All Services",
      learnMore: "Learn More",
      offensive: {
        title: "Offensive Security",
        description:
          "Proactive security testing including penetration testing, red team exercises, and vulnerability assessments.",
      },
      defensive: {
        title: "Defensive Security",
        description:
          "24/7 security monitoring, incident response, and threat detection to protect your infrastructure.",
      },
      cloud: {
        title: "Cloud Security",
        description: "Secure your cloud infrastructure across AWS, Azure, and GCP with our expert solutions.",
      },
      compliance: {
        title: "DORA Compliance",
        description: "Ensure regulatory compliance with DORA, GDPR, ISO 27001, and other security standards.",
      },
      consulting: {
        title: "Security Consulting",
        description: "Strategic security advisory services to strengthen your organization's security posture.",
      },
      training: {
        title: "Security Training",
        description: "Empower your team with comprehensive cybersecurity awareness and technical training.",
      },
    },
    ai: {
      badge: "AI-Powered",
      title: "AI-Powered Security Solutions",
      subtitle:
        "Harness the power of artificial intelligence to detect threats faster, automate security testing, and stay ahead of sophisticated cyber attacks.",
      cta: "Explore AI Solutions",
      features: {
        pentest: {
          title: "AI Penetration Testing",
          description:
            "Automated, intelligent penetration testing that continuously probes your systems, identifying vulnerabilities with speed and precision beyond manual testing.",
        },
        threatIntel: {
          title: "AI Threat Intelligence",
          description:
            "Real-time threat intelligence powered by machine learning, analyzing global threat data to predict and prevent attacks before they happen.",
        },
        autoResponse: {
          title: "Automated Incident Response",
          description:
            "AI-driven incident response that detects, contains, and remediates security incidents in seconds, minimizing damage and downtime.",
        },
        continuous: {
          title: "Continuous Security Monitoring",
          description:
            "24/7 AI-powered monitoring that learns your environment's baseline behavior and instantly flags anomalies and potential threats.",
        },
      },
    },
    trust: {
      certifications: "Certifications & Standards",
      certificationsLabel: "Certifications & Compliance",
      certificationsTitle: "Industry-Recognized Excellence",
      certs: {
        iso: "Information Security",
        dora: "EU Digital Operational Resilience Act",
        nis2: "EU Network & Information Security Directive",
        soc2: "Security & Availability",
        crest: "Certified Provider",
        oscp: "Team Certified",
      },
      stats: {
        years: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients",
        experts: "Security Experts",
      },
      statsItems: {
        years: "Years of Excellence",
        clients: "Enterprise Clients",
        experts: "Security Experts",
        satisfaction: "Client Satisfaction",
      },
      /*
      testimonialsLabel: "Client Testimonials",
      testimonials: "What Our Clients Say",
      testimonial: {
        quote: "Red Patronus provided exceptional security assessment services for our cloud infrastructure. Their thorough penetration testing and clear reporting helped us significantly strengthen our security posture across all our insurance operations.",
        author: "Security Director",
        company: "Vienna Insurance Group",
      },
      */
      partners: "Our Trusted Partners",
    },

    cta: {
      title: "Ready to Secure Your Business?",
      subtitle:
        "Start a discussion with us on how we can help strengthen your organization's security posture.",
      button: "Schedule a Consultation",
    },
    footer: {
      description:
        "Enterprise cybersecurity solutions protecting organizations across Europe. DORA-compliant security services you can trust.",
      services: "Services",
      company: "Company",
      contactInfo: "Contact Info",
      aboutUs: "About Us",
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    // Contact page
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with our security experts",
      heroLabel: "Contact Us",
      heroTitle: "Let's Discuss Your Security Needs",
      heroSubtitle:
        "Our team of security experts is ready to help you protect your enterprise. Reach out to schedule a consultation.",
      getInTouch: "Get in Touch",
      getInTouchDesc:
        "Whether you need a security assessment, compliance guidance, or want to learn more about our services, we're here to help.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      responseTimeLabel: "Response Time",
      responseTimeValue: "We respond within 24 hours",
      whyChoose: "Why Choose Red Patronus",
      whyItems: [
        "15+ years of enterprise security experience",
        "Industry-leading certifications",
        "Dedicated account management",
      ],
      requestConsultation: "Request a Consultation",
      messageReceived: "Message Received",
      messageReceivedDesc:
        "Thank you for reaching out. One of our security consultants will contact you within 24 hours.",
      sendAnother: "Send Another Message",
      privacyNote: "By submitting this form, you agree to our privacy policy. We'll never share your information.",
      form: {
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        businessEmail: "Business Email",
        phone: "Phone (Optional)",
        message: "How can we help?",
        submit: "Send Message",
        sending: "Sending...",
      },
      info: {
        title: "Get in Touch",
        description:
          "Ready to discuss your cybersecurity needs? Our team of experts is here to help you protect your digital assets.",
        email: "Email Us",
        call: "Call Us",
        visit: "Visit Us",
      },
      toast: {
        successTitle: "Message Sent",
        successDesc: "Thank you for contacting us. We'll be in touch soon.",
        errorTitle: "Error",
        errorDesc: "There was a problem sending your message. Please try again.",
      },
    },
    // About page
    about: {
      title: "About Red Patronus",
      subtitle: "Your trusted partner in cybersecurity excellence",
      heroTitle: "Defenders of Digital Infrastructure",
      heroSubtitle:
        "Founded by security veterans with decades of combined experience, Red Patronus has grown into a trusted partner for enterprise organizations seeking comprehensive offensive security services.",
      mission: {
        title: "Our Mission",
        description:
          "To provide world-class cybersecurity solutions that protect organizations from evolving threats while ensuring regulatory compliance.",
        p1: "At Red Patronus, we believe that proactive security is the cornerstone of digital resilience. Our mission is to help organizations identify and remediate security vulnerabilities before they can be exploited by malicious actors.",
        p2: "We combine deep technical expertise with an adversary's mindset to deliver security assessments that provide genuine insight into your organization's security posture. Our team doesn't just find vulnerabilities—we help you understand and fix them.",
      },
      vision: {
        title: "Our Vision",
        description:
          "To be the leading cybersecurity partner for enterprises across Europe, setting the standard for security excellence.",
      },
      globalReach: "Global Reach",
      globalReachDesc: "Serving clients in 40+ countries",
      industryExpertise: "Industry Expertise",
      expertise: {
        financial: "Financial Services",
        healthcare: "Healthcare & Life Sciences",
        technology: "Technology & SaaS",
        manufacturing: "Manufacturing",
        retail: "Retail & E-commerce",
        government: "Government & Defense",
      },
      valuesLabel: "Our Values",
      valuesTitle: "Principles That Guide Us",
      valuesSubtitle: "Our core values define how we approach every engagement and relationship with our clients.",
      values: {
        integrity: {
          title: "Integrity",
          description:
            "We operate with the highest ethical standards, ensuring client trust and confidentiality in all engagements.",
        },
        excellence: {
          title: "Excellence",
          description:
            "Our team pursues continuous improvement, staying ahead of emerging threats and attack techniques.",
        },
        collaboration: {
          title: "Collaboration",
          description:
            "We work as an extension of your team, fostering partnerships that drive lasting security improvements.",
        },
        confidentiality: {
          title: "Confidentiality",
          description:
            "Client data and findings are protected with enterprise-grade security and strict access controls.",
        },
      },
      teamTitle: "World-Class Security Team",
      teamDesc:
        "Our team comprises security professionals with backgrounds in enterprise security, government agencies, and leading technology companies. Every consultant holds multiple industry certifications and brings real-world experience to every engagement.",
      securityExperts: "Security Experts",
      certificationsHeld: "Certifications Held",
      joinTeam: "Join Our Team",
      teamCertifications: "Team Certifications",
      ctaTitle: "Ready to Work Together?",
      ctaSubtitle: "Start a discussion with us on how we can help strengthen your organization's security posture.",
      ctaButton: "Contact Us Today",
    },
    // Case Studies page
    caseStudies: {
      heroLabel: "Case Studies",
      heroTitle: "Proven Results for Enterprise Clients",
      heroSubtitle:
        "Discover how we've helped leading organizations across industries identify vulnerabilities, achieve compliance, and strengthen their security posture.",
      stats: {
        clients: "Enterprise Clients",
        assessments: "Assessments Completed",
        vulnerabilities: "Vulnerabilities Identified",
        retention: "Client Retention",
      },
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      studies: {
        financial: {
          industry: "Financial Services",
          title: "Global Insurance Company Transformation",
          challenge:
            "Helping an insurance company move from on-premise to cloud infrastructure while securing the new environment.",
          solution:
            "Conducted phased penetration testing program, red team engagement, and security architecture review over 12 months.",
          results: [
            "Identified 47 critical vulnerabilities",
            "Zero breaches during transformation",
            "Achieved SOC 2 Type II compliance",
            "40% reduction in security incidents",
          ],
        },
        healthcare: {
          industry: "Healthcare",
          title: "Healthcare System HIPAA Compliance",
          challenge:
            "Helping a regional healthcare provider secure their HIPAA compliant data.",
          solution:
            "Designed data protection controls, secured patient data stores, and validated safeguards through targeted security testing to maintain HIPAA compliance.",
          results: [
            "Secured 2M+ patient records",
            "Full HIPAA compliance achieved",
            "Implemented zero-trust architecture",
            "Security awareness training for 5,000 staff",
          ],
        },
        technology: {
          industry: "Technology",
          title: "SaaS Platform Security Hardening",
          challenge:
            "Enterprise SaaS company preparing for IPO required third-party security validation and SOC 2 certification.",
          solution:
            "Comprehensive security program including cloud security assessment, API testing, and continuous penetration testing.",
          results: [
            "SOC 2 Type II certified",
            "95% vulnerability remediation rate",
            "Successful IPO security due diligence",
            "Ongoing red team program established",
          ],
        },
      },
      testimonialsLabel: "Client Testimonials",
      testimonialsTitle: "What Our Clients Say",
      testimonials: {
        t1: {
          quote:
            "Red Patronus transformed our security posture. Their team's expertise and professionalism exceeded our expectations at every stage.",
          author: "Chief Information Security Officer",
          company: "Leading Financial Services Company",
        },
        t2: {
          quote:
            "The depth of their assessments gave us confidence that we were truly prepared for real-world threats. Exceptional work.",
          author: "VP of Engineering",
          company: "Enterprise Technology Company",
        },
      },
      certificationsTitle: "Industry Certifications & Partnerships",
      certificationsSubtitle:
        "Our team holds industry-leading certifications and maintains partnerships with major security organizations.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certified" },
        soc: { name: "SOC 2 Type II", desc: "Compliant" },
        crest: { name: "CREST", desc: "Member" },
        pci: { name: "PCI-DSS", desc: "QSA Partner" },
      },
      ctaTitle: "Ready to Be Our Next Success Story?",
      ctaSubtitle: "Start a discussion with us on how we can help strengthen your organization's security posture.",
      ctaButton: "Begin Your Assessment",
    },
    // Services page (full)
    servicesPage: {
      heroLabel: "Our Services",
      heroTitle: "Enterprise Security Solutions",
      heroSubtitle:
        "We deliver expert digital solutions by the book of DORA (Digital Operational Resilience Act) compliance. From vulnerability assessments to advanced threat monitoring, all our services are designed to meet the highest regulatory standards.",
      keyCapabilities: "Key Capabilities",
      securingCloud: "Securing Your Cloud on",
      customTitle: "Need a Custom Solution?",
      customSubtitle:
        "Our team can tailor our services to meet your organization's specific security requirements and compliance needs.",
      customButton: "Contact Us",
      items: {
        offensive: {
          title: "Offensive Security Services",
          description:
            "From classic penetration tests & customized phishing campaigns to RedTeam engagements. Our expert team simulates real-world cyber attacks to identify vulnerabilities and test your defenses.",
          features: [
            "Web Penetration Tests (OWASP)",
            "Infrastructure Penetration Tests",
            "Red Team Engagements",
            "Attack Simulations",
            "Social Engineering Tests",
            "Post-Exploitation Analysis",
          ],
        },
        cloud: {
          title: "Cloud Security",
          description:
            "Specialized security assessments for AWS, Azure, and GCP environments, ensuring your cloud infrastructure meets enterprise security standards and best practices.",
          features: [
            "Cloud Configuration Review",
            "IAM Policy Assessment",
            "Container Security Testing",
            "Kubernetes Security Audit",
            "DevSecOps Integration",
            "Cloud Compliance Assessment",
          ],
        },
        defensive: {
          title: "Defensive Security Services",
          description:
            "Comprehensive defensive security with continuous monitoring, DevSecOps, asset management, and proactive threat response to safeguard your organization.",
          features: [
            "Security Operations Center (SOC)",
            "Continuous Security Scanning",
            "DevSecOps Integration",
            "Business Continuity Planning",
            "Threat Detection & Response",
            "Asset Management",
          ],
        },
        etsm: {
          title: "External Threat & Security Monitoring",
          description:
            "OSINT-powered monitoring that uncovers vulnerabilities and delivers actionable insights through continuous surveillance of publicly available data.",
          features: [
            "Comprehensive Data Analysis",
            "Proactive Threat Detection",
            "Actionable Insights",
            "OSINT Tools Integration",
            "Automated Surveillance",
            "Real-time Monitoring",
          ],
        },
        training: {
          title: "Cybersecurity Training",
          description:
            "Equips employees with the skills to detect, report, and respond to cyber threats, ensuring compliance and protecting company assets.",
          features: [
            "Compliance Training",
            "Threat Awareness Programs",
            "Security Best Practices",
            "Phishing Recognition",
            "Incident Response Training",
            "Customized Programs",
          ],
        },
        compliance: {
          title: "Compliance and Regulation / Audits",
          description:
            "DORA-aligned compliance assessments, OSINT analysis, and GAP analysis following CIS, NIST, and EU regulations to ensure your organization meets all operational resilience requirements.",
          features: [
            "DORA Compliance",
            "CIS & NIST Alignment",
            "EU Regulation Compliance",
            "GAP Analysis",
            "Audit Support",
            "Risk Assessment",
          ],
        },
        iam: {
          title: "Identity Access Management",
          description:
            "IAM as a Service using Okta, managed via Terraform and CI/CD for secure, efficient identity and access management across your organization.",
          features: [
            "Okta SSO Platform",
            "Active Directory Integration",
            "Terraform Management",
            "CI/CD Pipeline Integration",
            "Access Control Management",
            "Multi-factor Authentication",
          ],
        },
        phishing: {
          title: "Phishing Simulation",
          description:
            "Test employee awareness with realistic phishing simulations to reduce risks and strengthen your cybersecurity culture.",
          features: [
            "Realistic Simulations",
            "Employee Awareness Testing",
            "Detailed Reporting",
            "Risk Reduction",
            "Compliance Support",
            "Continuous Improvement",
          ],
        },
        siem: {
          title: "SIEM & Audit Logging",
          description:
            "Real-time monitoring of security events with comprehensive log analysis and rapid detection and response to potential security incidents.",
          features: [
            "Real-time Monitoring",
            "Comprehensive Log Analysis",
            "Threat Identification",
            "Authentication Monitoring",
            "Audit Log Management",
            "Incident Response",
          ],
        },
      },
    },
  },
  sk: {
    nav: {
      home: "Domov",
      services: "Služby",
      about: "O nás",
      caseStudies: "Prípadové štúdie",
      tools: "Nástroje",
      contact: "Kontakt",
      hiring: "Hľadáme ľudí",
      contactUs: "Kontaktujte nás",
    },
    hero: {
      highlight1: "Bezpečnostné kontroly v súlade s DORA",
      highlight2: "Certifikovaní špecialisti na cloud security",
      highlight3: "Reakcia na incidenty 24/7 pre Enterprise",
      title: "Špičková kybernetická bezpečnosť pre podniky.\nDôveryhodné.\nZabezpečené.\nV súlade s predpismi.",
      subtitle:
        "Chránime vaše digitálne aktíva pomocou najmodernejších bezpečnostných služieb, penetračného testovania a riešení v súlade s DORA. Váš dôveryhodný partner v oblasti kybernetickej bezpečnosti.",
      cta: "Začať",
      secondaryCta: "Naše služby",
    },
    services: {
      title: "Naše bezpečnostné služby",
      subtitle:
        "Komplexné riešenia kybernetickej bezpečnosti prispôsobené na ochranu vašej organizácie pred vyvíjajúcimi sa hrozbami pri zabezpečení súladu s DORA.",
      viewAll: "Zobraziť všetky služby",
      learnMore: "Zistiť viac",
      offensive: {
        title: "Ofenzívna bezpečnosť",
        description:
          "Proaktívne bezpečnostné testovanie vrátane penetračného testovania, red team cvičení a hodnotenia zraniteľností.",
      },
      defensive: {
        title: "Defenzívna bezpečnosť",
        description:
          "24/7 bezpečnostný monitoring, reakcia na incidenty a detekcia hrozieb na ochranu vašej infraštruktúry.",
      },
      cloud: {
        title: "Cloudová bezpečnosť",
        description: "Zabezpečte svoju cloudovú infraštruktúru na AWS, Azure a GCP s našimi odbornými riešeniami.",
      },
      compliance: {
        title: "DORA Súlad",
        description: "Zabezpečte regulačný súlad s DORA, GDPR, ISO 27001 a ďalšími bezpečnostnými štandardmi.",
      },
      consulting: {
        title: "Bezpečnostné poradenstvo",
        description:
          "Strategické bezpečnostné poradenské služby na posilnenie bezpečnostnej pozície vašej organizácie.",
      },
      training: {
        title: "Bezpečnostné školenia",
        description: "Posilnite svoj tím komplexným školením o kybernetickej bezpečnosti a technickými školeniami.",
      },
    },
    ai: {
      badge: "AI-Powered",
      title: "Bezpečnostné riešenia poháňané AI",
      subtitle:
        "Využite silu umelej inteligencie na rýchlejšiu detekciu hrozieb, automatizáciu bezpečnostného testovania a udržanie náskoku pred sofistikovanými kybernetickými útokmi.",
      cta: "Preskúmať AI riešenia",
      features: {
        pentest: {
          title: "AI penetračné testovanie",
          description:
            "Automatizované, inteligentné penetračné testovanie, ktoré nepretržite skúma vaše systémy a identifikuje zraniteľnosti s rýchlosťou a presnosťou presahujúcou manuálne testovanie.",
        },
        threatIntel: {
          title: "AI analýza hrozieb",
          description:
            "Analýza hrozieb v reálnom čase poháňaná strojovým učením, analyzujúca globálne údaje o hrozbách na predpovedanie a prevenciu útokov skôr, ako nastanú.",
        },
        autoResponse: {
          title: "Automatizovaná reakcia na incidenty",
          description:
            "Reakcia na incidenty riadená AI, ktorá deteguje, izoluje a odstraňuje bezpečnostné incidenty v priebehu sekúnd, minimalizujúc škody a výpadky.",
        },
        continuous: {
          title: "Nepretržitý bezpečnostný monitoring",
          description:
            "24/7 monitoring poháňaný AI, ktorý sa učí základné správanie vášho prostredia a okamžite upozorňuje na anomálie a potenciálne hrozby.",
        },
      },
    },
    trust: {
      certifications: "Certifikácie a štandardy",
      certificationsLabel: "Certifikácie a súlad",
      certificationsTitle: "Excelentnosť uznaná v odvetví",
      certs: {
        iso: "Informačná bezpečnosť",
        dora: "Nariadenie EÚ o digitálnej prevádzkovej odolnosti",
        nis2: "Smernica EÚ o sieťovej a informačnej bezpečnosti",
        soc2: "Bezpečnosť a dostupnosť",
        crest: "Certifikovaný poskytovateľ",
        oscp: "Certifikovaný tím",
      },
      stats: {
        years: "Rokov skúseností",
        projects: "Dokončených projektov",
        clients: "Spokojných klientov",
        experts: "Bezpečnostných expertov",
      },
      statsItems: {
        years: "Rokov excelentnosti",
        clients: "Podnikoví klienti",
        experts: "Bezpečnostní experti",
        satisfaction: "Spokojnosť klientov",
      },
      testimonialsLabel: "Referencie klientov",
      testimonials: "Čo hovoria naši klienti",
      testimonial: {
        quote:
          "Red Patronus poskytol výnimočné služby hodnotenia bezpečnosti pre našu cloudovú infraštruktúru. Ich dôkladné penetračné testovanie a jasné reporty nám pomohli výrazne posilniť našu bezpečnostnú pozíciu naprieč všetkými poisťovacími operáciami.",
        author: "Riaditeľ bezpečnosti",
        company: "Vienna Insurance Group",
      },
      partners: "Naši dôveryhodní partneri",
    },
    cta: {
      title: "Pripravení zabezpečiť váš biznis?",
      subtitle:
        "Kontaktujte našich bezpečnostných expertov ešte dnes a zistite, ako môžeme chrániť vašu organizáciu pred kybernetickými hrozbami.",
      button: "Naplánovať konzultáciu",
    },
    footer: {
      description:
        "Podnikové riešenia kybernetickej bezpečnosti chrániace organizácie po celej Európe. Bezpečnostné služby v súlade s DORA, ktorým môžete dôverovať.",
      services: "Služby",
      company: "Spoločnosť",
      contactInfo: "Kontaktné údaje",
      aboutUs: "O nás",
      copyright: "Všetky práva vyhradené.",
      privacy: "Zásady ochrany osobných údajov",
      terms: "Podmienky služby",
    },
    contact: {
      title: "Kontaktujte nás",
      subtitle: "Spojte sa s našimi bezpečnostnými expertmi",
      heroLabel: "Kontaktujte nás",
      heroTitle: "Poďme diskutovať o vašich bezpečnostných potrebách",
      heroSubtitle:
        "Náš tím bezpečnostných expertov je pripravený pomôcť vám chrániť váš podnik. Kontaktujte nás a naplánujte konzultáciu.",
      getInTouch: "Spojte sa s nami",
      getInTouchDesc:
        "Či už potrebujete bezpečnostné hodnotenie, poradenstvo v oblasti súladu alebo chcete vedieť viac o našich službách, sme tu pre vás.",
      emailLabel: "Email",
      phoneLabel: "Telefón",
      locationLabel: "Sídlo",
      responseTimeLabel: "Doba odozvy",
      responseTimeValue: "Zvyčajne odpovedáme do 24 pracovných hodín",
      whyChoose: "Prečo si vybrať Red Patronus",
      whyItems: [
        "15+ rokov skúseností v podnikovej bezpečnosti",
        "Popredné certifikácie v odvetví",
        "Dedikovaný správa účtov",
      ],
      requestConsultation: "Požiadať o konzultáciu",
      messageReceived: "Správa prijatá",
      messageReceivedDesc:
        "Ďakujeme za kontaktovanie. Jeden z našich bezpečnostných konzultantov vás bude kontaktovať do 24 pracovných hodín.",
      sendAnother: "Odoslať ďalšiu správu",
      privacyNote:
        "Odoslaním tohto formulára súhlasíte s našimi zásadami ochrany osobných údajov. Vaše informácie nikdy nebudeme zdieľať.",
      form: {
        name: "Celé meno",
        email: "E-mailová adresa",
        company: "Názov spoločnosti",
        businessEmail: "Firemný email",
        phone: "Telefón (voliteľné)",
        message: "Ako vám môžeme pomôcť?",
        submit: "Odoslať správu",
        sending: "Odosielanie...",
      },
      info: {
        title: "Spojte sa s nami",
        description:
          "Ste pripravení diskutovať o vašich potrebách kybernetickej bezpečnosti? Náš tím expertov je tu, aby vám pomohol chrániť vaše digitálne aktíva.",
        email: "Napíšte nám",
        call: "Zavolajte nám",
        visit: "Navštívte nás",
      },
      toast: {
        successTitle: "Správa odoslaná",
        successDesc: "Ďakujeme za kontaktovanie. Čoskoro sa vám ozveme.",
        errorTitle: "Chyba",
        errorDesc: "Pri odosielaní vašej správy sa vyskytol problém. Skúste to prosím znova.",
      },
    },
    about: {
      title: "O Red Patronus",
      subtitle: "Váš dôveryhodný partner v oblasti kybernetickej bezpečnosti",
      heroTitle: "Ochrancovia digitálnej infraštruktúry",
      heroSubtitle:
        "Založená bezpečnostnými veteránmi s desaťročiami kombinovaných skúseností, Red Patronus sa rozrástla na dôveryhodného partnera pre podnikové organizácie hľadajúce komplexné ofenzívne bezpečnostné služby.",
      mission: {
        title: "Naša misia",
        description:
          "Poskytovať svetové riešenia kybernetickej bezpečnosti, ktoré chránia organizácie pred vyvíjajúcimi sa hrozbami pri zabezpečení regulačného súladu.",
        p1: "V Red Patronus veríme, že proaktívna bezpečnosť je základom digitálnej odolnosti. Naša misia je pomáhať organizáciám identifikovať a napraviť bezpečnostné zraniteľnosti skôr, než ich môžu zneužiť škodliví aktéri.",
        p2: "Kombinujeme hlboké technické odborné znalosti s myslením protivníka, aby sme poskytli bezpečnostné hodnotenia, ktoré ponúkajú skutočný pohľad na bezpečnostnú pozíciu vašej organizácie. Náš tím nielen nachádza zraniteľnosti — pomáhame vám ich pochopiť a opraviť.",
      },
      vision: {
        title: "Naša vízia",
        description:
          "Byť vedúcim partnerom v oblasti kybernetickej bezpečnosti pre podniky po celej Európe, nastavujúc štandard pre bezpečnostnú excelentnosť.",
      },
      globalReach: "Globálny dosah",
      globalReachDesc: "Slúžime klientom v 40+ krajinách",
      industryExpertise: "Odbornosť v odvetví",
      expertise: {
        financial: "Finančné služby",
        healthcare: "Zdravotníctvo a Life Sciences",
        technology: "Technológie a SaaS",
        manufacturing: "Výroba",
        retail: "Maloobchod a e-commerce",
        government: "Vláda a obrana",
      },
      valuesLabel: "Naše hodnoty",
      valuesTitle: "Princípy, ktoré nás vedú",
      valuesSubtitle: "Naše základné hodnoty definujú, ako pristupujeme ku každej zákazke a vzťahu s našimi klientmi.",
      values: {
        integrity: {
          title: "Integrita",
          description:
            "Pracujeme s najvyššími etickými štandardmi, zabezpečujúc dôveru klientov a dôvernosť vo všetkých zákazkách.",
        },
        excellence: {
          title: "Excelentnosť",
          description: "Náš tím sa neustále zdokonaľuje, držiac krok s novými hrozbami a útočnými technikami.",
        },
        collaboration: {
          title: "Spolupráca",
          description:
            "Pracujeme ako rozšírenie vášho tímu, podporujúc partnerstvá, ktoré prinášajú trvalé bezpečnostné zlepšenia.",
        },
        confidentiality: {
          title: "Dôvernosť",
          description:
            "Údaje klientov a zistenia sú chránené podnikovou úrovňou zabezpečenia a prísnymi kontrolami prístupu.",
        },
      },
      teamTitle: "Bezpečnostný tím svetovej triedy",
      teamDesc:
        "Náš tím tvoria bezpečnostní profesionáli so skúsenosťami z podnikovej bezpečnosti, vládnych agentúr a popredných technologických spoločností. Každý konzultant má viacero certifikácií a prináša reálne skúsenosti do každej zákazky.",
      securityExperts: "Bezpečnostných expertov",
      certificationsHeld: "Držaných certifikácií",
      joinTeam: "Pridajte sa k nášmu tímu",
      teamCertifications: "Certifikácie tímu",
      ctaTitle: "Pripravení spolupracovať?",
      ctaSubtitle:
        "Poďme diskutovať o tom, ako môže Red Patronus pomôcť posilniť bezpečnostnú pozíciu vašej organizácie.",
      ctaButton: "Kontaktujte nás ešte dnes",
    },
    caseStudies: {
      heroLabel: "Prípadové štúdie",
      heroTitle: "Preukázané výsledky pre podnikových klientov",
      heroSubtitle:
        "Zistite, ako sme pomohli popredným organizáciám naprieč odvetviami identifikovať zraniteľnosti, dosiahnuť súlad a posilniť ich bezpečnostnú pozíciu.",
      stats: {
        clients: "Podnikoví klienti",
        assessments: "Dokončených hodnotení",
        vulnerabilities: "Identifikovaných zraniteľností",
        retention: "Udržanie klientov",
      },
      challenge: "Výzva",
      solution: "Riešenie",
      results: "Výsledky",
      studies: {
        financial: {
          industry: "Finančné služby",
          title: "Transformácia globálnej poisťovne",
          challenge:
            "Pomoc poisťovni pri prechode z on-premise na cloudovú infraštruktúru a zabezpečenie nového prostredia.",
          solution:
            "Realizovali sme fázovaný program penetračného testovania, red team zákazku a revíziu bezpečnostnej architektúry počas 12 mesiacov.",
          results: [
            "Identifikovaných 47 kritických zraniteľností",
            "Žiadne narušenia počas transformácie",
            "Dosiahnutý súlad SOC 2 Type II",
            "40% zníženie bezpečnostných incidentov",
          ],
        },
        healthcare: {
          industry: "Zdravotníctvo",
          title: "Súlad zdravotníckeho systému s HIPAA",
          challenge:
            "Pomoc regionálnemu poskytovateľovi zdravotnej starostlivosti pri zabezpečení ich HIPAA-kompatibilných dát.",
          solution:
            "Navrhli sme kontroly ochrany dát, zabezpečili úložiská pacientskych údajov a overili opatrenia cieleným bezpečnostným testovaním na udržanie súladu s HIPAA.",
          results: [
            "Zabezpečených 2M+ záznamov pacientov",
            "Dosiahnutý plný súlad s HIPAA",
            "Implementovaná architektúra nulovej dôvery",
            "Školenie o bezpečnostnom povedomí pre 5 000 zamestnancov",
          ],
        },
        technology: {
          industry: "Technológie",
          title: "Bezpečnostné posilnenie SaaS platformy",
          challenge:
            "Podniková SaaS spoločnosť pripravujúca sa na IPO vyžadovala validáciu bezpečnosti treťou stranou a SOC 2 certifikáciu.",
          solution:
            "Komplexný bezpečnostný program vrátane hodnotenia cloudovej bezpečnosti, testovania API a nepretržitého penetračného testovania.",
          results: [
            "Certifikácia SOC 2 Type II",
            "95% miera nápravy zraniteľností",
            "Úspešná bezpečnostná due diligence pre IPO",
            "Zavedený priebežný red team program",
          ],
        },
      },
      testimonialsLabel: "Referencie klientov",
      testimonialsTitle: "Čo hovoria naši klienti",
      testimonials: {
        t1: {
          quote:
            "Red Patronus transformoval našu bezpečnostnú pozíciu. Odbornosť a profesionalita ich tímu prekonala naše očakávania v každej fáze.",
          author: "Riaditeľ informačnej bezpečnosti",
          company: "Popredná spoločnosť finančných služieb",
        },
        t2: {
          quote:
            "Hĺbka ich hodnotení nám dala istotu, že sme boli skutočne pripravení na reálne hrozby. Výnimočná práca.",
          author: "VP inžinieringu",
          company: "Podniková technologická spoločnosť",
        },
      },
      certificationsTitle: "Certifikácie a partnerstvá v odvetví",
      certificationsSubtitle:
        "Náš tím má popredné certifikácie v odvetví a udržiava partnerstvá s hlavnými bezpečnostnými organizáciami.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certifikovaný" },
        soc: { name: "SOC 2 Type II", desc: "V súlade" },
        crest: { name: "CREST", desc: "Člen" },
        pci: { name: "PCI-DSS", desc: "QSA Partner" },
      },
      ctaTitle: "Pripravení byť naším ďalším úspešným príbehom?",
      ctaSubtitle:
        "Kontaktujte nás a prediskutujte, ako vám môžeme pomôcť posilniť bezpečnostnú pozíciu vašej organizácie.",
      ctaButton: "Začať hodnotenie",
    },
    servicesPage: {
      heroLabel: "Naše služby",
      heroTitle: "Podnikové bezpečnostné riešenia",
      heroSubtitle:
        "Poskytujeme odborné digitálne riešenia podľa zákona DORA (Zákon o digitálnej prevádzkovej odolnosti). Od hodnotenia zraniteľností po pokročilé monitorovanie hrozieb, všetky naše služby sú navrhnuté tak, aby spĺňali najvyššie regulačné štandardy.",
      keyCapabilities: "Kľúčové schopnosti",
      securingCloud: "Zabezpečenie vášho cloudu na",
      customTitle: "Potrebujete vlastné riešenie?",
      customSubtitle:
        "Náš tím dokáže prispôsobiť naše služby špecifickým bezpečnostným požiadavkám a potrebám súladu vašej organizácie.",
      customButton: "Kontaktujte náš tím",
      items: {
        offensive: {
          title: "Služby ofenzívnej bezpečnosti",
          description:
            "Od klasických penetračných testov a prispôsobených phishingových kampaní po RedTeam zákazky. Náš odborný tím simuluje reálne kybernetické útoky na identifikáciu zraniteľností a testovanie vašich obranných mechanizmov.",
          features: [
            "Webové penetračné testy (OWASP)",
            "Penetračné testy infraštruktúry",
            "Red Team zákazky",
            "Simulácie útokov",
            "Testy sociálneho inžinierstva",
            "Post-exploitačná analýza",
          ],
        },
        cloud: {
          title: "Cloudová bezpečnosť",
          description:
            "Špecializované bezpečnostné hodnotenia pre prostredia AWS, Azure a GCP, zabezpečujúce, že vaša cloudová infraštruktúra spĺňa podnikové bezpečnostné štandardy a osvedčené postupy.",
          features: [
            "Revízia konfigurácie cloudu",
            "Hodnotenie IAM politík",
            "Testovanie bezpečnosti kontajnerov",
            "Bezpečnostný audit Kubernetes",
            "Integrácia DevSecOps",
            "Hodnotenie súladu cloudu",
          ],
        },
        defensive: {
          title: "Služby defenzívnej bezpečnosti",
          description:
            "Komplexná defenzívna bezpečnosť s nepretržitým monitorovaním, DevSecOps, správou aktív a proaktívnou reakciou na hrozby na ochranu vašej organizácie.",
          features: [
            "Bezpečnostné operačné centrum (SOC)",
            "Nepretržité bezpečnostné skenovanie",
            "Integrácia DevSecOps",
            "Plánovanie kontinuity podnikania",
            "Detekcia a reakcia na hrozby",
            "Správa aktív",
          ],
        },
        etsm: {
          title: "Externé monitorovanie hrozieb a bezpečnosti",
          description:
            "OSINT monitoring, ktorý odhaľuje zraniteľnosti a poskytuje akčné poznatky prostredníctvom nepretržitého sledovania verejne dostupných údajov.",
          features: [
            "Komplexná analýza údajov",
            "Proaktívna detekcia hrozieb",
            "Akčné poznatky",
            "Integrácia OSINT nástrojov",
            "Automatizované sledovanie",
            "Monitorovanie v reálnom čase",
          ],
        },
        training: {
          title: "Školenie kybernetickej bezpečnosti",
          description:
            "Vybavuje zamestnancov zručnosťami na detekciu, hlásenie a reakciu na kybernetické hrozby, zabezpečujúc súlad a ochranu firemných aktív.",
          features: [
            "Školenie o súlade",
            "Programy povedomia o hrozbách",
            "Najlepšie bezpečnostné postupy",
            "Rozpoznanie phishingu",
            "Školenie reakcie na incidenty",
            "Prispôsobené programy",
          ],
        },
        compliance: {
          title: "Súlad a regulácia / Audity",
          description:
            "Hodnotenia súladu v súlade s DORA, OSINT analýza a GAP analýza podľa CIS, NIST a predpisov EÚ na zabezpečenie, že vaša organizácia spĺňa všetky požiadavky prevádzkovej odolnosti.",
          features: [
            "DORA súlad",
            "CIS a NIST zosúladenie",
            "Súlad s predpismi EÚ",
            "GAP analýza",
            "Podpora auditu",
            "Hodnotenie rizík",
          ],
        },
        iam: {
          title: "Správa identít a prístupov",
          description:
            "IAM ako služba s využitím Okta, spravovaná cez Terraform a CI/CD pre bezpečnú, efektívnu správu identít a prístupov v celej vašej organizácii.",
          features: [
            "Okta SSO platforma",
            "Integrácia Active Directory",
            "Správa cez Terraform",
            "Integrácia CI/CD pipeline",
            "Správa riadenia prístupu",
            "Viacfaktorová autentifikácia",
          ],
        },
        phishing: {
          title: "Simulácia phishingu",
          description:
            "Otestujte povedomie zamestnancov realistickými simuláciami phishingu na zníženie rizík a posilnenie vašej kultúry kybernetickej bezpečnosti.",
          features: [
            "Realistické simulácie",
            "Testovanie povedomia zamestnancov",
            "Podrobné reporty",
            "Zníženie rizika",
            "Podpora súladu",
            "Neustále zlepšovanie",
          ],
        },
        siem: {
          title: "SIEM a audit logging",
          description:
            "Monitorovanie bezpečnostných udalostí v reálnom čase s komplexnou analýzou logov a rýchlou detekciou a reakciou na potenciálne bezpečnostné incidenty.",
          features: [
            "Monitorovanie v reálnom čase",
            "Komplexná analýza logov",
            "Identifikácia hrozieb",
            "Monitorovanie autentifikácie",
            "Správa auditných logov",
            "Reakcia na incidenty",
          ],
        },
      },
    },
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      about: "Über uns",
      caseStudies: "Fallstudien",
      tools: "Tools",
      contact: "Kontakt",
      hiring: "Wir stellen ein",
      contactUs: "Kontaktieren Sie uns",
    },
    hero: {
      highlight1: "DORA-konforme Sicherheitskontrollen",
      highlight2: "Cloud-zertifizierte Security-Spezialisten",
      highlight3: "24/7 Incident Response für Enterprise",
      title: "Cybersicherheit auf Enterprise-Niveau.\nVertrauenswürdig.\nSicher.\nKonform.",
      subtitle:
        "Schutz Ihrer digitalen Vermögenswerte mit modernsten Sicherheitsdiensten, Penetrationstests und DORA-konformen Lösungen. Ihr vertrauenswürdiger Partner für Cybersicherheit.",
      cta: "Loslegen",
      secondaryCta: "Unsere Dienste",
    },
    services: {
      title: "Unsere Sicherheitsdienste",
      subtitle:
        "Umfassende Cybersicherheitslösungen, die auf den Schutz Ihrer Organisation vor sich entwickelnden Bedrohungen zugeschnitten sind und DORA-Konformität gewährleisten.",
      viewAll: "Alle Dienste anzeigen",
      learnMore: "Mehr erfahren",
      offensive: {
        title: "Offensive Sicherheit",
        description:
          "Proaktive Sicherheitstests einschließlich Penetrationstests, Red-Team-Übungen und Schwachstellenbewertungen.",
      },
      defensive: {
        title: "Defensive Sicherheit",
        description:
          "24/7 Sicherheitsüberwachung, Incident Response und Bedrohungserkennung zum Schutz Ihrer Infrastruktur.",
      },
      cloud: {
        title: "Cloud-Sicherheit",
        description: "Sichern Sie Ihre Cloud-Infrastruktur auf AWS, Azure und GCP mit unseren Expertenlösungen.",
      },
      compliance: {
        title: "DORA Compliance",
        description:
          "Gewährleisten Sie regulatorische Konformität mit DORA, DSGVO, ISO 27001 und anderen Sicherheitsstandards.",
      },
      consulting: {
        title: "Sicherheitsberatung",
        description: "Strategische Sicherheitsberatung zur Stärkung der Sicherheitslage Ihrer Organisation.",
      },
      training: {
        title: "Sicherheitsschulungen",
        description: "Stärken Sie Ihr Team mit umfassenden Cybersicherheitsschulungen und technischen Trainings.",
      },
    },
    ai: {
      badge: "KI-gestützt",
      title: "KI-gestützte Sicherheitslösungen",
      subtitle:
        "Nutzen Sie die Kraft der künstlichen Intelligenz, um Bedrohungen schneller zu erkennen, Sicherheitstests zu automatisieren und raffinierten Cyberangriffen einen Schritt voraus zu sein.",
      cta: "KI-Lösungen erkunden",
      features: {
        pentest: {
          title: "KI-Penetrationstests",
          description:
            "Automatisierte, intelligente Penetrationstests, die Ihre Systeme kontinuierlich prüfen und Schwachstellen mit Geschwindigkeit und Präzision identifizieren, die über manuelle Tests hinausgehen.",
        },
        threatIntel: {
          title: "KI-Bedrohungsanalyse",
          description:
            "Echtzeit-Bedrohungsanalyse mit maschinellem Lernen, die globale Bedrohungsdaten analysiert, um Angriffe vorherzusagen und zu verhindern.",
        },
        autoResponse: {
          title: "Automatisierte Incident Response",
          description:
            "KI-gesteuerte Incident Response, die Sicherheitsvorfälle in Sekunden erkennt, eindämmt und behebt und so Schäden und Ausfallzeiten minimiert.",
        },
        continuous: {
          title: "Kontinuierliches Sicherheitsmonitoring",
          description:
            "24/7 KI-gestütztes Monitoring, das das Basisverhalten Ihrer Umgebung lernt und sofort Anomalien und potenzielle Bedrohungen meldet.",
        },
      },
    },
    trust: {
      certifications: "Zertifizierungen & Standards",
      certificationsLabel: "Zertifizierungen & Compliance",
      certificationsTitle: "Branchenanerkannte Exzellenz",
      certs: {
        iso: "Informationssicherheit",
        dora: "EU-Verordnung über digitale operationale Resilienz",
        nis2: "EU-Richtlinie zur Netz- und Informationssicherheit",
        soc2: "Sicherheit & Verfügbarkeit",
        crest: "Zertifizierter Anbieter",
        oscp: "Team-zertifiziert",
      },
      stats: {
        years: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Zufriedene Kunden",
        experts: "Sicherheitsexperten",
      },
      statsItems: {
        years: "Jahre Exzellenz",
        clients: "Unternehmenskunden",
        experts: "Sicherheitsexperten",
        satisfaction: "Kundenzufriedenheit",
      },
      testimonialsLabel: "Kundenreferenzen",
      testimonials: "Was unsere Kunden sagen",
      testimonial: {
        quote:
          "Red Patronus hat außergewöhnliche Sicherheitsbewertungsdienste für unsere Cloud-Infrastruktur erbracht. Ihre gründlichen Penetrationstests und klaren Berichte haben uns geholfen, unsere Sicherheitslage in allen unseren Versicherungsgeschäften erheblich zu stärken.",
        author: "Sicherheitsdirektor",
        company: "Vienna Insurance Group",
      },
      partners: "Unsere vertrauenswürdigen Partner",
    },
    cta: {
      title: "Bereit, Ihr Unternehmen zu sichern?",
      subtitle:
        "Kontaktieren Sie noch heute unsere Sicherheitsexperten und erfahren Sie, wie wir Ihre Organisation vor Cyberbedrohungen schützen können.",
      button: "Beratung vereinbaren",
    },
    footer: {
      description:
        "Enterprise Cybersicherheitslösungen zum Schutz von Organisationen in ganz Europa. DORA-konforme Sicherheitsdienste, denen Sie vertrauen können.",
      services: "Dienstleistungen",
      company: "Unternehmen",
      contactInfo: "Kontaktinfo",
      aboutUs: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
    },
    contact: {
      title: "Kontaktieren Sie uns",
      subtitle: "Nehmen Sie Kontakt mit unseren Sicherheitsexperten auf",
      heroLabel: "Kontaktieren Sie uns",
      heroTitle: "Lassen Sie uns Ihre Sicherheitsanforderungen besprechen",
      heroSubtitle:
        "Unser Team von Sicherheitsexperten ist bereit, Ihnen beim Schutz Ihres Unternehmens zu helfen. Kontaktieren Sie uns für eine Beratung.",
      getInTouch: "Kontakt aufnehmen",
      getInTouchDesc:
        "Ob Sie eine Sicherheitsbewertung, Compliance-Beratung benötigen oder mehr über unsere Dienstleistungen erfahren möchten – wir sind für Sie da.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      locationLabel: "Standort",
      responseTimeLabel: "Antwortzeit",
      responseTimeValue: "Wir antworten in der Regel innerhalb von 24 Geschäftsstunden",
      whyChoose: "Warum Red Patronus wählen",
      whyItems: [
        "15+ Jahre Erfahrung in Unternehmenssicherheit",
        "Branchenführende Zertifizierungen",
        "Dediziertes Account-Management",
      ],
      requestConsultation: "Beratung anfordern",
      messageReceived: "Nachricht erhalten",
      messageReceivedDesc:
        "Vielen Dank für Ihre Kontaktaufnahme. Einer unserer Sicherheitsberater wird Sie innerhalb von 24 Geschäftsstunden kontaktieren.",
      sendAnother: "Weitere Nachricht senden",
      privacyNote:
        "Mit dem Absenden dieses Formulars stimmen Sie unserer Datenschutzrichtlinie zu. Wir werden Ihre Daten niemals weitergeben.",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        company: "Firmenname",
        businessEmail: "Geschäfts-E-Mail",
        phone: "Telefon (optional)",
        message: "Wie können wir helfen?",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
      },
      info: {
        title: "Kontakt aufnehmen",
        description:
          "Bereit, Ihre Cybersicherheitsanforderungen zu besprechen? Unser Expertenteam ist hier, um Ihnen beim Schutz Ihrer digitalen Vermögenswerte zu helfen.",
        email: "E-Mail",
        call: "Anrufen",
        visit: "Besuchen Sie uns",
      },
      toast: {
        successTitle: "Nachricht gesendet",
        successDesc: "Vielen Dank für Ihre Kontaktaufnahme. Wir melden uns in Kürze.",
        errorTitle: "Fehler",
        errorDesc: "Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.",
      },
    },
    about: {
      title: "Über Red Patronus",
      subtitle: "Ihr vertrauenswürdiger Partner für Cybersicherheit",
      heroTitle: "Verteidiger der digitalen Infrastruktur",
      heroSubtitle:
        "Gegründet von Sicherheitsveteranen mit jahrzehntelanger kombinierter Erfahrung, hat sich Red Patronus zu einem vertrauenswürdigen Partner für Unternehmensorganisationen entwickelt, die umfassende offensive Sicherheitsdienste suchen.",
      mission: {
        title: "Unsere Mission",
        description:
          "Weltklasse-Cybersicherheitslösungen bereitzustellen, die Organisationen vor sich entwickelnden Bedrohungen schützen und regulatorische Konformität gewährleisten.",
        p1: "Bei Red Patronus glauben wir, dass proaktive Sicherheit der Grundstein digitaler Resilienz ist. Unsere Mission ist es, Organisationen dabei zu helfen, Sicherheitslücken zu identifizieren und zu beheben, bevor sie von böswilligen Akteuren ausgenutzt werden können.",
        p2: "Wir kombinieren tiefgreifendes technisches Fachwissen mit der Denkweise eines Angreifers, um Sicherheitsbewertungen zu liefern, die echte Einblicke in die Sicherheitslage Ihrer Organisation bieten. Unser Team findet nicht nur Schwachstellen – wir helfen Ihnen, sie zu verstehen und zu beheben.",
      },
      vision: {
        title: "Unsere Vision",
        description:
          "Der führende Cybersicherheitspartner für Unternehmen in ganz Europa zu sein und den Standard für Sicherheitsexzellenz zu setzen.",
      },
      globalReach: "Globale Reichweite",
      globalReachDesc: "Kunden in über 40 Ländern betreut",
      industryExpertise: "Branchenexpertise",
      expertise: {
        financial: "Finanzdienstleistungen",
        healthcare: "Gesundheitswesen & Life Sciences",
        technology: "Technologie & SaaS",
        manufacturing: "Fertigung",
        retail: "Einzelhandel & E-Commerce",
        government: "Regierung & Verteidigung",
      },
      valuesLabel: "Unsere Werte",
      valuesTitle: "Prinzipien, die uns leiten",
      valuesSubtitle:
        "Unsere Grundwerte definieren, wie wir jedes Engagement und jede Beziehung mit unseren Kunden angehen.",
      values: {
        integrity: {
          title: "Integrität",
          description:
            "Wir arbeiten nach höchsten ethischen Standards und gewährleisten Kundenvertrauen und Vertraulichkeit in allen Engagements.",
        },
        excellence: {
          title: "Exzellenz",
          description:
            "Unser Team strebt nach kontinuierlicher Verbesserung und bleibt neuen Bedrohungen und Angriffstechniken voraus.",
        },
        collaboration: {
          title: "Zusammenarbeit",
          description:
            "Wir arbeiten als Erweiterung Ihres Teams und fördern Partnerschaften, die dauerhafte Sicherheitsverbesserungen bewirken.",
        },
        confidentiality: {
          title: "Vertraulichkeit",
          description:
            "Kundendaten und Ergebnisse werden mit unternehmenstauglicher Sicherheit und strengen Zugriffskontrollen geschützt.",
        },
      },
      teamTitle: "Erstklassiges Sicherheitsteam",
      teamDesc:
        "Unser Team besteht aus Sicherheitsexperten mit Hintergründen in Unternehmenssicherheit, Regierungsbehörden und führenden Technologieunternehmen. Jeder Berater verfügt über mehrere Branchenzertifizierungen und bringt praxisnahe Erfahrung in jedes Engagement ein.",
      securityExperts: "Sicherheitsexperten",
      certificationsHeld: "Gehaltene Zertifizierungen",
      joinTeam: "Treten Sie unserem Team bei",
      teamCertifications: "Team-Zertifizierungen",
      ctaTitle: "Bereit zur Zusammenarbeit?",
      ctaSubtitle: "Lassen Sie uns besprechen, wie Red Patronus die Sicherheitslage Ihrer Organisation stärken kann.",
      ctaButton: "Kontaktieren Sie uns heute",
    },
    caseStudies: {
      heroLabel: "Fallstudien",
      heroTitle: "Nachgewiesene Ergebnisse für Unternehmenskunden",
      heroSubtitle:
        "Erfahren Sie, wie wir führenden Organisationen branchenübergreifend geholfen haben, Schwachstellen zu identifizieren, Compliance zu erreichen und ihre Sicherheitslage zu stärken.",
      stats: {
        clients: "Unternehmenskunden",
        assessments: "Abgeschlossene Bewertungen",
        vulnerabilities: "Identifizierte Schwachstellen",
        retention: "Kundenbindung",
      },
      challenge: "Herausforderung",
      solution: "Lösung",
      results: "Ergebnisse",
      studies: {
        financial: {
          industry: "Finanzdienstleistungen",
          title: "Transformation einer globalen Versicherungsgesellschaft",
          challenge:
            "Unterstützung einer Versicherungsgesellschaft beim Wechsel von On-Premise- zu Cloud-Infrastruktur und Absicherung der neuen Umgebung.",
          solution:
            "Durchführung eines phasenweisen Penetrationstest-Programms, Red-Team-Engagement und Überprüfung der Sicherheitsarchitektur über 12 Monate.",
          results: [
            "47 kritische Schwachstellen identifiziert",
            "Keine Sicherheitsverletzungen während der Transformation",
            "SOC 2 Type II Compliance erreicht",
            "40% Reduktion der Sicherheitsvorfälle",
          ],
        },
        healthcare: {
          industry: "Gesundheitswesen",
          title: "HIPAA-Compliance im Gesundheitssystem",
          challenge:
            "Unterstützung eines regionalen Gesundheitsversorgers bei der Absicherung seiner HIPAA-konformen Daten.",
          solution:
            "Konzeption von Datenschutzkontrollen, Absicherung der Patientendatenspeicher und Validierung der Maßnahmen durch gezielte Sicherheitstests zur Aufrechterhaltung der HIPAA-Konformität.",
          results: [
            "2M+ Patientenakten gesichert",
            "Vollständige HIPAA-Compliance erreicht",
            "Zero-Trust-Architektur implementiert",
            "Sicherheitsschulungen für 5.000 Mitarbeiter",
          ],
        },
        technology: {
          industry: "Technologie",
          title: "SaaS-Plattform Sicherheitshärtung",
          challenge:
            "Ein Enterprise-SaaS-Unternehmen, das sich auf einen Börsengang vorbereitete, benötigte eine Sicherheitsvalidierung durch Dritte und SOC-2-Zertifizierung.",
          solution:
            "Umfassendes Sicherheitsprogramm einschließlich Cloud-Sicherheitsbewertung, API-Tests und kontinuierlicher Penetrationstests.",
          results: [
            "SOC 2 Type II zertifiziert",
            "95% Schwachstellen-Behebungsrate",
            "Erfolgreiche IPO-Sicherheits-Due-Diligence",
            "Laufendes Red-Team-Programm etabliert",
          ],
        },
      },
      testimonialsLabel: "Kundenreferenzen",
      testimonialsTitle: "Was unsere Kunden sagen",
      testimonials: {
        t1: {
          quote:
            "Red Patronus hat unsere Sicherheitslage transformiert. Die Expertise und Professionalität ihres Teams hat unsere Erwartungen in jeder Phase übertroffen.",
          author: "Chief Information Security Officer",
          company: "Führendes Finanzdienstleistungsunternehmen",
        },
        t2: {
          quote:
            "Die Tiefe ihrer Bewertungen gab uns die Zuversicht, dass wir wirklich auf reale Bedrohungen vorbereitet waren. Außergewöhnliche Arbeit.",
          author: "VP Engineering",
          company: "Enterprise-Technologieunternehmen",
        },
      },
      certificationsTitle: "Branchenzertifizierungen & Partnerschaften",
      certificationsSubtitle:
        "Unser Team verfügt über branchenführende Zertifizierungen und pflegt Partnerschaften mit wichtigen Sicherheitsorganisationen.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Zertifiziert" },
        soc: { name: "SOC 2 Type II", desc: "Konform" },
        crest: { name: "CREST", desc: "Mitglied" },
        pci: { name: "PCI-DSS", desc: "QSA-Partner" },
      },
      ctaTitle: "Bereit, unsere nächste Erfolgsgeschichte zu sein?",
      ctaSubtitle:
        "Kontaktieren Sie uns, um zu besprechen, wie wir die Sicherheitslage Ihrer Organisation stärken können.",
      ctaButton: "Bewertung starten",
    },
    servicesPage: {
      heroLabel: "Unsere Dienstleistungen",
      heroTitle: "Enterprise Sicherheitslösungen",
      heroSubtitle:
        "Wir liefern fachkundige digitale Lösungen nach dem DORA-Gesetz (Digital Operational Resilience Act). Von Schwachstellenbewertungen bis hin zu fortschrittlichem Bedrohungsmonitoring – alle unsere Dienste sind auf die höchsten regulatorischen Standards ausgelegt.",
      keyCapabilities: "Kernkompetenzen",
      securingCloud: "Absicherung Ihrer Cloud auf",
      customTitle: "Individuelle Lösung benötigt?",
      customSubtitle:
        "Unser Team kann unsere Dienstleistungen an die spezifischen Sicherheitsanforderungen und Compliance-Bedürfnisse Ihrer Organisation anpassen.",
      customButton: "Unser Team kontaktieren",
      items: {
        offensive: {
          title: "Offensive Sicherheitsdienste",
          description:
            "Von klassischen Penetrationstests und maßgeschneiderten Phishing-Kampagnen bis hin zu RedTeam-Engagements. Unser Expertenteam simuliert reale Cyberangriffe, um Schwachstellen zu identifizieren und Ihre Abwehr zu testen.",
          features: [
            "Web-Penetrationstests (OWASP)",
            "Infrastruktur-Penetrationstests",
            "Red-Team-Engagements",
            "Angriffssimulationen",
            "Social-Engineering-Tests",
            "Post-Exploitation-Analyse",
          ],
        },
        cloud: {
          title: "Cloud-Sicherheit",
          description:
            "Spezialisierte Sicherheitsbewertungen für AWS-, Azure- und GCP-Umgebungen, die sicherstellen, dass Ihre Cloud-Infrastruktur die Sicherheitsstandards und Best Practices für Unternehmen erfüllt.",
          features: [
            "Cloud-Konfigurationsüberprüfung",
            "IAM-Richtlinienbewertung",
            "Container-Sicherheitstests",
            "Kubernetes-Sicherheitsaudit",
            "DevSecOps-Integration",
            "Cloud-Compliance-Bewertung",
          ],
        },
        defensive: {
          title: "Defensive Sicherheitsdienste",
          description:
            "Umfassende defensive Sicherheit mit kontinuierlichem Monitoring, DevSecOps, Asset-Management und proaktiver Bedrohungsreaktion zum Schutz Ihrer Organisation.",
          features: [
            "Security Operations Center (SOC)",
            "Kontinuierliches Sicherheitsscanning",
            "DevSecOps-Integration",
            "Business-Continuity-Planung",
            "Bedrohungserkennung & -reaktion",
            "Asset-Management",
          ],
        },
        etsm: {
          title: "Externes Bedrohungs- & Sicherheitsmonitoring",
          description:
            "OSINT-gestütztes Monitoring, das Schwachstellen aufdeckt und umsetzbare Erkenntnisse durch kontinuierliche Überwachung öffentlich verfügbarer Daten liefert.",
          features: [
            "Umfassende Datenanalyse",
            "Proaktive Bedrohungserkennung",
            "Umsetzbare Erkenntnisse",
            "OSINT-Tool-Integration",
            "Automatisierte Überwachung",
            "Echtzeit-Monitoring",
          ],
        },
        training: {
          title: "Cybersicherheitsschulung",
          description:
            "Stattet Mitarbeiter mit den Fähigkeiten aus, Cyberbedrohungen zu erkennen, zu melden und darauf zu reagieren, und gewährleistet Compliance und den Schutz von Unternehmenswerten.",
          features: [
            "Compliance-Schulung",
            "Bedrohungsbewusstseins-Programme",
            "Sicherheits-Best-Practices",
            "Phishing-Erkennung",
            "Incident-Response-Schulung",
            "Maßgeschneiderte Programme",
          ],
        },
        compliance: {
          title: "Compliance und Regulierung / Audits",
          description:
            "DORA-konforme Compliance-Bewertungen, OSINT-Analyse und GAP-Analyse nach CIS, NIST und EU-Vorschriften, um sicherzustellen, dass Ihre Organisation alle Anforderungen an die operative Resilienz erfüllt.",
          features: [
            "DORA-Compliance",
            "CIS- & NIST-Ausrichtung",
            "EU-Regulierungs-Compliance",
            "GAP-Analyse",
            "Audit-Unterstützung",
            "Risikobewertung",
          ],
        },
        iam: {
          title: "Identitäts- und Zugriffsmanagement",
          description:
            "IAM als Service mit Okta, verwaltet über Terraform und CI/CD für sicheres, effizientes Identitäts- und Zugriffsmanagement in Ihrer gesamten Organisation.",
          features: [
            "Okta SSO-Plattform",
            "Active-Directory-Integration",
            "Terraform-Verwaltung",
            "CI/CD-Pipeline-Integration",
            "Zugriffskontrollmanagement",
            "Multi-Faktor-Authentifizierung",
          ],
        },
        phishing: {
          title: "Phishing-Simulation",
          description:
            "Testen Sie das Bewusstsein der Mitarbeiter mit realistischen Phishing-Simulationen, um Risiken zu reduzieren und Ihre Cybersicherheitskultur zu stärken.",
          features: [
            "Realistische Simulationen",
            "Mitarbeiterbewusstseinstests",
            "Detailliertes Reporting",
            "Risikominderung",
            "Compliance-Unterstützung",
            "Kontinuierliche Verbesserung",
          ],
        },
        siem: {
          title: "SIEM & Audit-Logging",
          description:
            "Echtzeit-Überwachung von Sicherheitsereignissen mit umfassender Log-Analyse und schneller Erkennung und Reaktion auf potenzielle Sicherheitsvorfälle.",
          features: [
            "Echtzeit-Monitoring",
            "Umfassende Log-Analyse",
            "Bedrohungsidentifikation",
            "Authentifizierungsmonitoring",
            "Audit-Log-Management",
            "Incident Response",
          ],
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      caseStudies: "Études de cas",
      tools: "Outils",
      contact: "Contact",
      hiring: "Nous recrutons",
      contactUs: "Contactez-nous",
    },
    hero: {
      highlight1: "Contrôles de sécurité conformes à DORA",
      highlight2: "Spécialistes certifiés en sécurité cloud",
      highlight3: "Réponse aux incidents 24/7 pour l'Enterprise",
      title: "L'excellence en cybersécurité pour l'entreprise.\nFiable.\nSécurisé.\nConforme.",
      subtitle:
        "Protégez vos actifs numériques avec des services de sécurité de pointe, des tests d'intrusion et des solutions conformes à DORA. Votre partenaire de confiance en cybersécurité.",
      cta: "Commencer",
      secondaryCta: "Nos services",
    },
    services: {
      title: "Nos services de sécurité",
      subtitle:
        "Des solutions complètes de cybersécurité conçues pour protéger votre organisation contre les menaces émergentes tout en garantissant la conformité DORA.",
      viewAll: "Voir tous les services",
      learnMore: "En savoir plus",
      offensive: {
        title: "Sécurité offensive",
        description:
          "Tests de sécurité proactifs incluant tests d'intrusion, exercices de red team et évaluations de vulnérabilités.",
      },
      defensive: {
        title: "Sécurité défensive",
        description:
          "Surveillance de sécurité 24/7, réponse aux incidents et détection des menaces pour protéger votre infrastructure.",
      },
      cloud: {
        title: "Sécurité cloud",
        description: "Sécurisez votre infrastructure cloud sur AWS, Azure et GCP grâce à nos solutions expertes.",
      },
      compliance: {
        title: "Conformité DORA",
        description: "Assurez la conformité réglementaire avec DORA, RGPD, ISO 27001 et d'autres normes de sécurité.",
      },
      consulting: {
        title: "Conseil en sécurité",
        description:
          "Services de conseil stratégique en sécurité pour renforcer la posture de sécurité de votre organisation.",
      },
      training: {
        title: "Formation en sécurité",
        description: "Renforcez votre équipe grâce à des formations complètes en cybersécurité et techniques.",
      },
    },
    ai: {
      badge: "Propulsé par l'IA",
      title: "Solutions de sécurité propulsées par l'IA",
      subtitle:
        "Exploitez la puissance de l'intelligence artificielle pour détecter les menaces plus rapidement, automatiser les tests de sécurité et garder une longueur d'avance sur les cyberattaques sophistiquées.",
      cta: "Découvrir les solutions IA",
      features: {
        pentest: {
          title: "Tests d'intrusion IA",
          description:
            "Tests d'intrusion automatisés et intelligents qui sondent en continu vos systèmes, identifiant les vulnérabilités avec une rapidité et une précision dépassant les tests manuels.",
        },
        threatIntel: {
          title: "Renseignement sur les menaces IA",
          description:
            "Renseignement sur les menaces en temps réel propulsé par l'apprentissage automatique, analysant les données mondiales pour prédire et prévenir les attaques.",
        },
        autoResponse: {
          title: "Réponse automatisée aux incidents",
          description:
            "Réponse aux incidents pilotée par l'IA qui détecte, contient et corrige les incidents de sécurité en quelques secondes, minimisant les dommages et les temps d'arrêt.",
        },
        continuous: {
          title: "Surveillance continue de la sécurité",
          description:
            "Surveillance 24/7 propulsée par l'IA qui apprend le comportement de référence de votre environnement et signale instantanément les anomalies et les menaces potentielles.",
        },
      },
    },
    trust: {
      certifications: "Certifications et normes",
      certificationsLabel: "Certifications et conformité",
      certificationsTitle: "Excellence reconnue dans l'industrie",
      certs: {
        iso: "Sécurité de l'information",
        dora: "Règlement européen sur la résilience opérationnelle numérique",
        nis2: "Directive UE sur la sécurité des réseaux et de l'information",
        soc2: "Sécurité et disponibilité",
        crest: "Fournisseur certifié",
        oscp: "Équipe certifiée",
      },
      stats: {
        years: "Années d'expérience",
        projects: "Projets réalisés",
        clients: "Clients satisfaits",
        experts: "Experts en sécurité",
      },
      statsItems: {
        years: "Années d'excellence",
        clients: "Clients entreprises",
        experts: "Experts en sécurité",
        satisfaction: "Satisfaction client",
      },
      testimonialsLabel: "Témoignages clients",
      testimonials: "Ce que disent nos clients",
      testimonial: {
        quote:
          "Red Patronus a fourni des services exceptionnels d'évaluation de la sécurité pour notre infrastructure cloud. Leurs tests d'intrusion approfondis et leurs rapports clairs nous ont aidés à renforcer considérablement notre posture de sécurité dans toutes nos opérations d'assurance.",
        author: "Directeur de la sécurité",
        company: "Vienna Insurance Group",
      },
      partners: "Nos partenaires de confiance",
    },
    cta: {
      title: "Prêt à sécuriser votre entreprise ?",
      subtitle:
        "Contactez dès aujourd'hui nos experts en sécurité et découvrez comment nous pouvons protéger votre organisation contre les cybermenaces.",
      button: "Planifier une consultation",
    },
    footer: {
      description:
        "Solutions de cybersécurité pour entreprises protégeant les organisations à travers l'Europe. Services de sécurité conformes à DORA en qui vous pouvez avoir confiance.",
      services: "Services",
      company: "Entreprise",
      contactInfo: "Coordonnées",
      aboutUs: "À propos de nous",
      copyright: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Entrez en contact avec nos experts en sécurité",
      heroLabel: "Contactez-nous",
      heroTitle: "Discutons de vos besoins en sécurité",
      heroSubtitle:
        "Notre équipe d'experts en sécurité est prête à vous aider à protéger votre entreprise. Contactez-nous pour planifier une consultation.",
      getInTouch: "Entrer en contact",
      getInTouchDesc:
        "Que vous ayez besoin d'une évaluation de sécurité, de conseils en conformité ou que vous souhaitiez en savoir plus sur nos services, nous sommes là pour vous aider.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      locationLabel: "Lieu",
      responseTimeLabel: "Délai de réponse",
      responseTimeValue: "Nous répondons généralement sous 24 heures ouvrées",
      whyChoose: "Pourquoi choisir Red Patronus",
      whyItems: [
        "15+ ans d'expérience en sécurité d'entreprise",
        "Certifications leaders du secteur",
        "Gestion de compte dédiée",
      ],
      requestConsultation: "Demander une consultation",
      messageReceived: "Message reçu",
      messageReceivedDesc:
        "Merci de nous avoir contactés. L'un de nos consultants en sécurité vous contactera sous 24 heures ouvrées.",
      sendAnother: "Envoyer un autre message",
      privacyNote:
        "En soumettant ce formulaire, vous acceptez notre politique de confidentialité. Nous ne partagerons jamais vos informations.",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        company: "Nom de l'entreprise",
        businessEmail: "E-mail professionnel",
        phone: "Téléphone (optionnel)",
        message: "Comment pouvons-nous aider ?",
        submit: "Envoyer le message",
        sending: "Envoi...",
      },
      info: {
        title: "Entrer en contact",
        description:
          "Prêt à discuter de vos besoins en cybersécurité ? Notre équipe d'experts est là pour vous aider à protéger vos actifs numériques.",
        email: "Écrivez-nous",
        call: "Appelez-nous",
        visit: "Rendez-nous visite",
      },
      toast: {
        successTitle: "Message envoyé",
        successDesc: "Merci de nous avoir contactés. Nous vous répondrons bientôt.",
        errorTitle: "Erreur",
        errorDesc: "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer.",
      },
    },
    about: {
      title: "À propos de Red Patronus",
      subtitle: "Votre partenaire de confiance en excellence cybersécurité",
      heroTitle: "Défenseurs de l'infrastructure numérique",
      heroSubtitle:
        "Fondé par des vétérans de la sécurité avec des décennies d'expérience combinée, Red Patronus est devenu un partenaire de confiance pour les organisations recherchant des services complets de sécurité offensive.",
      mission: {
        title: "Notre mission",
        description:
          "Fournir des solutions de cybersécurité de classe mondiale qui protègent les organisations contre les menaces émergentes tout en garantissant la conformité réglementaire.",
        p1: "Chez Red Patronus, nous croyons que la sécurité proactive est la pierre angulaire de la résilience numérique. Notre mission est d'aider les organisations à identifier et corriger les vulnérabilités avant qu'elles ne soient exploitées par des acteurs malveillants.",
        p2: "Nous combinons une expertise technique approfondie avec un état d'esprit d'attaquant pour fournir des évaluations de sécurité offrant une véritable vision de la posture de sécurité de votre organisation. Notre équipe ne se contente pas de trouver des vulnérabilités — nous vous aidons à les comprendre et à les corriger.",
      },
      vision: {
        title: "Notre vision",
        description:
          "Être le principal partenaire en cybersécurité pour les entreprises en Europe, définissant la norme d'excellence en sécurité.",
      },
      globalReach: "Portée mondiale",
      globalReachDesc: "Au service de clients dans plus de 40 pays",
      industryExpertise: "Expertise sectorielle",
      expertise: {
        financial: "Services financiers",
        healthcare: "Santé et sciences de la vie",
        technology: "Technologie et SaaS",
        manufacturing: "Industrie",
        retail: "Commerce et e-commerce",
        government: "Gouvernement et défense",
      },
      valuesLabel: "Nos valeurs",
      valuesTitle: "Les principes qui nous guident",
      valuesSubtitle:
        "Nos valeurs fondamentales définissent notre approche de chaque mission et relation avec nos clients.",
      values: {
        integrity: {
          title: "Intégrité",
          description:
            "Nous opérons selon les normes éthiques les plus élevées, garantissant la confiance des clients et la confidentialité dans toutes les missions.",
        },
        excellence: {
          title: "Excellence",
          description:
            "Notre équipe vise l'amélioration continue, restant en avance sur les menaces et techniques d'attaque émergentes.",
        },
        collaboration: {
          title: "Collaboration",
          description:
            "Nous travaillons comme une extension de votre équipe, favorisant des partenariats qui apportent des améliorations durables en matière de sécurité.",
        },
        confidentiality: {
          title: "Confidentialité",
          description:
            "Les données et résultats des clients sont protégés par une sécurité de niveau entreprise et des contrôles d'accès stricts.",
        },
      },
      teamTitle: "Une équipe de sécurité de classe mondiale",
      teamDesc:
        "Notre équipe est composée de professionnels de la sécurité avec des parcours dans la sécurité d'entreprise, les agences gouvernementales et les entreprises technologiques leaders. Chaque consultant détient plusieurs certifications sectorielles et apporte une expérience concrète à chaque mission.",
      securityExperts: "Experts en sécurité",
      certificationsHeld: "Certifications obtenues",
      joinTeam: "Rejoignez notre équipe",
      teamCertifications: "Certifications de l'équipe",
      ctaTitle: "Prêt à collaborer ?",
      ctaSubtitle:
        "Discutons de la manière dont Red Patronus peut aider à renforcer la posture de sécurité de votre organisation.",
      ctaButton: "Contactez-nous dès aujourd'hui",
    },
    caseStudies: {
      heroLabel: "Études de cas",
      heroTitle: "Résultats éprouvés pour les clients entreprises",
      heroSubtitle:
        "Découvrez comment nous avons aidé des organisations de premier plan dans divers secteurs à identifier des vulnérabilités, atteindre la conformité et renforcer leur posture de sécurité.",
      stats: {
        clients: "Clients entreprises",
        assessments: "Évaluations réalisées",
        vulnerabilities: "Vulnérabilités identifiées",
        retention: "Fidélisation des clients",
      },
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      studies: {
        financial: {
          industry: "Services financiers",
          title: "Transformation d'une compagnie d'assurance mondiale",
          challenge:
            "Accompagnement d'une compagnie d'assurance dans sa migration d'une infrastructure on-premise vers le cloud, avec sécurisation du nouvel environnement.",
          solution:
            "Programme de tests d'intrusion par phases, engagement red team et revue de l'architecture de sécurité sur 12 mois.",
          results: [
            "47 vulnérabilités critiques identifiées",
            "Aucune violation pendant la transformation",
            "Conformité SOC 2 Type II atteinte",
            "Réduction de 40 % des incidents de sécurité",
          ],
        },
        healthcare: {
          industry: "Santé",
          title: "Conformité HIPAA d'un système de santé",
          challenge:
            "Accompagnement d'un fournisseur régional de soins de santé pour sécuriser ses données conformes HIPAA.",
          solution:
            "Conception de contrôles de protection des données, sécurisation des dépôts de données patients et validation des mesures par des tests de sécurité ciblés pour maintenir la conformité HIPAA.",
          results: [
            "2M+ dossiers patients sécurisés",
            "Conformité HIPAA complète atteinte",
            "Architecture zero-trust mise en œuvre",
            "Formation à la sensibilisation pour 5 000 employés",
          ],
        },
        technology: {
          industry: "Technologie",
          title: "Durcissement de sécurité d'une plateforme SaaS",
          challenge:
            "Une entreprise SaaS préparant son introduction en bourse avait besoin d'une validation de sécurité par un tiers et d'une certification SOC 2.",
          solution:
            "Programme de sécurité complet incluant évaluation de la sécurité cloud, tests d'API et tests d'intrusion continus.",
          results: [
            "Certifié SOC 2 Type II",
            "95 % de taux de correction des vulnérabilités",
            "Due diligence de sécurité réussie pour l'IPO",
            "Programme red team continu établi",
          ],
        },
      },
      testimonialsLabel: "Témoignages clients",
      testimonialsTitle: "Ce que disent nos clients",
      testimonials: {
        t1: {
          quote:
            "Red Patronus a transformé notre posture de sécurité. L'expertise et le professionnalisme de leur équipe ont dépassé nos attentes à chaque étape.",
          author: "Directeur de la sécurité des systèmes d'information",
          company: "Société leader en services financiers",
        },
        t2: {
          quote:
            "La profondeur de leurs évaluations nous a donné l'assurance que nous étions vraiment prêts pour les menaces réelles. Travail exceptionnel.",
          author: "VP Ingénierie",
          company: "Entreprise technologique",
        },
      },
      certificationsTitle: "Certifications et partenariats sectoriels",
      certificationsSubtitle:
        "Notre équipe détient des certifications leaders du secteur et entretient des partenariats avec les principales organisations de sécurité.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certifié" },
        soc: { name: "SOC 2 Type II", desc: "Conforme" },
        crest: { name: "CREST", desc: "Membre" },
        pci: { name: "PCI-DSS", desc: "Partenaire QSA" },
      },
      ctaTitle: "Prêt à devenir notre prochaine réussite ?",
      ctaSubtitle:
        "Contactez-nous pour discuter de la manière dont nous pouvons aider à renforcer la posture de sécurité de votre organisation.",
      ctaButton: "Démarrer votre évaluation",
    },
    servicesPage: {
      heroLabel: "Nos services",
      heroTitle: "Solutions de sécurité pour entreprises",
      heroSubtitle:
        "Nous fournissons des solutions numériques expertes selon le règlement DORA (Digital Operational Resilience Act). Des évaluations de vulnérabilités au monitoring avancé des menaces, tous nos services sont conçus pour répondre aux normes réglementaires les plus strictes.",
      keyCapabilities: "Capacités clés",
      securingCloud: "Sécuriser votre cloud sur",
      customTitle: "Besoin d'une solution sur mesure ?",
      customSubtitle:
        "Notre équipe peut adapter nos services aux exigences spécifiques de sécurité et de conformité de votre organisation.",
      customButton: "Contacter notre équipe",
      items: {
        offensive: {
          title: "Services de sécurité offensive",
          description:
            "Des tests d'intrusion classiques et campagnes de phishing personnalisées aux engagements Red Team. Notre équipe d'experts simule des cyberattaques réelles pour identifier les vulnérabilités et tester vos défenses.",
          features: [
            "Tests d'intrusion web (OWASP)",
            "Tests d'intrusion d'infrastructure",
            "Engagements Red Team",
            "Simulations d'attaques",
            "Tests d'ingénierie sociale",
            "Analyse post-exploitation",
          ],
        },
        cloud: {
          title: "Sécurité cloud",
          description:
            "Évaluations de sécurité spécialisées pour les environnements AWS, Azure et GCP, garantissant que votre infrastructure cloud répond aux normes de sécurité et meilleures pratiques d'entreprise.",
          features: [
            "Revue de la configuration cloud",
            "Évaluation des politiques IAM",
            "Tests de sécurité des conteneurs",
            "Audit de sécurité Kubernetes",
            "Intégration DevSecOps",
            "Évaluation de la conformité cloud",
          ],
        },
        defensive: {
          title: "Services de sécurité défensive",
          description:
            "Sécurité défensive complète avec surveillance continue, DevSecOps, gestion des actifs et réponse proactive aux menaces pour protéger votre organisation.",
          features: [
            "Centre d'opérations de sécurité (SOC)",
            "Analyse de sécurité continue",
            "Intégration DevSecOps",
            "Planification de la continuité d'activité",
            "Détection et réponse aux menaces",
            "Gestion des actifs",
          ],
        },
        etsm: {
          title: "Surveillance externe des menaces et de la sécurité",
          description:
            "Surveillance OSINT qui révèle les vulnérabilités et fournit des informations exploitables grâce à une surveillance continue des données publiquement disponibles.",
          features: [
            "Analyse complète des données",
            "Détection proactive des menaces",
            "Informations exploitables",
            "Intégration d'outils OSINT",
            "Surveillance automatisée",
            "Monitoring en temps réel",
          ],
        },
        training: {
          title: "Formation en cybersécurité",
          description:
            "Dote les employés des compétences pour détecter, signaler et répondre aux cybermenaces, garantissant la conformité et protégeant les actifs de l'entreprise.",
          features: [
            "Formation à la conformité",
            "Programmes de sensibilisation aux menaces",
            "Meilleures pratiques de sécurité",
            "Reconnaissance du phishing",
            "Formation à la réponse aux incidents",
            "Programmes personnalisés",
          ],
        },
        compliance: {
          title: "Conformité et réglementation / Audits",
          description:
            "Évaluations de conformité alignées sur DORA, analyse OSINT et analyse des écarts selon CIS, NIST et les réglementations de l'UE pour garantir que votre organisation répond à toutes les exigences de résilience opérationnelle.",
          features: [
            "Conformité DORA",
            "Alignement CIS et NIST",
            "Conformité aux réglementations UE",
            "Analyse des écarts",
            "Support d'audit",
            "Évaluation des risques",
          ],
        },
        iam: {
          title: "Gestion des identités et des accès",
          description:
            "IAM en tant que service utilisant Okta, géré via Terraform et CI/CD pour une gestion sécurisée et efficace des identités et des accès dans toute votre organisation.",
          features: [
            "Plateforme SSO Okta",
            "Intégration Active Directory",
            "Gestion Terraform",
            "Intégration pipeline CI/CD",
            "Gestion du contrôle d'accès",
            "Authentification multifacteur",
          ],
        },
        phishing: {
          title: "Simulation de phishing",
          description:
            "Testez la sensibilisation des employés avec des simulations de phishing réalistes pour réduire les risques et renforcer votre culture de cybersécurité.",
          features: [
            "Simulations réalistes",
            "Tests de sensibilisation des employés",
            "Reporting détaillé",
            "Réduction des risques",
            "Support à la conformité",
            "Amélioration continue",
          ],
        },
        siem: {
          title: "SIEM et journalisation d'audit",
          description:
            "Surveillance en temps réel des événements de sécurité avec analyse complète des journaux et détection et réponse rapides aux incidents de sécurité potentiels.",
          features: [
            "Monitoring en temps réel",
            "Analyse complète des journaux",
            "Identification des menaces",
            "Surveillance de l'authentification",
            "Gestion des journaux d'audit",
            "Réponse aux incidents",
          ],
        },
      },
    },
  },
};
