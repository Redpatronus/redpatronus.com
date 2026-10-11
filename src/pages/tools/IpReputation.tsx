import { useState } from "react";
import { Link } from "react-router-dom";
import PageSeo from "@/components/seo/PageSeo";
import AnswerSummary from "@/components/seo/AnswerSummary";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageFacts from "@/components/seo/PageFacts";
import { Radar, Search, Loader2, ShieldCheck, ShieldAlert, ShieldX, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface Listing {
  label: string;
  listed: boolean;
}

interface LookupResult {
  ip: string;
  verdict: "clean" | "benign" | "suspicious" | "malicious";
  greynoise: {
    noise: boolean;
    riot: boolean;
    classification?: string | null;
    name?: string | null;
    lastSeen?: string | null;
    link?: string | null;
    message?: string | null;
  };
  listings: Listing[];
  listedCount: number;
  checkedAt: string;
}

const verdictStyles: Record<LookupResult["verdict"], { label: string; className: string; Icon: typeof ShieldCheck }> = {
  clean: { label: "No known activity", className: "bg-accent text-accent-foreground", Icon: ShieldCheck },
  benign: { label: "Known benign service", className: "bg-accent text-accent-foreground", Icon: ShieldCheck },
  suspicious: { label: "Suspicious", className: "bg-primary/10 text-primary", Icon: ShieldAlert },
  malicious: { label: "Malicious", className: "bg-primary text-primary-foreground", Icon: ShieldX },
};

const IpReputation = () => {
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<LookupResult[]>([]);

  const lookup = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = ip.trim();
    if (!value) return;
    setLoading(true);
    setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("ip-reputation", {
        body: { ip: value },
      });
      if (fnError) throw fnError;
      if (data?.error) throw new Error(data.error);
      setResults((prev) => [data as LookupResult, ...prev.filter((r) => r.ip !== data.ip)].slice(0, 20));
      setIp("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lookup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageSeo path="/tools/ip-reputation" />
      <Layout seoPath="/tools/ip-reputation">
        <section className="gradient-hero py-14 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <Breadcrumbs path="/tools/ip-reputation" align="center" />
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Radar className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-accent-foreground">Free tool</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              IP Reputation Checker
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Look up any IPv4 address against Redpatronus internet-scanner intelligence and public
              blocklists fed by our honeypot networks
            </p>
            <AnswerSummary path="/tools/ip-reputation" align="center" />
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <form onSubmit={lookup} className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                placeholder="e.g. 80.82.77.139"
                inputMode="numeric"
                aria-label="IPv4 address"
                className="h-12 font-mono"
              />
              <Button type="submit" size="lg" disabled={loading} className="h-12">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
                Check IP
              </Button>
            </form>
            {error && <p className="font-body text-sm text-primary mb-6">{error}</p>}

            {results.length > 0 && (
              <div className="overflow-x-auto border border-border rounded-xl shadow-card bg-card">
                <table className="w-full text-left">
                  <thead className="bg-surface">
                    <tr className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                      <th className="px-4 py-3">IP address</th>
                      <th className="px-4 py-3">Verdict</th>
                      <th className="px-4 py-3">DETAIL</th>
                      <th className="px-4 py-3">Blocklists</th>
                      <th className="px-4 py-3">Last seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r) => {
                      const v = verdictStyles[r.verdict];
                      return (
                        <tr key={r.ip} className="border-t border-border align-top">
                          <td className="px-4 py-4 font-mono text-sm text-foreground">{r.ip}</td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-body text-xs font-semibold ${v.className}`}
                            >
                              <v.Icon className="h-3.5 w-3.5" />
                              {v.label}
                            </span>
                          </td>
                          <td className="px-4 py-4 font-body text-sm text-muted-foreground">
                            {r.greynoise.noise || r.greynoise.riot ? (
                              <>
                                {r.greynoise.classification ?? (r.greynoise.riot ? "common service" : "observed")}
                                {r.greynoise.name ? ` — ${r.greynoise.name}` : ""}
                                {r.greynoise.link && (
                                  <span className="block text-primary/60 text-xs italic mt-1">
                                    Source: Verified scanner
                                  </span>
                                )}
                              </>
                            ) : (
                              "Not observed scanning"
                            )}
                          </td>
                          <td className="px-4 py-4 font-body text-sm text-muted-foreground">
                            {r.listedCount === 0
                              ? "Not listed"
                              : r.listings
                                  .filter((l) => l.listed)
                                  .map((l) => l.label)
                                  .join(", ")}
                          </td>
                          <td className="px-4 py-4 font-body text-sm text-muted-foreground">
                            {r.greynoise.lastSeen ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <p className="font-body text-sm text-muted-foreground mt-8">
              {"\n"}
            </p>

            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/tools">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all tools
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <PageFacts path="/tools/ip-reputation" />
      </Layout>
    </>
  );
};

export default IpReputation;
