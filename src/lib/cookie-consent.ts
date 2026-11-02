export const COOKIE_CONSENT_KEY = "rp-cookie-consent";
export const COOKIE_CONSENT_EVENT = "rp-cookie-consent-changed";

export function hasAnalyticsConsent(storage: Pick<Storage, "getItem">): boolean {
  return storage.getItem(COOKIE_CONSENT_KEY) === "accepted";
}

export function saveCookieConsent(value: "accepted" | "declined") {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}