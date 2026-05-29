import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readingTime: number;
  tags: string[];
  content: string;
}

export interface BlogPostMetadata
  extends Omit<BlogPost, "content" | "readingTime"> {
  readingTime: number;
}

export async function getAllPosts(): Promise<BlogPostMetadata[]> {
  // Créer le répertoire s'il n'existe pas
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        author: data.author,
        readingTime: stats.minutes,
        tags: data.tags || [],
      } as BlogPostMetadata;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      category: data.category,
      author: data.author,
      readingTime: stats.minutes,
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}

export async function getPostsByCategory(
  category: string
): Promise<BlogPostMetadata[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}
