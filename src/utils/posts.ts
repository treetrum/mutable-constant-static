import type { CollectionEntry } from "astro:content";

export function getPostSlug(post: CollectionEntry<"posts">) {
  const year = post.data.date.getFullYear();
  return `/${year}/${post.data.slug}`;
}

export function sortPostsByDateDesc(posts: CollectionEntry<"posts">[]) {
  return [...posts].sort(
    (first, second) => second.data.date.getTime() - first.data.date.getTime()
  );
}

export function getPostExcerpt(postBody: string, maxLength = 220) {
  const plainText = postBody
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[\r\n]+/g, " ")
    .replace(/[#>*_~]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return `${plainText.slice(0, maxLength).trimEnd()}...`;
}
