/**
 * Per-page titles, descriptions, summaries, and FAQs.
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
      "Bratislava firm for penetration testing, red teaming, cloud security, and DORA consulting. Black Friday pentest offer: €1,000 excl. VAT, order by 12 December 2026.",
      "Bratislavská firma pre penetračné testy, red team, cloudovú bezpečnosť a poradenstvo k DORA. Pentest k Black Friday: 1 000 € bez DPH pri objednávke do 12. decembra 2026.",
      "Firma in Bratislava für Penetrationstests, Red Teaming, Cloud-Sicherheit und DORA-Beratung. Black-Friday-Pentest: 1.000 € zzgl. MwSt. bei Bestellung bis 12. Dezember 2026.",
      "Société à Bratislava : tests d'intrusion, red team, sécurité cloud et conseil DORA. Pentest Black Friday : 1 000 € HT pour toute commande avant le 12 décembre 2026.",
    ),
    keywords: L(
      "Red Patronus, DORA compliance, penetration testing Bratislava, red team, cloud security, cybersecurity Slovakia",
      "Red Patronus, súlad s DORA, penetračné testovanie Bratislava, red team, cloudová bezpečnosť",
      "Red Patronus, DORA, Penetrationstest Bratislava, Red Team, Cloud-Sicherheit",
      "Red Patronus, DORA, test d'intrusion Bratislava, red team, sécurité cloud",
    ),
    summary: L(
      "Red Patronus is a cybersecurity company in Bratislava, Slovakia, founded in 2005. It runs penetration tests and red team operations, provides defensive monitoring, secures AWS, Azure and Google Cloud, and advises enterprises and financial organisations on DORA. Limited-time special offer: an automated pentest for €1,000 excluding VAT, for orders placed by 12 December 2026.",
      "Red Patronus je spoločnosť pre kybernetickú bezpečnosť v Bratislave, založená v roku 2005. Robí penetračné testy a red team operácie, defenzívny monitoring, zabezpečuje AWS, Azure a Google Cloud a radí podnikom a finančným organizáciám pri súlade s DORA. Časovo obmedzená špeciálna ponuka: automatizovaný pentest za 1 000 € bez DPH pri objednávke do 12. decembra 2026.",
      "Red Patronus ist ein 2005 gegründetes Cybersicherheitsunternehmen in Bratislava, Slowakei. Wir führen Penetrationstests und Red-Team-Einsätze durch, überwachen Systeme defensiv, sichern AWS, Azure und Google Cloud und beraten Unternehmen und Finanzorganisationen zu DORA. Befristetes Sonderangebot: ein automatisierter Pentest für 1.000 € zzgl. MwSt. bei Bestellung bis 12. Dezember 2026.",
      "Red Patronus est une société de cybersécurité fondée en 2005 à Bratislava, en Slovaquie. Nous réalisons des tests d'intrusion et des opérations de red team, assurons une surveillance défensive, sécurisons AWS, Azure et Google Cloud et conseillons entreprises et organisations financières sur DORA. Offre spéciale à durée limitée : un pentest automatisé à 1 000 € HT pour toute commande passée avant le 12 décembre 2026.",
    ),
    faqs: {
      en: [
        {
          q: "What does Red Patronus do?",
          a: "Red Patronus is a cybersecurity company in Bratislava, Slovakia. We offer penetration testing, red team operations, defensive monitoring, cloud security, DORA compliance consulting, training, identity and access management, phishing simulation, and SIEM with audit logging.",
        },
        {
          q: "How much does a Red Patronus penetration test cost?",
          a: "Our Black Friday limited-time special offer is €1,000 excluding VAT for an automated, unauthenticated pentest of a web application or external infrastructure, for orders placed by 12 December 2026. Testing is aligned with OWASP Top 10 and PTES. You get an executive summary, a technical report with proof of concept, and risk-prioritized remediation guidance. Add-ons: delivery within 24 hours (+€1,000) and authenticated testing (+€1,000). If we find no vulnerability, next year's pentest is free.",
        },
        {
          q: "How can I contact Red Patronus?",
          a: "Email info@redpatronus.com or call +41 43 588 07 94. Our office is at Mlynské nivy 48, 821 09 Bratislava, Slovakia. We respond within 24 hours.",
        },
        {
          q: "Which standards does Red Patronus work with?",
          a: "ISO 27001, the EU Digital Operational Resilience Act (DORA), and the EU NIS2 directive. We also assess organisations against CIS, NIST, GDPR, SOC 2, PCI-DSS, HIPAA, and CMMC.",
        },
      ],
      sk: [
        {
          q: "Čo robí Red Patronus?",
          a: "Red Patronus je spoločnosť pre kybernetickú bezpečnosť v Bratislave. Robíme penetračné testy, red team operácie, defenzívny monitoring, cloudovú bezpečnosť, poradenstvo k súladu s DORA, školenia, správu identít a prístupov, simulácie phishingu a SIEM s auditným logovaním.",
        },
        {
          q: "Koľko stojí penetračný test od Red Patronus?",
          a: "Naša časovo obmedzená špeciálna ponuka k Black Friday: 1 000 € bez DPH za automatizovaný neautentifikovaný pentest webovej aplikácie alebo externej infraštruktúry pri objednávke do 12. decembra 2026. Testujeme podľa OWASP Top 10 a PTES. Dostanete manažérske zhrnutie, technickú správu s proof of concept a odporúčania na nápravu zoradené podľa rizika. Doplnky: dodanie do 24 hodín (+1 000 €) a autentifikované testovanie (+1 000 €). Ak nenájdeme žiadnu zraniteľnosť, pentest v budúcom roku máte zdarma.",
        },
        {
          q: "Ako kontaktovať Red Patronus?",
          a: "Napíšte na info@redpatronus.com alebo volajte +41 43 588 07 94. Sídlo máme na Mlynských nivách 48, 821 09 Bratislava. Odpovieme do 24 hodín.",
        },
        {
          q: "S akými štandardmi Red Patronus pracuje?",
          a: "S ISO 27001, nariadením EÚ DORA a smernicou EÚ NIS2. Organizácie posudzujeme aj podľa CIS, NIST, GDPR, SOC 2, PCI-DSS, HIPAA a CMMC.",
        },
      ],
      de: [
        {
          q: "Was macht Red Patronus?",
          a: "Red Patronus ist ein Cybersicherheitsunternehmen in Bratislava, Slowakei. Wir bieten Penetrationstests, Red-Team-Einsätze, defensive Überwachung, Cloud-Sicherheit, DORA-Compliance-Beratung, Schulungen, Identity and Access Management, Phishing-Simulationen sowie SIEM mit Audit-Logging.",
        },
        {
          q: "Was kostet ein Penetrationstest von Red Patronus?",
          a: "Unser befristetes Black-Friday-Sonderangebot: 1.000 € zzgl. MwSt. für einen automatisierten, nicht authentifizierten Pentest einer Webanwendung oder externen Infrastruktur bei Bestellung bis 12. Dezember 2026. Wir testen nach OWASP Top 10 und PTES. Sie erhalten eine Management-Zusammenfassung, einen technischen Bericht mit Proof of Concept und nach Risiko priorisierte Behebungshinweise. Zusatzoptionen: Lieferung innerhalb von 24 Stunden (+1.000 €) und authentifizierte Tests (+1.000 €). Finden wir keine Schwachstelle, ist der Pentest im nächsten Jahr kostenlos.",
        },
        {
          q: "Wie erreiche ich Red Patronus?",
          a: "Schreiben Sie an info@redpatronus.com oder rufen Sie +41 43 588 07 94 an. Unser Büro ist in der Mlynské nivy 48, 821 09 Bratislava, Slowakei. Wir antworten innerhalb von 24 Stunden.",
        },
        {
          q: "Mit welchen Standards arbeitet Red Patronus?",
          a: "Mit ISO 27001, der EU-Verordnung DORA und der EU-Richtlinie NIS2. Außerdem prüfen wir Organisationen nach CIS, NIST, DSGVO, SOC 2, PCI-DSS, HIPAA und CMMC.",
        },
      ],
      fr: [
        {
          q: "Que fait Red Patronus ?",
          a: "Red Patronus est une société de cybersécurité à Bratislava, en Slovaquie. Nous proposons des tests d'intrusion, des opérations de red team, une surveillance défensive, la sécurité cloud, du conseil en conformité DORA, de la formation, la gestion des identités et des accès, des simulations de phishing et un SIEM avec journaux d'audit.",
        },
        {
          q: "Combien coûte un test d'intrusion Red Patronus ?",
          a: "Notre offre spéciale à durée limitée du Black Friday : 1 000 € HT pour un pentest automatisé et non authentifié d'une application web ou d'une infrastructure externe, pour toute commande passée avant le 12 décembre 2026. Les tests suivent l'OWASP Top 10 et PTES. Vous recevez une synthèse de direction, un rapport technique avec preuve de concept et des recommandations priorisées par le risque. Options : livraison sous 24 heures (+1 000 €) et tests authentifiés (+1 000 €). Si nous ne trouvons aucune vulnérabilité, le pentest de l'année suivante est offert.",
        },
        {
          q: "Comment contacter Red Patronus ?",
          a: "Écrivez à info@redpatronus.com ou appelez le +41 43 588 07 94. Notre bureau se trouve Mlynské nivy 48, 821 09 Bratislava, Slovaquie. Nous répondons sous 24 heures.",
        },
        {
          q: "Avec quelles normes Red Patronus travaille-t-il ?",
          a: "ISO 27001, le règlement européen DORA et la directive européenne NIS2. Nous évaluons aussi les organisations selon CIS, NIST, RGPD, SOC 2, PCI-DSS, HIPAA et CMMC.",
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
      "Red Patronus provides offensive security, cloud security for AWS, Azure and Google Cloud, defensive security, external threat monitoring, cybersecurity training, DORA compliance audits, identity and access management with Okta, phishing simulation, and SIEM with audit logging. Each engagement is scoped to the client's security and compliance requirements.",
      "Red Patronus poskytuje ofenzívnu bezpečnosť, cloudovú bezpečnosť pre AWS, Azure a Google Cloud, defenzívnu bezpečnosť, monitoring externých hrozieb, školenia, audity súladu s DORA, správu identít a prístupov cez Okta, simulácie phishingu a SIEM s auditným logovaním. Rozsah zákazky nastavíme podľa vašich bezpečnostných a regulačných požiadaviek.",
      "Red Patronus bietet offensive Sicherheit, Cloud-Sicherheit für AWS, Azure und Google Cloud, defensive Sicherheit, externes Bedrohungsmonitoring, Schulungen, DORA-Compliance-Audits, Identity and Access Management mit Okta, Phishing-Simulation und SIEM mit Audit-Logging. Den Umfang jedes Auftrags richten wir an Ihren Sicherheits- und Compliance-Anforderungen aus.",
      "Red Patronus propose la sécurité offensive, la sécurité cloud pour AWS, Azure et Google Cloud, la sécurité défensive, la surveillance des menaces externes, la formation, des audits de conformité DORA, la gestion des identités avec Okta, la simulation de phishing et un SIEM avec journaux d'audit. Nous définissons chaque mission selon vos exigences de sécurité et de conformité.",
    ),
    faqs: {
      en: [
        {
          q: "What cybersecurity services does Red Patronus offer?",
          a: "Offensive security, cloud security, defensive security, external threat and security monitoring, cybersecurity training, compliance and regulation audits, identity and access management, phishing simulation, and SIEM with audit logging.",
        },
        {
          q: "Which cloud platforms does Red Patronus secure?",
          a: "Our cloud security assessments cover Amazon Web Services, Microsoft Azure, and Google Cloud Platform.",
        },
        {
          q: "Can Red Patronus adapt an engagement to our requirements?",
          a: "Yes. We shape each engagement around your security requirements and compliance obligations. Send us a short description through the contact form and we will propose a scope.",
        },
      ],
      sk: [
        {
          q: "Aké kyberbezpečnostné služby Red Patronus ponúka?",
          a: "Ofenzívnu bezpečnosť, cloudovú bezpečnosť, defenzívnu bezpečnosť, monitoring externých hrozieb, školenia, audity súladu a regulácie, správu identít a prístupov, simulácie phishingu a SIEM s auditným logovaním.",
        },
        {
          q: "Ktoré cloudové platformy Red Patronus zabezpečuje?",
          a: "Naše hodnotenia cloudovej bezpečnosti pokrývajú Amazon Web Services, Microsoft Azure a Google Cloud Platform.",
        },
        {
          q: "Vie Red Patronus prispôsobiť zákazku našim požiadavkám?",
          a: "Áno. Každú zákazku nastavíme podľa vašich bezpečnostných požiadaviek a regulačných povinností. Pošlite nám krátky opis cez kontaktný formulár a navrhneme rozsah.",
        },
      ],
      de: [
        {
          q: "Welche Cybersicherheitsleistungen bietet Red Patronus?",
          a: "Offensive Sicherheit, Cloud-Sicherheit, defensive Sicherheit, externes Bedrohungsmonitoring, Schulungen, Compliance- und Regulierungs-Audits, Identity and Access Management, Phishing-Simulation und SIEM mit Audit-Logging.",
        },
        {
          q: "Welche Cloud-Plattformen sichert Red Patronus?",
          a: "Unsere Cloud-Sicherheitsprüfungen decken Amazon Web Services, Microsoft Azure und Google Cloud Platform ab.",
        },
        {
          q: "Kann Red Patronus einen Auftrag an unsere Anforderungen anpassen?",
          a: "Ja. Wir richten jeden Auftrag an Ihren Sicherheitsanforderungen und Compliance-Pflichten aus. Schicken Sie uns über das Kontaktformular eine kurze Beschreibung, und wir schlagen einen Umfang vor.",
        },
      ],
      fr: [
        {
          q: "Quels services de cybersécurité Red Patronus propose-t-il ?",
          a: "La sécurité offensive, la sécurité cloud, la sécurité défensive, la surveillance des menaces externes, la formation, les audits de conformité et de régulation, la gestion des identités et des accès, la simulation de phishing et le SIEM avec journaux d'audit.",
        },
        {
          q: "Quelles plateformes cloud Red Patronus sécurise-t-il ?",
          a: "Nos évaluations de sécurité cloud couvrent Amazon Web Services, Microsoft Azure et Google Cloud Platform.",
        },
        {
          q: "Red Patronus peut-il adapter une mission à nos besoins ?",
          a: "Oui. Nous définissons chaque mission selon vos exigences de sécurité et vos obligations de conformité. Décrivez votre besoin via le formulaire de contact et nous vous proposerons un périmètre.",
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
      "Web, network, mobile, and API penetration testing by Red Patronus. Black Friday offer: €1,000 excl. VAT for orders placed by 12 December 2026.",
    keywords: "penetration testing, OWASP, PTES, web application pentest, API security testing, Red Patronus",
    summary:
      "Red Patronus tests web applications, internal and external networks, iOS and Android apps, and REST, GraphQL, and SOAP APIs. Each test runs from reconnaissance and enumeration through controlled exploitation and post-exploitation to reporting. Limited-time special offer: an automated web application or external infrastructure pentest for €1,000 excluding VAT, for orders placed by 12 December 2026.",
    faqs: [
      {
        q: "What does a Red Patronus penetration test cover?",
        a: "Web applications, including OWASP Top 10, business logic, and authentication; internal and external networks; iOS and Android apps; and REST, GraphQL, and SOAP APIs.",
      },
      {
        q: "What method does Red Patronus follow?",
        a: "Five phases: reconnaissance, enumeration, exploitation, post-exploitation, and reporting. The Black Friday pentest is aligned with OWASP Top 10 and PTES.",
      },
      {
        q: "What do you receive after a Red Patronus penetration test?",
        a: "An executive summary, technical findings with proof of concept, a risk-prioritized vulnerability list, remediation guidance, a retest to verify fixes, and an attestation letter for compliance.",
      },
      {
        q: "How much does the Black Friday pentest cost?",
        a: "€1,000 excluding VAT for an automated, unauthenticated test of a web application or external infrastructure, for orders placed by 12 December 2026. Delivery within 24 hours and authenticated testing are add-ons at +€1,000 each. If we find no vulnerability, next year's pentest is free.",
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
      "Red Patronus red team operations simulate sophisticated threat actors against your organisation. Engagements include full attack campaigns, physical security testing, detection and response testing, and purple team exercises with your blue team. Scenarios include phishing, assumed breach, lateral movement, data exfiltration, ransomware, and supply chain attacks.",
    faqs: [
      {
        q: "What is a Red Patronus red team engagement?",
        a: "A realistic adversary simulation that tests your security controls and your defending team. It can include full adversary simulation, physical security testing, detection and response testing, and purple team exercises.",
      },
      {
        q: "Which attack scenarios does Red Patronus simulate?",
        a: "Initial access via phishing and social engineering, assumed breach, lateral movement and privilege escalation, data exfiltration, ransomware, and supply chain attack vectors.",
      },
      {
        q: "How is a red team engagement different from a penetration test?",
        a: "A penetration test finds and validates vulnerabilities in applications, networks, and APIs, then reports the fixes. A red team engagement runs a campaign like a real attacker and checks whether your defenders detect and respond, with optional physical and purple team work.",
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
      "Red Patronus security consulting covers compliance gap and readiness assessments, security architecture review, policy and standards writing, and risk assessments. We work with SOC 2 Type I and II, ISO 27001, PCI-DSS, HIPAA, GDPR, the NIST Cybersecurity Framework, CIS Controls, and CMMC.",
    faqs: [
      {
        q: "What security consulting does Red Patronus provide?",
        a: "Compliance assessments, security architecture reviews, policy and standards development, and risk assessments that identify, analyse, and prioritise security risks.",
      },
      {
        q: "Which frameworks does Red Patronus assess against?",
        a: "SOC 2 Type I and II, ISO 27001, PCI-DSS, HIPAA, GDPR, the NIST Cybersecurity Framework, CIS Controls, and CMMC.",
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
      "Red Patronus cloud security work covers configuration audits, IAM policy review, container and Kubernetes assessment, and DevSecOps integration. We work on Amazon Web Services, Microsoft Azure, and Google Cloud, including services such as EC2, S3, Lambda, EKS, Azure VMs, AKS, GKE, and Cloud Run.",
    faqs: [
      {
        q: "Which clouds does Red Patronus assess?",
        a: "Amazon Web Services, Microsoft Azure, and Google Cloud Platform.",
      },
      {
        q: "What does a Red Patronus cloud security assessment include?",
        a: "Cloud configuration audits against CIS benchmarks and security practices, IAM policy assessment for least privilege, container security for Docker and Kubernetes, and DevSecOps integration into CI/CD pipelines.",
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
      "Red Patronus offensive security simulates real-world attacks to find vulnerabilities and test defences. It includes red team engagements, AI-powered penetration testing, OWASP web tests, infrastructure tests, post-exploitation, black-box to white-box scoping, and social engineering with phishing and vishing.",
    faqs: [
      {
        q: "What is included in Red Patronus offensive security?",
        a: "Red team engagements, AI-powered penetration testing, OWASP web tests, infrastructure tests, attack simulation and post-exploitation, black-box to white-box testing scoped to your requirements, and social engineering including phishing, vishing, and physical tests.",
      },
      {
        q: "Does Red Patronus use AI in penetration testing?",
        a: "Yes. We use artificial intelligence to automate and extend penetration testing, so we find vulnerabilities faster than with traditional methods alone.",
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
      "Red Patronus defensive security includes a security operations centre with 24/7 monitoring, AI-assisted infrastructure and application testing, DevSecOps in the development lifecycle, business continuity planning, threat detection and response, asset and risk management, and identity access management.",
    faqs: [
      {
        q: "Does Red Patronus offer 24/7 security monitoring?",
        a: "Yes. Our security operations centre monitors systems and networks 24/7, with continuous internal scanning and automatic web scanning. We also provide 24/7 incident response for enterprises.",
      },
      {
        q: "What else does Red Patronus defensive security cover?",
        a: "AI-powered infrastructure and application security, DevSecOps integration, business continuity planning, threat detection and response, asset and risk management, and identity access management.",
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
      "Red Patronus external threat and security monitoring uses OSINT to watch publicly available data for exposure and emerging threats. We analyse social media, forums, and public databases with tools including Censys, Shodan, ProjectDiscovery, SSL Labs, and our own fuzzing tools, so you see what an attacker can already find.",
    faqs: [
      {
        q: "What is Red Patronus external threat monitoring?",
        a: "OSINT-based monitoring of publicly available data. We look for exposed information, watch public services for emerging threats, and tell you where to improve security.",
      },
      {
        q: "Which tools does Red Patronus use for external monitoring?",
        a: "Censys, Shodan, ProjectDiscovery, SSL Labs, and our own fuzzing tools.",
      },
      {
        q: "Does external monitoring look at private systems?",
        a: "No. This service works from publicly available data: social media, forums, public databases, and public services.",
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
      "Employee cybersecurity training from Red Patronus: compliance, threat awareness, phishing recognition, incident response, and custom programmes.",
    keywords: "security awareness training, phishing training, compliance training, incident response training, Red Patronus",
    summary:
      "Red Patronus cybersecurity training teaches employees to detect, report, and respond to threats. It covers compliance and risk reduction, current attacker tactics, password and device security, protection of company assets, and modules updated as threats change. Programmes are built around your organisation and industry.",
    faqs: [
      {
        q: "Who is Red Patronus security training for?",
        a: "Employees. The training teaches staff to detect, report, and respond to cyber threats, supports compliance, and helps protect company assets.",
      },
      {
        q: "What topics does the training cover?",
        a: "Compliance, threat awareness, practical security habits, protecting company assets, phishing recognition, and incident response. Modules are updated regularly, and we can build a custom programme.",
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
      "Red Patronus helps financial services firms meet the EU Digital Operational Resilience Act for ICT risk. We also work with CIS, NIST, and EU regulations, run gap analyses, support audits, and design, implement, and test business continuity and disaster recovery plans at least once a year.",
    faqs: [
      {
        q: "What DORA support does Red Patronus provide?",
        a: "Alignment with the Digital Operational Resilience Act for financial services ICT risk management, gap analysis, audit support and documentation, and early identification of ICT risks.",
      },
      {
        q: "How often are business continuity plans tested?",
        a: "At least once a year, as DORA requires. We help you design, implement, and test ICT business continuity and disaster recovery plans every year.",
      },
      {
        q: "Which other frameworks does Red Patronus cover?",
        a: "CIS, NIST 2, and EU regulations, alongside DORA. Our security consulting also covers SOC 2, ISO 27001, PCI-DSS, HIPAA, GDPR, and CMMC.",
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
      "Red Patronus offers identity and access management as a service built on Okta single sign-on. You can connect Active Directory or another identity provider. We manage configuration with Terraform and roll out changes through your CI/CD pipelines, which keeps access control auditable and cuts password fatigue.",
    faqs: [
      {
        q: "Which identity platform does Red Patronus use?",
        a: "Okta, as the central single sign-on platform. Our IAM work also covers multi-factor authentication.",
      },
      {
        q: "How is the IAM configuration managed?",
        a: "With Terraform as infrastructure as code, deployed through your CI/CD pipelines, so configuration stays repeatable and auditable.",
      },
      {
        q: "Can the IAM service use Active Directory?",
        a: "Yes. Active Directory can be the identity provider, or you can use another identity provider you prefer.",
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
      "Red Patronus phishing simulations send realistic messages so employees can practise spotting deception. Regular exercises reinforce secure behaviour, lower the chance of a successful breach, and support compliance. Each campaign ends with a report of click rates, reporting rates, and areas to improve.",
    faqs: [
      {
        q: "What is a Red Patronus phishing simulation?",
        a: "A realistic simulated phishing exercise that tests whether employees recognise deceptive tactics and helps them practise safer responses. We also run vishing and physical social engineering tests.",
      },
      {
        q: "What do phishing simulation reports include?",
        a: "Click rates, reporting rates, and the areas where your staff need to improve.",
      },
      {
        q: "Why run phishing simulations?",
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
      "Red Patronus SIEM and audit logging covers real-time detection, log analysis, incident response, authentication and login monitoring, audit trails of system changes, and correlation of security events. Audit logs track system changes and user activity for compliance.",
    faqs: [
      {
        q: "What does Red Patronus SIEM and audit logging include?",
        a: "Real-time monitoring and alerting, log analysis, incident response, authentication monitoring, audit log management, and security event correlation.",
      },
      {
        q: "Does Red Patronus monitor authentication events?",
        a: "Yes. We watch login attempts and authentication events across your systems.",
      },
      {
        q: "How does SIEM relate to Red Patronus defensive security?",
        a: "Defensive security covers the broader SOC, 24/7 monitoring, and incident response. SIEM and audit logging focuses on logs, authentication events, and event correlation.",
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
      "Red Patronus (Redpatronus s.r.o.) is a Bratislava cybersecurity firm founded in 2005 by security veterans to find and fix vulnerabilities before attackers do.",
      "Red Patronus (Redpatronus s.r.o.) je bratislavská firma pre kybernetickú bezpečnosť, ktorú v roku 2005 založili bezpečnostní veteráni, aby zraniteľnosti našli skôr ako útočníci.",
      "Red Patronus (Redpatronus s.r.o.) ist eine 2005 von Sicherheitsveteranen gegründete Cybersicherheitsfirma in Bratislava, die Schwachstellen findet, bevor Angreifer es tun.",
      "Red Patronus (Redpatronus s.r.o.), société de cybersécurité fondée en 2005 à Bratislava par des vétérans de la sécurité, trouve les vulnérabilités avant les attaquants.",
    ),
    keywords: L("about Red Patronus, Bratislava cybersecurity company, security team, DORA"),
    summary: L(
      "Red Patronus, legally Redpatronus s.r.o., is a Bratislava cybersecurity firm founded in 2005 by security veterans. Its mission is to find vulnerabilities and help fix them before they are exploited. Its consultants come from enterprise security, government agencies, and technology companies.",
      "Red Patronus, právne Redpatronus s.r.o., je bratislavská firma pre kybernetickú bezpečnosť, ktorú v roku 2005 založili bezpečnostní veteráni. Jej poslaním je nájsť zraniteľnosti a pomôcť ich opraviť skôr, ako ich niekto zneužije. Konzultanti prichádzajú z podnikovej bezpečnosti, štátnych agentúr a technologických firiem.",
      "Red Patronus, rechtlich Redpatronus s.r.o., ist ein 2005 von Sicherheitsveteranen gegründetes Cybersicherheitsunternehmen in Bratislava. Wir finden Schwachstellen und helfen, sie zu beheben, bevor sie ausgenutzt werden. Unsere Berater kommen aus der Unternehmenssicherheit, aus Behörden und aus Technologieunternehmen.",
      "Red Patronus, juridiquement Redpatronus s.r.o., est une société de cybersécurité fondée en 2005 à Bratislava par des vétérans de la sécurité. Nous trouvons les vulnérabilités et aidons à les corriger avant qu'elles soient exploitées. Nos consultants viennent de la sécurité d'entreprise, d'agences publiques et d'entreprises technologiques.",
    ),
    faqs: {
      en: [
        {
          q: "Who is Red Patronus?",
          a: "Red Patronus is an offensive security partner for enterprise organisations, founded by security veterans with decades of combined experience. We work from Bratislava on DORA-aligned enterprise cybersecurity in Europe.",
        },
        {
          q: "What is Red Patronus's mission?",
          a: "To help organisations find and fix security vulnerabilities before they are exploited, combining technical expertise with an attacker's mindset. We explain our findings, help you remediate them, and keep client data and findings confidential.",
        },
        {
          q: "Who works at Red Patronus?",
          a: "Security veterans founded the firm, and our consultants have backgrounds in enterprise security, government agencies, and technology companies.",
        },
      ],
      sk: [
        {
          q: "Kto je Red Patronus?",
          a: "Red Patronus je partner pre ofenzívnu bezpečnosť podnikov, ktorého založili bezpečnostní veteráni s desaťročiami spoločných skúseností. Z Bratislavy sa venujeme podnikovej kybernetickej bezpečnosti v Európe v súlade s DORA.",
        },
        {
          q: "Aké je poslanie Red Patronus?",
          a: "Pomáhať organizáciám nájsť a opraviť bezpečnostné zraniteľnosti skôr, ako ich niekto zneužije. Spájame technické znalosti s uvažovaním útočníka. Nálezy vysvetlíme, pomôžeme s nápravou a údaje klientov aj nálezy držíme v dôvernosti.",
        },
        {
          q: "Kto v Red Patronus pracuje?",
          a: "Firmu založili bezpečnostní veteráni a naši konzultanti prichádzajú z podnikovej bezpečnosti, štátnych agentúr a technologických firiem.",
        },
      ],
      de: [
        {
          q: "Wer ist Red Patronus?",
          a: "Red Patronus ist ein Partner für offensive Sicherheit in Unternehmen, gegründet von Sicherheitsveteranen mit jahrzehntelanger gemeinsamer Erfahrung. Von Bratislava aus arbeiten wir an DORA-konformer Unternehmenssicherheit in Europa.",
        },
        {
          q: "Was ist die Mission von Red Patronus?",
          a: "Organisationen dabei zu helfen, Schwachstellen zu finden und zu beheben, bevor sie ausgenutzt werden, mit technischer Expertise und dem Blick eines Angreifers. Wir erklären unsere Befunde, helfen bei der Behebung und behandeln Kundendaten und Befunde vertraulich.",
        },
        {
          q: "Wer arbeitet bei Red Patronus?",
          a: "Sicherheitsveteranen haben die Firma gegründet, und unsere Berater kommen aus der Unternehmenssicherheit, aus Behörden und aus Technologieunternehmen.",
        },
      ],
      fr: [
        {
          q: "Qui est Red Patronus ?",
          a: "Red Patronus est un partenaire en sécurité offensive pour les entreprises, fondé par des vétérans de la sécurité cumulant des décennies d'expérience. Depuis Bratislava, nous travaillons sur la cybersécurité d'entreprise alignée sur DORA en Europe.",
        },
        {
          q: "Quelle est la mission de Red Patronus ?",
          a: "Aider les organisations à trouver et corriger leurs vulnérabilités avant qu'elles soient exploitées, en alliant expertise technique et regard d'attaquant. Nous expliquons nos constats, aidons à les corriger et gardons confidentiels les données et constats de nos clients.",
        },
        {
          q: "Qui travaille chez Red Patronus ?",
          a: "Des vétérans de la sécurité ont fondé la société, et nos consultants viennent de la sécurité d'entreprise, d'agences publiques et d'entreprises technologiques.",
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
      "Three Red Patronus case studies: an insurer's move to the cloud, a healthcare HIPAA programme, and security hardening for a SaaS platform before its IPO.",
      "Tri prípadové štúdie Red Patronus: presun poisťovne do cloudu, program HIPAA v zdravotníctve a spevnenie bezpečnosti SaaS platformy pred IPO.",
      "Drei Fallstudien von Red Patronus: Cloud-Umzug einer Versicherung, ein HIPAA-Programm im Gesundheitswesen und Härtung einer SaaS-Plattform vor dem Börsengang.",
      "Trois études de cas Red Patronus : migration cloud d'un assureur, programme HIPAA dans la santé et durcissement d'une plateforme SaaS avant son introduction en bourse.",
    ),
    keywords: L("cybersecurity case studies, DORA, HIPAA, SOC 2, penetration testing results, Red Patronus"),
    summary: L(
      "Three Red Patronus case studies: a financial-services cloud transformation, a healthcare HIPAA programme, and a SaaS platform preparing for an IPO. Each describes the client's challenge, the work Red Patronus did, and the results.",
      "Tri prípadové štúdie Red Patronus: transformácia poisťovne do cloudu, program HIPAA v zdravotníctve a SaaS platforma pred IPO. Každá opisuje problém klienta, prácu Red Patronus a výsledky.",
      "Drei Fallstudien von Red Patronus: eine Cloud-Transformation im Versicherungswesen, ein HIPAA-Programm im Gesundheitswesen und eine SaaS-Plattform vor dem Börsengang. Jede beschreibt die Ausgangslage, unsere Arbeit und die Ergebnisse.",
      "Trois études de cas Red Patronus : une transformation cloud dans l'assurance, un programme HIPAA dans la santé et une plateforme SaaS préparant son introduction en bourse. Chacune décrit le défi du client, notre travail et les résultats.",
    ),
    faqs: {
      en: [
        {
          q: "What kind of clients do the Red Patronus case studies cover?",
          a: "A global insurance company moving from on-premises to cloud, a regional healthcare provider running a HIPAA programme, and an enterprise SaaS platform preparing for an IPO.",
        },
        {
          q: "What results did the financial services engagement deliver?",
          a: "After 12 months of phased penetration testing, a red team engagement, and a security architecture review: 47 critical vulnerabilities found, zero breaches during the transformation, SOC 2 Type II compliance, and 40% fewer security incidents.",
        },
        {
          q: "What results did the healthcare and technology engagements deliver?",
          a: "Healthcare: 2M+ patient records secured, full HIPAA compliance, a zero-trust architecture, and security awareness training for 5,000 staff. Technology: SOC 2 Type II, a 95% vulnerability remediation rate, completed IPO security due diligence, and an ongoing red team programme.",
        },
      ],
      sk: [
        {
          q: "Akých klientov prípadové štúdie Red Patronus opisujú?",
          a: "Globálnu poisťovňu pri prechode z on-premises do cloudu, regionálneho poskytovateľa zdravotnej starostlivosti s programom HIPAA a podnikovú SaaS platformu pred IPO.",
        },
        {
          q: "Aké výsledky priniesla zákazka vo finančných službách?",
          a: "Po 12 mesiacoch fázovaného penetračného testovania, red teamu a revízie bezpečnostnej architektúry: 47 nájdených kritických zraniteľností, nula narušení počas transformácie, súlad SOC 2 Type II a o 40 % menej bezpečnostných incidentov.",
        },
        {
          q: "Aké výsledky priniesli zákazky v zdravotníctve a technológiách?",
          a: "Zdravotníctvo: zabezpečených 2M+ pacientskych záznamov, plný súlad s HIPAA, architektúra zero-trust a školenie 5 000 zamestnancov. Technológie: SOC 2 Type II, 95 % miera nápravy zraniteľností, dokončená bezpečnostná due diligence pred IPO a priebežný red team program.",
        },
      ],
      de: [
        {
          q: "Welche Kunden beschreiben die Fallstudien von Red Patronus?",
          a: "Einen globalen Versicherer beim Umzug von On-Premises in die Cloud, einen regionalen Gesundheitsdienstleister mit HIPAA-Programm und eine SaaS-Plattform vor dem Börsengang.",
        },
        {
          q: "Welche Ergebnisse brachte der Auftrag im Finanzdienstleistungssektor?",
          a: "Nach 12 Monaten phasenweiser Penetrationstests, einem Red-Team-Einsatz und einem Architektur-Review: 47 gefundene kritische Schwachstellen, null Vorfälle während der Transformation, SOC 2 Type II und 40 % weniger Sicherheitsvorfälle.",
        },
        {
          q: "Welche Ergebnisse brachten die Aufträge in Gesundheit und Technologie?",
          a: "Gesundheit: 2 Mio.+ gesicherte Patientenakten, volle HIPAA-Compliance, Zero-Trust-Architektur und Schulung für 5.000 Beschäftigte. Technologie: SOC 2 Type II, 95 % Behebungsquote, abgeschlossene Sicherheits-Due-Diligence zum Börsengang und ein laufendes Red-Team-Programm.",
        },
      ],
      fr: [
        {
          q: "Quels clients les études de cas Red Patronus décrivent-elles ?",
          a: "Un assureur mondial passant de l'on-premise au cloud, un prestataire régional de santé avec un programme HIPAA et une plateforme SaaS préparant son introduction en bourse.",
        },
        {
          q: "Quels résultats la mission dans les services financiers a-t-elle produits ?",
          a: "Après 12 mois de tests d'intrusion par phases, un engagement de red team et une revue d'architecture : 47 vulnérabilités critiques trouvées, zéro intrusion pendant la transformation, la conformité SOC 2 Type II et 40 % d'incidents en moins.",
        },
        {
          q: "Quels résultats les missions santé et technologie ont-elles produits ?",
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
      "Contact Red Patronus at info@redpatronus.com or +41 43 588 07 94. Office: Mlynské nivy 48, 821 09 Bratislava. We reply within 24 hours.",
      "Kontaktujte Red Patronus na info@redpatronus.com alebo +41 43 588 07 94. Sídlo: Mlynské nivy 48, 821 09 Bratislava. Odpovieme do 24 hodín.",
      "Kontakt zu Red Patronus: info@redpatronus.com oder +41 43 588 07 94. Büro: Mlynské nivy 48, 821 09 Bratislava. Wir antworten innerhalb von 24 Stunden.",
      "Contactez Red Patronus : info@redpatronus.com ou +41 43 588 07 94. Bureau : Mlynské nivy 48, 821 09 Bratislava. Nous répondons sous 24 heures.",
    ),
    keywords: L("contact Red Patronus, info@redpatronus.com, Bratislava cybersecurity, penetration test quote"),
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
      "Red Patronus is hiring a Junior Security / Infrastructure Engineer in Bratislava: 1,800 EUR/month gross, full-time contractor, open to graduates.",
      "Red Patronus hľadá Junior Security / Infrastructure Engineer v Bratislave: 1 800 EUR mesačne brutto, plný úväzok na živnosť, vhodné pre absolventa.",
      "Red Patronus sucht einen Junior Security / Infrastructure Engineer in Bratislava: 1.800 EUR brutto im Monat, Vollzeit als Auftragnehmer, geeignet für Absolventen.",
      "Red Patronus recrute un Junior Security / Infrastructure Engineer à Bratislava : 1 800 EUR brut par mois, temps plein en indépendant, ouvert aux diplômés.",
    ),
    keywords: L("cybersecurity jobs Bratislava, junior security engineer, Red Patronus careers"),
    summary: L(
      "Red Patronus is hiring a Junior Security / Infrastructure Engineer in Bratislava. The role is full-time contractor work, open to graduates, and pays 1,800 EUR per month gross. You need advanced English, Linux and Windows, networking basics, and Python or Bash. Apply by email to info@redpatronus.com.",
      "Red Patronus hľadá Junior Security / Infrastructure Engineer v Bratislave. Ide o plný úväzok na živnosť, vhodný aj pre absolventa, za 1 800 EUR mesačne brutto. Potrebujete pokročilú angličtinu, Linux a Windows, základy sietí a Python alebo Bash. Záujem posielajte na info@redpatronus.com.",
      "Red Patronus sucht einen Junior Security / Infrastructure Engineer in Bratislava. Die Stelle ist eine Vollzeit-Auftragnehmertätigkeit, geeignet für Absolventen, mit 1.800 EUR brutto im Monat. Sie brauchen fortgeschrittenes Englisch, Linux und Windows, Netzwerkgrundlagen sowie Python oder Bash. Bewerbungen an info@redpatronus.com.",
      "Red Patronus recrute un Junior Security / Infrastructure Engineer à Bratislava. Le poste est à temps plein en indépendant, ouvert aux diplômés, rémunéré 1 800 EUR brut par mois. Il demande un anglais avancé, Linux et Windows, des bases réseau et Python ou Bash. Candidatures à info@redpatronus.com.",
    ),
    faqs: {
      en: [
        {
          q: "What job is Red Patronus hiring for?",
          a: "Junior Security / Infrastructure Engineer in Bratislava. You will analyse logs, hunt for anomalies, and learn infrastructure security and AI penetration testing with a mentor.",
        },
        {
          q: "What does the interview assignment involve?",
          a: "Build a simple Azure lab with a VM or cluster, a firewall, and logging, plus short documentation. At the interview you present a one-page analysis, a log-collection demo, and simple threat hunting, for example DVWA logs shipped to Graylog, Wazuh, or Sentinel.",
        },
      ],
      sk: [
        {
          q: "Akú pozíciu Red Patronus obsadzuje?",
          a: "Junior Security / Infrastructure Engineer v Bratislave. Budete analyzovať logy, hľadať anomálie a s mentorom sa učiť bezpečnosť infraštruktúry a AI penetračné testy.",
        },
        {
          q: "Čo obsahuje zadanie na pohovor?",
          a: "Postaviť jednoduché lab prostredie v Azure s VM alebo clusterom, firewallom a logovaním a napísať krátku dokumentáciu. Na pohovore predstavíte jednostranovú analýzu, ukážku zberu logov a jednoduchý threat hunting, napríklad DVWA a logy v Graylogu, Wazuhu alebo Sentineli.",
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
      "Free security tools from Red Patronus. The IP Reputation Checker checks an IPv4 address against our scanner intelligence and public blocklists.",
    keywords: "IP reputation checker, free security tools, Red Patronus",
    summary:
      "Red Patronus engineers build free security utilities for the community. The first is the IP Reputation Checker, which compares an IPv4 address with our internet-scanner intelligence and honeypot-fed public blocklists and returns a plain-language verdict.",
    faqs: [
      {
        q: "What free security tool does Red Patronus offer?",
        a: "The IP Reputation Checker. It checks an IPv4 address against our internet-scanner intelligence and public blocklists fed by our honeypot networks.",
      },
      {
        q: "Why does Red Patronus publish free tools?",
        a: "Most incidents we investigate start with something small and preventable. Our engineers learned on open tooling and public research, so we publish tools of our own.",
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
      "Free IPv4 reputation lookup from Red Patronus. Compare an address with our internet-scanner intelligence and honeypot-fed public blocklists.",
    keywords: "IP reputation, IPv4 blocklist check, honeypot, Red Patronus",
    summary:
      "The Red Patronus IP Reputation Checker looks up an IPv4 address against our internet-scanner intelligence and public blocklists fed by our honeypot networks. It returns a plain-language verdict: no known activity, known benign service, suspicious, or malicious. It is a free community tool.",
    faqs: [
      {
        q: "What does the Red Patronus IP reputation checker do?",
        a: "It checks an IPv4 address against Red Patronus internet-scanner intelligence and public blocklists fed by our honeypot networks, then shows a verdict.",
      },
      {
        q: "Which verdicts does the checker show?",
        a: "No known activity, known benign service, suspicious, or malicious.",
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
