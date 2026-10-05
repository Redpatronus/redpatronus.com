import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Briefcase, Wallet, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hiring = () => {
  const { language } = useLanguage();
  const isSK = language === "sk";

  const pageTitle = isSK ? "Otvorené pozície" : "Open Positions";
  const pageLead = isSK
    ? "Pridaj sa k malému tímu, ktorý rieši reálne veci v kybernetickej bezpečnosti."
    : "Join a small team solving real-world problems in cybersecurity.";

  const positionTitle = "Junior Security / Infrastructure Engineer";
  const employment = isSK
    ? "Plný úväzok, živnosť"
    : "Full-time, contractor (živnosť)";
  const location = "Bratislava, Slovakia";

  const applyCta = isSK ? "Mám záujem" : "Apply now";
  const backToContact = isSK ? "Kontaktuj nás" : "Contact us";

  const content = isSK ? (
    <SlovakDescription />
  ) : (
    <EnglishDescription />
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Red Patronus</title>
        <meta
          name="description"
          content={
            isSK
              ? "Otvorené pracovné pozície v Red Patronus. Pridaj sa k nášmu kybernetickému tímu v Bratislave."
              : "Open positions at Red Patronus. Join our cybersecurity team in Bratislava."
          }
        />
        <link rel="canonical" href="https://redpatronus.com/hiring" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_55%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="font-body text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
                {isSK ? "Kariéra" : "Careers"}
              </span>
              <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 text-balance">
                {pageTitle}
              </h1>
              <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {pageLead}
              </p>
            </div>
          </div>
        </section>

        {/* Job listing */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <article className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-sm overflow-hidden">
              <header className="p-8 lg:p-10 border-b border-border bg-surface">
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {positionTitle}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3 font-body text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>{employment}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{location}</span>
                  </li>
                  {isSK && (
                    <li className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-primary" />
                      <span>Mzdové podmienky (brutto): 1 800 EUR/mesiac</span>
                    </li>
                  )}
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>{isSK ? "Vhodné pre absolventa" : "Suitable for graduates"}</span>
                  </li>
                </ul>
              </header>

              <div className="p-8 lg:p-10 prose prose-slate max-w-none font-body text-foreground/90 leading-relaxed">
                {content}

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <a href="mailto:info@redpatronus.com?subject=Junior%20Security%20%2F%20Infrastructure%20Engineer">
                      {applyCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">{backToContact}</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>
);

const SlovakDescription = () => (
  <>
    <SectionHeading>Náplň práce, právomoci a zodpovednosti</SectionHeading>
    <p>
      Ak si práve dokončil školu alebo máš za sebou prvé mesiace v IT, chceš sa dostať do
      kyberbezpečnosti, toto bude pre teba dobré miesto.
    </p>

    <SectionHeading>Čo budeš robiť</SectionHeading>
    <p>
      Budeš pracovať na reálnych veciach. Analyzovať logy, hľadať anomálie a chápať, čo sa deje v
      prostredí. Nie pozerať sa, ako to robí niekto iný, ale robiť to sám. Samozrejme s podporou
      ľudí, ktorí v tom už majú prax.
    </p>

    <SectionHeading>Koho hľadáme</SectionHeading>
    <p>
      Hľadáme engineera, ktorý keď niečo nefunguje, chce pochopiť prečo, nie to len obísť.
      Skúsenosti nie sú nutné. Dôležitejšie je, ako uvažuješ, či vieš byť zvedavý a či ťa táto
      oblasť naozaj baví. Zvyšok sa dá naučiť.
    </p>

    <SectionHeading>Pohovor</SectionHeading>
    <p>
      Dostávaš zadanie a postavíš jednoduché lab prostredie s VM alebo clusterom, firewallom a
      logovaním v Azure. Napíšeš k tomu krátku dokumentáciu.
    </p>
    <p>
      AI môžeš pokojne použiť, ale rátaj s tým, že sa o tom porozprávame a budeme chcieť vedieť,
      prečo si to spravil práve takto.
    </p>
    <p>
      Na pohovor prídeš s jednostranovou analýzou svojho Azure labu, ukážkou zberu logov a
      jednoduchým threat huntingom. Napríklad nasadíš DVWA, logy pošleš do SIEMu ako Graylog,
      Wazuh alebo Sentinel a ukážeš alert, ktorý sa spustil po tom, ako si začal DVWA testovať.
    </p>
    <p>Stačí zachytiť aspoň jeden útok. Riešenia podobných labov sú bežne dostupné online.</p>

    <SectionHeading>Čo z toho máš</SectionHeading>
    <p>
      Budeš robiť na veciach, ktoré budú relevantné aj o niekoľko rokov. Bezpečnosť infraštruktúr
      a AI penetračné testy nie sú oblasť, ktorá zajtra zmizne, práve naopak.
    </p>

    <SectionHeading>O nás</SectionHeading>
    <p>
      Sme malý tím, ktorý sa venuje reálnym technológiám. Nemáme korporátne procesy ani zbytočné
      meetingy. Ak chceš miesto, kde sa niečo naučíš a bude od teba očakávaná skutočná robota,
      ozvi sa nám.
    </p>
    <p>
      + možnosť stáže — podľa nového vysokoškolského zákona môže študent absolvovať záverečnú
      stáž aj formou práce na pracovisku, ak táto práca zodpovedá jeho študijnému programu a je
      schválená vysokou školou.
    </p>

    <SectionHeading>Zamestnanecké výhody, benefity</SectionHeading>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Reálny mentoring:</strong> Nebudeš na to sám, učíš sa priamo od skúsených ľudí z
        praxe.
      </li>
      <li>
        <strong>Labovanie na firemný účet:</strong> Prístup k Azure a technológiám, kde si môžeš
        skúšať vlastné scenáre a útoky.
      </li>
      <li>
        <strong>Certifikácie a vzdelávanie:</strong> Podporíme ťa v získaní relevantných security
        certifikátov (napr. od Microsoftu, AZ-500, SC-200 a pod.).
      </li>
      <li>
        <strong>Žiadne zbytočné meetingy:</strong> Minimum administratívy, maximum času na
        technickú prácu.
      </li>
      <li>
        <strong>Bleeding-edge technológie:</strong> Security v spojení s AI nie je len buzzword,
        ale tvoja denná agenda.
      </li>
      <li>
        <strong>Neformálna atmosféra:</strong> Sme malý tím, všetci si tykáme a veci riešime
        priamo.
      </li>
    </ul>

    <SectionHeading>O spoločnosti</SectionHeading>
    <p>
      Sme stabilná, rýdzo slovenská technologická spoločnosť (na trhu od roku 2005), ktorá sa
      špecializuje na hĺbkovú analýzu bezpečnosti a IT infraštruktúru. Sme malý, vysoko efektívny
      tím, ktorému sa darí rýchlo rásť vďaka odbornosti a priamemu prístupu k riešeniu problémov.
      Zameriavame sa na kybernetickú bezpečnosť, threat hunting a implementáciu moderných
      cloudových technológií.
    </p>

    <SectionHeading>Požiadavky na zamestnanca</SectionHeading>
    <p>
      <strong>Vzdelanie:</strong> vysokoškolské II. alebo III. stupňa
      <br />
      <strong>Jazyk:</strong> Anglický jazyk — pokročilý (C1)
      <br />
      <strong>Vhodné pre absolventa:</strong> Áno
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Máš ukončené technické vzdelanie, ideálne v oblasti IT alebo telekomunikácií.</li>
      <li>Ovládaš základy sieťových protokolov a bezpečnostných technológií.</li>
      <li>Vieš pracovať s operačnými systémami ako Linux a Windows.</li>
      <li>Máš schopnosť riešiť problémy a analyzovať bezpečnostné incidenty.</li>
      <li>Komunikuješ jasne a efektívne v tíme, si ochotný sa učiť nové veci.</li>
      <li>Ovládaš základy skriptovania, napríklad v Pythone alebo Bashi.</li>
    </ul>
  </>
);

const EnglishDescription = () => (
  <>
    <SectionHeading>About the role</SectionHeading>
    <p>
      If you just finished school or have your first months in IT behind you and want to break
      into cybersecurity, this is a good place for you.
    </p>

    <SectionHeading>What you'll do</SectionHeading>
    <p>
      You'll work on real things — analyzing logs, hunting anomalies, and understanding what is
      happening in the environment. Not watching someone else do it, but doing it yourself, with
      support from people who already have the practice.
    </p>

    <SectionHeading>Who we're looking for</SectionHeading>
    <p>
      An engineer who, when something doesn't work, wants to understand why instead of working
      around it. Experience is not required. How you think, your curiosity, and your genuine
      interest in the field matter more. The rest can be learned.
    </p>

    <SectionHeading>The interview</SectionHeading>
    <p>
      You'll get an assignment and build a simple lab environment in Azure — a VM or cluster, a
      firewall, and logging — and write short documentation for it.
    </p>
    <p>
      You're free to use AI, but expect us to talk about it and ask why you did things the way
      you did.
    </p>
    <p>
      You'll come to the interview with a one-page write-up of your Azure lab, a demo of log
      collection, and simple threat hunting. For example, deploy DVWA, ship logs to a SIEM such
      as Graylog, Wazuh or Sentinel, and show an alert that fired once you started attacking
      DVWA. Catching at least one attack is enough. Walk-throughs for similar labs are commonly
      available online.
    </p>

    <SectionHeading>What's in it for you</SectionHeading>
    <p>
      You'll work on things that will still be relevant in several years. Infrastructure security
      and AI penetration testing are not areas that will disappear tomorrow — quite the opposite.
    </p>

    <SectionHeading>About us</SectionHeading>
    <p>
      We're a small team focused on real technology. No corporate processes, no unnecessary
      meetings. If you want a place where you'll actually learn something and where real work
      will be expected of you, reach out.
    </p>
    <p>
      Internships welcome — under the new higher-education law a student can complete their
      final internship as work at our site if it matches their study program and is approved by
      the university.
    </p>

    <SectionHeading>Benefits</SectionHeading>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Real mentoring:</strong> you're not on your own — you learn directly from
        experienced practitioners.
      </li>
      <li>
        <strong>Company-funded lab time:</strong> access to Azure and tooling for your own
        scenarios and attacks.
      </li>
      <li>
        <strong>Certifications & training:</strong> support for relevant security certifications
        (Microsoft AZ-500, SC-200, and similar).
      </li>
      <li>
        <strong>No unnecessary meetings:</strong> minimal admin, maximum time for technical work.
      </li>
      <li>
        <strong>Bleeding-edge tech:</strong> security combined with AI is your daily agenda, not
        a buzzword.
      </li>
      <li>
        <strong>Informal atmosphere:</strong> small team, first-name basis, direct conversations.
      </li>
    </ul>

    <SectionHeading>Requirements</SectionHeading>
    <p>
      <strong>Education:</strong> Master's or PhD level
      <br />
      <strong>Language:</strong> English — Advanced (C1)
      <br />
      <strong>Suitable for graduates:</strong> Yes
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Completed technical education, ideally in IT or telecommunications.</li>
      <li>Familiarity with network protocols and security fundamentals.</li>
      <li>Comfortable working with Linux and Windows operating systems.</li>
      <li>Ability to solve problems and analyze security incidents.</li>
      <li>Clear and effective team communication, willingness to learn.</li>
      <li>Basics of scripting, for example Python or Bash.</li>
    </ul>
  </>
);

export default Hiring;
