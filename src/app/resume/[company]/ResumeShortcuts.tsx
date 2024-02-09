"use client";

import {
  RESUME,
  ResumeItem,
  nextResumeItem,
  prevResumeItem,
  slugify,
} from "@/data/resume";
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

  return null;
};
