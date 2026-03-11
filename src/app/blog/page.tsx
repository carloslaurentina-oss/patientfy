import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog | Patientfy" };

const posts = [
  { title: "5 Tips for Better Oral Health", excerpt: "Discover the best practices for maintaining a healthy smile every day.", date: "March 1, 2026", slug: "5-tips-oral-health", category: "Tips" },
  { title: "What to Expect at Your First Visit", excerpt: "A guide to help you prepare for your first dental appointment with us.", date: "February 15, 2026", slug: "first-visit-guide", category: "Guide" },
  { title: "The Benefits of Regular Cleanings", excerpt: "Why professional dental cleanings are essential for long-term health.", date: "February 1, 2026", slug: "benefits-of-cleanings", category: "Education" },
  { title: "Cosmetic Dentistry Options", excerpt: "Explore the variety of cosmetic treatments available at our practice.", date: "January 15, 2026", slug: "cosmetic-options", category: "Cosmetic" },
  { title: "Understanding Dental Insurance", excerpt: "Navigate your dental benefits and maximize your coverage effectively.", date: "January 1, 2026", slug: "understanding-insurance", category: "Insurance" },
  { title: "How to Manage Dental Anxiety", excerpt: "Practical tips to feel more comfortable during your dental visits.", date: "December 15, 2025", slug: "manage-dental-anxiety", category: "Wellness" },
];

export default function BlogPage() {
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
            {posts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group border border-neutral-200 rounded-xl flex flex-col overflow-hidden hover:border-neutral-400 transition-colors"
              >
                <div className="aspect-video bg-neutral-100 flex items-center justify-center placeholder-cross">
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-neutral-1000 uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-neutral-400">{post.date}</span>
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
