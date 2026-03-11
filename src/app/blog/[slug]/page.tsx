import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: "Blog Post | Patientfy" };

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">March 1, 2026</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">{title}</h1>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-medium padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-16">
            {/* Article */}
            <article className="flex flex-col gap-6">
              <div className="aspect-video bg-neutral-100 rounded-xl border border-neutral-200 flex items-center justify-center placeholder-cross">
                <span className="text-neutral-400 text-xs uppercase tracking-widest">Featured Image</span>
              </div>

              <div className="flex flex-col gap-4 text-base text-neutral-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                </p>
                <p>
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Sed sed condimentum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-1000 mt-4">Key Points</h2>
                <ul className="flex flex-col gap-2 pl-5">
                  {["Point one about dental health and daily care", "Point two about professional cleaning routines", "Point three about regular dental visits"].map((p, i) => (
                    <li key={i} className="text-base text-neutral-600 list-disc">{p}</li>
                  ))}
                </ul>

                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-1000 mt-4">Conclusion</h2>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                </p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <h3 className="text-sm font-semibold text-neutral-1000 uppercase tracking-wider">About the Author</h3>
                <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
                  <span className="text-neutral-400 text-[10px]">Photo</span>
                </div>
                <p className="text-sm text-neutral-500">Dr. Team Member</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-neutral-1000 uppercase tracking-wider">Related Posts</h3>
                {["First Visit Guide", "Benefits of Cleanings", "Cosmetic Options"].map((post, i) => (
                  <Link
                    key={i}
                    href="/blog"
                    className="text-sm text-neutral-500 hover:text-neutral-1000 transition-colors py-2 border-b border-neutral-100 last:border-0"
                  >
                    {post}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
