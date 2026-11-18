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
      caseStudies: "Case studies",
      tools: "Tools",
      contact: "Contact",
      hiring: "We're hiring",
      contactUs: "Contact us",
    },
    hero: {
      highlight1: "DORA-aligned security controls",
      highlight2: "Cloud-certified security specialists",
      highlight3: "24/7 incident response for enterprises",
      title: "We test your systems\nthe way real attackers do.",
      subtitle:
        "Penetration testing, red teaming, cloud security and DORA compliance for regulated companies across Europe.",
      cta: "Get in touch",
      secondaryCta: "Our services",
    },
    services: {
      title: "What we do",
      subtitle: "Offensive testing, defensive security, cloud security and compliance work, including DORA.",
      viewAll: "View all services",
      learnMore: "Learn more",
      offensive: {
        title: "Offensive security",
        description: "Penetration tests, red team exercises and vulnerability assessments.",
      },
      defensive: {
        title: "Defensive security",
        description: "24/7 security monitoring, incident response and threat detection.",
      },
      cloud: {
        title: "Cloud security",
        description: "Security reviews of AWS, Azure and GCP environments.",
      },
      compliance: {
        title: "DORA compliance",
        description: "Help meeting the requirements of DORA, GDPR, ISO 27001 and other standards.",
      },
      consulting: {
        title: "Security consulting",
        description: "Advice on security strategy, priorities and architecture.",
      },
      training: {
        title: "Security training",
        description: "Security awareness training for staff and technical training for IT teams.",
      },
    },
    ai: {
      badge: "AI-assisted",
      title: "AI-assisted security",
      subtitle: "We use AI tools to detect threats faster and to automate parts of security testing.",
      cta: "See AI services",
      features: {
        pentest: {
          title: "AI penetration testing",
          description:
            "Automated tests run continuously against your systems and flag new vulnerabilities between manual tests.",
        },
        threatIntel: {
          title: "AI threat intelligence",
          description:
            "Machine learning applied to threat data to spot attack patterns that are relevant to your organization.",
        },
        autoResponse: {
          title: "Automated incident response",
          description:
            "Automated playbooks detect and contain common incidents quickly, which limits damage and downtime.",
        },
        continuous: {
          title: "Continuous security monitoring",
          description: "24/7 monitoring that learns how your environment normally behaves and flags anomalies.",
        },
      },
    },
    trust: {
      certifications: "Certifications and standards",
      certificationsLabel: "Certifications and compliance",
      certificationsTitle: "Standards we work with",
      certs: {
        iso: "Information security",
        dora: "EU Digital Operational Resilience Act",
        nis2: "EU Network and Information Security Directive",
        soc2: "Security and availability",
        crest: "Certified provider",
        oscp: "Team certified",
      },
      stats: {
        years: "Years of experience",
        projects: "Projects completed",
        clients: "Clients",
        experts: "Security experts",
      },
      statsItems: {
        yearsValue: "Experienced",
        years: "Enterprise security practice",
        clientsValue: "40+",
        clients: "Countries where we have clients",
        expertsValue: "Specialist",
        experts: "Security team",
        satisfaction: "Client satisfaction",
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
      partners: "Partners",
    },

    cta: {
      title: "Want to know how an attacker would get in?",
      subtitle: "Tell us about your systems and we'll suggest where testing should start.",
      button: "Book a consultation",
    },
    footer: {
      description: "Penetration testing, red teaming, cloud security and DORA compliance for companies across Europe.",
      services: "Services",
      pentest: "Penetration testing",
      redTeam: "Red team",
      company: "Company",
      contactInfo: "Contact info",
      aboutUs: "About us",
      copyright: "All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service",
    },
    // Contact page
    contact: {
      title: "Contact us",
      subtitle: "Talk to our security team",
      heroLabel: "Contact us",
      heroTitle: "Tell us what you need",
      heroSubtitle: "Describe what you want tested or audited, and we'll get back to you to arrange a call.",
      getInTouch: "Get in touch",
      getInTouchDesc:
        "Write to us about a security assessment, DORA or other compliance work, or any of our services.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      responseTimeLabel: "Response time",
      responseTimeValue: "We respond within 24 hours",
      whyChoose: "Why Red Patronus",
      whyItems: [
        "Long experience in enterprise security",
        "Industry-leading certifications",
        "A dedicated account manager",
      ],
      requestConsultation: "Request a consultation",
      messageReceived: "Message received",
      messageReceivedDesc: "Thanks for getting in touch. One of our consultants will reply within 24 hours.",
      sendAnother: "Send another message",
      privacyNote: "By submitting this form you agree to our privacy policy. We don't share your details with third parties.",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company name",
        businessEmail: "Business email",
        phone: "Phone (optional)",
        message: "How can we help?",
        submit: "Send message",
        sending: "Sending...",
      },
      info: {
        title: "Get in touch",
        description: "Tell us what you need and our team will get back to you.",
        email: "Email us",
        call: "Call us",
        visit: "Visit us",
      },
      toast: {
        successTitle: "Message sent",
        successDesc: "Thanks for contacting us. We'll be in touch soon.",
        errorTitle: "Error",
        errorDesc: "There was a problem sending your message. Please try again.",
      },
    },
    // About page
    about: {
      title: "About Red Patronus",
      subtitle: "Offensive security and compliance from Bratislava",
      heroTitle: "We find the weak points before attackers do",
      heroSubtitle:
        "Red Patronus was founded by security practitioners with decades of combined experience. From Bratislava, we run penetration tests, red team engagements and cloud security reviews for companies that want to know how an attacker would get in.",
      mission: {
        title: "Our mission",
        description:
          "Find security weaknesses before someone exploits them, and help organizations meet their regulatory requirements.",
        p1: "We look for security weaknesses in your systems before someone else exploits them, and we help you fix them.",
        p2: "We test the way real attackers work. Each report explains what we found, how we got in and what to fix first.",
      },
      vision: {
        title: "Our vision",
        description:
          "To be the security firm European companies call first when they want an honest answer about their defenses.",
      },
      globalReach: "Where we work",
      globalReachDesc: "Clients in more than 40 countries",
      industryExpertise: "Industries",
      expertise: {
        financial: "Financial services",
        healthcare: "Healthcare and life sciences",
        technology: "Technology and SaaS",
        manufacturing: "Manufacturing",
        retail: "Retail and e-commerce",
        government: "Government and defense",
      },
      valuesLabel: "Our values",
      valuesTitle: "How we work",
      valuesSubtitle: "What you can expect from us on every engagement.",
      values: {
        integrity: {
          title: "Integrity",
          description: "We stay within the agreed scope and report our findings honestly.",
        },
        excellence: {
          title: "Quality",
          description: "We keep our methods up to date with new attack techniques.",
        },
        collaboration: {
          title: "Collaboration",
          description: "We work directly with your team and stay available while you fix what we found.",
        },
        confidentiality: {
          title: "Confidentiality",
          description: "We protect client data and findings with strict access controls.",
        },
      },
      teamTitle: "Our team",
      teamDesc:
        "Our consultants come from enterprise security teams, government agencies and leading technology companies. Every one of them holds several industry certifications.",
      securityExperts: "Security experts",
      certificationsHeld: "Certifications",
      joinTeam: "Join our team",
      teamCertifications: "Team certifications",
      ctaTitle: "Let's talk",
      ctaSubtitle: "Tell us what you need tested or audited. We reply within 24 hours.",
      ctaButton: "Contact us",
    },
    // Case Studies page
    caseStudies: {
      heroLabel: "Case studies",
      heroTitle: "Selected client work",
      heroSubtitle: "Examples of past engagements: what the client needed, what we did and how it turned out.",
      stats: {
        clients: "Enterprise clients",
        assessments: "Assessments completed",
        vulnerabilities: "Vulnerabilities identified",
        retention: "Client retention",
      },
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      studies: {
        financial: {
          industry: "Financial services",
          title: "Securing an insurer's move to the cloud",
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
          title: "Protecting patient data under HIPAA",
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
          title: "Security validation before an IPO",
          challenge:
            "Enterprise SaaS company preparing for IPO required third-party security validation and SOC 2 certification.",
          solution:
            "Security program covering a cloud security assessment, API testing and continuous penetration testing.",
          results: [
            "SOC 2 Type II certified",
            "95% vulnerability remediation rate",
            "Successful IPO security due diligence",
            "Ongoing red team program established",
          ],
        },
      },
      testimonialsLabel: "Client testimonials",
      testimonialsTitle: "What clients say",
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
      certificationsTitle: "Certifications and partnerships",
      certificationsSubtitle: "Our team holds leading industry certifications, and we work with major security organisations.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certified" },
        soc: { name: "SOC 2 Type II", desc: "Compliant" },
        crest: { name: "CREST", desc: "Member" },
        pci: { name: "PCI-DSS", desc: "QSA Partner" },
      },
      ctaTitle: "Planning a test or audit?",
      ctaSubtitle: "Tell us what needs testing and we'll propose a scope and timeline.",
      ctaButton: "Start an assessment",
    },
    // Services page (full)
    servicesPage: {
      heroLabel: "Our services",
      heroTitle: "Security services",
      heroSubtitle:
        "Our services are built around the requirements of DORA (Digital Operational Resilience Act), from vulnerability assessments to threat monitoring.",
      keyCapabilities: "What's included",
      securingCloud: "Securing your cloud on",
      customTitle: "Need something else?",
      customSubtitle: "We can adjust the scope and services to your security and compliance requirements.",
      customButton: "Contact us",
      items: {
        offensive: {
          title: "Offensive security services",
          description:
            "Penetration tests, targeted phishing campaigns and red team engagements. We simulate real attacks to find vulnerabilities and test how well your defenses hold up.",
          features: [
            "Web penetration tests (OWASP)",
            "Infrastructure penetration tests",
            "Red team engagements",
            "Attack simulations",
            "Social engineering tests",
            "Post-exploitation analysis",
          ],
        },
        cloud: {
          title: "Cloud security",
          description:
            "Security assessments of AWS, Azure and GCP environments against established cloud security standards and best practices.",
          features: [
            "Cloud configuration review",
            "IAM policy assessment",
            "Container security testing",
            "Kubernetes security audit",
            "DevSecOps integration",
            "Cloud compliance assessment",
          ],
        },
        defensive: {
          title: "Defensive security services",
          description:
            "Continuous monitoring, DevSecOps, asset management and threat response for your organization.",
          features: [
            "Security Operations Center (SOC)",
            "Continuous security scanning",
            "DevSecOps integration",
            "Business continuity planning",
            "Threat detection and response",
            "Asset management",
          ],
        },
        etsm: {
          title: "External threat and security monitoring",
          description:
            "We monitor publicly available data (OSINT) for exposed systems, leaked data and other weaknesses, and report what needs fixing.",
          features: [
            "Public data analysis",
            "Early threat detection",
            "Prioritized findings",
            "OSINT tools integration",
            "Automated scanning",
            "Real-time monitoring",
          ],
        },
        training: {
          title: "Cybersecurity training",
          description:
            "Teaches employees to recognize, report and respond to attacks, and helps you meet the training requirements in regulations.",
          features: [
            "Compliance training",
            "Threat awareness programs",
            "Security best practices",
            "Phishing recognition",
            "Incident response training",
            "Programs adapted to your company",
          ],
        },
        compliance: {
          title: "Compliance, regulation and audits",
          description:
            "DORA compliance assessments, OSINT analysis and gap analysis against CIS, NIST and EU regulations, so you know where you stand on operational resilience requirements.",
          features: [
            "DORA compliance",
            "CIS and NIST alignment",
            "EU regulatory compliance",
            "Gap analysis",
            "Audit support",
            "Risk assessment",
          ],
        },
        iam: {
          title: "Identity and access management",
          description: "IAM as a service on Okta, managed through Terraform and CI/CD.",
          features: [
            "Okta SSO platform",
            "Active Directory integration",
            "Terraform management",
            "CI/CD pipeline integration",
            "Access control management",
            "Multi-factor authentication",
          ],
        },
        phishing: {
          title: "Phishing simulation",
          description:
            "Realistic phishing simulations that show how your employees respond and where more training is needed.",
          features: [
            "Realistic simulations",
            "Employee awareness testing",
            "Detailed reporting",
            "Risk reduction",
            "Compliance support",
            "Repeat campaigns to track progress",
          ],
        },
        siem: {
          title: "SIEM and audit logging",
          description:
            "Real-time monitoring of security events, log analysis and fast response to suspected incidents.",
          features: [
            "Real-time monitoring",
            "Log analysis",
            "Threat identification",
            "Authentication monitoring",
            "Audit log management",
            "Incident response",
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
      highlight1: "Bezpečnostné opatrenia v súlade s DORA",
      highlight2: "Certifikovaní špecialisti na bezpečnosť cloudu",
      highlight3: "Reakcia na incidenty 24/7 pre veľké firmy",
      title: "Testujeme vaše systémy\nrovnako ako skutoční útočníci.",
      subtitle:
        "Penetračné testy, red teaming, bezpečnosť cloudu a súlad s DORA pre regulované firmy v celej Európe.",
      cta: "Kontaktujte nás",
      secondaryCta: "Naše služby",
    },
    services: {
      title: "Čo robíme",
      subtitle: "Ofenzívne testovanie, obrana, bezpečnosť cloudu a súlad s predpismi vrátane DORA.",
      viewAll: "Všetky služby",
      learnMore: "Viac informácií",
      offensive: {
        title: "Ofenzívna bezpečnosť",
        description: "Penetračné testy, red team cvičenia a hodnotenie zraniteľností.",
      },
      defensive: {
        title: "Defenzívna bezpečnosť",
        description: "Bezpečnostný monitoring 24/7, reakcia na incidenty a detekcia hrozieb.",
      },
      cloud: {
        title: "Bezpečnosť cloudu",
        description: "Bezpečnostné revízie prostredí AWS, Azure a GCP.",
      },
      compliance: {
        title: "Súlad s DORA",
        description: "Pomoc so splnením požiadaviek DORA, GDPR, ISO 27001 a ďalších štandardov.",
      },
      consulting: {
        title: "Bezpečnostné poradenstvo",
        description: "Poradenstvo k bezpečnostnej stratégii, prioritám a architektúre.",
      },
      training: {
        title: "Bezpečnostné školenia",
        description: "Školenia bezpečnostného povedomia pre zamestnancov a technické školenia pre IT tímy.",
      },
    },
    ai: {
      badge: "S podporou AI",
      title: "Bezpečnosť s podporou AI",
      subtitle: "Nástroje AI používame na rýchlejšiu detekciu hrozieb a na automatizáciu časti bezpečnostného testovania.",
      cta: "AI služby",
      features: {
        pentest: {
          title: "Penetračné testovanie s AI",
          description:
            "Automatizované testy bežia na vašich systémoch nepretržite a medzi manuálnymi testami upozornia na nové zraniteľnosti.",
        },
        threatIntel: {
          title: "Analýza hrozieb s AI",
          description:
            "Strojové učenie nad dátami o hrozbách, ktoré vyhľadá vzorce útokov dôležité pre vašu organizáciu.",
        },
        autoResponse: {
          title: "Automatizovaná reakcia na incidenty",
          description:
            "Automatizované postupy rýchlo zachytia a izolujú bežné incidenty, takže škody aj výpadky zostanú malé.",
        },
        continuous: {
          title: "Nepretržitý bezpečnostný monitoring",
          description: "Monitoring 24/7, ktorý sa naučí bežnú prevádzku vášho prostredia a upozorní na odchýlky.",
        },
      },
    },
    trust: {
      certifications: "Certifikácie a štandardy",
      certificationsLabel: "Certifikácie a súlad",
      certificationsTitle: "Štandardy, s ktorými pracujeme",
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
        clients: "Klientov",
        experts: "Bezpečnostných expertov",
      },
      statsItems: {
        yearsValue: "Skúsení",
        years: "Prax v podnikovej bezpečnosti",
        clientsValue: "40+",
        clients: "Krajín, v ktorých máme klientov",
        expertsValue: "Špecialisti",
        experts: "Bezpečnostný tím",
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
      partners: "Partneri",
    },
    cta: {
      title: "Chcete vedieť, kadiaľ by sa k vám dostal útočník?",
      subtitle: "Opíšte nám svoje systémy a navrhneme, kde s testovaním začať.",
      button: "Dohodnúť konzultáciu",
    },
    footer: {
      description: "Penetračné testy, red teaming, bezpečnosť cloudu a súlad s DORA pre firmy v celej Európe.",
      services: "Služby",
      pentest: "Penetračné testovanie",
      redTeam: "Red team",
      company: "Spoločnosť",
      contactInfo: "Kontaktné údaje",
      aboutUs: "O nás",
      copyright: "Všetky práva vyhradené.",
      privacy: "Zásady ochrany osobných údajov",
      terms: "Podmienky služby",
    },
    contact: {
      title: "Kontaktujte nás",
      subtitle: "Spojte sa s naším bezpečnostným tímom",
      heroLabel: "Kontaktujte nás",
      heroTitle: "Povedzte nám, čo potrebujete",
      heroSubtitle: "Opíšte, čo chcete otestovať alebo auditovať, a ozveme sa vám, aby sme si dohodli hovor.",
      getInTouch: "Spojte sa s nami",
      getInTouchDesc:
        "Napíšte nám, ak potrebujete bezpečnostné hodnotenie, pomoc s DORA alebo iným súladom, prípadne ktorúkoľvek z našich služieb.",
      emailLabel: "E-mail",
      phoneLabel: "Telefón",
      locationLabel: "Sídlo",
      responseTimeLabel: "Doba odozvy",
      responseTimeValue: "Zvyčajne odpovedáme do 24 pracovných hodín",
      whyChoose: "Prečo Red Patronus",
      whyItems: [
        "Dlhoročné skúsenosti s bezpečnosťou veľkých firiem",
        "Popredné odborné certifikácie",
        "Vlastný account manažér",
      ],
      requestConsultation: "Požiadať o konzultáciu",
      messageReceived: "Správa prijatá",
      messageReceivedDesc: "Ďakujeme za správu. Niektorý z našich konzultantov sa vám ozve do 24 pracovných hodín.",
      sendAnother: "Odoslať ďalšiu správu",
      privacyNote:
        "Odoslaním formulára súhlasíte so zásadami ochrany osobných údajov. Vaše údaje neposkytujeme tretím stranám.",
      form: {
        name: "Celé meno",
        email: "E-mailová adresa",
        company: "Názov spoločnosti",
        businessEmail: "Firemný e-mail",
        phone: "Telefón (voliteľné)",
        message: "Ako vám môžeme pomôcť?",
        submit: "Odoslať správu",
        sending: "Odosiela sa...",
      },
      info: {
        title: "Spojte sa s nami",
        description: "Napíšte nám, čo potrebujete, a náš tím sa vám ozve.",
        email: "Napíšte nám",
        call: "Zavolajte nám",
        visit: "Navštívte nás",
      },
      toast: {
        successTitle: "Správa odoslaná",
        successDesc: "Ďakujeme za správu. Čoskoro sa vám ozveme.",
        errorTitle: "Chyba",
        errorDesc: "Správu sa nepodarilo odoslať. Skúste to prosím znova.",
      },
    },
    about: {
      title: "O Red Patronus",
      subtitle: "Ofenzívna bezpečnosť a súlad s predpismi z Bratislavy",
      heroTitle: "Slabé miesta nájdeme skôr ako útočníci",
      heroSubtitle:
        "Red Patronus založili bezpečnostní odborníci s desaťročiami spoločných skúseností. Z Bratislavy robíme penetračné testy, red team zákazky a bezpečnostné revízie cloudu pre firmy, ktoré chcú vedieť, ako by sa k nim dostal útočník.",
      mission: {
        title: "Naša misia",
        description:
          "Nájsť bezpečnostné slabiny skôr, ako ich niekto zneužije, a pomôcť organizáciám splniť regulačné požiadavky.",
        p1: "Hľadáme bezpečnostné slabiny vo vašich systémoch skôr, ako ich zneužije niekto iný, a pomáhame vám ich opraviť.",
        p2: "Testujeme tak, ako postupujú skutoční útočníci. V každej správe vysvetlíme, čo sme našli, ako sme sa dostali dnu a čo treba opraviť ako prvé.",
      },
      vision: {
        title: "Naša vízia",
        description:
          "Byť bezpečnostnou firmou, ktorej európske spoločnosti zavolajú ako prvej, keď chcú úprimne vedieť, ako dobre sú chránené.",
      },
      globalReach: "Kde pôsobíme",
      globalReachDesc: "Klienti vo viac ako 40 krajinách",
      industryExpertise: "Odvetvia",
      expertise: {
        financial: "Finančné služby",
        healthcare: "Zdravotníctvo a life sciences",
        technology: "Technológie a SaaS",
        manufacturing: "Výroba",
        retail: "Maloobchod a e-commerce",
        government: "Štátna správa a obrana",
      },
      valuesLabel: "Naše hodnoty",
      valuesTitle: "Ako pracujeme",
      valuesSubtitle: "Čo môžete od nás čakať pri každej zákazke.",
      values: {
        integrity: {
          title: "Integrita",
          description: "Držíme sa dohodnutého rozsahu a o zisteniach informujeme pravdivo.",
        },
        excellence: {
          title: "Kvalita",
          description: "Naše postupy priebežne aktualizujeme podľa nových útočných techník.",
        },
        collaboration: {
          title: "Spolupráca",
          description: "Pracujeme priamo s vaším tímom a sme k dispozícii aj počas opráv.",
        },
        confidentiality: {
          title: "Dôvernosť",
          description: "Údaje klientov a zistenia chránime prísnym riadením prístupu.",
        },
      },
      teamTitle: "Náš tím",
      teamDesc:
        "Naši konzultanti prišli z bezpečnostných tímov veľkých firiem, štátnych inštitúcií a popredných technologických spoločností. Každý z nich má viacero odborných certifikácií.",
      securityExperts: "Bezpečnostných expertov",
      certificationsHeld: "Certifikácie",
      joinTeam: "Pridajte sa k nášmu tímu",
      teamCertifications: "Certifikácie tímu",
      ctaTitle: "Poďme sa porozprávať",
      ctaSubtitle: "Napíšte nám, čo potrebujete otestovať alebo auditovať. Ozveme sa do 24 pracovných hodín.",
      ctaButton: "Kontaktujte nás",
    },
    caseStudies: {
      heroLabel: "Prípadové štúdie",
      heroTitle: "Vybrané projekty",
      heroSubtitle: "Príklady našich zákaziek: s čím klient prišiel, čo sme urobili a ako to dopadlo.",
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
          title: "Bezpečný prechod poisťovne do cloudu",
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
          title: "Ochrana pacientskych údajov podľa HIPAA",
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
          title: "Bezpečnostné overenie pred IPO",
          challenge:
            "Podniková SaaS spoločnosť pripravujúca sa na IPO vyžadovala validáciu bezpečnosti treťou stranou a SOC 2 certifikáciu.",
          solution:
            "Bezpečnostný program zahŕňal hodnotenie bezpečnosti cloudu, testovanie API a priebežné penetračné testy.",
          results: [
            "Certifikácia SOC 2 Type II",
            "95% miera nápravy zraniteľností",
            "Úspešná bezpečnostná due diligence pre IPO",
            "Zavedený priebežný red team program",
          ],
        },
      },
      testimonialsLabel: "Referencie klientov",
      testimonialsTitle: "Čo hovoria klienti",
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
      certificationsTitle: "Certifikácie a partnerstvá",
      certificationsSubtitle: "Náš tím má popredné odborné certifikácie a spolupracujeme s významnými bezpečnostnými organizáciami.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certifikovaný" },
        soc: { name: "SOC 2 Type II", desc: "V súlade" },
        crest: { name: "CREST", desc: "Člen" },
        pci: { name: "PCI-DSS", desc: "QSA Partner" },
      },
      ctaTitle: "Plánujete test alebo audit?",
      ctaSubtitle: "Napíšte nám, čo treba otestovať, a navrhneme rozsah aj termín.",
      ctaButton: "Začať hodnotenie",
    },
    servicesPage: {
      heroLabel: "Naše služby",
      heroTitle: "Bezpečnostné služby",
      heroSubtitle:
        "Naše služby vychádzajú z požiadaviek nariadenia DORA (Digital Operational Resilience Act), od hodnotenia zraniteľností po monitoring hrozieb.",
      keyCapabilities: "Čo služba zahŕňa",
      securingCloud: "Zabezpečenie vášho cloudu na",
      customTitle: "Potrebujete niečo iné?",
      customSubtitle: "Rozsah aj služby prispôsobíme vašim bezpečnostným a regulačným požiadavkám.",
      customButton: "Kontaktujte nás",
      items: {
        offensive: {
          title: "Služby ofenzívnej bezpečnosti",
          description:
            "Penetračné testy, cielené phishingové kampane a red team zákazky. Simulujeme skutočné útoky, hľadáme zraniteľnosti a overujeme, ako obstojí vaša obrana.",
          features: [
            "Webové penetračné testy (OWASP)",
            "Penetračné testy infraštruktúry",
            "Red team zákazky",
            "Simulácie útokov",
            "Testy sociálneho inžinierstva",
            "Post-exploitačná analýza",
          ],
        },
        cloud: {
          title: "Bezpečnosť cloudu",
          description:
            "Bezpečnostné hodnotenie prostredí AWS, Azure a GCP podľa zavedených štandardov a osvedčených postupov pre cloud.",
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
          description: "Nepretržitý monitoring, DevSecOps, správa aktív a reakcia na hrozby pre vašu organizáciu.",
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
            "Sledujeme verejne dostupné údaje (OSINT), hľadáme vystavené systémy, uniknuté dáta a iné slabiny a hlásime, čo treba opraviť.",
          features: [
            "Analýza verejných údajov",
            "Včasná detekcia hrozieb",
            "Zistenia zoradené podľa priority",
            "Integrácia OSINT nástrojov",
            "Automatizované skenovanie",
            "Monitoring v reálnom čase",
          ],
        },
        training: {
          title: "Školenia kybernetickej bezpečnosti",
          description:
            "Naučíme zamestnancov rozpoznať útok, nahlásiť ho a správne zareagovať. Školenia pomáhajú splniť aj požiadavky regulácií.",
          features: [
            "Školenia k súladu s predpismi",
            "Programy povedomia o hrozbách",
            "Osvedčené bezpečnostné postupy",
            "Rozpoznanie phishingu",
            "Školenie reakcie na incidenty",
            "Programy prispôsobené vašej firme",
          ],
        },
        compliance: {
          title: "Súlad, regulácia a audity",
          description:
            "Hodnotenie súladu s DORA, OSINT analýza a GAP analýza podľa CIS, NIST a predpisov EÚ. Budete vedieť, ako ste na tom s požiadavkami na prevádzkovú odolnosť.",
          features: [
            "Súlad s DORA",
            "Zosúladenie s CIS a NIST",
            "Súlad s predpismi EÚ",
            "GAP analýza",
            "Podpora pri audite",
            "Hodnotenie rizík",
          ],
        },
        iam: {
          title: "Správa identít a prístupov",
          description: "IAM ako služba na platforme Okta, spravovaná cez Terraform a CI/CD.",
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
            "Realistické simulácie phishingu ukážu, ako reagujú vaši zamestnanci a kde treba doplniť školenia.",
          features: [
            "Realistické simulácie",
            "Testovanie povedomia zamestnancov",
            "Podrobné reporty",
            "Zníženie rizika",
            "Podpora súladu",
            "Opakované kampane na sledovanie pokroku",
          ],
        },
        siem: {
          title: "SIEM a audit logging",
          description:
            "Monitoring bezpečnostných udalostí v reálnom čase, analýza logov a rýchla reakcia na podozrivé incidenty.",
          features: [
            "Monitoring v reálnom čase",
            "Analýza logov",
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
      services: "Leistungen",
      about: "Über uns",
      caseStudies: "Fallstudien",
      tools: "Tools",
      contact: "Kontakt",
      hiring: "Wir stellen ein",
      contactUs: "Kontakt aufnehmen",
    },
    hero: {
      highlight1: "DORA-konforme Sicherheitskontrollen",
      highlight2: "Cloud-zertifizierte Security-Spezialisten",
      highlight3: "24/7 Incident Response für Unternehmen",
      title: "Wir testen Ihre Systeme\nwie echte Angreifer.",
      subtitle:
        "Penetrationstests, Red Teaming, Cloud-Sicherheit und DORA-Compliance für regulierte Unternehmen in ganz Europa.",
      cta: "Kontakt aufnehmen",
      secondaryCta: "Unsere Leistungen",
    },
    services: {
      title: "Was wir tun",
      subtitle: "Offensive Tests, defensive Sicherheit, Cloud-Sicherheit und Compliance, einschließlich DORA.",
      viewAll: "Alle Leistungen",
      learnMore: "Mehr erfahren",
      offensive: {
        title: "Offensive Sicherheit",
        description: "Penetrationstests, Red-Team-Übungen und Schwachstellenanalysen.",
      },
      defensive: {
        title: "Defensive Sicherheit",
        description: "24/7-Sicherheitsüberwachung, Incident Response und Bedrohungserkennung.",
      },
      cloud: {
        title: "Cloud-Sicherheit",
        description: "Sicherheitsprüfungen von AWS-, Azure- und GCP-Umgebungen.",
      },
      compliance: {
        title: "DORA-Compliance",
        description: "Unterstützung bei den Anforderungen von DORA, DSGVO, ISO 27001 und weiteren Standards.",
      },
      consulting: {
        title: "Sicherheitsberatung",
        description: "Beratung zu Sicherheitsstrategie, Prioritäten und Architektur.",
      },
      training: {
        title: "Sicherheitsschulungen",
        description: "Awareness-Schulungen für Mitarbeitende und technische Trainings für IT-Teams.",
      },
    },
    ai: {
      badge: "KI-gestützt",
      title: "KI-gestützte Sicherheit",
      subtitle:
        "Wir setzen KI-Werkzeuge ein, um Bedrohungen schneller zu erkennen und Teile der Sicherheitstests zu automatisieren.",
      cta: "KI-Leistungen ansehen",
      features: {
        pentest: {
          title: "KI-Penetrationstests",
          description:
            "Automatisierte Tests laufen kontinuierlich gegen Ihre Systeme und melden neue Schwachstellen zwischen den manuellen Tests.",
        },
        threatIntel: {
          title: "KI-Bedrohungsanalyse",
          description:
            "Maschinelles Lernen auf Bedrohungsdaten, um Angriffsmuster zu erkennen, die für Ihre Organisation relevant sind.",
        },
        autoResponse: {
          title: "Automatisierte Incident Response",
          description:
            "Automatisierte Playbooks erkennen und isolieren häufige Vorfälle schnell und begrenzen so Schäden und Ausfallzeiten.",
        },
        continuous: {
          title: "Kontinuierliches Sicherheitsmonitoring",
          description: "24/7-Monitoring, das den Normalbetrieb Ihrer Umgebung lernt und Abweichungen meldet.",
        },
      },
    },
    trust: {
      certifications: "Zertifizierungen und Standards",
      certificationsLabel: "Zertifizierungen und Compliance",
      certificationsTitle: "Standards, mit denen wir arbeiten",
      certs: {
        iso: "Informationssicherheit",
        dora: "EU-Verordnung über digitale operationale Resilienz",
        nis2: "EU-Richtlinie zur Netz- und Informationssicherheit",
        soc2: "Sicherheit und Verfügbarkeit",
        crest: "Zertifizierter Anbieter",
        oscp: "Team-zertifiziert",
      },
      stats: {
        years: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        clients: "Kunden",
        experts: "Sicherheitsexperten",
      },
      statsItems: {
        yearsValue: "Erfahren",
        years: "Praxis in Unternehmenssicherheit",
        clientsValue: "40+",
        clients: "Länder, in denen wir Kunden haben",
        expertsValue: "Spezialisiert",
        experts: "Sicherheitsteam",
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
      partners: "Partner",
    },
    cta: {
      title: "Wie würde ein Angreifer bei Ihnen eindringen?",
      subtitle: "Beschreiben Sie uns Ihre Systeme, und wir schlagen vor, wo der Test beginnen sollte.",
      button: "Beratung vereinbaren",
    },
    footer: {
      description:
        "Penetrationstests, Red Teaming, Cloud-Sicherheit und DORA-Compliance für Unternehmen in ganz Europa.",
      services: "Leistungen",
      pentest: "Penetrationstests",
      redTeam: "Red Team",
      company: "Unternehmen",
      contactInfo: "Kontakt",
      aboutUs: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Sprechen Sie mit unserem Sicherheitsteam",
      heroLabel: "Kontakt",
      heroTitle: "Sagen Sie uns, was Sie brauchen",
      heroSubtitle:
        "Beschreiben Sie, was getestet oder geprüft werden soll. Wir melden uns, um ein Gespräch zu vereinbaren.",
      getInTouch: "Kontakt aufnehmen",
      getInTouchDesc:
        "Schreiben Sie uns zu Sicherheitsbewertungen, DORA oder anderen Compliance-Themen oder zu jeder unserer Leistungen.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      locationLabel: "Standort",
      responseTimeLabel: "Antwortzeit",
      responseTimeValue: "Wir antworten in der Regel innerhalb von 24 Geschäftsstunden",
      whyChoose: "Warum Red Patronus",
      whyItems: [
        "Langjährige Erfahrung in der Unternehmenssicherheit",
        "Führende Branchenzertifizierungen",
        "Ein fester Account Manager",
      ],
      requestConsultation: "Beratung anfragen",
      messageReceived: "Nachricht erhalten",
      messageReceivedDesc:
        "Danke für Ihre Nachricht. Einer unserer Berater meldet sich innerhalb von 24 Geschäftsstunden bei Ihnen.",
      sendAnother: "Weitere Nachricht senden",
      privacyNote:
        "Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir geben Ihre Daten nicht an Dritte weiter.",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        company: "Firmenname",
        businessEmail: "Geschäftliche E-Mail",
        phone: "Telefon (optional)",
        message: "Wie können wir helfen?",
        submit: "Nachricht senden",
        sending: "Wird gesendet...",
      },
      info: {
        title: "Kontakt aufnehmen",
        description: "Sagen Sie uns, was Sie brauchen. Unser Team meldet sich bei Ihnen.",
        email: "E-Mail",
        call: "Anrufen",
        visit: "Besuchen Sie uns",
      },
      toast: {
        successTitle: "Nachricht gesendet",
        successDesc: "Danke für Ihre Nachricht. Wir melden uns in Kürze.",
        errorTitle: "Fehler",
        errorDesc: "Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.",
      },
    },
    about: {
      title: "Über Red Patronus",
      subtitle: "Offensive Sicherheit und Compliance aus Bratislava",
      heroTitle: "Wir finden die Schwachstellen vor den Angreifern",
      heroSubtitle:
        "Red Patronus wurde von Sicherheitsexperten mit jahrzehntelanger gemeinsamer Erfahrung gegründet. Von Bratislava aus führen wir Penetrationstests, Red-Team-Einsätze und Cloud-Sicherheitsprüfungen für Unternehmen durch, die wissen wollen, wie ein Angreifer bei ihnen eindringen würde.",
      mission: {
        title: "Unsere Mission",
        description:
          "Sicherheitslücken finden, bevor jemand sie ausnutzt, und Organisationen helfen, regulatorische Anforderungen zu erfüllen.",
        p1: "Wir suchen Sicherheitslücken in Ihren Systemen, bevor jemand anderes sie ausnutzt, und helfen Ihnen, sie zu schließen.",
        p2: "Wir testen so, wie echte Angreifer vorgehen. Jeder Bericht erklärt, was wir gefunden haben, wie wir hineingekommen sind und was Sie zuerst beheben sollten.",
      },
      vision: {
        title: "Unsere Vision",
        description:
          "Das Sicherheitsunternehmen zu sein, das europäische Firmen zuerst anrufen, wenn sie eine ehrliche Antwort zu ihrer Abwehr brauchen.",
      },
      globalReach: "Wo wir arbeiten",
      globalReachDesc: "Kunden in über 40 Ländern",
      industryExpertise: "Branchen",
      expertise: {
        financial: "Finanzdienstleistungen",
        healthcare: "Gesundheitswesen und Life Sciences",
        technology: "Technologie und SaaS",
        manufacturing: "Fertigung",
        retail: "Einzelhandel und E-Commerce",
        government: "Öffentlicher Sektor und Verteidigung",
      },
      valuesLabel: "Unsere Werte",
      valuesTitle: "Wie wir arbeiten",
      valuesSubtitle: "Was Sie bei jedem Auftrag von uns erwarten können.",
      values: {
        integrity: {
          title: "Integrität",
          description: "Wir halten uns an den vereinbarten Umfang und berichten ehrlich über unsere Ergebnisse.",
        },
        excellence: {
          title: "Qualität",
          description: "Wir passen unsere Methoden laufend an neue Angriffstechniken an.",
        },
        collaboration: {
          title: "Zusammenarbeit",
          description: "Wir arbeiten direkt mit Ihrem Team und bleiben erreichbar, während Sie die Befunde beheben.",
        },
        confidentiality: {
          title: "Vertraulichkeit",
          description: "Wir schützen Kundendaten und Ergebnisse mit strengen Zugriffskontrollen.",
        },
      },
      teamTitle: "Unser Team",
      teamDesc:
        "Unsere Berater kommen aus Sicherheitsteams großer Unternehmen, aus Behörden und von führenden Technologiefirmen. Jeder von ihnen hat mehrere Branchenzertifizierungen.",
      securityExperts: "Sicherheitsexperten",
      certificationsHeld: "Zertifizierungen",
      joinTeam: "Werden Sie Teil unseres Teams",
      teamCertifications: "Team-Zertifizierungen",
      ctaTitle: "Sprechen wir",
      ctaSubtitle:
        "Schreiben Sie uns, was getestet oder geprüft werden soll. Wir antworten innerhalb von 24 Geschäftsstunden.",
      ctaButton: "Kontakt aufnehmen",
    },
    caseStudies: {
      heroLabel: "Fallstudien",
      heroTitle: "Ausgewählte Projekte",
      heroSubtitle: "Beispiele aus unserer Arbeit: Ausgangslage, Vorgehen und Ergebnis.",
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
          title: "Absicherung des Cloud-Umzugs eines Versicherers",
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
          title: "Schutz von Patientendaten nach HIPAA",
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
          title: "Sicherheitsvalidierung vor dem Börsengang",
          challenge:
            "Ein Enterprise-SaaS-Unternehmen, das sich auf einen Börsengang vorbereitete, benötigte eine Sicherheitsvalidierung durch Dritte und SOC-2-Zertifizierung.",
          solution: "Sicherheitsprogramm mit Cloud-Sicherheitsbewertung, API-Tests und laufenden Penetrationstests.",
          results: [
            "SOC 2 Type II zertifiziert",
            "95% Schwachstellen-Behebungsrate",
            "Erfolgreiche IPO-Sicherheits-Due-Diligence",
            "Laufendes Red-Team-Programm etabliert",
          ],
        },
      },
      testimonialsLabel: "Kundenreferenzen",
      testimonialsTitle: "Was Kunden sagen",
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
      certificationsTitle: "Zertifizierungen und Partnerschaften",
      certificationsSubtitle: "Unser Team hat führende Branchenzertifizierungen, und wir arbeiten mit bedeutenden Sicherheitsorganisationen zusammen.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Zertifiziert" },
        soc: { name: "SOC 2 Type II", desc: "Konform" },
        crest: { name: "CREST", desc: "Mitglied" },
        pci: { name: "PCI-DSS", desc: "QSA-Partner" },
      },
      ctaTitle: "Planen Sie einen Test oder ein Audit?",
      ctaSubtitle: "Sagen Sie uns, was getestet werden soll, und wir schlagen Umfang und Zeitplan vor.",
      ctaButton: "Bewertung starten",
    },
    servicesPage: {
      heroLabel: "Unsere Leistungen",
      heroTitle: "Sicherheitsleistungen",
      heroSubtitle:
        "Unsere Leistungen orientieren sich an den Anforderungen von DORA (Digital Operational Resilience Act), von Schwachstellenanalysen bis zum Bedrohungsmonitoring.",
      keyCapabilities: "Leistungsumfang",
      securingCloud: "Absicherung Ihrer Cloud auf",
      customTitle: "Sie brauchen etwas anderes?",
      customSubtitle: "Wir passen Umfang und Leistungen an Ihre Sicherheits- und Compliance-Anforderungen an.",
      customButton: "Kontakt aufnehmen",
      items: {
        offensive: {
          title: "Offensive Sicherheit",
          description:
            "Penetrationstests, gezielte Phishing-Kampagnen und Red-Team-Einsätze. Wir simulieren echte Angriffe, finden Schwachstellen und prüfen, wie gut Ihre Abwehr standhält.",
          features: [
            "Web-Penetrationstests (OWASP)",
            "Infrastruktur-Penetrationstests",
            "Red-Team-Einsätze",
            "Angriffssimulationen",
            "Social-Engineering-Tests",
            "Post-Exploitation-Analyse",
          ],
        },
        cloud: {
          title: "Cloud-Sicherheit",
          description:
            "Sicherheitsbewertungen von AWS-, Azure- und GCP-Umgebungen nach etablierten Cloud-Sicherheitsstandards und Best Practices.",
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
          title: "Defensive Sicherheit",
          description:
            "Kontinuierliches Monitoring, DevSecOps, Asset-Management und Reaktion auf Bedrohungen für Ihre Organisation.",
          features: [
            "Security Operations Center (SOC)",
            "Kontinuierliches Sicherheitsscanning",
            "DevSecOps-Integration",
            "Business-Continuity-Planung",
            "Bedrohungserkennung und -reaktion",
            "Asset-Management",
          ],
        },
        etsm: {
          title: "Externes Bedrohungs- und Sicherheitsmonitoring",
          description:
            "Wir beobachten öffentlich verfügbare Daten (OSINT) auf exponierte Systeme, geleakte Daten und andere Schwachstellen und melden, was behoben werden muss.",
          features: [
            "Analyse öffentlicher Daten",
            "Frühe Bedrohungserkennung",
            "Priorisierte Befunde",
            "OSINT-Tool-Integration",
            "Automatisierte Scans",
            "Echtzeit-Monitoring",
          ],
        },
        training: {
          title: "Cybersicherheitsschulung",
          description:
            "Mitarbeitende lernen, Angriffe zu erkennen, zu melden und richtig zu reagieren. Das hilft auch, Schulungspflichten aus Regulierungen zu erfüllen.",
          features: [
            "Compliance-Schulung",
            "Awareness-Programme",
            "Sicherheits-Best-Practices",
            "Phishing-Erkennung",
            "Incident-Response-Schulung",
            "Auf Ihr Unternehmen abgestimmte Programme",
          ],
        },
        compliance: {
          title: "Compliance, Regulierung und Audits",
          description:
            "DORA-Compliance-Bewertungen, OSINT-Analyse und GAP-Analyse nach CIS, NIST und EU-Vorschriften. So wissen Sie, wo Sie bei den Anforderungen an die operative Resilienz stehen.",
          features: [
            "DORA-Compliance",
            "CIS- und NIST-Ausrichtung",
            "Einhaltung von EU-Vorschriften",
            "GAP-Analyse",
            "Audit-Unterstützung",
            "Risikobewertung",
          ],
        },
        iam: {
          title: "Identitäts- und Zugriffsmanagement",
          description: "IAM as a Service auf Okta, verwaltet über Terraform und CI/CD.",
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
            "Realistische Phishing-Simulationen zeigen, wie Ihre Mitarbeitenden reagieren und wo weitere Schulung nötig ist.",
          features: [
            "Realistische Simulationen",
            "Awareness-Tests für Mitarbeitende",
            "Detailliertes Reporting",
            "Risikominderung",
            "Compliance-Unterstützung",
            "Wiederholte Kampagnen zur Fortschrittsmessung",
          ],
        },
        siem: {
          title: "SIEM und Audit-Logging",
          description:
            "Echtzeit-Überwachung von Sicherheitsereignissen, Log-Analyse und schnelle Reaktion auf verdächtige Vorfälle.",
          features: [
            "Echtzeit-Monitoring",
            "Log-Analyse",
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
      contactUs: "Nous contacter",
    },
    hero: {
      highlight1: "Contrôles de sécurité conformes à DORA",
      highlight2: "Spécialistes certifiés en sécurité cloud",
      highlight3: "Réponse aux incidents 24/7 pour les entreprises",
      title: "Nous testons vos systèmes\ncomme de vrais attaquants.",
      subtitle:
        "Tests d'intrusion, red teaming, sécurité cloud et conformité DORA pour les entreprises réglementées en Europe.",
      cta: "Nous contacter",
      secondaryCta: "Nos services",
    },
    services: {
      title: "Ce que nous faisons",
      subtitle: "Tests offensifs, sécurité défensive, sécurité cloud et conformité, y compris DORA.",
      viewAll: "Voir tous les services",
      learnMore: "En savoir plus",
      offensive: {
        title: "Sécurité offensive",
        description: "Tests d'intrusion, exercices red team et évaluations de vulnérabilités.",
      },
      defensive: {
        title: "Sécurité défensive",
        description: "Surveillance de sécurité 24/7, réponse aux incidents et détection des menaces.",
      },
      cloud: {
        title: "Sécurité cloud",
        description: "Revues de sécurité des environnements AWS, Azure et GCP.",
      },
      compliance: {
        title: "Conformité DORA",
        description: "Accompagnement pour répondre aux exigences de DORA, du RGPD, d'ISO 27001 et d'autres normes.",
      },
      consulting: {
        title: "Conseil en sécurité",
        description: "Conseil sur la stratégie de sécurité, les priorités et l'architecture.",
      },
      training: {
        title: "Formation en sécurité",
        description: "Sensibilisation à la sécurité pour le personnel et formations techniques pour les équipes IT.",
      },
    },
    ai: {
      badge: "Assisté par l'IA",
      title: "Sécurité assistée par l'IA",
      subtitle:
        "Nous utilisons des outils d'IA pour détecter les menaces plus vite et automatiser une partie des tests de sécurité.",
      cta: "Voir les services IA",
      features: {
        pentest: {
          title: "Tests d'intrusion assistés par l'IA",
          description:
            "Des tests automatisés tournent en continu sur vos systèmes et signalent les nouvelles vulnérabilités entre deux tests manuels.",
        },
        threatIntel: {
          title: "Renseignement sur les menaces par l'IA",
          description:
            "L'apprentissage automatique appliqué aux données sur les menaces pour repérer les schémas d'attaque qui concernent votre organisation.",
        },
        autoResponse: {
          title: "Réponse automatisée aux incidents",
          description:
            "Des playbooks automatisés détectent et contiennent rapidement les incidents courants pour limiter les dégâts et les interruptions.",
        },
        continuous: {
          title: "Surveillance continue de la sécurité",
          description:
            "Surveillance 24/7 qui apprend le fonctionnement normal de votre environnement et signale les anomalies.",
        },
      },
    },
    trust: {
      certifications: "Certifications et normes",
      certificationsLabel: "Certifications et conformité",
      certificationsTitle: "Les normes avec lesquelles nous travaillons",
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
        clients: "Clients",
        experts: "Experts en sécurité",
      },
      statsItems: {
        yearsValue: "Expérimentés",
        years: "Pratique de la sécurité en entreprise",
        clientsValue: "40+",
        clients: "Pays où nous avons des clients",
        expertsValue: "Spécialistes",
        experts: "Équipe de sécurité",
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
      partners: "Partenaires",
    },
    cta: {
      title: "Par où un attaquant entrerait-il chez vous ?",
      subtitle: "Décrivez-nous vos systèmes et nous vous proposerons par où commencer les tests.",
      button: "Planifier une consultation",
    },
    footer: {
      description:
        "Tests d'intrusion, red teaming, sécurité cloud et conformité DORA pour les entreprises de toute l'Europe.",
      services: "Services",
      pentest: "Tests d'intrusion",
      redTeam: "Red team",
      company: "Entreprise",
      contactInfo: "Coordonnées",
      aboutUs: "À propos de nous",
      copyright: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    contact: {
      title: "Nous contacter",
      subtitle: "Parlez à notre équipe sécurité",
      heroLabel: "Nous contacter",
      heroTitle: "Dites-nous ce dont vous avez besoin",
      heroSubtitle:
        "Décrivez ce que vous voulez faire tester ou auditer, et nous vous recontacterons pour convenir d'un appel.",
      getInTouch: "Nous contacter",
      getInTouchDesc:
        "Écrivez-nous pour une évaluation de sécurité, la conformité DORA ou autre, ou pour l'un de nos services.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      locationLabel: "Adresse",
      responseTimeLabel: "Délai de réponse",
      responseTimeValue: "Nous répondons généralement sous 24 heures ouvrées",
      whyChoose: "Pourquoi Red Patronus",
      whyItems: [
        "Une longue expérience de la sécurité en entreprise",
        "Des certifications reconnues du secteur",
        "Un account manager dédié",
      ],
      requestConsultation: "Demander une consultation",
      messageReceived: "Message reçu",
      messageReceivedDesc: "Merci pour votre message. L'un de nos consultants vous répondra sous 24 heures ouvrées.",
      sendAnother: "Envoyer un autre message",
      privacyNote:
        "En envoyant ce formulaire, vous acceptez notre politique de confidentialité. Nous ne transmettons pas vos données à des tiers.",
      form: {
        name: "Nom complet",
        email: "Adresse e-mail",
        company: "Nom de l'entreprise",
        businessEmail: "E-mail professionnel",
        phone: "Téléphone (facultatif)",
        message: "Comment pouvons-nous vous aider ?",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
      },
      info: {
        title: "Nous contacter",
        description: "Dites-nous ce dont vous avez besoin, notre équipe vous répondra.",
        email: "Écrivez-nous",
        call: "Appelez-nous",
        visit: "Rendez-nous visite",
      },
      toast: {
        successTitle: "Message envoyé",
        successDesc: "Merci pour votre message. Nous vous répondrons rapidement.",
        errorTitle: "Erreur",
        errorDesc: "Un problème est survenu lors de l'envoi de votre message. Veuillez réessayer.",
      },
    },
    about: {
      title: "À propos de Red Patronus",
      subtitle: "Sécurité offensive et conformité, depuis Bratislava",
      heroTitle: "Nous trouvons les failles avant les attaquants",
      heroSubtitle:
        "Red Patronus a été fondée par des spécialistes de la sécurité qui cumulent des décennies d'expérience. Depuis Bratislava, nous réalisons des tests d'intrusion, des missions red team et des revues de sécurité cloud pour les entreprises qui veulent savoir comment un attaquant pourrait entrer chez elles.",
      mission: {
        title: "Notre mission",
        description:
          "Trouver les failles de sécurité avant qu'elles ne soient exploitées et aider les organisations à respecter leurs obligations réglementaires.",
        p1: "Nous cherchons les failles de vos systèmes avant que quelqu'un d'autre ne les exploite, et nous vous aidons à les corriger.",
        p2: "Nous testons comme procèdent les vrais attaquants. Chaque rapport explique ce que nous avons trouvé, comment nous sommes entrés et ce qu'il faut corriger en priorité.",
      },
      vision: {
        title: "Notre vision",
        description:
          "Être la société de sécurité que les entreprises européennes appellent en premier lorsqu'elles veulent une réponse honnête sur leurs défenses.",
      },
      globalReach: "Où nous intervenons",
      globalReachDesc: "Des clients dans plus de 40 pays",
      industryExpertise: "Secteurs",
      expertise: {
        financial: "Services financiers",
        healthcare: "Santé et sciences de la vie",
        technology: "Technologie et SaaS",
        manufacturing: "Industrie",
        retail: "Commerce et e-commerce",
        government: "Secteur public et défense",
      },
      valuesLabel: "Nos valeurs",
      valuesTitle: "Notre façon de travailler",
      valuesSubtitle: "Ce que vous pouvez attendre de nous sur chaque mission.",
      values: {
        integrity: {
          title: "Intégrité",
          description: "Nous respectons le périmètre convenu et rendons compte de nos constats en toute honnêteté.",
        },
        excellence: {
          title: "Qualité",
          description: "Nous mettons régulièrement nos méthodes à jour face aux nouvelles techniques d'attaque.",
        },
        collaboration: {
          title: "Collaboration",
          description: "Nous travaillons directement avec votre équipe et restons disponibles pendant les corrections.",
        },
        confidentiality: {
          title: "Confidentialité",
          description: "Nous protégeons les données et les résultats de nos clients par des contrôles d'accès stricts.",
        },
      },
      teamTitle: "Notre équipe",
      teamDesc:
        "Nos consultants viennent d'équipes sécurité de grandes entreprises, d'administrations publiques et de grands groupes technologiques. Chacun d'eux détient plusieurs certifications du secteur.",
      securityExperts: "Experts en sécurité",
      certificationsHeld: "Certifications",
      joinTeam: "Rejoignez notre équipe",
      teamCertifications: "Certifications de l'équipe",
      ctaTitle: "Parlons-en",
      ctaSubtitle: "Dites-nous ce que vous voulez faire tester ou auditer. Nous répondons sous 24 heures ouvrées.",
      ctaButton: "Nous contacter",
    },
    caseStudies: {
      heroLabel: "Études de cas",
      heroTitle: "Quelques missions",
      heroSubtitle: "Des exemples de nos missions : le besoin du client, notre travail et le résultat.",
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
          title: "Sécuriser la migration cloud d'un assureur",
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
          title: "Protéger les données patients selon HIPAA",
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
          title: "Validation de sécurité avant une introduction en bourse",
          challenge:
            "Une entreprise SaaS préparant son introduction en bourse avait besoin d'une validation de sécurité par un tiers et d'une certification SOC 2.",
          solution:
            "Programme de sécurité comprenant une évaluation de la sécurité cloud, des tests d'API et des tests d'intrusion continus.",
          results: [
            "Certifié SOC 2 Type II",
            "95 % de taux de correction des vulnérabilités",
            "Due diligence de sécurité réussie pour l'IPO",
            "Programme red team continu établi",
          ],
        },
      },
      testimonialsLabel: "Témoignages clients",
      testimonialsTitle: "Ce qu'en disent nos clients",
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
      certificationsTitle: "Certifications et partenariats",
      certificationsSubtitle: "Notre équipe détient des certifications reconnues du secteur, et nous travaillons avec de grandes organisations de sécurité.",
      certifications: {
        iso: { name: "ISO 27001", desc: "Certifié" },
        soc: { name: "SOC 2 Type II", desc: "Conforme" },
        crest: { name: "CREST", desc: "Membre" },
        pci: { name: "PCI-DSS", desc: "Partenaire QSA" },
      },
      ctaTitle: "Vous préparez un test ou un audit ?",
      ctaSubtitle: "Dites-nous ce qu'il faut tester et nous vous proposerons un périmètre et un calendrier.",
      ctaButton: "Démarrer une évaluation",
    },
    servicesPage: {
      heroLabel: "Nos services",
      heroTitle: "Services de sécurité",
      heroSubtitle:
        "Nos services s'appuient sur les exigences du règlement DORA (Digital Operational Resilience Act), de l'évaluation des vulnérabilités à la surveillance des menaces.",
      keyCapabilities: "Ce qui est inclus",
      securingCloud: "Sécuriser votre cloud sur",
      customTitle: "Besoin d'autre chose ?",
      customSubtitle: "Nous adaptons le périmètre et les services à vos exigences de sécurité et de conformité.",
      customButton: "Nous contacter",
      items: {
        offensive: {
          title: "Sécurité offensive",
          description:
            "Tests d'intrusion, campagnes de phishing ciblées et missions red team. Nous simulons de vraies attaques pour trouver les vulnérabilités et vérifier la solidité de vos défenses.",
          features: [
            "Tests d'intrusion web (OWASP)",
            "Tests d'intrusion d'infrastructure",
            "Missions red team",
            "Simulations d'attaques",
            "Tests d'ingénierie sociale",
            "Analyse post-exploitation",
          ],
        },
        cloud: {
          title: "Sécurité cloud",
          description:
            "Évaluations de sécurité des environnements AWS, Azure et GCP selon les normes et bonnes pratiques reconnues pour le cloud.",
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
          title: "Sécurité défensive",
          description:
            "Surveillance continue, DevSecOps, gestion des actifs et réponse aux menaces pour votre organisation.",
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
            "Nous surveillons les données publiques (OSINT) pour repérer les systèmes exposés, les fuites de données et d'autres faiblesses, et nous signalons ce qu'il faut corriger.",
          features: [
            "Analyse des données publiques",
            "Détection précoce des menaces",
            "Constats classés par priorité",
            "Intégration d'outils OSINT",
            "Analyses automatisées",
            "Monitoring en temps réel",
          ],
        },
        training: {
          title: "Formation en cybersécurité",
          description:
            "Apprend aux employés à reconnaître une attaque, à la signaler et à y réagir. Aide aussi à respecter les obligations de formation prévues par la réglementation.",
          features: [
            "Formation à la conformité",
            "Programmes de sensibilisation aux menaces",
            "Bonnes pratiques de sécurité",
            "Reconnaissance du phishing",
            "Formation à la réponse aux incidents",
            "Programmes adaptés à votre entreprise",
          ],
        },
        compliance: {
          title: "Conformité, réglementation et audits",
          description:
            "Évaluations de conformité DORA, analyse OSINT et analyse des écarts selon CIS, NIST et les réglementations européennes. Vous savez où vous en êtes face aux exigences de résilience opérationnelle.",
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
          description: "IAM en tant que service sur Okta, géré via Terraform et CI/CD.",
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
            "Des simulations de phishing réalistes montrent comment vos employés réagissent et où la formation doit être renforcée.",
          features: [
            "Simulations réalistes",
            "Tests de sensibilisation des employés",
            "Reporting détaillé",
            "Réduction des risques",
            "Support à la conformité",
            "Campagnes répétées pour mesurer les progrès",
          ],
        },
        siem: {
          title: "SIEM et journalisation d'audit",
          description:
            "Surveillance en temps réel des événements de sécurité, analyse des journaux et réponse rapide aux incidents suspects.",
          features: [
            "Monitoring en temps réel",
            "Analyse des journaux",
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
