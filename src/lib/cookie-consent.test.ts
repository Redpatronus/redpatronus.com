/// <reference types="node" />
import { describe, test } from "node:test";
import { strictEqual } from "node:assert";
import { hasAnalyticsConsent } from "./cookie-consent";

describe("analytics consent", () => {
  test("explicit cookie acceptance permits GA4", () => {
    strictEqual(hasAnalyticsConsent({ getItem: () => "accepted" }), true);
  });
  test("declining cookies prevents GA4", () => {
    strictEqual(hasAnalyticsConsent({ getItem: () => "declined" }), false);
  });
  test("no choice prevents GA4", () => {
    strictEqual(hasAnalyticsConsent({ getItem: () => null }), false);
  });
});