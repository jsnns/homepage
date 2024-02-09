import { BaseMetadata } from "@/data/loaders";

export const BlogHeader = ({ metadata }: { metadata: BaseMetadata }) => {
  return (
    <header className="mt-12 mb-20 flex flex-col gap-4">
      <h1 className="text-3xl font-light opacity-50">{metadata.title}</h1>
      <p className="opacity-25">
        {metadata.parsedDate.toLocaleString({
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </header>
  );
};
