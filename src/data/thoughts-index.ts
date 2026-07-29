/**
 * Curated homepage reading order. The homepage renders this list in order;
 * `startHere` rows get the red number treatment. Posts that exist on disk but
 * aren't listed here are appended after the curated set (newest first) so
 * nothing ever silently disappears — add an entry when publishing to give a
 * post its annotation.
 */
export interface CuratedThought {
  slug: string;
  annotation: string;
  startHere?: boolean;
  /** Overrides the derived date chip (e.g. "living" for evergreen docs). */
  dateLabel?: string;
}

export const THOUGHTS_INDEX: CuratedThought[] = [
  { slug: "entities", annotation: "three employees, no bodies, all the keys", startHere: true },
  { slug: "phantom-nodes", annotation: "the survival rate is a measurement, not a grade", startHere: true },
  { slug: "engines-drown-so-build-a-sail", annotation: "build a sail; the wind is picking up", startHere: true },
  { slug: "the-last-human-medium", annotation: "utilities for AIs, experiences for us", startHere: true },
  { slug: "real-kindness-doesnt-feel-nice", annotation: "the thank-you arrives two years late" },
  { slug: "in-case", annotation: "fiction · jars of the years we didn't speak" },
  { slug: "how-we-build-2-0", annotation: "how work moves when models do a real share" },
  { slug: "the-right-problem", annotation: "choosing is most of the work" },
  { slug: "branding-for-ai-agents", annotation: "designing a coworker with no face" },
  { slug: "real-time-query-model", annotation: "answer while the data is still arriving" },
  { slug: "how-to-work-with-jacob", annotation: "a user manual, kept current", dateLabel: "living" },
];

export const BEFORE_THIS = [
  { company: "Robinhood", note: "agentic AI", href: "/resume/robinhood" },
  { company: "Pluto", note: "founded it, they bought it", href: "/resume/pluto" },
  { company: "NVIDIA", note: "dev tools, GeForce Now", href: "/resume/nvidia" },
  { company: "Bridgewater", note: "learned to say the true thing", href: "/resume/bridgewater-associates" },
];

export const FIND_ME = [
  { label: "email", href: "mailto:sansburyjacob@gmail.com" },
  { label: "x", href: "https://x.com/jsnnsa" },
  { label: "github", href: "https://github.com/jsnns" },
];
