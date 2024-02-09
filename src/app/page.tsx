import { Resume } from "@/app/Resume";
import { RESUME } from "@/data/resume";
import { LinkList } from "./Links";
import { getPostMetadatas } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import { ProjectMetadata } from "@/data/project";
import "./home.css";

export default async function Home() {
  const postList = await getPostMetadatas<PostMetadata>("src/app/thoughts");
  const projectList = await getPostMetadatas<ProjectMetadata>(
    "src/app/projects"
  );

  const allLinks = [...postList, ...projectList].sort(
    (a, b) => b.parsedDate.toMillis() - a.parsedDate.toMillis()
  );

  return (
    <main className="flex gap-12 md:grid md:grid-cols-2 md:min-h-screen flex-col p-8 md:p-24">
      <div className="flex flex-col grow">
        <p>Jacob Sansbury</p>
        <p className="opacity-50 italic">San Francisco, CA</p>
      </div>

      <div className="grid-cols-1 row-span-2 flex flex-col md:items-end grow">
        <div className="flex flex-col w-fit">
          <LinkList links={allLinks} />
        </div>
      </div>

      <div className="flex flex-col md:justify-end">
        <Resume resume={RESUME} />
      </div>
    </main>
  );
}
