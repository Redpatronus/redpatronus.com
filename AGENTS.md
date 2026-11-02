# Architecture rules

- Keep GA4 initialization in a single route-aware tracker; load Google scripts only after explicit cookie acceptance and disable automatic page views to prevent duplicate SPA tracking.
- Serve only the public GA4 measurement configuration through the analytics-config function, so externally hosted builds can use the existing Cloud setting without embedding private credentials.