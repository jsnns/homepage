import { getPostMetadatas } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import Link from "next/link";
import { EssayShortcuts } from "./EssayShortcuts";

export const BlogNav = async ({ title }: { title: string }) => {
  const posts = await getPostMetadatas<PostMetadata>("src/app/thoughts");
  const sorted = posts.sort(
    (a, b) => b.parsedDate.toMillis() - a.parsedDate.toMillis()
  );

  const currentIndex = sorted.findIndex((p) => p.title === title);
  const newer = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const older =
    currentIndex >= 0 && currentIndex < sorted.length - 1
      ? sorted[currentIndex + 1]
      : null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#e4dcca] pb-[14px] font-mono text-[10px] uppercase tracking-[0.16em] text-[#a39a89] md:-mr-[204px]">
      <EssayShortcuts
        newerSlug={newer?.slug ?? null}
        olderSlug={older?.slug ?? null}
      />
      <Link href="/" className="whitespace-nowrap text-accent no-underline">
        ← Jacob Sansbury
      </Link>
      {currentIndex >= 0 && (
        <span className="whitespace-nowrap">
          Essay · {pad(currentIndex + 1)} / {pad(sorted.length)}
        </span>
      )}
    </div>
  );
};
