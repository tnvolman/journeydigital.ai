import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL, studioPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...studioPages.map((page) => ({
      url: `${SITE_URL}${page.href}`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-09-05"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts,
  ];
}
