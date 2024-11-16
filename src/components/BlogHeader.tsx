import { BaseMetadata } from "@/data/loaders";

export const BlogHeader = ({ metadata }: { metadata: BaseMetadata }) => {
  return (
    <header className="mt-12 mb-16 flex flex-col gap-2">
      <h1 className="text-3xl text-accent font-semibold">{metadata.title}</h1>
      <p className="">
        {metadata.parsedDate.toLocaleString({
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
    </header>
  );
};
