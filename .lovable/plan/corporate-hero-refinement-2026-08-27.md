# Corporate Hero Refinement

Tighten the homepage hero into a restrained corporate look: less decoration, neutral surfaces, tighter grid, one accent color.

## Visual changes

- Corner radii: reduce the global radius token from 10px to 7px so buttons, cards and containers read as corporate rather than rounded-soft. Applies site-wide.
- Remove the tinted pink/burgundy "Multi-Cloud Security Experts" panel gradient. Replace with a plain white (card) surface and a neutral gray border, same content, smaller padding.
- Palette discipline: charcoal text, white/light-gray surfaces, the logo red as the single primary, burgundy only as a subtle accent (borders, small marks). Drop the per-cloud tinted pills (orange/blue/blue) in favor of neutral chips with the original-color logos kept intact.
- Buttons: keep one solid primary CTA ("Get Started"); the secondary becomes a plain outline button with no scale/shadow hover, only a border/color shift.
- Badges: remove the "Enterprise Security Partner" pill badge above the H1 — replaced by a small uppercase eyebrow label in charcoal/muted.
- Icons: swap the generic `CheckCircle` trust marks for a smaller consistent icon (`Check`, 14px, burgundy) at uniform size and stroke.
- Spacing/grid: reduce hero vertical padding (py-12/20 -> py-10/16), tighten the gaps between eyebrow, H1, subtitle, buttons and trust row, and align the trust row as an evenly spaced 3-column grid instead of a wrapping flex row.
- Typography: standardize on Inter for both display and body (removes the dual font-family split) with tightened tracking on the H1.

## Copy changes

Trust row (all four languages: EN, SK, DE, FR):

1. DORA-aligned security controls
2. Cloud-certified security specialists
3. 24/7 incident response for Enterprise

The cloud panel keeps its three platforms but with a shorter neutral label ("Multi-cloud: AWS, Azure, Google Cloud"). If you have specific replacement copy for that panel, tell me and I'll use it — your message ended before the text was included.

## Technical notes

- `src/index.css`: `--radius` 0.625rem -> 0.4375rem; add a neutral `--border-strong` token for the panel border; keep all colors HSL tokens.
- `tailwind.config.ts`: collapse `display`/`body` families to a single Inter stack.
- `src/components/home/HeroSection.tsx`: restructure markup per the above; no logic changes, cloud SVG logos stay in original colors.
- `src/contexts/LanguageContext.tsx`: update `hero.highlight1..3` in the four language blocks.
- Scope is the homepage hero plus the two global tokens (radius, font family), which will subtly affect other pages by design.
