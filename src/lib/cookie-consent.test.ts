import { describe, expect, test } from "bun:test";
import { hasAnalyticsConsent } from "./cookie-consent";

describe("analytics consent", () => {
  test("explicit cookie acceptance permits GA4", () => {
    expect(hasAnalyticsConsent({ getItem: () => "accepted" })).toBe(true);
  });
  test("declining cookies prevents GA4", () => {
    expect(hasAnalyticsConsent({ getItem: () => "declined" })).toBe(false);
  });
  test("no choice prevents GA4", () => {
    expect(hasAnalyticsConsent({ getItem: () => null })).toBe(false);
  });
});