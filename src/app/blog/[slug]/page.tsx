import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Blog Post | Patientfy" };

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-1000 text-white">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="light">March 1, 2026</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">{title}</h1>
          </div>
        </div>
      </section>

      <div className="aspect-video bg-neutral-200 w-full max-h-[500px] flex items-center justify-center">
        <span className="text-neutral-400 text-sm">Hero image</span>
      </div>

      <section className="padding-section-medium bg-white">
        <div className="container-small padding-global">
          <article className="prose prose-lg max-w-none">
            <p className="text-base text-neutral-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mt-4">
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Sed sed condimentum risus.
            </p>
            <h2 className="text-2xl font-semibold text-neutral-1000 mt-8 mb-4">Key Points</h2>
            <ul className="flex flex-col gap-2">
              {["Point one about dental health", "Point two about care routines", "Point three about visits"].map((p, i) => (
                <li key={i} className="text-base text-neutral-700">{p}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
