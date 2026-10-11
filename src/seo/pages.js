/**
 * Per-page titles, summaries, FAQs, and tables.
 * English is the source. Slovak, German, and French are provided where the
 * page body is already translated. Service detail pages are English in the UI.
 */

const L = (en, sk, de, fr) => ({ en, sk, de, fr });

const home = L("Home", "Domov", "Startseite", "Accueil");
const services = L("Services", "Služby", "Leistungen", "Services");
const about = L("About", "O nás", "Über uns", "À propos");
const caseStudies = L("Case Studies", "Prípadové štúdie", "Fallstudien", "Études de cas");
const contact = L("Contact", "Kontakt", "Kontakt", "Contact");
const careers = L("Careers", "Kariéra", "Karriere", "Carrières");

const base = {
  article: true,
  emit: true,
  inSitemap: true,
  robots: "index, follow",
  ogType: "website",
  pageType: "WebPage",
  changefreq: "monthly",
  priority: 0.8,
};

function crumbs(...items) {
  return items;
}

export const pages = [
  {
    ...base,
    path: "/",
    priority: 1,
    pageType: "WebPage",
    navLabel: home,
    breadcrumbs: [{ name: home, path: "/" }],
    title: L(
      "Red Patronus | DORA Cybersecurity, Bratislava",
      "Red Patronus | Kybernetická bezpečnosť a DORA",
      "Red Patronus | Cybersicherheit und DORA, Bratislava",
      "Red Patronus | Cybersécurité et DORA à Bratislava",
    ),
    description: L(
      "Bratislava cybersecurity firm for penetration testing, red teaming, cloud security, and DORA-aligned consulting. Professional pentest listed at €3,000 excl. VAT.",
      "Bratislavská firma pre penetračné testy, red team, cloudovú bezpečnosť a poradenstvo v súlade s DORA. Profesionálny pentest je uvedený za 3 000 € bez DPH.",
      "Cybersicherheitsfirma in Bratislava: Penetrationstests, Red Teaming, Cloud-Sicherheit und DORA-orientierte Beratung. Professioneller Pentest: 3.000 € zzgl. MwSt.",
      "Société de cybersécurité à Bratislava : tests d'intrusion, red team, sécurité cloud et conseil aligné sur DORA. Pentest professionnel : 3 000 € HT.",
    ),
    keywords: L(
      "Red Patronus, DORA compliance, penetration testing Bratislava, red team, cloud security, cybersecurity Slovakia",
      "Red Patronus, súlad s DORA, penetračné testovanie Bratislava, red team, cloudová bezpečnosť",
      "Red Patronus, DORA, Penetrationstest Bratislava, Red Team, Cloud-Sicherheit",
      "Red Patronus, DORA, test d'intrusion Bratislava, red team, sécurité cloud",
    ),
    summary: L(
      "Red Patronus is a cybersecurity company in Bratislava, Slovakia. It provides penetration testing, red team operations, defensive monitoring, cloud security on AWS, Azure and Google Cloud, and DORA-aligned consulting for enterprises and financial organisations. A professional pentest is listed at €3,000 excluding VAT.",
      "Red Patronus je spoločnosť pre kybernetickú bezpečnosť v Bratislave na Slovensku. Poskytuje penetračné testovanie, red team operácie, defenzívny monitoring, cloudovú bezpečnosť na AWS, Azure a Google Cloud a poradenstvo v súlade s DORA pre podniky a finančné organizácie. Profesionálny pentest je uvedený za 3 000 € bez DPH.",
      "Red Patronus ist ein Cybersicherheitsunternehmen in Bratislava, Slowakei. Es bietet Penetrationstests, Red-Team-Einsätze, defensive Überwachung, Cloud-Sicherheit auf AWS, Azure und Google Cloud sowie DORA-orientierte Beratung für Unternehmen und Finanzorganisationen. Ein professioneller Pentest ist mit 3.000 € zzgl. MwSt. angegeben.",
      "Red Patronus est une société de cybersécurité à Bratislava, en Slovaquie. Elle propose des tests d'intrusion, des opérations de red team, une surveillance défensive, la sécurité cloud sur AWS, Azure et Google Cloud, et du conseil aligné sur DORA pour les entreprises et les organisations financières. Un pentest professionnel est indiqué à 3 000 € HT.",
    ),
    tables: [
      {
        caption: L(
          "Figures and offers published on the Red Patronus website",
          "Údaje a ponuky uverejnené na webe Red Patronus",
          "Auf der Website von Red Patronus veröffentlichte Angaben und Angebote",
          "Chiffres et offres publiés sur le site Red Patronus",
        ),
        headers: [
          L("Item", "Položka", "Angabe", "Élément"),
          L("Published value", "Uverejnená hodnota", "Veröffentlichter Wert", "Valeur publiée"),
        ],
        rows: [
          { cells: [L("Years of excellence", "Roky excelentnosti", "Jahre Exzellenz", "Années d'excellence"), "15+"] },
          { cells: [L("Enterprise clients", "Podnikoví klienti", "Unternehmenskunden", "Clients entreprises"), "20+"] },
          { cells: [L("Security experts", "Bezpečnostní experti", "Sicherheitsexperten", "Experts en sécurité"), "10+"] },
          {
            cells: [
              L("Professional penetration test", "Profesionálny penetračný test", "Professioneller Penetrationstest", "Test d'intrusion professionnel"),
              L("€3,000 excl. VAT", "3 000 € bez DPH", "3.000 € zzgl. MwSt.", "3 000 € HT"),
            ],
          },
          {
            cells: [
              L("Stated response time", "Uvedená doba odozvy", "Angegebene Antwortzeit", "Délai de réponse indiqué"),
              L("Within 24 hours", "Do 24 hodín", "Innerhalb von 24 Stunden", "Sous 24 heures"),
            ],
          },
          {
            cells: [
              L("On the market since", "Na trhu od roku", "Am Markt seit", "Sur le marché depuis"),
              L(
                "2005, stated on the Slovak careers page",
                "2005, uvedené na slovenskej kariérnej stránke",
                "2005, auf der slowakischen Karriereseite genannt",
                "2005, indiqué sur la page carrières en slovaque",
              ),
            ],
            todo: "founding-date",
          },
          {
            cells: [
              L("Prices for other services", "Ceny ostatných služieb", "Preise anderer Leistungen", "Prix des autres services"),
              L("Not published on this site", "Na tomto webe neuverejnené", "Auf dieser Website nicht veröffentlicht", "Non publié sur ce site"),
            ],
            todo: "other-prices",
          },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "What does Red Patronus do?",
          a: "Red Patronus is a cybersecurity company in Bratislava, Slovakia. The site offers penetration testing, red team operations, defensive monitoring, cloud security, DORA-aligned compliance consulting, training, identity and access management, phishing simulation, and SIEM with audit logging.",
        },
        {
          q: "How much does a Red Patronus penetration test cost?",
          a: "The site publishes one fixed price: €3,000 excluding VAT for a professional penetration test of a web application or external infrastructure. It includes testing aligned with OWASP Top 10 and PTES, an executive summary, a technical report with proof of concept, and risk-prioritized remediation guidance. If no vulnerability is found, the next year's pentest is free of charge.",
        },
        {
          q: "How can I contact Red Patronus?",
          a: "Email info@redpatronus.com or call +421 948 446 778. The contact page lists Lenardova 1147/12, Bratislava 851 01, Slovakia, and says the team responds within 24 hours. The footer also lists Mlynské nivy 48, Bratislava 821 09, Slovakia.",
        },
        {
          q: "Which standards does the Red Patronus homepage list?",
          a: "The homepage lists ISO 27001, the EU Digital Operational Resilience Act (DORA), and the EU NIS2 directive under certifications and standards. Other pages name frameworks the team can assess, including CIS, NIST, GDPR, SOC 2, PCI-DSS, HIPAA, and CMMC. Certificate IDs are not published.",
        },
      ],
      sk: [
        {
          q: "Čo robí Red Patronus?",
          a: "Red Patronus je spoločnosť pre kybernetickú bezpečnosť v Bratislave na Slovensku. Web ponúka penetračné testovanie, red team operácie, defenzívny monitoring, cloudovú bezpečnosť, poradenstvo k súladu s DORA, školenia, správu identít a prístupov, simuláciu phishingu a SIEM s auditným logovaním.",
        },
        {
          q: "Koľko stojí penetračný test od Red Patronus?",
          a: "Web uverejňuje jednu pevnú cenu: 3 000 € bez DPH za profesionálny penetračný test webovej aplikácie alebo externej infraštruktúry. Zahŕňa testovanie podľa OWASP Top 10 a PTES, manažérske zhrnutie, technickú správu s proof of concept a odporúčania zoradené podľa rizika. Ak sa nenájde žiadna zraniteľnosť, pentest v budúcom roku je zdarma.",
        },
        {
          q: "Ako kontaktovať Red Patronus?",
          a: "Napíšte na info@redpatronus.com alebo volajte +421 948 446 778. Kontaktná stránka uvádza Lenardova 1147/12, Bratislava 851 01, Slovensko, a odpoveď do 24 hodín. Pätička webu uvádza aj Mlynské nivy 48, Bratislava 821 09, Slovensko.",
        },
        {
          q: "Aké štandardy uvádza domovská stránka Red Patronus?",
          a: "Domovská stránka v časti certifikácie a štandardy uvádza ISO 27001, nariadenie EÚ DORA a smernicu EÚ NIS2. Ďalšie stránky menujú rámce, ktoré tím hodnotí, vrátane CIS, NIST, GDPR, SOC 2, PCI-DSS, HIPAA a CMMC. Čísla certifikátov nie sú uverejnené.",
        },
      ],
      de: [
        {
          q: "Was macht Red Patronus?",
          a: "Red Patronus ist ein Cybersicherheitsunternehmen in Bratislava, Slowakei. Die Website bietet Penetrationstests, Red-Team-Einsätze, defensive Überwachung, Cloud-Sicherheit, DORA-orientierte Compliance-Beratung, Schulungen, Identity and Access Management, Phishing-Simulationen sowie SIEM mit Audit-Logging.",
        },
        {
          q: "Was kostet ein Penetrationstest von Red Patronus?",
          a: "Die Website nennt einen Festpreis: 3.000 € zzgl. MwSt. für einen professionellen Penetrationstest einer Webanwendung oder externen Infrastruktur. Enthalten sind Tests nach OWASP Top 10 und PTES, eine Management-Zusammenfassung, ein technischer Bericht mit Proof of Concept und risikopriorisierte Behebungshinweise. Wird keine Schwachstelle gefunden, ist der Pentest im nächsten Jahr kostenlos.",
        },
        {
          q: "Wie erreiche ich Red Patronus?",
          a: "E-Mail an info@redpatronus.com oder Anruf unter +421 948 446 778. Die Kontaktseite nennt Lenardova 1147/12, Bratislava 851 01, Slowakei, und eine Antwort innerhalb von 24 Stunden. Die Fußzeile nennt außerdem Mlynské nivy 48, Bratislava 821 09, Slowakei.",
        },
        {
          q: "Welche Standards nennt die Startseite von Red Patronus?",
          a: "Die Startseite nennt unter Zertifizierungen und Standards ISO 27001, die EU-Verordnung DORA und die EU-Richtlinie NIS2. Andere Seiten nennen Rahmenwerke, die das Team prüfen kann, darunter CIS, NIST, DSGVO, SOC 2, PCI-DSS, HIPAA und CMMC. Zertifikatsnummern sind nicht veröffentlicht.",
        },
      ],
      fr: [
        {
          q: "Que fait Red Patronus ?",
          a: "Red Patronus est une société de cybersécurité à Bratislava, en Slovaquie. Le site propose des tests d'intrusion, des opérations de red team, une surveillance défensive, la sécurité cloud, du conseil de conformité aligné sur DORA, de la formation, la gestion des identités et des accès, des simulations de phishing et un SIEM avec journaux d'audit.",
        },
        {
          q: "Combien coûte un test d'intrusion Red Patronus ?",
          a: "Le site publie un prix fixe : 3 000 € HT pour un test d'intrusion professionnel d'une application web ou d'une infrastructure externe. Il comprend des tests alignés sur l'OWASP Top 10 et PTES, une synthèse de direction, un rapport technique avec preuve de concept et des recommandations priorisées par le risque. Si aucune vulnérabilité n'est trouvée, le pentest de l'année suivante est offert.",
        },
        {
          q: "Comment contacter Red Patronus ?",
          a: "Écrivez à info@redpatronus.com ou appelez le +421 948 446 778. La page contact indique Lenardova 1147/12, Bratislava 851 01, Slovaquie, et une réponse sous 24 heures. Le pied de page indique aussi Mlynské nivy 48, Bratislava 821 09, Slovaquie.",
        },
        {
          q: "Quelles normes la page d'accueil de Red Patronus cite-t-elle ?",
          a: "La page d'accueil cite ISO 27001, le règlement européen DORA et la directive européenne NIS2 au titre des certifications et normes. D'autres pages citent des référentiels que l'équipe peut évaluer, dont CIS, NIST, RGPD, SOC 2, PCI-DSS, HIPAA et CMMC. Aucun numéro de certificat n'est publié.",
        },
      ],
    },
    related: [
      "/services",
      "/services/penetration-testing",
      "/services/red-team",
      "/services/cloud-security",
      "/services/compliance",
      "/about",
      "/contact",
      "/case-studies",
      "/hiring",
    ],
  },
  {
    ...base,
    path: "/services",
    priority: 0.9,
    pageType: "CollectionPage",
    navLabel: services,
    breadcrumbs: [
      { name: home, path: "/" },
      { name: services, path: "/services" },
    ],
    title: L(
      "Cybersecurity Services | Red Patronus",
      "Bezpečnostné služby | Red Patronus",
      "Cybersicherheitsleistungen | Red Patronus",
      "Services de cybersécurité | Red Patronus",
    ),
    description: L(
      "Offensive and defensive security, AWS Azure and GCP cloud security, DORA compliance, IAM, SIEM, phishing simulation, and training from Red Patronus in Bratislava.",
      "Ofenzívna a defenzívna bezpečnosť, cloud AWS Azure a GCP, súlad s DORA, IAM, SIEM, simulácia phishingu a školenia od Red Patronus v Bratislave.",
      "Offensive und defensive Sicherheit, Cloud-Sicherheit für AWS, Azure und GCP, DORA-Compliance, IAM, SIEM, Phishing-Simulation und Schulungen von Red Patronus in Bratislava.",
      "Sécurité offensive et défensive, cloud AWS Azure et GCP, conformité DORA, IAM, SIEM, simulation de phishing et formation par Red Patronus à Bratislava.",
    ),
    keywords: L(
      "cybersecurity services, offensive security, defensive security, DORA compliance, cloud security, Red Patronus",
    ),
    summary: L(
      "The Red Patronus services page lists offensive security, cloud security for AWS, Azure and Google Cloud, defensive security, external threat monitoring, cybersecurity training, DORA-aligned compliance audits, identity and access management with Okta, phishing simulation, and SIEM with audit logging. Engagements can be tailored.",
      "Stránka služieb Red Patronus uvádza ofenzívnu bezpečnosť, cloudovú bezpečnosť pre AWS, Azure a Google Cloud, defenzívnu bezpečnosť, monitoring externých hrozieb, školenia, audity súladu s DORA, správu identít a prístupov cez Okta, simuláciu phishingu a SIEM s auditným logovaním. Zákazku možno prispôsobiť.",
      "Die Leistungsseite von Red Patronus nennt offensive Sicherheit, Cloud-Sicherheit für AWS, Azure und Google Cloud, defensive Sicherheit, externes Bedrohungsmonitoring, Schulungen, DORA-orientierte Compliance-Audits, Identity and Access Management mit Okta, Phishing-Simulation und SIEM mit Audit-Logging. Aufträge können angepasst werden.",
      "La page services de Red Patronus présente la sécurité offensive, la sécurité cloud pour AWS, Azure et Google Cloud, la sécurité défensive, la surveillance des menaces externes, la formation, des audits de conformité alignés sur DORA, la gestion des identités avec Okta, la simulation de phishing et un SIEM avec journaux d'audit. Les missions peuvent être adaptées.",
    ),
    tables: [
      {
        caption: L(
          "Security services described on the Red Patronus services page",
          "Bezpečnostné služby opísané na stránke služieb Red Patronus",
          "Sicherheitsleistungen auf der Leistungsseite von Red Patronus",
          "Services de sécurité décrits sur la page services de Red Patronus",
        ),
        headers: [
          L("Service", "Služba", "Leistung", "Service"),
          L("What the page says it covers", "Čo podľa stránky pokrýva", "Was die Seite als Umfang nennt", "Ce que la page dit couvrir"),
        ],
        rows: [
          {
            cells: [
              L("Offensive security", "Ofenzívna bezpečnosť", "Offensive Sicherheit", "Sécurité offensive"),
              L(
                "Web and infrastructure penetration tests, red team, attack simulation, social engineering, post-exploitation",
                "Webové a infraštruktúrne pentesty, red team, simulácia útokov, sociálne inžinierstvo, post-exploatácia",
                "Web- und Infrastruktur-Pentests, Red Team, Angriffssimulation, Social Engineering, Post-Exploitation",
                "Pentests web et infrastructure, red team, simulation d'attaque, ingénierie sociale, post-exploitation",
              ),
            ],
          },
          {
            cells: [
              L("Cloud security", "Cloudová bezpečnosť", "Cloud-Sicherheit", "Sécurité cloud"),
              L(
                "Configuration review, IAM policy assessment, containers, Kubernetes, DevSecOps, cloud compliance on AWS, Azure, and GCP",
                "Kontrola konfigurácie, hodnotenie IAM politík, kontajnery, Kubernetes, DevSecOps, cloudový súlad na AWS, Azure a GCP",
                "Konfigurationsprüfung, IAM-Richtlinien, Container, Kubernetes, DevSecOps, Cloud-Compliance auf AWS, Azure und GCP",
                "Revue de configuration, politiques IAM, conteneurs, Kubernetes, DevSecOps, conformité cloud sur AWS, Azure et GCP",
              ),
            ],
          },
          {
            cells: [
              L("Defensive security", "Defenzívna bezpečnosť", "Defensive Sicherheit", "Sécurité défensive"),
              L(
                "SOC, continuous scanning, DevSecOps, business continuity, threat detection and response, asset management",
                "SOC, priebežné skenovanie, DevSecOps, kontinuita podnikania, detekcia a reakcia, správa aktív",
                "SOC, kontinuierliche Scans, DevSecOps, Business Continuity, Erkennung und Reaktion, Asset-Management",
                "SOC, scans continus, DevSecOps, continuité d'activité, détection et réponse, gestion des actifs",
              ),
            ],
          },
          {
            cells: [
              L("External threat monitoring", "Monitoring externých hrozieb", "Externes Bedrohungsmonitoring", "Surveillance des menaces externes"),
              L(
                "OSINT monitoring of public data, proactive detection, and actionable insight",
                "OSINT monitoring verejných dát, proaktívna detekcia a použiteľné zistenia",
                "OSINT-Überwachung öffentlicher Daten, proaktive Erkennung und nutzbare Erkenntnisse",
                "Veille OSINT des données publiques, détection proactive et constats actionnables",
              ),
            ],
          },
          {
            cells: [
              L("Training", "Školenia", "Schulungen", "Formation"),
              L(
                "Compliance, threat awareness, phishing recognition, incident response, custom programmes",
                "Súlad, povedomie o hrozbách, rozpoznanie phishingu, reakcia na incidenty, programy na mieru",
                "Compliance, Bedrohungsbewusstsein, Phishing-Erkennung, Incident Response, individuelle Programme",
                "Conformité, sensibilisation, reconnaissance du phishing, réponse à incident, programmes sur mesure",
              ),
            ],
          },
          {
            cells: [
              L("Compliance and audits", "Súlad a audity", "Compliance und Audits", "Conformité et audits"),
              L(
                "DORA, CIS, NIST, EU regulations, gap analysis, audit support, risk assessment",
                "DORA, CIS, NIST, predpisy EÚ, GAP analýza, podpora auditu, hodnotenie rizík",
                "DORA, CIS, NIST, EU-Vorgaben, Gap-Analyse, Auditunterstützung, Risikobewertung",
                "DORA, CIS, NIST, règles de l'UE, analyse d'écarts, soutien d'audit, évaluation des risques",
              ),
            ],
          },
          {
            cells: [
              L("Identity and access", "Identity a prístupy", "Identität und Zugriff", "Identité et accès"),
              L(
                "Okta SSO, Active Directory, Terraform, CI/CD, access control, multi-factor authentication",
                "Okta SSO, Active Directory, Terraform, CI/CD, riadenie prístupu, viacfaktorové overenie",
                "Okta SSO, Active Directory, Terraform, CI/CD, Zugriffskontrolle, Multi-Faktor-Authentifizierung",
                "SSO Okta, Active Directory, Terraform, CI/CD, contrôle d'accès, authentification multifacteur",
              ),
            ],
          },
          {
            cells: [
              L("Phishing simulation", "Simulácia phishingu", "Phishing-Simulation", "Simulation de phishing"),
              L(
                "Realistic simulations, awareness testing, reporting, and compliance support",
                "Realistické simulácie, testovanie povedomia, reporty a podpora súladu",
                "Realistische Simulationen, Awareness-Tests, Berichte und Compliance-Unterstützung",
                "Simulations réalistes, tests de sensibilisation, rapports et soutien à la conformité",
              ),
            ],
          },
          {
            cells: [
              L("SIEM and audit logging", "SIEM a auditné logy", "SIEM und Audit-Logging", "SIEM et journaux d'audit"),
              L(
                "Real-time monitoring, log analysis, threat identification, authentication monitoring, incident response",
                "Monitoring v reálnom čase, analýza logov, identifikácia hrozieb, monitoring prihlásení, reakcia na incidenty",
                "Echtzeitüberwachung, Loganalyse, Bedrohungserkennung, Authentifizierungsmonitoring, Incident Response",
                "Surveillance en temps réel, analyse de journaux, identification des menaces, suivi des authentifications, réponse à incident",
              ),
            ],
          },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "What cybersecurity services does Red Patronus list?",
          a: "The services page lists offensive security, cloud security, defensive security, external threat and security monitoring, cybersecurity training, compliance and regulation audits, identity and access management, phishing simulation, and SIEM with audit logging.",
        },
        {
          q: "Which clouds does Red Patronus say it secures?",
          a: "The services page says cloud security assessments cover Amazon Web Services, Microsoft Azure, and Google Cloud Platform.",
        },
        {
          q: "Can Red Patronus tailor a security engagement?",
          a: "Yes. The services page says the team can tailor services to an organisation's security requirements and compliance needs, and it links to the contact form for a custom solution.",
        },
      ],
      sk: [
        {
          q: "Aké kyberbezpečnostné služby Red Patronus uvádza?",
          a: "Stránka služieb uvádza ofenzívnu bezpečnosť, cloudovú bezpečnosť, defenzívnu bezpečnosť, monitoring externých hrozieb, školenia, audity súladu a regulácie, správu identít a prístupov, simuláciu phishingu a SIEM s auditným logovaním.",
        },
        {
          q: "Ktoré cloudy Red Patronus podľa webu zabezpečuje?",
          a: "Stránka služieb hovorí, že hodnotenia cloudovej bezpečnosti pokrývajú Amazon Web Services, Microsoft Azure a Google Cloud Platform.",
        },
        {
          q: "Vie Red Patronus prispôsobiť zákazku?",
          a: "Áno. Stránka služieb hovorí, že tím vie služby prispôsobiť bezpečnostným a compliance požiadavkám organizácie, a odkazuje na kontaktný formulár.",
        },
      ],
      de: [
        {
          q: "Welche Cybersicherheitsleistungen nennt Red Patronus?",
          a: "Die Leistungsseite nennt offensive Sicherheit, Cloud-Sicherheit, defensive Sicherheit, externes Bedrohungsmonitoring, Schulungen, Compliance- und Regulierungs-Audits, Identity and Access Management, Phishing-Simulation und SIEM mit Audit-Logging.",
        },
        {
          q: "Welche Clouds sichert Red Patronus nach eigener Angabe?",
          a: "Die Leistungsseite sagt, dass Cloud-Sicherheitsprüfungen Amazon Web Services, Microsoft Azure und Google Cloud Platform abdecken.",
        },
        {
          q: "Kann Red Patronus einen Auftrag anpassen?",
          a: "Ja. Die Leistungsseite sagt, dass das Team Leistungen an Sicherheits- und Compliance-Anforderungen anpassen kann, und verweist auf das Kontaktformular.",
        },
      ],
      fr: [
        {
          q: "Quels services de cybersécurité Red Patronus présente-t-il ?",
          a: "La page services présente la sécurité offensive, la sécurité cloud, la sécurité défensive, la surveillance des menaces externes, la formation, les audits de conformité et de régulation, la gestion des identités et des accès, la simulation de phishing et le SIEM avec journaux d'audit.",
        },
        {
          q: "Quels clouds Red Patronus indique-t-il sécuriser ?",
          a: "La page services indique que les évaluations de sécurité cloud couvrent Amazon Web Services, Microsoft Azure et Google Cloud Platform.",
        },
        {
          q: "Red Patronus peut-il adapter une mission ?",
          a: "Oui. La page services indique que l'équipe peut adapter les services aux exigences de sécurité et de conformité, et elle renvoie vers le formulaire de contact.",
        },
      ],
    },
    related: [
      "/services/offensive",
      "/services/penetration-testing",
      "/services/red-team",
      "/services/cloud-security",
      "/services/defensive",
      "/services/compliance",
      "/services/security-consulting",
      "/contact",
    ],
  },
  service({
    path: "/services/penetration-testing",
    navLabel: "Penetration Testing",
    serviceName: "Penetration testing",
    title: "Penetration Testing Services | Red Patronus",
    description:
      "Web, network, mobile, and API penetration testing by Red Patronus, from reconnaissance to reporting. Fixed-price test: €3,000 excl. VAT.",
    keywords: "penetration testing, OWASP, PTES, web application pentest, API security testing, Red Patronus",
    summary:
      "Red Patronus penetration testing covers web applications, internal and external networks, iOS and Android apps, and REST, GraphQL, and SOAP APIs. The published method runs from reconnaissance and enumeration through controlled exploitation, post-exploitation, and reporting. A fixed-price professional test of a web app or external infrastructure is €3,000 excluding VAT.",
    tables: [
      {
        caption: "Penetration testing method published by Red Patronus",
        headers: ["Phase", "What the page says happens"],
        rows: [
          { cells: ["1. Reconnaissance", "Information gathering and attack surface mapping"] },
          { cells: ["2. Enumeration", "Service and vulnerability identification"] },
          { cells: ["3. Exploitation", "Controlled exploitation to validate vulnerabilities"] },
          { cells: ["4. Post-exploitation", "Assessment of lateral movement and impact"] },
          { cells: ["5. Reporting", "Findings with prioritized remediation guidance"] },
        ],
      },
      {
        caption: "Professional penetration test offer published on the homepage",
        headers: ["Term", "Published detail"],
        rows: [
          { cells: ["Price", "€3,000 excluding VAT, fixed price"] },
          { cells: ["Scope", "Web application or external infrastructure"] },
          { cells: ["Method named", "OWASP Top 10 and PTES"] },
          { cells: ["Delivered documents", "Executive summary and technical report with proof of concept"] },
          { cells: ["Remediation", "Risk-prioritized guidance"] },
          { cells: ["Zero-findings guarantee", "If no vulnerability is found, next year's pentest is free of charge"] },
          {
            cells: ["Other test prices", "Not published on this site"],
            todo: "other-prices",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What does a Red Patronus penetration test cover?",
        a: "The penetration testing page lists web application testing, including OWASP Top 10, business logic, and authentication; internal and external network testing; iOS and Android application testing; and REST, GraphQL, and SOAP API testing.",
      },
      {
        q: "What penetration testing method does Red Patronus publish?",
        a: "Five phases: reconnaissance, enumeration, exploitation, post-exploitation, and reporting. The homepage offer also says the fixed-price test is aligned with OWASP Top 10 and PTES.",
      },
      {
        q: "What do you receive after a Red Patronus penetration test?",
        a: "The page lists an executive summary, technical findings with proof of concept, a risk-prioritized vulnerability list, remediation guidance, a retest to verify fixes, and an attestation letter for compliance.",
      },
      {
        q: "How much is the published Red Patronus pentest?",
        a: "€3,000 excluding VAT for a web application or external infrastructure. If no vulnerability is found, the next year's pentest is free of charge. Prices for other scopes are not published.",
      },
    ],
    related: ["/services/offensive", "/services/red-team", "/services/phishing", "/contact"],
  }),
  service({
    path: "/services/red-team",
    navLabel: "Red Team",
    serviceName: "Red team operations",
    title: "Red Team Operations | Red Patronus",
    description:
      "Red team adversary simulation by Red Patronus: physical tests, detection and response testing, and purple team exercises.",
    keywords: "red team, adversary simulation, purple team, TLPT, physical security testing, Red Patronus",
    summary:
      "Red Patronus red team operations are adversary simulations that mirror sophisticated threat actors. The page describes full attack campaigns, physical security testing, detection and response testing, and purple team exercises run with the client's blue team. Named scenarios include phishing, assumed breach, lateral movement, data exfiltration, ransomware, and supply chain paths.",
    tables: [
      {
        caption: "Red team scenarios named by Red Patronus",
        headers: ["Scenario", "How the page groups it"],
        rows: [
          { cells: ["Phishing and social engineering", "Initial access"] },
          { cells: ["Assumed breach", "Starting from an existing foothold"] },
          { cells: ["Lateral movement and privilege escalation", "Movement inside the environment"] },
          { cells: ["Data exfiltration simulation", "Impact demonstration"] },
          { cells: ["Ransomware attack simulation", "Impact demonstration"] },
          { cells: ["Supply chain attack vectors", "Entry through suppliers or dependencies"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What is a Red Patronus red team engagement?",
        a: "The red team page describes realistic adversary simulations that test security controls and the defending team. It includes full adversary simulation, physical security testing, detection and response testing, and purple team exercises.",
      },
      {
        q: "Which attack scenarios does the red team page name?",
        a: "Initial access via phishing and social engineering, assumed breach, lateral movement and privilege escalation, data exfiltration, ransomware simulation, and supply chain attack vectors.",
      },
      {
        q: "How does the site distinguish a red team test from a penetration test?",
        a: "The penetration testing page focuses on finding and validating vulnerabilities in applications, networks, and APIs, then reporting fixes. The red team page focuses on campaign-style adversary simulation, including whether the defending team detects and responds, plus physical and purple team work.",
      },
    ],
    related: ["/services/penetration-testing", "/services/offensive", "/services/phishing", "/contact"],
  }),
  service({
    path: "/services/security-consulting",
    navLabel: "Security Consulting",
    serviceName: "Security consulting",
    title: "Security Consulting Services | Red Patronus",
    description:
      "Security consulting from Red Patronus: compliance gap assessments, security architecture review, policy development, and risk assessments against named frameworks.",
    keywords: "security consulting, ISO 27001 gap assessment, SOC 2, NIST, security architecture review, Red Patronus",
    summary:
      "Red Patronus security consulting covers compliance gap and readiness assessments, security architecture review, policy and standards writing, and risk assessments. The page names SOC 2 Type I and II, ISO 27001, PCI-DSS, HIPAA, GDPR, the NIST Cybersecurity Framework, CIS Controls, and CMMC as frameworks in scope. It does not publish a consulting price.",
    tables: [
      {
        caption: "Frameworks named on the Red Patronus security consulting page",
        headers: ["Framework", "How the page uses it"],
        rows: [
          { cells: ["SOC 2 Type I and II", "Compliance assessment and readiness"] },
          { cells: ["ISO 27001", "Compliance assessment and readiness"] },
          { cells: ["PCI-DSS", "Compliance assessment and readiness"] },
          { cells: ["HIPAA", "Compliance assessment and readiness"] },
          { cells: ["GDPR", "Compliance assessment and readiness"] },
          { cells: ["NIST Cybersecurity Framework", "Compliance assessment and readiness"] },
          { cells: ["CIS Controls", "Compliance assessment and readiness"] },
          { cells: ["CMMC", "Compliance assessment and readiness"] },
          {
            cells: ["Consulting price", "Not published on this site"],
            todo: "other-prices",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What security consulting does Red Patronus describe?",
        a: "Compliance assessments, security architecture reviews, policy and standards development, and risk assessments that identify, analyse, and prioritise security risks.",
      },
      {
        q: "Which frameworks does the consulting page name?",
        a: "SOC 2 Type I and II, ISO 27001, PCI-DSS, HIPAA, GDPR, the NIST Cybersecurity Framework, CIS Controls, and CMMC. The page presents them as assessment scope, not as a list of certificates held.",
      },
      {
        q: "Is a security consulting price published?",
        a: "No. The only published price on the site is the €3,000 excluding VAT professional penetration test. Consulting fees are not listed.",
      },
    ],
    related: ["/services/compliance", "/services/penetration-testing", "/services/cloud-security", "/contact"],
  }),
  service({
    path: "/services/cloud-security",
    navLabel: "Cloud Security",
    serviceName: "Cloud security",
    title: "Cloud Security for AWS, Azure and GCP | Red Patronus",
    description:
      "Cloud security assessments by Red Patronus for AWS, Azure, and Google Cloud: configuration review, IAM, containers, Kubernetes, and DevSecOps integration.",
    keywords: "AWS security, Azure security, GCP security, Kubernetes security, cloud configuration review, Red Patronus",
    summary:
      "Red Patronus cloud security work covers configuration audits, IAM policy review, container and Kubernetes assessment, and DevSecOps integration. The page names Amazon Web Services, Microsoft Azure, and Google Cloud, with example services such as EC2, S3, Lambda, EKS, Azure VMs, AKS, GKE, and Cloud Run. No cloud assessment price is published.",
    tables: [
      {
        caption: "Cloud platforms and example services named by Red Patronus",
        headers: ["Platform", "Example services listed"],
        rows: [
          { cells: ["Amazon Web Services", "EC2, S3, Lambda, EKS, RDS, IAM"] },
          { cells: ["Microsoft Azure", "VMs, Blob Storage, AKS, Functions, AD"] },
          { cells: ["Google Cloud", "Compute, GKE, Cloud Run, BigQuery, IAM"] },
        ],
      },
    ],
    faqs: [
      {
        q: "Which clouds does Red Patronus assess?",
        a: "The cloud security page names Amazon Web Services, Microsoft Azure, and Google Cloud Platform.",
      },
      {
        q: "What does a Red Patronus cloud security assessment include?",
        a: "Cloud configuration audits against CIS benchmarks and security practices, IAM policy assessment for least privilege, container security for Docker and Kubernetes, and DevSecOps integration into CI/CD pipelines.",
      },
      {
        q: "Does Red Patronus publish a cloud security price?",
        a: "No. The cloud security page does not list a fee. The only published price on the site is the €3,000 excluding VAT penetration test.",
      },
    ],
    related: ["/services/iam", "/services/defensive", "/services/compliance", "/contact"],
  }),
  service({
    path: "/services/offensive",
    navLabel: "Offensive Security",
    serviceName: "Offensive security",
    title: "Offensive Security Services | Red Patronus",
    description:
      "Offensive security from Red Patronus: red team engagements, AI-assisted penetration testing, web and infrastructure tests, and social engineering.",
    keywords: "offensive security, penetration testing, red team, social engineering, AI penetration testing, Red Patronus",
    summary:
      "Red Patronus offensive security simulates real-world attacks to find vulnerabilities and test defences. The page includes red team engagements, AI-powered penetration testing, OWASP web tests, infrastructure tests, post-exploitation, black-box to white-box scoping, and social engineering with phishing and vishing. Detailed pentest and red team pages sit alongside this overview.",
    tables: [
      {
        caption: "Offensive security work listed by Red Patronus",
        headers: ["Work", "What the page says"],
        rows: [
          { cells: ["Red team engagements", "Assessments that simulate advanced attacks on infrastructure, applications, and networks"] },
          { cells: ["AI-powered penetration testing", "Use of AI to automate and extend penetration testing"] },
          { cells: ["Web penetration tests", "Testing by OWASP methodology"] },
          { cells: ["Infrastructure penetration tests", "Network and infrastructure assessments"] },
          { cells: ["Post-exploitation", "Exercises that show how an attacker might pivot"] },
          { cells: ["Engagement levels", "From black-box to white-box, based on requirements"] },
          { cells: ["Social engineering", "Phishing, vishing, and physical security assessments"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What is included in Red Patronus offensive security?",
        a: "Red team engagements, AI-powered penetration testing, OWASP web tests, infrastructure tests, attack simulation and post-exploitation, tailored black-box to white-box levels, and social engineering including phishing, vishing, and physical tests.",
      },
      {
        q: "Does Red Patronus use AI in penetration testing?",
        a: "Yes. The offensive security page says the team uses artificial intelligence to automate and enhance penetration testing so vulnerabilities can be found faster than with traditional methods alone.",
      },
      {
        q: "Where are the detailed pentest and red team descriptions?",
        a: "Web, network, mobile, and API testing is on the penetration testing page. Adversary simulation, physical tests, and purple team work are on the red team page. Both are linked from this site.",
      },
    ],
    related: ["/services/penetration-testing", "/services/red-team", "/services/phishing", "/services"],
  }),
  service({
    path: "/services/defensive",
    navLabel: "Defensive Security",
    serviceName: "Defensive security",
    title: "Defensive Security Services | Red Patronus",
    description:
      "Defensive security from Red Patronus: 24/7 SOC monitoring, AI-assisted testing, DevSecOps, business continuity planning, and incident response.",
    keywords: "SOC, defensive security, incident response, DevSecOps, business continuity, Red Patronus",
    summary:
      "Red Patronus defensive security includes a security operations centre with 24/7 monitoring, AI-assisted infrastructure and application testing, DevSecOps in the development lifecycle, business continuity planning, threat detection and response, asset and risk management, and identity access management. The page does not publish a retainer price.",
    tables: [
      {
        caption: "Defensive security services listed by Red Patronus",
        headers: ["Service", "What the page says"],
        rows: [
          { cells: ["Security operations centre", "24/7 monitoring, continuous internal scanning, and automatic web scanning"] },
          { cells: ["AI-assisted testing", "Continuous testing that simulates attacks and looks for weaknesses"] },
          { cells: ["DevSecOps", "Security integrated into the development lifecycle"] },
          { cells: ["Business continuity planning", "Planning so operations can continue during and after incidents"] },
          { cells: ["Threat detection and response", "Detection with incident response aimed at limiting damage"] },
          { cells: ["Asset and risk management", "Visibility and tracking of digital assets"] },
          { cells: ["Identity access management", "Access control and authentication; see the IAM page for Okta and Terraform"] },
        ],
      },
    ],
    faqs: [
      {
        q: "Does Red Patronus offer 24/7 security monitoring?",
        a: "Yes. The defensive security page says the security operations centre provides 24/7 monitoring of systems and networks, with continuous internal scanning and automatic web scanning. The homepage also lists 24/7 incident response for enterprise.",
      },
      {
        q: "What else is on the defensive security page?",
        a: "AI-powered infrastructure and application security, DevSecOps integration, business continuity planning, threat detection and response, asset and risk management, and identity access management.",
      },
      {
        q: "Is a defensive security price published?",
        a: "No. The defensive security page does not list a fee. The only published price on the site is the €3,000 excluding VAT penetration test.",
      },
    ],
    related: ["/services/siem", "/services/etsm", "/services/iam", "/services/compliance"],
  }),
  service({
    path: "/services/etsm",
    navLabel: "External Threat Monitoring",
    serviceName: "External threat and security monitoring",
    title: "External Threat Monitoring | Red Patronus",
    description:
      "External threat and security monitoring by Red Patronus using OSINT, including Censys, Shodan, ProjectDiscovery, and SSL Labs, on publicly available data.",
    keywords: "OSINT, external threat monitoring, Shodan, Censys, attack surface monitoring, Red Patronus",
    summary:
      "Red Patronus external threat and security monitoring uses OSINT to watch publicly available data for exposure and emerging threats. The page names analysis of social media, forums, and public databases, plus tools including Censys, Shodan, ProjectDiscovery, SSL Labs, and the firm's own fuzzing tools. It delivers situational awareness about what an attacker could already see.",
    tables: [
      {
        caption: "External monitoring sources named by Red Patronus",
        headers: ["Source or tool", "Role described on the page"],
        rows: [
          { cells: ["Social media, forums, public databases", "Public information gathered and reviewed for sensitive exposure"] },
          { cells: ["Censys", "OSINT tool named for threat intelligence"] },
          { cells: ["Shodan", "OSINT tool named for threat intelligence"] },
          { cells: ["ProjectDiscovery", "OSINT tool named for threat intelligence"] },
          { cells: ["SSL Labs", "Named as SSLabs on the page, for threat intelligence"] },
          { cells: ["In-house fuzzing tools", "The page says these are the firm's own tools"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What is Red Patronus external threat monitoring?",
        a: "It is OSINT-based monitoring of publicly available data. The page says it looks for exposed information, watches public services for emerging threats, and points out where to improve security.",
      },
      {
        q: "Which tools does the monitoring page name?",
        a: "Censys, Shodan, ProjectDiscovery, SSL Labs (written SSLabs on the page), and the firm's own fuzzing tools.",
      },
      {
        q: "Does external monitoring look at private systems?",
        a: "The page describes publicly available data: social media, forums, public databases, and public services. It does not describe logging into the client's private network for this service.",
      },
    ],
    related: ["/services/defensive", "/services/siem", "/services/cloud-security", "/contact"],
  }),
  service({
    path: "/services/training",
    navLabel: "Security Training",
    serviceName: "Cybersecurity training",
    title: "Cybersecurity Training | Red Patronus",
    description:
      "Employee cybersecurity training from Red Patronus: compliance, threat awareness, phishing recognition, incident response, and tailored programmes.",
    keywords: "security awareness training, phishing training, compliance training, incident response training, Red Patronus",
    summary:
      "Red Patronus cybersecurity training is for employees who need to detect, report, and respond to threats. The page covers compliance and risk reduction, threat awareness, practical habits such as password and device security, protection of company assets, modules updated to current threats, and programmes tailored to the organisation. A training price is not published.",
    tables: [
      {
        caption: "Training topics listed by Red Patronus",
        headers: ["Topic", "What the page says"],
        rows: [
          { cells: ["Compliance and risk reduction", "Regulations and practices aimed at avoiding legal and financial consequences"] },
          { cells: ["Threat awareness", "Current tactics used by attackers"] },
          { cells: ["Security practices", "Password management and secure device use"] },
          { cells: ["Company assets", "Recognising attacks against sensitive data and intellectual property"] },
          { cells: ["Updates", "Modules updated to current threats"] },
          { cells: ["Custom programmes", "Designed around the organisation and its industry"] },
        ],
      },
    ],
    faqs: [
      {
        q: "Who is Red Patronus security training for?",
        a: "Employees. The services overview says training equips people to detect, report, and respond to cyber threats, support compliance, and protect company assets.",
      },
      {
        q: "What topics does the training page cover?",
        a: "Compliance, threat awareness, practical security habits, safeguarding company assets, regularly updated modules, and customised programmes. The services page also names phishing recognition and incident response training.",
      },
      {
        q: "Is a training price published?",
        a: "No. The training page does not list a fee. The only published price on the site is the €3,000 excluding VAT penetration test.",
      },
    ],
    related: ["/services/phishing", "/services/compliance", "/services/defensive", "/contact"],
  }),
  service({
    path: "/services/compliance",
    navLabel: "DORA Compliance",
    serviceName: "DORA compliance and regulation audits",
    title: "DORA Compliance Consulting | Red Patronus",
    description:
      "DORA compliance support from Red Patronus: ICT risk alignment, gap analysis, audit support, and business continuity plans tested at least annually.",
    keywords: "DORA compliance, NIS2, gap analysis, ICT risk management, business continuity, Red Patronus",
    summary:
      "Red Patronus compliance work is framed around the EU Digital Operational Resilience Act for financial services ICT risk. The page also names CIS, NIST, and EU regulations, plus gap analysis, audit support, and business continuity and disaster recovery plans that are designed, implemented, and tested at least once a year. A compliance fee is not published.",
    tables: [
      {
        caption: "Compliance work described by Red Patronus",
        headers: ["Work", "What the page says"],
        rows: [
          { cells: ["DORA", "Alignment with Digital Operational Resilience Act requirements for ICT risk in financial services"] },
          { cells: ["Benchmarks named", "CIS, NIST 2, and DORA, aligned with EU regulations"] },
          { cells: ["Gap analysis", "Where the current posture falls short of DORA and other requirements"] },
          { cells: ["Audit support", "Documentation to help pass DORA compliance assessments"] },
          { cells: ["Business continuity", "Design, implementation, and annual testing of ICT business continuity and disaster recovery plans"] },
          {
            cells: ["Compliance price", "Not published on this site"],
            todo: "other-prices",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What DORA support does Red Patronus describe?",
        a: "Alignment with the Digital Operational Resilience Act for financial services ICT risk management, gap analysis, audit support and documentation, and proactive identification of ICT risks.",
      },
      {
        q: "How often does the compliance page say continuity plans are tested?",
        a: "At least once a year. The page says Red Patronus helps design, implement, and annually test ICT business continuity and disaster recovery plans, citing DORA's requirement to validate plans at least yearly.",
      },
      {
        q: "Which other benchmarks does the compliance page name?",
        a: "CIS, NIST 2, and EU regulations, alongside DORA. The security consulting page separately names SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, and CMMC.",
      },
    ],
    related: ["/services/security-consulting", "/services/defensive", "/services/training", "/contact"],
  }),
  service({
    path: "/services/iam",
    navLabel: "Identity and Access",
    serviceName: "Identity and access management",
    title: "Identity and Access Management | Red Patronus",
    description:
      "Identity and access management from Red Patronus using Okta single sign-on, Active Directory, Terraform, and CI/CD for auditable access control.",
    keywords: "Okta SSO, identity and access management, Terraform IAM, Active Directory, MFA, Red Patronus",
    summary:
      "Red Patronus offers identity and access management as a service centred on Okta single sign-on. The page says Active Directory or another identity provider can be connected, configurations are managed with Terraform, and changes run through CI/CD. It also covers access control and reducing password fatigue. An IAM price is not published.",
    tables: [
      {
        caption: "Identity and access management stack named by Red Patronus",
        headers: ["Component", "What the page says"],
        rows: [
          { cells: ["Okta", "Central single sign-on so one set of credentials reaches multiple applications"] },
          { cells: ["Active Directory or another IdP", "Can be the identity provider"] },
          { cells: ["Terraform", "Infrastructure as code for repeatable, auditable IAM configuration"] },
          { cells: ["CI/CD", "Integration with existing pipelines"] },
          { cells: ["Access control", "Authentication and authorization across the organisation"] },
          { cells: ["User experience", "Less password fatigue and centralised policies"] },
        ],
      },
    ],
    faqs: [
      {
        q: "Which identity platform does Red Patronus name?",
        a: "Okta, used as the central single sign-on platform. The services page also lists multi-factor authentication among IAM capabilities.",
      },
      {
        q: "How does Red Patronus say IAM is managed?",
        a: "With Terraform for infrastructure as code, and through the client's CI/CD pipelines so configuration stays repeatable and auditable.",
      },
      {
        q: "Can the IAM service use Active Directory?",
        a: "Yes. The page says Active Directory can be an identity provider, or another preferred identity provider can be used.",
      },
    ],
    related: ["/services/cloud-security", "/services/defensive", "/services/compliance", "/contact"],
  }),
  service({
    path: "/services/phishing",
    navLabel: "Phishing Simulation",
    serviceName: "Phishing simulation",
    title: "Phishing Simulation Services | Red Patronus",
    description:
      "Phishing simulations from Red Patronus to test whether employees recognise deceptive messages, with reports on click rates and reporting rates.",
    keywords: "phishing simulation, security awareness, social engineering test, click rate reporting, Red Patronus",
    summary:
      "Red Patronus phishing simulations send realistic messages so employees can practise spotting deception. The page says the work reinforces secure behaviour, reduces breach risk, supports a security-first culture and compliance, and produces reports of click rates, reporting rates, and areas to improve. A simulation price is not published.",
    tables: [
      {
        caption: "Phishing simulation outcomes described by Red Patronus",
        headers: ["Outcome", "What the page says"],
        rows: [
          { cells: ["Threat awareness", "Employees practise distinguishing legitimate messages from deceptive ones"] },
          { cells: ["Best practices", "Simulated attacks show which behaviours help"] },
          { cells: ["Risk reduction", "Testing and feedback before a real attack"] },
          { cells: ["Culture", "Ongoing realistic scenarios"] },
          { cells: ["Compliance support", "Assessments tied to standards and regulatory requirements"] },
          { cells: ["Reporting", "Click rates, reporting rates, and areas for improvement"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What is a Red Patronus phishing simulation?",
        a: "A realistic simulated phishing exercise that tests whether employees recognise deceptive tactics and practise safer responses. The offensive security page also names vishing and physical social engineering as related tests.",
      },
      {
        q: "What do phishing simulation reports include?",
        a: "The page says reports show click rates, reporting rates, and areas for improvement. It does not publish sample rates from past programmes.",
      },
      {
        q: "Why does the page say organisations run phishing tests?",
        a: "To raise awareness, reinforce secure behaviour, reduce the chance of a successful breach, support compliance, and build a security-first culture.",
      },
    ],
    related: ["/services/training", "/services/offensive", "/services/red-team", "/contact"],
  }),
  service({
    path: "/services/siem",
    navLabel: "SIEM and Audit Logging",
    serviceName: "SIEM and audit logging",
    title: "SIEM and Audit Logging | Red Patronus",
    description:
      "SIEM and audit logging from Red Patronus: real-time security event monitoring, log analysis, authentication monitoring, and incident response support.",
    keywords: "SIEM, audit logging, security monitoring, authentication monitoring, incident response, Red Patronus",
    summary:
      "Red Patronus SIEM and audit logging covers real-time detection, log analysis, incident response, authentication and login monitoring, audit trails of system changes, and correlation of security events. The services page describes it as monitoring that supports rapid detection and response. A SIEM price is not published.",
    tables: [
      {
        caption: "SIEM and audit logging capabilities listed by Red Patronus",
        headers: ["Capability", "What the page says"],
        rows: [
          { cells: ["Threat identification", "Detect issues as they arise with real-time monitoring and alerting"] },
          { cells: ["Log analysis", "Analysis of security events and system logs"] },
          { cells: ["Incident response", "Faster response, including automated remediation as described on the page"] },
          { cells: ["Authentication monitoring", "Login attempts and authentication events"] },
          { cells: ["Audit log management", "Tracking of system changes and user activity for compliance"] },
          { cells: ["Event correlation", "Correlation of events to find patterns"] },
        ],
      },
    ],
    faqs: [
      {
        q: "What does Red Patronus SIEM and audit logging include?",
        a: "Real-time monitoring and alerting, log analysis, incident response, authentication monitoring, audit log management, and security event correlation.",
      },
      {
        q: "Does the SIEM page mention authentication monitoring?",
        a: "Yes. It says the service watches login attempts and authentication events across systems.",
      },
      {
        q: "How does this relate to the defensive security page?",
        a: "The defensive security page describes the broader SOC, 24/7 monitoring, and incident response. This page focuses on SIEM, logs, authentication events, and correlation.",
      },
    ],
    related: ["/services/defensive", "/services/etsm", "/services/iam", "/contact"],
  }),
  {
    ...base,
    path: "/about",
    priority: 0.7,
    pageType: "AboutPage",
    navLabel: about,
    breadcrumbs: [
      { name: home, path: "/" },
      { name: about, path: "/about" },
    ],
    title: L(
      "About Red Patronus | Bratislava Cybersecurity",
      "O spoločnosti Red Patronus | Kybernetická bezpečnosť",
      "Über Red Patronus | Cybersicherheit in Bratislava",
      "À propos de Red Patronus | Cybersécurité à Bratislava",
    ),
    description: L(
      "About Red Patronus, a Bratislava cybersecurity firm. The site states 15+ years of excellence, 20+ enterprise clients, and 10+ security experts.",
      "O spoločnosti Red Patronus z Bratislavy. Web uvádza 15+ rokov excelentnosti, 20+ podnikových klientov a 10+ bezpečnostných expertov.",
      "Über Red Patronus, ein Cybersicherheitsunternehmen in Bratislava. Die Website nennt 15+ Jahre Exzellenz, 20+ Unternehmenskunden und 10+ Sicherheitsexperten.",
      "À propos de Red Patronus, société de cybersécurité à Bratislava. Le site indique 15+ années d'excellence, 20+ clients entreprises et 10+ experts en sécurité.",
    ),
    keywords: L("about Red Patronus, Bratislava cybersecurity company, security team, DORA"),
    summary: L(
      "Red Patronus describes itself as a cybersecurity partner for enterprises that want offensive security and compliance support. The about page says the firm was founded by security veterans and that its mission is to find and help fix vulnerabilities before they are exploited. Homepage figures are 15+ years, 20+ enterprise clients, and 10+ experts. No founder is named.",
      "Red Patronus sa opisuje ako partner kybernetickej bezpečnosti pre podniky, ktoré chcú ofenzívnu bezpečnosť a podporu súladu. Stránka O nás hovorí, že firmu založili bezpečnostní veteráni a jej poslaním je nájsť a pomôcť opraviť zraniteľnosti skôr, ako ich niekto zneužije. Domovská stránka uvádza 15+ rokov, 20+ podnikových klientov a 10+ expertov. Zakladateľ nie je menovaný.",
      "Red Patronus beschreibt sich als Cybersicherheitspartner für Unternehmen, die offensive Sicherheit und Compliance-Unterstützung wollen. Die Über-uns-Seite sagt, die Firma sei von Sicherheitsveteranen gegründet worden und ihre Aufgabe sei, Schwachstellen zu finden und bei der Behebung zu helfen, bevor sie ausgenutzt werden. Die Startseite nennt 15+ Jahre, 20+ Unternehmenskunden und 10+ Experten. Kein Gründer ist namentlich genannt.",
      "Red Patronus se décrit comme un partenaire de cybersécurité pour les entreprises qui veulent de la sécurité offensive et un appui à la conformité. La page À propos indique que la société a été fondée par des vétérans de la sécurité et que sa mission est de trouver et d'aider à corriger les vulnérabilités avant qu'elles soient exploitées. La page d'accueil indique 15+ années, 20+ clients entreprises et 10+ experts. Aucun fondateur n'est nommé.",
    ),
    tables: [
      {
        caption: L(
          "Company facts published across the Red Patronus site",
          "Firemné údaje uverejnené na webe Red Patronus",
          "Unternehmensangaben auf der Website von Red Patronus",
          "Faits publiés sur le site Red Patronus",
        ),
        headers: [
          L("Fact", "Fakt", "Angabe", "Fait"),
          L("Published value", "Uverejnená hodnota", "Veröffentlichter Wert", "Valeur publiée"),
        ],
        rows: [
          { cells: [L("Years of excellence", "Roky excelentnosti", "Jahre Exzellenz", "Années d'excellence"), "15+"] },
          { cells: [L("Enterprise clients", "Podnikoví klienti", "Unternehmenskunden", "Clients entreprises"), "20+"] },
          { cells: [L("Security experts", "Bezpečnostní experti", "Sicherheitsexperten", "Experts en sécurité"), "10+"] },
          {
            cells: [
              L("On the market since", "Na trhu od roku", "Am Markt seit", "Sur le marché depuis"),
              L("2005 on the Slovak careers page", "2005 na slovenskej kariérnej stránke", "2005 auf der slowakischen Karriereseite", "2005 sur la page carrières en slovaque"),
            ],
            todo: "founding-date",
          },
          {
            cells: [
              L("Founder names", "Mená zakladateľov", "Namen der Gründer", "Noms des fondateurs"),
              L("Not published on this site", "Na tomto webe neuverejnené", "Auf dieser Website nicht veröffentlicht", "Non publié sur ce site"),
            ],
            todo: "founders",
          },
          {
            cells: [
              L("Languages of the website", "Jazyky webu", "Sprachen der Website", "Langues du site"),
              L("English, Slovak, German, French", "Angličtina, slovenčina, nemčina, francúzština", "Englisch, Slowakisch, Deutsch, Französisch", "Anglais, slovaque, allemand, français"),
            ],
          },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "Who is Red Patronus?",
          a: "The about page calls Red Patronus a partner for enterprise organisations that want offensive security services. It says the firm was founded by security veterans with decades of combined experience. The homepage places the company in the context of DORA-aligned enterprise cybersecurity in Europe, with an office address in Bratislava.",
        },
        {
          q: "What mission does Red Patronus publish?",
          a: "To help organisations find and fix security vulnerabilities before they are exploited, combining technical expertise with an adversary mindset. The page says the team explains findings and helps remediate them, and that client data and findings are kept confidential.",
        },
        {
          q: "How large does the site say Red Patronus is?",
          a: "The homepage publishes 15+ years of excellence, 20+ enterprise clients, and 10+ security experts. The about page says consultants have backgrounds in enterprise security, government agencies, and technology companies. It does not name individuals.",
        },
      ],
      sk: [
        {
          q: "Kto je Red Patronus?",
          a: "Stránka O nás opisuje Red Patronus ako partnera pre podniky, ktoré chcú ofenzívne bezpečnostné služby. Hovorí, že firmu založili bezpečnostní veteráni s desaťročiami spoločných skúseností. Domovská stránka firmu zasadzuje do podnikovej kybernetickej bezpečnosti v súlade s DORA, s adresou v Bratislave.",
        },
        {
          q: "Aké poslanie Red Patronus uverejňuje?",
          a: "Pomáhať organizáciám nájsť a opraviť bezpečnostné zraniteľnosti skôr, ako ich niekto zneužije, spojením technickej odbornosti a uvažovania útočníka. Stránka hovorí, že tím nálezy vysvetlí a pomôže s nápravou a že údaje klientov a nálezy zostávajú dôverné.",
        },
        {
          q: "Akú veľkosť web o Red Patronus uvádza?",
          a: "Domovská stránka uverejňuje 15+ rokov excelentnosti, 20+ podnikových klientov a 10+ bezpečnostných expertov. Stránka O nás hovorí, že konzultanti majú zázemie v podnikovej bezpečnosti, štátnych agentúrach a technologických firmách. Mená neuvádza.",
        },
      ],
      de: [
        {
          q: "Wer ist Red Patronus?",
          a: "Die Über-uns-Seite beschreibt Red Patronus als Partner für Unternehmen, die offensive Sicherheitsleistungen wollen. Sie sagt, die Firma sei von Sicherheitsveteranen mit jahrzehntelanger gemeinsamer Erfahrung gegründet worden. Die Startseite stellt das Unternehmen in den Kontext DORA-orientierter Unternehmenssicherheit, mit einer Adresse in Bratislava.",
        },
        {
          q: "Welche Mission veröffentlicht Red Patronus?",
          a: "Organisationen dabei zu helfen, Schwachstellen zu finden und zu beheben, bevor sie ausgenutzt werden, mit technischer Expertise und der Sicht eines Angreifers. Die Seite sagt, das Team erkläre Befunde und helfe bei der Behebung, und Kundeninformationen sowie Befunde blieben vertraulich.",
        },
        {
          q: "Wie groß nennt die Website Red Patronus?",
          a: "Die Startseite nennt 15+ Jahre Exzellenz, 20+ Unternehmenskunden und 10+ Sicherheitsexperten. Die Über-uns-Seite sagt, Berater kämen aus Unternehmenssicherheit, Behörden und Technologieunternehmen. Namen nennt sie nicht.",
        },
      ],
      fr: [
        {
          q: "Qui est Red Patronus ?",
          a: "La page À propos décrit Red Patronus comme un partenaire des entreprises qui veulent des services de sécurité offensive. Elle indique que la société a été fondée par des vétérans de la sécurité cumulant des décennies d'expérience. La page d'accueil situe l'entreprise dans la cybersécurité d'entreprise alignée sur DORA, avec une adresse à Bratislava.",
        },
        {
          q: "Quelle mission Red Patronus publie-t-il ?",
          a: "Aider les organisations à trouver et corriger les vulnérabilités avant qu'elles soient exploitées, en combinant expertise technique et état d'esprit d'attaquant. La page indique que l'équipe explique les constats et aide à les corriger, et que les données et constats clients restent confidentiels.",
        },
        {
          q: "Quelle taille le site attribue-t-il à Red Patronus ?",
          a: "La page d'accueil indique 15+ années d'excellence, 20+ clients entreprises et 10+ experts en sécurité. La page À propos indique que les consultants viennent de la sécurité d'entreprise, d'agences publiques et d'entreprises technologiques. Elle ne nomme personne.",
        },
      ],
    },
    related: ["/services", "/case-studies", "/hiring", "/contact"],
  },
  {
    ...base,
    path: "/case-studies",
    priority: 0.6,
    pageType: "CollectionPage",
    navLabel: caseStudies,
    breadcrumbs: [
      { name: home, path: "/" },
      { name: caseStudies, path: "/case-studies" },
    ],
    title: L(
      "Cybersecurity Case Studies | Red Patronus",
      "Prípadové štúdie kybernetickej bezpečnosti | Red Patronus",
      "Cybersicherheits-Fallstudien | Red Patronus",
      "Études de cas cybersécurité | Red Patronus",
    ),
    description: L(
      "Three Red Patronus case studies: an insurance cloud move, a healthcare HIPAA programme, and a SaaS security hardening. Client names are not printed in the titles.",
      "Tri prípadové štúdie Red Patronus: presun poisťovne do cloudu, program HIPAA v zdravotníctve a spevnenie bezpečnosti SaaS. Názvy štúdií neuvádzajú meno klienta.",
      "Drei Fallstudien von Red Patronus: Cloud-Umzug einer Versicherung, ein HIPAA-Programm im Gesundheitswesen und Härtung einer SaaS-Plattform. Kundennamen stehen nicht in den Titeln.",
      "Trois études de cas Red Patronus : migration cloud d'un assureur, programme HIPAA dans la santé et durcissement d'une plateforme SaaS. Les titres ne donnent pas le nom du client.",
    ),
    keywords: L("cybersecurity case studies, DORA, HIPAA, SOC 2, penetration testing results, Red Patronus"),
    summary: L(
      "Red Patronus publishes three case studies: a financial-services cloud transformation, a healthcare HIPAA programme, and a SaaS platform preparing for an IPO. Each study lists a challenge, the work done, and results. The titles describe the client by industry and do not print a company name. Figures below are copied from that page.",
      "Red Patronus uverejňuje tri prípadové štúdie: transformáciu poisťovne do cloudu, program HIPAA v zdravotníctve a SaaS platformu pred IPO. Každá štúdia uvádza výzvu, vykonanú prácu a výsledky. Názvy opisujú klienta odvetvím a neuvádzajú názov firmy. Údaje nižšie sú prevzaté z tejto stránky.",
      "Red Patronus veröffentlicht drei Fallstudien: eine Cloud-Transformation im Versicherungswesen, ein HIPAA-Programm im Gesundheitswesen und eine SaaS-Plattform vor einem Börsengang. Jede Studie nennt Herausforderung, Leistung und Ergebnisse. Die Titel beschreiben den Kunden über die Branche und nennen keinen Firmennamen. Die Zahlen unten stammen von dieser Seite.",
      "Red Patronus publie trois études de cas : une transformation cloud dans l'assurance, un programme HIPAA dans la santé et une plateforme SaaS préparant une introduction en bourse. Chaque étude indique un défi, le travail réalisé et des résultats. Les titres décrivent le client par secteur et ne donnent pas de raison sociale. Les chiffres ci-dessous sont repris de cette page.",
    ),
    tables: [
      {
        caption: L(
          "Results already printed on the Red Patronus case studies page",
          "Výsledky už vytlačené na stránke prípadových štúdií Red Patronus",
          "Ergebnisse, die bereits auf der Fallstudien-Seite von Red Patronus stehen",
          "Résultats déjà imprimés sur la page études de cas de Red Patronus",
        ),
        todo: "case-studies",
        headers: [
          L("Study", "Štúdia", "Studie", "Étude"),
          L("Work described", "Opísaná práca", "Beschriebene Arbeit", "Travail décrit"),
          L("Results printed on the page", "Výsledky uvedené na stránke", "Auf der Seite genannte Ergebnisse", "Résultats imprimés sur la page"),
        ],
        rows: [
          {
            cells: [
              L("Financial services", "Finančné služby", "Finanzdienstleistungen", "Services financiers"),
              L(
                "12 months of phased penetration testing, a red team engagement, and a security architecture review during a move from on-premises to cloud",
                "12 mesiacov fázovaného penetračného testovania, red team a revízia bezpečnostnej architektúry pri prechode z on-premises do cloudu",
                "12 Monate phasenweise Penetrationstests, ein Red-Team-Einsatz und ein Security-Architektur-Review beim Umzug von On-Premises in die Cloud",
                "12 mois de tests d'intrusion par phases, un engagement de red team et une revue d'architecture pendant un passage de l'on-premise au cloud",
              ),
              L(
                "47 critical vulnerabilities, zero breaches during the transformation, SOC 2 Type II, 40% reduction in security incidents",
                "47 kritických zraniteľností, nula narušení počas transformácie, SOC 2 Type II, 40 % pokles bezpečnostných incidentov",
                "47 kritische Schwachstellen, null Vorfälle während der Transformation, SOC 2 Type II, 40 % weniger Sicherheitsvorfälle",
                "47 vulnérabilités critiques, zéro intrusion pendant la transformation, SOC 2 Type II, baisse de 40 % des incidents de sécurité",
              ),
            ],
          },
          {
            cells: [
              L("Healthcare", "Zdravotníctvo", "Gesundheitswesen", "Santé"),
              L(
                "Data protection controls, secured patient data stores, and testing to maintain HIPAA compliance",
                "Kontroly ochrany dát, zabezpečenie úložísk pacientskych dát a testovanie na udržanie súladu s HIPAA",
                "Datenschutzkontrollen, gesicherte Patientendaten und Tests zur Aufrechterhaltung der HIPAA-Compliance",
                "Contrôles de protection des données, magasins de données patients sécurisés et tests pour maintenir la conformité HIPAA",
              ),
              L(
                "2M+ patient records secured, full HIPAA compliance, zero-trust architecture, awareness training for 5,000 staff",
                "Zabezpečených 2M+ pacientskych záznamov, plný súlad s HIPAA, architektúra zero-trust, školenie 5 000 zamestnancov",
                "2 Mio.+ Patientenakten gesichert, volle HIPAA-Compliance, Zero-Trust-Architektur, Schulung für 5.000 Beschäftigte",
                "2 M+ dossiers patients sécurisés, conformité HIPAA complète, architecture zero-trust, formation de 5 000 personnes",
              ),
            ],
          },
          {
            cells: [
              L("Technology / SaaS", "Technológie / SaaS", "Technologie / SaaS", "Technologie / SaaS"),
              L(
                "Cloud security assessment, API testing, and continuous penetration testing before an IPO",
                "Hodnotenie cloudovej bezpečnosti, testovanie API a priebežné penetračné testovanie pred IPO",
                "Cloud-Sicherheitsprüfung, API-Tests und kontinuierliche Penetrationstests vor einem Börsengang",
                "Évaluation de sécurité cloud, tests d'API et tests d'intrusion continus avant une introduction en bourse",
              ),
              L(
                "SOC 2 Type II, 95% vulnerability remediation rate, IPO security due diligence, ongoing red team programme",
                "SOC 2 Type II, 95 % miera nápravy zraniteľností, bezpečnostná due diligence pred IPO, priebežný red team program",
                "SOC 2 Type II, 95 % Behebungsquote, Sicherheits-Due-Diligence zum Börsengang, laufendes Red-Team-Programm",
                "SOC 2 Type II, taux de remédiation de 95 %, due diligence sécurité pour l'IPO, programme de red team continu",
              ),
            ],
          },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "Which case studies does Red Patronus publish?",
          a: "Three: a global insurance company's move from on-premises to cloud, a regional healthcare provider's HIPAA programme, and an enterprise SaaS platform preparing for an IPO. The titles do not name the client organisation.",
        },
        {
          q: "What results does the financial services case study report?",
          a: "The page reports 47 critical vulnerabilities identified, zero breaches during the transformation, SOC 2 Type II compliance, and a 40% reduction in security incidents, after 12 months of phased penetration testing, a red team engagement, and a security architecture review.",
        },
        {
          q: "What results do the healthcare and technology case studies report?",
          a: "Healthcare: 2M+ patient records secured, full HIPAA compliance, a zero-trust architecture, and security awareness training for 5,000 staff. Technology: SOC 2 Type II, a 95% vulnerability remediation rate, completed IPO security due diligence, and an ongoing red team programme.",
        },
      ],
      sk: [
        {
          q: "Aké prípadové štúdie Red Patronus uverejňuje?",
          a: "Tri: prechod globálnej poisťovne z on-premises do cloudu, program HIPAA regionálneho poskytovateľa zdravotnej starostlivosti a podnikovú SaaS platformu pred IPO. Názvy štúdií neobsahujú meno klienta.",
        },
        {
          q: "Aké výsledky uvádza štúdia z finančných služieb?",
          a: "Stránka uvádza 47 identifikovaných kritických zraniteľností, nula narušení počas transformácie, súlad SOC 2 Type II a 40 % pokles bezpečnostných incidentov po 12 mesiacoch fázovaného penetračného testovania, red teamu a revízie bezpečnostnej architektúry.",
        },
        {
          q: "Aké výsledky uvádzajú štúdie zo zdravotníctva a technológií?",
          a: "Zdravotníctvo: zabezpečených 2M+ pacientskych záznamov, plný súlad s HIPAA, architektúra zero-trust a školenie 5 000 zamestnancov. Technológie: SOC 2 Type II, 95 % miera nápravy zraniteľností, dokončená bezpečnostná due diligence pred IPO a priebežný red team program.",
        },
      ],
      de: [
        {
          q: "Welche Fallstudien veröffentlicht Red Patronus?",
          a: "Drei: der Umzug eines globalen Versicherers von On-Premises in die Cloud, das HIPAA-Programm eines regionalen Gesundheitsdienstleisters und eine SaaS-Plattform vor einem Börsengang. Die Titel nennen den Kunden nicht.",
        },
        {
          q: "Welche Ergebnisse nennt die Fallstudie Finanzdienstleistungen?",
          a: "Die Seite nennt 47 kritische Schwachstellen, null Vorfälle während der Transformation, SOC 2 Type II und 40 % weniger Sicherheitsvorfälle nach 12 Monaten phasenweiser Penetrationstests, einem Red-Team-Einsatz und einem Architektur-Review.",
        },
        {
          q: "Welche Ergebnisse nennen die Studien zu Gesundheit und Technologie?",
          a: "Gesundheit: 2 Mio.+ gesicherte Patientenakten, volle HIPAA-Compliance, Zero-Trust-Architektur und Schulung für 5.000 Beschäftigte. Technologie: SOC 2 Type II, 95 % Behebungsquote, abgeschlossene Sicherheits-Due-Diligence zum Börsengang und ein laufendes Red-Team-Programm.",
        },
      ],
      fr: [
        {
          q: "Quelles études de cas Red Patronus publie-t-il ?",
          a: "Trois : le passage d'un assureur mondial de l'on-premise au cloud, le programme HIPAA d'un prestataire régional de santé et une plateforme SaaS préparant une introduction en bourse. Les titres ne nomment pas le client.",
        },
        {
          q: "Quels résultats l'étude services financiers rapporte-t-elle ?",
          a: "La page rapporte 47 vulnérabilités critiques, zéro intrusion pendant la transformation, la conformité SOC 2 Type II et une baisse de 40 % des incidents après 12 mois de tests d'intrusion par phases, un engagement de red team et une revue d'architecture.",
        },
        {
          q: "Quels résultats rapportent les études santé et technologie ?",
          a: "Santé : 2 M+ dossiers patients sécurisés, conformité HIPAA complète, architecture zero-trust et formation de 5 000 personnes. Technologie : SOC 2 Type II, taux de remédiation de 95 %, due diligence sécurité pour l'IPO et un programme de red team continu.",
        },
      ],
    },
    related: ["/services/penetration-testing", "/services/red-team", "/services/compliance", "/contact"],
  },
  {
    ...base,
    path: "/contact",
    priority: 0.7,
    pageType: "ContactPage",
    navLabel: contact,
    breadcrumbs: [
      { name: home, path: "/" },
      { name: contact, path: "/contact" },
    ],
    title: L(
      "Contact Red Patronus | Bratislava",
      "Kontakt | Red Patronus Bratislava",
      "Kontakt Red Patronus | Bratislava",
      "Contacter Red Patronus | Bratislava",
    ),
    description: L(
      "Contact Red Patronus at info@redpatronus.com or +421 948 446 778. The contact page lists Lenardova 1147/12, Bratislava 851 01, and a reply within 24 hours.",
      "Kontaktujte Red Patronus na info@redpatronus.com alebo +421 948 446 778. Kontaktná stránka uvádza Lenardova 1147/12, Bratislava 851 01 a odpoveď do 24 hodín.",
      "Kontakt zu Red Patronus: info@redpatronus.com oder +421 948 446 778. Die Kontaktseite nennt Lenardova 1147/12, Bratislava 851 01 und eine Antwort innerhalb von 24 Stunden.",
      "Contactez Red Patronus : info@redpatronus.com ou +421 948 446 778. La page contact indique Lenardova 1147/12, Bratislava 851 01 et une réponse sous 24 heures.",
    ),
    keywords: L("contact Red Patronus, info@redpatronus.com, Bratislava cybersecurity, penetration test quote"),
    summary: L(
      "Contact Red Patronus by email at info@redpatronus.com or by phone at +421 948 446 778. The contact page lists the location as Lenardova 1147/12, Bratislava 851 01, Slovakia, and says the team responds within 24 hours. The site footer lists a second Bratislava address at Mlynské nivy 48, 821 09.",
      "Red Patronus kontaktujte e-mailom info@redpatronus.com alebo telefónom +421 948 446 778. Kontaktná stránka uvádza adresu Lenardova 1147/12, Bratislava 851 01, Slovensko a odpoveď do 24 hodín. Pätička webu uvádza druhú bratislavskú adresu Mlynské nivy 48, 821 09.",
      "Kontaktieren Sie Red Patronus per E-Mail unter info@redpatronus.com oder telefonisch unter +421 948 446 778. Die Kontaktseite nennt Lenardova 1147/12, Bratislava 851 01, Slowakei, und eine Antwort innerhalb von 24 Stunden. Die Fußzeile nennt eine zweite Adresse in Bratislava: Mlynské nivy 48, 821 09.",
      "Contactez Red Patronus par e-mail à info@redpatronus.com ou par téléphone au +421 948 446 778. La page contact indique Lenardova 1147/12, Bratislava 851 01, Slovaquie, et une réponse sous 24 heures. Le pied de page indique une seconde adresse à Bratislava : Mlynské nivy 48, 821 09.",
    ),
    tables: [
      {
        caption: L(
          "Contact details published by Red Patronus",
          "Kontaktné údaje uverejnené spoločnosťou Red Patronus",
          "Von Red Patronus veröffentlichte Kontaktdaten",
          "Coordonnées publiées par Red Patronus",
        ),
        headers: [
          L("Channel", "Kanál", "Kanal", "Canal"),
          L("Published detail", "Uverejnený údaj", "Veröffentlichte Angabe", "Détail publié"),
        ],
        rows: [
          { cells: [L("Email", "E-mail", "E-Mail", "E-mail"), "info@redpatronus.com"] },
          { cells: [L("Phone", "Telefón", "Telefon", "Téléphone"), "+421 948 446 778"] },
          {
            cells: [
              L("Address on the contact page", "Adresa na kontaktnej stránke", "Adresse auf der Kontaktseite", "Adresse sur la page contact"),
              "Lenardova 1147/12, Bratislava 851 01, Slovakia",
            ],
            todo: "address",
          },
          {
            cells: [
              L("Address in the footer", "Adresa v pätičke", "Adresse in der Fußzeile", "Adresse dans le pied de page"),
              "Mlynské nivy 48, Bratislava 821 09, Slovakia",
            ],
            todo: "address",
          },
          {
            cells: [
              L("Response time", "Doba odozvy", "Antwortzeit", "Délai de réponse"),
              L("Within 24 hours", "Do 24 hodín", "Innerhalb von 24 Stunden", "Sous 24 heures"),
            ],
          },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "How do I request a consultation from Red Patronus?",
          a: "Use the contact form on this page, email info@redpatronus.com, or call +421 948 446 778. The form asks for name, company, business email, an optional phone number, and a message of at least 10 characters.",
        },
        {
          q: "How quickly does Red Patronus say it replies?",
          a: "The contact page says the team responds within 24 hours. The confirmation text says a security consultant will be in touch within 24 hours.",
        },
        {
          q: "Where does the website say Red Patronus is located?",
          a: "The contact page lists Lenardova 1147/12, Bratislava 851 01, Slovakia. The footer lists Mlynské nivy 48, Bratislava 821 09, Slovakia. Both appear on the public site.",
        },
      ],
      sk: [
        {
          q: "Ako si vyžiadať konzultáciu od Red Patronus?",
          a: "Použite kontaktný formulár na tejto stránke, napíšte na info@redpatronus.com alebo volajte +421 948 446 778. Formulár pýta meno, firmu, firemný e-mail, voliteľný telefón a správu aspoň s 10 znakmi.",
        },
        {
          q: "Ako rýchlo Red Patronus podľa webu odpovedá?",
          a: "Kontaktná stránka hovorí, že tím odpovie do 24 hodín. Text po odoslaní hovorí, že sa ozve bezpečnostný konzultant do 24 hodín.",
        },
        {
          q: "Kde web uvádza sídlo Red Patronus?",
          a: "Kontaktná stránka uvádza Lenardova 1147/12, Bratislava 851 01, Slovensko. Pätička uvádza Mlynské nivy 48, Bratislava 821 09, Slovensko. Obe adresy sú na verejnom webe.",
        },
      ],
      de: [
        {
          q: "Wie fordere ich eine Beratung bei Red Patronus an?",
          a: "Nutzen Sie das Formular auf dieser Seite, schreiben Sie an info@redpatronus.com oder rufen Sie +421 948 446 778 an. Das Formular verlangt Name, Firma, geschäftliche E-Mail, optional eine Telefonnummer und eine Nachricht mit mindestens 10 Zeichen.",
        },
        {
          q: "Wie schnell antwortet Red Patronus nach eigener Angabe?",
          a: "Die Kontaktseite sagt, das Team antworte innerhalb von 24 Stunden. Der Bestätigungstext sagt, ein Sicherheitsberater melde sich innerhalb von 24 Stunden.",
        },
        {
          q: "Wo nennt die Website den Sitz von Red Patronus?",
          a: "Die Kontaktseite nennt Lenardova 1147/12, Bratislava 851 01, Slowakei. Die Fußzeile nennt Mlynské nivy 48, Bratislava 821 09, Slowakei. Beide Adressen stehen auf der öffentlichen Website.",
        },
      ],
      fr: [
        {
          q: "Comment demander une consultation à Red Patronus ?",
          a: "Utilisez le formulaire de cette page, écrivez à info@redpatronus.com ou appelez le +421 948 446 778. Le formulaire demande le nom, la société, un e-mail professionnel, un téléphone facultatif et un message d'au moins 10 caractères.",
        },
        {
          q: "Sous quel délai Red Patronus indique-t-il répondre ?",
          a: "La page contact indique une réponse sous 24 heures. Le texte de confirmation indique qu'un consultant sécurité recontacte sous 24 heures.",
        },
        {
          q: "Où le site situe-t-il Red Patronus ?",
          a: "La page contact indique Lenardova 1147/12, Bratislava 851 01, Slovaquie. Le pied de page indique Mlynské nivy 48, Bratislava 821 09, Slovaquie. Les deux adresses figurent sur le site public.",
        },
      ],
    },
    related: ["/services/penetration-testing", "/services", "/about", "/hiring"],
  },
  {
    ...base,
    path: "/hiring",
    priority: 0.5,
    navLabel: careers,
    breadcrumbs: [
      { name: home, path: "/" },
      { name: careers, path: "/hiring" },
    ],
    title: L(
      "Cybersecurity Jobs in Bratislava | Red Patronus",
      "Práca v kybernetickej bezpečnosti | Red Patronus",
      "Cybersecurity Jobs in Bratislava | Red Patronus",
      "Cybersecurity Jobs in Bratislava | Red Patronus",
    ),
    description: L(
      "Red Patronus is hiring a Junior Security / Infrastructure Engineer in Bratislava. Slovak listing: 1,800 EUR/month gross, full-time contractor, open to graduates.",
      "Red Patronus hľadá Junior Security / Infrastructure Engineer v Bratislave. Slovenský inzerát uvádza 1 800 EUR mesačne brutto, plný úväzok na živnosť, vhodné pre absolventa.",
      "Red Patronus sucht einen Junior Security / Infrastructure Engineer in Bratislava. Die slowakische Anzeige nennt 1.800 EUR brutto im Monat, Vollzeit als Auftragnehmer, geeignet für Absolventen.",
      "Red Patronus recrute un Junior Security / Infrastructure Engineer à Bratislava. L'annonce slovaque indique 1 800 EUR brut par mois, temps plein en tant qu'indépendant, ouvert aux diplômés.",
    ),
    keywords: L("cybersecurity jobs Bratislava, junior security engineer, Red Patronus careers"),
    summary: L(
      "Red Patronus is hiring a Junior Security / Infrastructure Engineer in Bratislava. The role is full-time contractor work, suitable for graduates, and asks for advanced English, Linux and Windows, networking basics, and Python or Bash. The Slovak listing states 1,800 EUR per month gross. Apply by email to info@redpatronus.com.",
      "Red Patronus hľadá Junior Security / Infrastructure Engineer v Bratislave. Ide o plný úväzok na živnosť, vhodné pre absolventa, s požiadavkou pokročilej angličtiny, Linuxu a Windows, základov sietí a Pythonu alebo Bashu. Slovenský inzerát uvádza 1 800 EUR mesačne brutto. Záujem posielajte na info@redpatronus.com.",
      "Red Patronus sucht einen Junior Security / Infrastructure Engineer in Bratislava. Die Stelle ist eine Vollzeit-Auftragnehmertätigkeit, geeignet für Absolventen, und verlangt fortgeschrittenes Englisch, Linux und Windows, Netzwerkgrundlagen sowie Python oder Bash. Die slowakische Anzeige nennt 1.800 EUR brutto im Monat. Bewerbungen an info@redpatronus.com.",
      "Red Patronus recrute un Junior Security / Infrastructure Engineer à Bratislava. Le poste est à temps plein en indépendant, ouvert aux diplômés, et demande un anglais avancé, Linux et Windows, des bases réseau et Python ou Bash. L'annonce slovaque indique 1 800 EUR brut par mois. Candidatures à info@redpatronus.com.",
    ),
    tables: [
      {
        caption: L(
          "Junior Security / Infrastructure Engineer listing published by Red Patronus",
          "Inzerát Junior Security / Infrastructure Engineer uverejnený spoločnosťou Red Patronus",
          "Stellenanzeige Junior Security / Infrastructure Engineer von Red Patronus",
          "Offre Junior Security / Infrastructure Engineer publiée par Red Patronus",
        ),
        headers: [
          L("Term", "Údaj", "Angabe", "Élément"),
          L("Published detail", "Uverejnený údaj", "Veröffentlichte Angabe", "Détail publié"),
        ],
        rows: [
          { cells: [L("Role", "Pozícia", "Rolle", "Poste"), "Junior Security / Infrastructure Engineer"] },
          { cells: [L("Location", "Miesto", "Ort", "Lieu"), "Bratislava, Slovakia"] },
          {
            cells: [
              L("Employment", "Úväzok", "Beschäftigung", "Contrat"),
              L("Full-time, contractor (živnosť)", "Plný úväzok, živnosť", "Vollzeit, Auftragnehmer (živnosť)", "Temps plein, indépendant (živnosť)"),
            ],
          },
          {
            cells: [
              L("Gross monthly pay", "Hrubá mesačná mzda", "Bruttomonatslohn", "Salaire mensuel brut"),
              L(
                "1,800 EUR, stated on the Slovak listing",
                "1 800 EUR, uvedené v slovenskom inzeráte",
                "1.800 EUR, in der slowakischen Anzeige genannt",
                "1 800 EUR, indiqué dans l'annonce slovaque",
              ),
            ],
            todo: "job-dates",
          },
          {
            cells: [
              L("Education", "Vzdelanie", "Ausbildung", "Formation"),
              L("Master's or PhD level; suitable for graduates", "Vysokoškolské II. alebo III. stupňa; vhodné pre absolventa", "Master- oder PhD-Niveau; geeignet für Absolventen", "Niveau master ou doctorat ; ouvert aux diplômés"),
            ],
          },
          {
            cells: [
              L("Language", "Jazyk", "Sprache", "Langue"),
              L("English, advanced (C1)", "Angličtina, pokročilá (C1)", "Englisch, fortgeschritten (C1)", "Anglais, avancé (C1)"),
            ],
          },
          { cells: [L("Apply", "Záujem", "Bewerbung", "Candidature"), "info@redpatronus.com"] },
        ],
      },
    ],
    faqs: {
      en: [
        {
          q: "What job is Red Patronus hiring for?",
          a: "Junior Security / Infrastructure Engineer in Bratislava. The work described is analysing logs, hunting anomalies, and learning infrastructure security and AI penetration testing with mentoring.",
        },
        {
          q: "What does the interview assignment involve?",
          a: "Build a simple Azure lab with a VM or cluster, a firewall, and logging, plus short documentation. The interview asks for a one-page analysis, a log-collection demo, and simple threat hunting, for example DVWA logs shipped to Graylog, Wazuh, or Sentinel.",
        },
        {
          q: "What salary does Red Patronus publish for this role?",
          a: "The Slovak version of the careers page states 1,800 EUR per month gross. The English version of the original listing does not repeat that figure. Employment is described as full-time contractor work (živnosť).",
        },
      ],
      sk: [
        {
          q: "Akú pozíciu Red Patronus obsadzuje?",
          a: "Junior Security / Infrastructure Engineer v Bratislave. Opísaná práca je analýza logov, hľadanie anomálií a učenie sa bezpečnosti infraštruktúry a AI penetračných testov s mentoringom.",
        },
        {
          q: "Čo obsahuje zadanie na pohovor?",
          a: "Postaviť jednoduché lab prostredie v Azure s VM alebo clusterom, firewallom a logovaním a napísať krátku dokumentáciu. Na pohovor príde jednostranová analýza, ukážka zberu logov a jednoduchý threat hunting, napríklad DVWA a logy v Graylogu, Wazuhe alebo Sentineli.",
        },
        {
          q: "Akú mzdu Red Patronus pri tejto pozícii uverejňuje?",
          a: "Slovenská verzia kariérnej stránky uvádza 1 800 EUR mesačne brutto. Anglická verzia pôvodného inzerátu túto sumu neopakuje. Úväzok je opísaný ako plný úväzok na živnosť.",
        },
      ],
    },
    related: ["/about", "/contact", "/services/defensive", "/services/penetration-testing"],
  },
  {
    ...base,
    path: "/tools",
    emit: false,
    inSitemap: false,
    robots: "noindex, follow",
    navLabel: "Tools",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Tools", path: "/tools" },
    ],
    title: "Security Tools | Red Patronus",
    description:
      "Free security tools from Red Patronus. The listed utility checks an IPv4 address against scanner intelligence and public blocklists.",
    keywords: "IP reputation checker, free security tools, Red Patronus",
    summary:
      "Red Patronus publishes free security utilities built by its engineers. The tools page currently lists one utility, the IP Reputation Checker, which compares an IPv4 address with the firm's internet-scanner intelligence and honeypot-fed public blocklists and returns a plain-language verdict. The tools section is switched off in the site configuration.",
    tables: [
      {
        caption: "Community tools listed by Red Patronus",
        headers: ["Tool", "What the page says"],
        rows: [
          {
            cells: [
              "IP Reputation Checker",
              "IPv4 lookup against Red Patronus scanner intelligence and honeypot-fed blocklists",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What free security tool does Red Patronus list?",
        a: "The IP Reputation Checker. It checks an IPv4 address against the firm's internet-scanner intelligence and public blocklists fed by its honeypot networks.",
      },
      {
        q: "Why does the tools page say the tools are shared?",
        a: "The page says most incidents the team investigates start with something small and preventable, and that the engineers publish tools because they learned on open tooling and public research.",
      },
    ],
    related: ["/contact", "/services"],
  },
  {
    ...base,
    path: "/tools/ip-reputation",
    emit: false,
    inSitemap: false,
    robots: "noindex, follow",
    navLabel: "IP Reputation Checker",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Tools", path: "/tools" },
      { name: "IP Reputation Checker", path: "/tools/ip-reputation" },
    ],
    title: "IP Reputation Checker | Red Patronus",
    description:
      "Free IPv4 reputation lookup from Red Patronus. Compare an address with the firm's internet-scanner intelligence and honeypot-fed public blocklists.",
    keywords: "IP reputation, IPv4 blocklist check, honeypot, Red Patronus",
    summary:
      "The Red Patronus IP Reputation Checker looks up an IPv4 address against the firm's internet-scanner intelligence and public blocklists fed by its honeypot networks. The page returns a plain-language verdict such as no known activity, known benign service, suspicious, or malicious. It is a free community tool, not a paid assessment.",
    faqs: [
      {
        q: "What does the Red Patronus IP reputation checker do?",
        a: "It checks an IPv4 address against Red Patronus internet-scanner intelligence and public blocklists fed by the firm's honeypot networks, then shows a verdict.",
      },
      {
        q: "Which verdicts does the checker show?",
        a: "The page labels results as no known activity, known benign service, suspicious, or malicious.",
      },
    ],
    related: ["/tools", "/contact"],
  },
  {
    path: "/404",
    article: false,
    emit: false,
    inSitemap: false,
    robots: "noindex, follow",
    ogType: "website",
    pageType: "WebPage",
    navLabel: "Page not found",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Page not found", path: "/404" },
    ],
    title: "Page not found | Red Patronus",
    description: "This Red Patronus page does not exist. Return to the homepage or open the services and contact pages.",
    summary: "",
    keywords: "",
    faqs: null,
    related: ["/", "/services", "/contact"],
  },
];

function service(entry) {
  return {
    ...base,
    schema: "Service",
    pageType: "WebPage",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: entry.navLabel, path: entry.path },
    ],
    ...entry,
  };
}
