import { promises as fs } from "fs";
import path from "path";
import { BaseMetadata, getPostMetadatas } from "@/data/loaders";
import { BlogNav } from "./BlogNav";

// metadata.json files carry no slug (the loader derives it from the dirname),
// so resolve this essay's slug by title against the loaded corpus.
async function resolveSlug(title: string) {
  const posts = await getPostMetadatas<BaseMetadata>("src/app/thoughts");
  return posts.find((p) => p.title === title)?.slug ?? null;
}

async function essayLength(slug: string) {
  try {
    const src = await fs.readFile(
      path.join(process.cwd(), "src/app/thoughts", slug, "page.mdx"),
      "utf8"
    );
    const words = src
      .split("\n")
      .filter((line) => !/^\s*(import|export)\b/.test(line))
      .join(" ")
      .replace(/<[^>]+>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;
    return { words, minutes: Math.max(1, Math.round(words / 220)) };
  } catch {
    return null;
  }
}

const MetaLines = ({
  metadata,
  length,
}: {
  metadata: BaseMetadata;
  length: { words: number; minutes: number } | null;
}) => (
  <>
    <div>{metadata.parsedDate.toFormat("yyyy-MM-dd")}</div>
    {length && <div>{length.words.toLocaleString("en-US")} words</div>}
    {length && <div>{length.minutes} min</div>}
    {metadata.tags?.map((tag, i) => (
      <div key={tag} className={`text-accent ${i === 0 ? "mt-[10px]" : ""}`}>
        {tag}
      </div>
    ))}
  </>
);

export const BlogHeader = async ({ metadata }: { metadata: BaseMetadata }) => {
  const slug = metadata.slug ?? (await resolveSlug(metadata.title));
  const length = slug ? await essayLength(slug) : null;

  return (
    <header className="mb-[40px]">
      <BlogNav title={metadata.title} />

      <div className="mt-8 md:mt-[52px]">
        {/* meta column — floats into the right rail on desktop */}
        <div className="sidenote hidden border-l border-[#e4dcca] pl-4 font-mono text-[10px] uppercase leading-[2] tracking-[0.1em] text-[#a39a89] md:block">
          <MetaLines metadata={metadata} length={length} />
        </div>

        <h1 className="text-[34px] font-semibold leading-[1.06] tracking-[-0.018em] text-accent md:text-[42px] md:leading-[1.04]">
          {metadata.title}
        </h1>
        {metadata.deck && (
          <p className="mt-[18px] max-w-[40ch] text-[17px] italic leading-[1.4] text-[#3b352c] md:text-[19px]">
            {metadata.deck}
          </p>
        )}

        {/* meta — single mono line on mobile */}
        <div className="mt-4 flex flex-wrap gap-x-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#a39a89] md:hidden [&>div.text-accent]:mt-0">
          <MetaLines metadata={metadata} length={length} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-[14px] md:-mr-[204px] md:mt-[46px]">
        <span className="h-[2px] w-[56px] bg-accent" />
        <span className="h-px flex-1 bg-[#e4dcca]" />
      </div>
    </header>
  );
};
