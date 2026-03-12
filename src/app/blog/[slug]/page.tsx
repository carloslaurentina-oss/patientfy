import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { payloadFetchBySlug } from "@/lib/payload/client";
import type { BlogPost } from "@/lib/payload/types";
import RichText from "@/components/ui/RichText";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await payloadFetchBySlug<BlogPost>("blog-posts", slug);
  return { title: post?.seo?.title || `${post?.title || "Blog"} | Patientfy` };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await payloadFetchBySlug<BlogPost>("blog-posts", slug);

  if (!post) notFound();

  const dateFormatted = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const relatedPosts = (post.relatedPosts || []) as BlogPost[];

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">{dateFormatted}</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
              {post.title}
            </h1>
            <p className="text-base text-neutral-500">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-medium padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
            <article className="flex flex-col gap-6">
              <div className="aspect-video bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center placeholder-cross">
                <span className="text-neutral-400 text-xs uppercase tracking-widest">
                  Featured Image
                </span>
              </div>
              {post.body ? (
                <RichText
                  content={post.body}
                  className="flex flex-col gap-4 text-base text-neutral-600 leading-relaxed [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:text-neutral-1000 [&>h2]:mt-4 [&>ul]:flex [&>ul]:flex-col [&>ul]:gap-2 [&>ul]:pl-5 [&>ul>li]:list-disc"
                />
              ) : (
                <p className="text-base text-neutral-600">Content coming soon.</p>
              )}
            </article>

            <aside className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-1000 uppercase tracking-wider">
                  About the Author
                </h3>
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-400 text-[10px]">Photo</span>
                </div>
                <p className="text-sm text-neutral-500">
                  {post.author?.name || "Team Member"}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {post.author?.role || "Dentist"}
                </p>
              </div>

              {relatedPosts.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-sm font-semibold text-neutral-1000 uppercase tracking-wider">
                    Related Posts
                  </h3>
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.slug}`}
                      className="text-sm text-neutral-500 hover:text-neutral-1000 transition-colors py-2 border-b border-neutral-100 last:border-0"
                    >
                      {related.title}
                    </Link>
                  ))}
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
