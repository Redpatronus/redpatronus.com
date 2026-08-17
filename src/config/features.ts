/**
 * Feature flags.
 * Flip to true to re-enable a feature across the site.
 */
export const FEATURES = {
  /** Tools section: homepage block, /tools pages and the header nav link. */
  tools: false,
  /** VIG Re partner tile in the trusted partners grid. */
  vigLogo: false,
  /** VIG Re testimonial quote on the homepage. */
  vigQuote: false,
} as const;
