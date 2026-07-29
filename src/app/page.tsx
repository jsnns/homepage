import type { Metadata } from "next";
import Link from "next/link";
import { DateTime } from "luxon";
import { getPostMetadatas } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import { BEFORE_THIS, FIND_ME, THOUGHTS_INDEX } from "@/data/thoughts-index";
import "./home.css";

const dateChip = (parsedDate: DateTime | undefined, override?: string) => {
  if (override) return override;
  if (!parsedDate) return "";
  return parsedDate.toFormat("yyyy");
};

interface Row {
  slug: string;
  title: string;
  annotation: string;
  startHere: boolean;
  chip: string;
}

async function getRows(): Promise<Row[]> {
  const posts = await getPostMetadatas<PostMetadata>("src/app/thoughts");
  const bySlug = new Map(posts.map((p) => [p.slug, p]));

  const rows: Row[] = [];
  for (const entry of THOUGHTS_INDEX) {
    const post = bySlug.get(entry.slug);
    if (!post) continue;
    bySlug.delete(entry.slug);
    rows.push({
      slug: entry.slug,
      title: post.title,
      annotation: entry.annotation,
      startHere: !!entry.startHere,
      chip: dateChip(post.parsedDate, entry.dateLabel),
    });
  }
  // Anything published but not yet curated still shows, newest first.
  const uncurated = Array.from(bySlug.values()).sort(
    (a, b) => b.parsedDate.toMillis() - a.parsedDate.toMillis()
  );
  for (const post of uncurated) {
    rows.push({
      slug: post.slug,
      title: post.title,
      annotation: "",
      startHere: false,
      chip: dateChip(post.parsedDate),
    });
  }
  return rows;
}

export default async function Home() {
  const rows = await getRows();

  return (
    <main className="paper relative min-h-svh text-[#14110d]">
      {/* red crown */}
      <div className="absolute inset-x-0 top-0 z-10 h-[6px] bg-accent md:h-[7px]" />

      <div className="relative mx-auto min-h-svh max-w-[880px]">
        {/* left rail (desktop) */}
        <div className="absolute bottom-0 left-[52px] top-[7px] hidden w-px bg-[#e0d6c4] md:block" />
        <div className="rail-wordmark hidden md:block">workbyjacob.com</div>

        <div className="px-[26px] pb-12 pt-[40px] md:py-[51px] md:pl-[84px] md:pr-[60px]">
          {/* header */}
          <div className="flex items-baseline justify-between gap-3">
            <h1 className="text-[24px] font-semibold tracking-[-0.012em] md:text-[30px] md:tracking-[-0.015em]">
              Jacob Sansbury
            </h1>
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#a39a89] md:text-[9px] md:tracking-[0.2em]">
              <span className="md:hidden">Spawn · SF</span>
              <span className="hidden md:inline">Spawn · San Francisco</span>
            </span>
          </div>

          <p className="mt-[14px] max-w-[56ch] text-[17px] leading-[1.44] text-[#221e18] md:mt-[18px] md:text-[20px] md:leading-[1.45]">
            I run{" "}
            <a href="https://spawn.co" className="border-b border-accent no-underline">
              Spawn
            </a>
            . A place to make games with your friends. Half of my employees
            don&apos;t have bodies. I write about navigating the singularity
            from inside a six-person company.
          </p>

          <div className="mt-[22px] md:mt-6 md:grid md:grid-cols-[1fr_140px] md:items-start md:gap-7">
            {/* thoughts */}
            <section>
              <div className="flex items-baseline gap-2 border-b border-[#d9cfbc] pb-[6px] md:pb-[7px]">
                <h2 className="font-mono text-[8px] font-normal uppercase tracking-[0.26em] md:text-[9px] md:tracking-[0.28em]">
                  Thoughts
                </h2>
                <span className="flex-1" />
                <span className="flex items-center gap-[6px] font-mono text-[8px] uppercase tracking-[0.12em] text-[#b0a794] md:text-[9px] md:tracking-[0.14em]">
                  <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                  start here
                </span>
              </div>

              <div className="grid">
                {rows.map((row, i) => (
                  <Link
                    key={row.slug}
                    href={`/thoughts/${row.slug}`}
                    className={`thought-row grid min-h-[44px] content-center grid-cols-[16px_1fr] gap-1 py-[10px] pr-1 no-underline md:pr-0 ${
                      i < rows.length - 1 ? "border-b border-[#eae2d1]" : ""
                    }`}
                  >
                    <span className="flex items-center">
                      {row.startHere && (
                        <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                      )}
                    </span>
                    <span className="grid min-w-0 gap-[2px] md:flex md:items-baseline md:gap-[10px]">
                      <span className="whitespace-nowrap text-[17px] font-semibold leading-[1.2] md:text-[19px] md:leading-normal">
                        {row.title}
                      </span>
                      <span className="min-w-0 text-[13px] text-[#8c8577] md:flex-1 md:overflow-hidden md:overflow-ellipsis md:whitespace-nowrap md:text-[15px]">
                        {row.annotation}
                      </span>
                      <span className="hidden whitespace-nowrap font-mono text-[9px] text-[#c0b8a6] md:ml-auto md:block">
                        {row.chip}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* sidebar (desktop) */}
            <aside className="hidden flex-col gap-5 md:flex">
              <div>
                <div className="border-b border-[#d9cfbc] pb-[7px] font-mono text-[9px] uppercase tracking-[0.24em] text-[#a39a89]">
                  Before this
                </div>
                <div className="mt-[11px] grid gap-[9px] text-[14px] leading-[1.35]">
                  {BEFORE_THIS.map((item) => (
                    <div key={item.company}>
                      <Link
                        href={item.href}
                        className="border-b border-[#14110d]/25 font-semibold no-underline"
                      >
                        {item.company}
                      </Link>
                      <div className="text-[#8c8577]">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="border-b border-[#d9cfbc] pb-[7px] font-mono text-[9px] uppercase tracking-[0.24em] text-[#a39a89]">
                  Find me
                </div>
                <div className="mt-[11px] grid gap-[6px] font-mono text-[11px]">
                  {FIND_ME.map((item) => (
                    <a key={item.label} href={item.href} className="text-accent no-underline">
                      {item.label} →
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* before this + find me (mobile prose form) */}
          <div className="md:hidden">
            <div className="mt-5 flex items-baseline gap-2 border-b border-[#d9cfbc] pb-[6px]">
              <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#a39a89]">
                Before this
              </span>
            </div>
            <p className="mt-[10px] text-[14px] leading-[1.5] text-[#4c463c]">
              Agentic AI at{" "}
              <Link href="/resume/robinhood" className="border-b border-dotted border-[#b0a794] no-underline">
                Robinhood
              </Link>
              , which got there by buying{" "}
              <Link href="/resume/pluto" className="border-b border-dotted border-[#b0a794] no-underline">
                Pluto
              </Link>
              . Before that{" "}
              <Link href="/resume/nvidia" className="border-b border-dotted border-[#b0a794] no-underline">
                NVIDIA
              </Link>{" "}
              and{" "}
              <Link href="/resume/bridgewater-associates" className="border-b border-dotted border-[#b0a794] no-underline">
                Bridgewater
              </Link>
              .
            </p>
            <div className="mt-[18px] flex gap-[14px] font-mono text-[11px] tracking-[0.08em]">
              {FIND_ME.map((item) => (
                <a key={item.label} href={item.href} className="text-accent no-underline">
                  {item.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Jacob Sansbury — Founder, Engineer, Designer",
  description:
    "Jacob Sansbury runs Spawn, a place to make games with your friends. He writes about navigating the singularity from inside a six-person company.",
};
