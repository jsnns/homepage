import { DateTime } from "luxon";
import { promises as fs } from "fs";
import path from "path";

export interface BaseMetadata {
  title: string;
  date: string;
  slug: string;
  parsedDate: DateTime;
  category: string;
}

// find all metadata.ts files in the app/thoughts/** directories
// and find all exported PostMetadata objects
// and create a list of them
async function findMetadataFiles(dir: string): Promise<string[]> {
  let files: string[] = [];
  const items = await fs.readdir(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      files = files.concat(await findMetadataFiles(path.join(dir, item.name)));
    } else if (item.isFile() && item.name.endsWith("metadata.json")) {
      files.push(path.join(dir, item.name));
    }
  }
  return files;
}

async function loadPostMetadata<T extends BaseMetadata>(
  files: string[]
): Promise<T[]> {
  const posts: T[] = [];
  for (const file of files) {
    try {
      const content = await fs.readFile(file, "utf8");
      // TODO: optional and validation for metadata while loading
      let metadata: T = JSON.parse(content);
      // Extract the slug from the parent directory name if not provided
      if (!metadata.slug) {
        const slug = path.basename(path.dirname(file));
        metadata = { ...metadata, slug }; // Add/override slug in metadata
      }
      if (metadata.date) {
        metadata.parsedDate = DateTime.fromISO(metadata.date);
      }
      posts.push(metadata);
    } catch (error) {
      console.error(`Error reading or parsing ${file}:`, error);
    }
  }

  return posts;
}

export async function getPostMetadatas<T extends BaseMetadata>(p: string) {
  const category = p.split("/").pop() || "";
  const thoughtsDir = path.join(process.cwd(), p);
  const metadataFiles = await findMetadataFiles(thoughtsDir);
  const postMetadatas = await loadPostMetadata<T>(metadataFiles);
  const postMetadatasWithCategory = postMetadatas.map((metadata) => ({
    ...metadata,
    category,
  }));

  return postMetadatasWithCategory;
}

/** mean to be called from within the post to get the active metadata
 *
 * example usage:
 * ```tsx
 * import { getPostMetadata } from "@/data/loaders";
 * import path from "path";
 * const metadata: BaseMetadata = await getPostMetadata(__dirname);
 * ```
 */
export async function getPostMetadata<T extends BaseMetadata>(
  dir: string
): Promise<T | null> {
  console.log(dir);
  const metadataFile = path.join(dir, "metadata.json");
  try {
    const content = await fs.readFile(metadataFile, "utf8");
    let metadata: T = JSON.parse(content);
    if (metadata.date) {
      metadata.parsedDate = DateTime.fromISO(metadata.date);
    }
    return metadata;
  } catch (error) {
    console.error(`Error reading or parsing ${metadataFile}:`, error);
    return null;
  }
}

export const enhanceMetadata = <T extends BaseMetadata>(metadata: T): T => {
  return { ...metadata, parsedDate: DateTime.fromISO(metadata.date) };
};
