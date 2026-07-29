"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

/** j/k (and arrow-key) navigation between essays, mirroring the resume pages:
 *  k/right/down → next (older), j/left/up → previous (newer). */
export const EssayShortcuts = ({
  newerSlug,
  olderSlug,
}: {
  newerSlug: string | null;
  olderSlug: string | null;
}) => {
  const router = useRouter();
  const navigate = (slug: string | null) => () => {
    if (slug) router.push(`/thoughts/${slug}`);
  };

  useHotkeys("right, down, k", navigate(olderSlug));
  useHotkeys("left, up, j", navigate(newerSlug));

  return null;
};
