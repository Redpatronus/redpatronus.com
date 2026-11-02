import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

// A GA4 measurement ID is public browser configuration, not an API credential.
// Never expose any other secret or log the configured value.
Deno.serve((req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const headers = { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" };
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  }
  const measurementId = Deno.env.get("GOOGLE_ANALYTICS_MEASUREMENT_ID")?.trim();
  if (!measurementId || !/^G-[A-Z0-9]+$/.test(measurementId)) {
    return new Response(JSON.stringify({ error: "Analytics configuration unavailable" }), { status: 503, headers });
  }
  return new Response(JSON.stringify({ measurementId }), { headers });
});