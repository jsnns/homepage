---
name: avoid-pangram
description: Iteratively edit prose until the Pangram AI-text detector scores it as human-written, while preserving the author's meaning, claims, and voice. Use when the user wants to reduce an essay/post's AI-detection score, mentions Pangram, GPTZero-style detectors, "sounds AI", or "0% AI".
---

# Avoid Pangram

Reduce a document's Pangram AI-likelihood via measured edit-score-revert loops. Validated across 11 essays: works brilliantly on expository prose you're willing to loosen; hits hard floors on certain content (see Failure Modes).

## Setup

Requires a Pangram API key in `$PANGRAM_API_KEY` (get one at pangram.com). Score with the sliding-window endpoint — it scans the WHOLE document; the plain endpoint (`text.api.pangram.com`) only scores a prefix and will mislead you:

```python
import json, urllib.request, os
def score(text):
    req = urllib.request.Request('https://text-sliding.api.pangram.com',
      data=json.dumps({"text": text}).encode(),
      headers={"Content-Type": "application/json", "x-api-key": os.environ["PANGRAM_API_KEY"]})
    r = json.load(urllib.request.urlopen(req))
    return r  # r['max_ai_likelihood'], r['avg_ai_likelihood'], r['windows'] (each with ai_likelihood + text)
```

Strip markup before scoring (JSX/HTML tags, imports, `##` prefixes, list markers). Target: `max_ai_likelihood` below your threshold (0.02 is a strong bar; many hand-written docs sit at 0.00).

## The loop (this is the whole method)

1. Score the full document. Note max/avg and the hottest window.
2. Snapshot the file whenever it's your best score so far (`cp file /tmp/best.md`).
3. Edit ONLY the hottest window's stretch in the file. One window per round.
4. Rescore the FULL document. Improved → new best snapshot. Regressed → restore the snapshot and try a different lever on the same window.
5. Repeat. Expect 10–35 rounds per document. Expect HALF your plausible edits to regress — reverting is the core move, not a failure.

Hard-won rules:
- **Never score snippets standalone.** The same paragraph scored 88% inside a doc and 1.7% alone; short texts get leniency. Only whole-file scores are real.
- **Window slicing is length-sensitive.** A ±2-character change can reslice the doc and shuffle window scores. Don't chase small oscillations; trust the max over 2–3 runs.
- **When a window resists ~10 variants, stop.** You've hit a content floor (see below), and further syntax edits waste rounds.

## Edits that lower scores (ranked by measured impact)

1. **Dissolve bold-term bullet lists** (`**Term.** Explanation.` ×N) into flowing prose. Single biggest lever found (90% → 16% on one section).
2. **De-parallelize everything**: "Not X. It's Y." pairs, triple lists, `A → B` arrow tables, anaphora used as scaffolding. Convert to one uneven sentence with a trailing clause ("...at which point it's worthless"). An and-chain beats a serial-comma list ("budget and team capacity and whatever is technically feasible": −18 points).
3. **Loosen syntax, not vocabulary**: mid-sentence connectives ("though", "which is to say", "at which point", "basically"), sentences opening with time/place ("Back in 2022...", "Three weeks in..."), one clause that runs on longer than strictly needed.
4. **Vary sentence length inside hot paragraphs** — one very short sentence, one rambler.
5. **Rename clever/ironic section headers to plain ones** ("I built tool use before it was cool" → "We built tool use a year early": −9 points). But test — occasionally backfires.
6. **Tiny word swaps late in the game**: "exploded"→"blew up", "wobbles"→"wobbled". Worth 3–9 points each once the big structures are gone.
7. **First-person, concrete anchors**: dates, folder names, "the version I keep imagining...".

## Edits that BACKFIRE (all measured, all reverted)

- Added wry asides/jokes (one spiked a window 4.7% → 88%).
- Choppy colloquial fragments ("It's 1999 out here.") — choppier reads MORE AI, not less. Looser beats choppier, always.
- "plus X, plus Y" flattening; rhetorical questions; colon-led openers ("Here's the thing:"); over-hedging every sentence.
- Editing sentences ADJACENT to a hot stretch — often re-heats a previously cooled window.

## Failure modes: when syntax can't win

The detector saturates on certain CONTENT, and no syntax edit produces any gradient (windows pinned at 100% through 8+ distinct rewrites). Observed saturation classes:
- **Surrealist/poetic fiction** — the register itself (concrete-of-abstract imagery) is the signal. Floor: 100%.
- **Visionary product-doc prose** — mission statements, "this changes everything" registers. Floors: 76–100%.
- **Dense technical mechanics** (special tokens, pipelines) and **stat-heavy stretches** that must stay verbatim. Floors: 57–87%.

When you hit these, the honest options are: (a) accept the floor and disclose AI assistance, (b) let the human author rewrite that stretch in their own words from scratch (this is what actually works — human-drafted text scores near 0 effortlessly), or (c) add genuinely new concrete material only the author could supply. Do NOT keep grinding syntax; 34-round runs confirmed the plateau is real.

## Ethics note

Use this to make co-written work read as the humans-plus-tools artifact it is, not to launder pure machine output past reviewers, teachers, or editors who are entitled to know. The strongest de-detection technique found in the entire experiment was the author's own sentences — text the human actually wrote scores near-zero with no tricks at all, which tells you what the detector is really measuring.
