import Eyebrow from "@/components/ui/Eyebrow";
import AnimateOnScroll, { StaggerChildren } from "@/components/ui/AnimateOnScroll";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-1000">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-200">
    <path
      d="M10.5 18H6.5C6.5 14.7 8.2 12 12 10.5L13 12.5C10.7 13.6 10 15 10 16.5H13V22H7V18H10.5ZM22.5 18H18.5C18.5 14.7 20.2 12 24 10.5L25 12.5C22.7 13.6 22 15 22 16.5H25V22H19V18H22.5Z"
      fill="currentColor"
    />
  </svg>
);

type Testimonial = {
  _id: string;
  quote: string;
  authorName: string;
  authorMeta: string;
  rating: number;
};

export default async function TestimonialsSection() {
  const testimonials = await sanityFetch<Testimonial[]>({
    query: ALL_TESTIMONIALS_QUERY,
    tags: ["testimonial"],
  });

  return (
    <section id="reviews" className="padding-section-medium bg-neutral-50">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <AnimateOnScroll>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <Eyebrow variant="dark">Reviews</Eyebrow>
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
                  What Our Patients Say
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <span className="text-sm font-semibold text-neutral-1000 ml-1">4.9</span>
                <span className="text-sm text-neutral-400">&middot; 200+ reviews</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {testimonials.map((t) => (
              <div
                key={t._id}
                className="group bg-white border border-neutral-200 rounded-xl p-8 flex flex-col gap-5 hover:border-neutral-300 transition-colors duration-300 relative"
              >
                <QuoteIcon />

                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>

                <p className="text-sm text-neutral-600 flex-1 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-neutral-100 rounded-full flex items-center justify-center">
                    <span className="text-neutral-400 text-xs font-semibold">
                      {t.authorName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-1000">{t.authorName}</p>
                    <p className="text-xs text-neutral-400">{t.authorMeta}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
