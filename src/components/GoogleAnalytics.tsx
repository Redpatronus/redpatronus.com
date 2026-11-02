import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY, hasAnalyticsConsent } from "@/lib/cookie-consent";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let initialization: Promise<void> | undefined;
let ready = false;
let lastPage: string | undefined;

async function initializeAnalytics() {
  if (initialization) return initialization;
  initialization = (async () => {
    const { data, error } = await supabase.functions.invoke("analytics-config");
    if (error || typeof data?.measurementId !== "string" || !/^G-[A-Z0-9]+$/.test(data.measurementId)) {
      throw new Error("Analytics configuration unavailable");
    }
    if (!hasAnalyticsConsent(localStorage)) return;
    const analyticsWindow = window as AnalyticsWindow;
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = function (..._args: unknown[]) {
      // gtag expects the Arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      analyticsWindow.dataLayer?.push(arguments);
    };
    analyticsWindow.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    analyticsWindow.gtag("set", "developer_id.dZjgwMW", true);
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", data.measurementId, { send_page_view: false });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(data.measurementId)}`;
    document.head.appendChild(script);
    ready = true;
  })().catch(() => {
    initialization = undefined;
    // Analytics failures must never interrupt the website or expose configuration.
  });
  await initialization;
  if (!ready) initialization = undefined;
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    let active = true;
    const sync = async () => {
      const analyticsWindow = window as AnalyticsWindow;
      if (!hasAnalyticsConsent(localStorage)) {
        if (ready) analyticsWindow.gtag?.("consent", "update", { analytics_storage: "denied" });
        lastPage = undefined;
        return;
      }
      await initializeAnalytics();
      if (!active || !ready || !hasAnalyticsConsent(localStorage)) return;
      analyticsWindow.gtag?.("consent", "update", { analytics_storage: "granted" });
      const path = location.pathname + location.search;
      if (lastPage === path) return;
      lastPage = path;
      analyticsWindow.gtag?.("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_CONSENT_KEY || event.key === null) void sync();
    };
    void sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    window.addEventListener("storage", onStorage);
    return () => {
      active = false;
      window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
      window.removeEventListener("storage", onStorage);
    };
  }, [location.pathname, location.search]);

  return null;
}