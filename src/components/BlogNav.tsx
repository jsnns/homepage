import { getPostMetadatas } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import Link from "next/link";

export const BlogNav = async ({ title }: { title: string }) => {
  const posts = await getPostMetadatas<PostMetadata>("src/app/thoughts");
  const sorted = posts.sort(
    (a, b) => b.parsedDate.toMillis() - a.parsedDate.toMillis()
  );

  const currentIndex = sorted.findIndex((p) => p.title === title);
  const newer = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const older =
    currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;

  return (
    <div className="flex flex-row gap-5 items-center">
      {newer && (
        <Link
          href={`/thoughts/${newer.slug}`}
          className="hover:opacity-50"
        >
          &larr;
        </Link>
      )}
      {(!newer || !older) && <Link href="/">🏠</Link>}
      {older && (
        <Link
          href={`/thoughts/${older.slug}`}
          className="hover:opacity-50"
        >
          &rarr;
        </Link>
      )}
    </div>
  );
};
