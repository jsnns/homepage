import { BaseMetadata } from "@/data/loaders";
import { PostMetadata } from "@/data/post";
import { ProjectMetadata, isProjectMetadata } from "@/data/project";
import { DateTime } from "luxon";
import Link from "next/link";
import { Box, ExternalLink } from "react-feather";

export const LinkList: React.FC<{
  links: (BaseMetadata | ProjectMetadata | PostMetadata)[];
}> = ({ links }) => {
  return (
    <>
      {links.map((link) =>
        isProjectMetadata(link) ? (
          <ProjectListItem {...link} key={link.title} />
        ) : (
          <LinkListItem {...link} key={link.title} />
        )
      )}
    </>
  );
};

export const LinkListItem: React.FC<BaseMetadata> = ({
  title,
  slug,
  parsedDate,
  category,
}) => {
  return (
    <Link
      href={`/${category}/${slug}`}
      className="hover:-translate-x-4 ease-out transition-all underline-offset-2 underline decoration-foreground/50"
    >
      <p>{title}</p>
    </Link>
  );
};

export const ProjectListItem: React.FC<ProjectMetadata> = ({
  title,
  liveUrl,
  parsedDate,
}) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={liveUrl}
      className="hover:-translate-x-4 ease-out transition-all group relative underline-offset-2 underline decoration-foreground/50"
    >
      <p className="hidden md:block absolute right-full bg-opacity-10 text-white rounded-md py-1 px-2 -mx-2 -my-1 mr-3 scale-0 group-hover:scale-100 transition-all delay-300 duration-100 text-opacity-50 bg-white text-sm">
        Project
      </p>

      <p className="flex items-center gap-1">
        {title}{" "}
        <span>
          <ExternalLink className="h-4 w-4" />
        </span>
      </p>
    </Link>
  );
};
