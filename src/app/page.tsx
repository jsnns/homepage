import type { Metadata } from "next";
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
        <h1>
          Jacob Sansbury{" "}
          <span className="opacity-0 text-[1px]">Founder and CEO</span>
        </h1>
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

export const metadata: Metadata = {
  title: "Jacob Sansbury — Founder, Engineer, Designer",
  description:
    "Jacob Sansbury is the Founder and CEO of Pluto.fi, an autonomous agent for personal finance. Previously he was a technical leader at Bridgewater Associates and NVIDIA.",
};
