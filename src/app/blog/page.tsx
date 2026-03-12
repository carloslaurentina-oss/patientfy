import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { payloadFetchAll } from "@/lib/payload/client";
import type { BlogPost } from "@/lib/payload/types";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Blog | Patientfy" };

export default async function BlogPage() {
  const posts = await payloadFetchAll<BlogPost>("blog-posts", {
    sort: "-publishedAt",
  });

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Knowledge base</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Blog</h1>
            <p className="text-base text-neutral-500">
              Insights, tips, and news from our dental team.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group border border-neutral-200 rounded-xl flex flex-col overflow-hidden hover:border-neutral-400 transition-colors"
              >
                <div className="aspect-video bg-neutral-100 flex items-center justify-center placeholder-cross">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-neutral-1000 uppercase tracking-wider">{post.category}</span>
                    {post.publishedAt && (
                      <span className="text-xs text-neutral-400">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-1000 group-hover:text-neutral-600 transition-colors">{post.title}</h2>
                  <p className="text-sm text-neutral-500 flex-1">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
