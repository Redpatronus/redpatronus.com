import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COOKIE_CONSENT_KEY, saveCookieConsent } from "@/lib/cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(t);
    }
  }, []);

  const setChoice = (value: "accepted" | "declined") => {
    saveCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-card border border-border rounded-xl shadow-lift p-5 lg:p-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 h-9 w-9 rounded-full bg-accent flex items-center justify-center">
            <Cookie className="h-4 w-4 text-primary" aria-hidden />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-base font-semibold text-foreground">
              We value your privacy
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              We use cookies to enhance your browsing experience and analyze site traffic. You can accept or decline non-essential cookies.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" onClick={() => setChoice("accepted")}>
                Accept all
              </Button>
              <Button size="sm" variant="outline" onClick={() => setChoice("declined")}>
                Decline
              </Button>
            </div>
          </div>
          <button
            onClick={() => setChoice("declined")}
            aria-label="Close"
            className="flex-shrink-0 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
