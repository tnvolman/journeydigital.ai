import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal — Journey Digital | Church Website Insights",
  description:
    "Church website design insights, stories, and guidance from Journey Digital — a church web studio in Wilson, NC. Built for the Kingdom.",
  openGraph: {
    title: "Journal — Journey Digital | Church Website Insights",
    description:
      "Church website design insights, stories, and guidance from Journey Digital — a church web studio in Wilson, NC. Built for the Kingdom.",
    url: "https://journeydigital.ai/blog",
  },
};

export default function JournalIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-line px-6 pt-[140px] pb-[72px] md:px-8">
          <div className="mx-auto max-w-[1140px]">
            <div className="mb-5 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
              Journal
            </div>
            <h1 className="mb-4 font-serif text-[clamp(40px,5.5vw,70px)] leading-[1.08] font-semibold tracking-[-0.03em] text-cream">
              From the studio.
            </h1>
            <p className="max-w-[50ch] text-lg text-fog">
              Insights on church websites, digital presence, and building for
              the Kingdom.
            </p>
          </div>
        </header>

        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-[1140px]">
            {posts.length === 0 ? (
              <p className="text-lg text-fog">No posts yet.</p>
            ) : (
              <div className="flex flex-col gap-px overflow-hidden rounded-md border border-line bg-line">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="grid grid-cols-1 items-center gap-4 bg-bg px-7 py-10 transition-colors hover:bg-panel md:grid-cols-[1fr_auto] md:px-11"
                  >
                    <div>
                      <div className="mb-3 text-xs tracking-[0.14em] text-fog uppercase">
                        {formatPostDate(post.date)}
                      </div>
                      <h2 className="mb-2.5 font-serif text-[clamp(20px,2.6vw,28px)] font-semibold tracking-[-0.02em] text-cream">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition-colors hover:text-accent"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="max-w-[64ch] text-[15.5px] text-fog">
                        {post.description}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] tracking-[0.08em] text-accent uppercase transition-[gap] hover:gap-2.5"
                    >
                      Read →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
