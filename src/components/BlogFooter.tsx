import { BaseMetadata, getPostMetadatas } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import Link from "next/link";
import { Colophon } from "@/components/Colophon";

export const BlogFooter = async ({ metadata }: { metadata: BaseMetadata }) => {
  const posts = await getPostMetadatas<PostMetadata>("src/app/thoughts");
  const sorted = posts.sort(
    (a, b) => b.parsedDate.toMillis() - a.parsedDate.toMillis()
  );

  // metadata.json carries no slug; match by title against the loaded corpus.
  const currentIndex = sorted.findIndex((p) => p.title === metadata.title);
  const next =
    currentIndex >= 0 && currentIndex < sorted.length - 1
      ? sorted[currentIndex + 1]
      : null;
  const related = (metadata.related ?? [])
    .map((slug) => sorted.find((p) => p.slug === slug))
    .filter((p): p is PostMetadata => !!p);

  return (
    <footer className="clear-both mt-[64px] border-t border-[#e4dcca] pt-[22px] md:-mr-[204px]">
      <div className="grid grid-cols-2 gap-6">
      <div>
        {related.length > 0 && (
          <>
            <div className="mb-[10px] font-mono text-[9px] uppercase tracking-[0.2em] text-[#b0a794]">
              Related
            </div>
            <div className="grid gap-[6px] text-[17px]">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/thoughts/${post.slug}`}
                  className="w-fit border-b border-dotted border-[#b0a794] no-underline"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      {next && (
        <div className="text-right">
          <div className="mb-[10px] font-mono text-[9px] uppercase tracking-[0.2em] text-[#b0a794]">
            Next
          </div>
          <Link
            href={`/thoughts/${next.slug}`}
            className="border-b border-accent pb-[2px] text-[20px] no-underline"
          >
            {next.title} →
          </Link>
        </div>
      )}
      </div>
      <Colophon />
    </footer>
  );
};
