import { BaseMetadata } from "@/data/loaders";
import { BlogNav } from "./BlogNav";

export const BlogHeader = ({ metadata }: { metadata: BaseMetadata }) => {
  return (
    <header className="mt-12 mb-16 flex flex-col gap-4">
      <BlogNav title={metadata.title} />
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
