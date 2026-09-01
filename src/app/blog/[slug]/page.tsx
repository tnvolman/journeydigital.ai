import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { JournalCta } from "@/components/JournalCta";
import { MarkdownBody } from "@/components/MarkdownBody";
import { Nav } from "@/components/Nav";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const title = `${post.title} — Journey Digital`;
  const images = post.image
    ? [{ url: post.image, alt: post.imageAlt ?? post.title }]
    : undefined;

  return {
    title,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      url: `https://journeydigital.ai/blog/${post.slug}`,
      type: "article",
      publishedTime: `${post.date}T00:00:00.000Z`,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description: post.description,
      images: images?.map((image) => image.url),
    },
  };
}

export default async function JournalPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: `${post.date}T00:00:00.000Z`,
    author: {
      "@type": "Organization",
      name: "Journey Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Journey Digital",
      url: "https://journeydigital.ai",
    },
    url: `https://journeydigital.ai/blog/${post.slug}`,
    ...(post.image
      ? { image: `https://journeydigital.ai${post.image}` }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <header className="border-b border-line px-6 pt-[140px] pb-[60px] md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <Link
              href="/blog"
              className="mb-9 inline-flex items-center gap-2 text-xs tracking-[0.12em] text-fog uppercase transition-colors hover:text-cream"
            >
              ← All posts
            </Link>
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Journal
            </div>
            <h1 className="mb-5 max-w-[22ch] font-serif text-[clamp(32px,4.8vw,60px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
              {post.title}
            </h1>
            <p className="text-xs tracking-[0.12em] text-fog uppercase">
              {formatPostDate(post.date)}
            </p>
          </div>
        </header>

        <article className="px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1140px]">
            {post.image ? (
              <figure className="mb-12 overflow-hidden rounded-md border border-line">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? ""}
                  width={1600}
                  height={1067}
                  className="h-auto w-full object-cover"
                  priority
                />
              </figure>
            ) : null}
            <MarkdownBody content={post.content} />
          </div>
        </article>

        <JournalCta />
      </main>
      <Footer />
    </>
  );
}
