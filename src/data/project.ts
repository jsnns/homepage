import { BaseMetadata } from "./loaders";

export interface ProjectMetadata extends BaseMetadata {
  liveUrl: string;
  role: string;
  category: "projects";
}

export const isProjectMetadata = (
  metadata: BaseMetadata
): metadata is ProjectMetadata => {
  return metadata.category === "projects";
};
