import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/blog";
import { Reveal } from "@/components/Reveal";

export function Journal() {
  const posts = getAllPosts();
  const featured = posts[0];

  return (
    <section id="journal" className="relative py-[110px]">
      <div className="mx-auto max-w-[1140px] px-6 md:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            <span className="font-medium text-fog">05</span> Journal
          </div>
          <h2 className="font-serif text-[clamp(30px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.02em] text-cream max-w-[16ch]">
            From the studio.
          </h2>
          <p className="mt-5 max-w-[50ch] text-[17px] text-fog">
            Insights on church websites, digital presence, and building for the
            Kingdom.
          </p>
        </Reveal>

        {featured ? (
          <Reveal className="mt-14">
            <Link
              href={`/blog/${featured.slug}`}
              className="grid grid-cols-1 items-center gap-4 overflow-hidden rounded-md border border-line bg-bg px-7 py-10 transition-colors hover:bg-panel md:grid-cols-[1fr_auto] md:px-11"
            >
              <div>
                <div className="mb-3 text-xs tracking-[0.14em] text-fog uppercase">
                  {formatPostDate(featured.date)}
                </div>
                <h3 className="mb-2.5 font-serif text-[clamp(20px,2.6vw,28px)] font-semibold tracking-[-0.02em] text-cream">
                  {featured.title}
                </h3>
                <p className="max-w-[64ch] text-[15.5px] text-fog">
                  {featured.description}
                </p>
              </div>
              <span className="text-[13px] tracking-[0.08em] text-accent uppercase">
                Read →
              </span>
            </Link>
          </Reveal>
        ) : null}

        <Reveal className="mt-8">
          <Link
            href="/blog"
            className="inline-flex gap-2 border-b border-accent pb-1 text-[15px] font-semibold text-cream transition-[gap] hover:gap-3.5"
          >
            All Journal posts →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
