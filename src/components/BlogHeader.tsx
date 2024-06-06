import { BaseMetadata } from "@/data/loaders";

export const BlogHeader = ({ metadata }: { metadata: BaseMetadata }) => {
  return (
    <>
      {metadata.unessay && (
        <p className="text-sm font-light opacity-50 p-3 rounded-md border-white border">
          This post is an unessay. To me, this means a living representation of
          how I view a topic at a given time. It is not a final product, but a
          snapshot of my current thinking and understanding. I post these when I
          find myself encoutnering a topic or idea frequently. They are often a
          compliation of notes, voice memos, and other stray thoughts on a
          topic.
        </p>
      )}
      <header className="mt-12 mb-16 flex flex-col gap-4">
        <h1 className="text-3xl font-light opacity-50">{metadata.title}</h1>
        <p className="opacity-25">
          {metadata.parsedDate.toLocaleString({
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </header>
    </>
  );
};
