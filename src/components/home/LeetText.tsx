import { useEffect, useState } from "react";

const LEET_MAP: Record<string, string[]> = {
  a: ["4", "@", "/-\\"],
  b: ["8", "ß"],
  c: ["<", "(", "{"],
  d: ["|)", "[)"],
  e: ["3", "€"],
  f: ["ƒ", "|="],
  g: ["6", "9"],
  h: ["#", "|-|"],
  i: ["1", "!", "|"],
  l: ["1", "|", "£"],
  o: ["0", "()", "Ø"],
  s: ["5", "$", "§"],
  t: ["7", "+"],
  u: ["µ", "|_|"],
  z: ["2"],
};

const pickLeet = (ch: string): string => {
  const lower = ch.toLowerCase();
  const options = LEET_MAP[lower];
  if (!options) return ch;
  const pick = options[Math.floor(Math.random() * options.length)];
  return ch === lower ? pick : pick.toUpperCase();
};

interface LeetTextProps {
  text: string;
  className?: string;
  /** ms between scramble frames */
  interval?: number;
  /** ms between each character resolving back to original */
  revealStep?: number;
  /** how long to keep scrambling before starting to reveal */
  scrambleDuration?: number;
  /** ms to wait after fully revealed before restarting */
  pause?: number;
}

const LeetText = ({
  text,
  className,
  interval = 80,
  pause = 4500,
}: LeetTextProps) => {
  const [display, setDisplay] = useState(text);
  const [lockedChars, setLockedChars] = useState<boolean[]>(() =>
    text.split("").map(() => true)
  );

  useEffect(() => {
    let cancelled = false;
    const timeouts: number[] = [];
    const intervals: number[] = [];

    const TOTAL_MS = 3000;
    const SCRAMBLE_MS = 700;
    const REVEAL_MS = TOTAL_MS - SCRAMBLE_MS;
    const REVEAL_STEP = 140; // ms between reveal ticks (keeps scramble feel slow)

    const chars = text.split("");
    const locked = new Array(chars.length).fill(false);
    const revealable = chars
      .map((c, i) => (c !== " " && c !== "\n" ? i : -1))
      .filter((i) => i >= 0);
    const ticks = Math.max(1, Math.floor((REVEAL_MS - 80) / REVEAL_STEP));
    const perTick = Math.max(1, Math.ceil(revealable.length / ticks));

    // Kick off immediately on mount so it runs during page load
    setLockedChars(chars.map((c) => c === " " || c === "\n"));
    setDisplay(
      chars.map((c) => (c === " " || c === "\n" ? c : pickLeet(c))).join("")
    );

    const scrambleId = window.setInterval(() => {
      if (cancelled) return;
      setDisplay(
        chars
          .map((c, i) => {
            if (locked[i]) return c;
            if (c === " " || c === "\n") return c;
            return Math.random() < 0.55 ? pickLeet(c) : c;
          })
          .join("")
      );
    }, interval);
    intervals.push(scrambleId);

    const startReveal = window.setTimeout(() => {
      window.clearInterval(scrambleId);
      const order = [...revealable].sort(() => Math.random() - 0.5);

      // Group reveals: perTick chars per step
      const groups: number[][] = [];
      for (let i = 0; i < order.length; i += perTick) {
        groups.push(order.slice(i, i + perTick));
      }

      groups.forEach((group, n) => {
        const t = window.setTimeout(() => {
          if (cancelled) return;
          group.forEach((idx) => {
            locked[idx] = true;
          });
          setLockedChars([...locked]);
          setDisplay(
            chars
              .map((c, i) => {
                if (locked[i]) return c;
                if (c === " " || c === "\n") return c;
                return pickLeet(c);
              })
              .join("")
          );
        }, n * REVEAL_STEP);
        timeouts.push(t);
      });

      const finalize = window.setTimeout(() => {
        if (cancelled) return;
        setLockedChars(chars.map(() => true));
        setDisplay(text);
      }, groups.length * REVEAL_STEP + 80);
      timeouts.push(finalize);
    }, SCRAMBLE_MS);
    timeouts.push(startReveal);

    return () => {
      cancelled = true;
      timeouts.forEach((t) => window.clearTimeout(t));
      intervals.forEach((i) => window.clearInterval(i));
    };
  }, [text, interval, pause]);


  return (
    <span
      className={className}
      style={{ whiteSpace: "pre-line", fontVariantLigatures: "none" }}
      aria-label={text}
    >
      {display.split("").map((ch, i) => {
        const isLocked = lockedChars[i] ?? true;
        if (ch === "\n") return <br key={i} />;
        return (
          <span
            key={i}
            aria-hidden="true"
            className={
              isLocked
                ? undefined
                : "font-mono text-primary opacity-90 [text-shadow:0_0_10px_hsl(var(--primary)/0.35)]"
            }
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
};

export default LeetText;
