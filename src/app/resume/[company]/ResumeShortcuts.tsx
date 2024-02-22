"use client";

import {
  RESUME,
  ResumeItem,
  nextResumeItem,
  prevResumeItem,
  slugify,
} from "@/data/resume";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

export const ResumeShortcuts: React.FC<{
  currentResumeItem: string;
}> = ({ currentResumeItem }) => {
  const nextCompany = nextResumeItem(currentResumeItem, RESUME);
  const prevCompany = prevResumeItem(currentResumeItem, RESUME);

  const router = useRouter();
  const navigate = (company: ResumeItem | null) => () => {
    if (!company) return;
    router.push(`/resume/${slugify(company.company)}`);
  };

  useHotkeys("right, down, k", navigate(nextCompany));
  useHotkeys("left, up, j", navigate(prevCompany));

  return (
    <div className="flex flex-row gap-5 items-center">
      {prevCompany && (
        <Link
          href={`/resume/${slugify(prevCompany.company)}`}
          className="hover:opacity-50"
        >
          &larr;
        </Link>
      )}
      {(!prevCompany || !nextCompany) && <Link href="/">🏠</Link>}
      {nextCompany && (
        <Link
          href={`/resume/${slugify(nextCompany.company)}`}
          className="hover:opacity-50"
        >
          &rarr;
        </Link>
      )}
    </div>
  );
};
