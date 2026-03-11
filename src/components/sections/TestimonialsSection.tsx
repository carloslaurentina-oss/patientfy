import Eyebrow from "@/components/ui/Eyebrow";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500">
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

const testimonials = [
  {
    quote: "Amazing experience! The team was professional and caring. I highly recommend this dental practice to anyone looking for quality care.",
    author: "John D.",
    meta: "Patient since 2023",
  },
  {
    quote: "I've been coming here for years and the service just keeps getting better. The whole team makes me feel comfortable every visit.",
    author: "Sarah M.",
    meta: "Patient since 2021",
  },
  {
    quote: "State-of-the-art facility with compassionate staff. They took great care of my whole family and made us feel at home.",
    author: "Mike R.",
    meta: "Patient since 2022",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="padding-section-medium bg-white">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Eyebrow variant="dark">Reviews</Eyebrow>
                <span className="section-number hidden lg:inline">05 / 06</span>
              </div>
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group border border-neutral-200 p-8 flex flex-col gap-5 hover:border-neutral-400 transition-colors duration-300 relative"
              >
                {/* Quote mark */}
                <QuoteIcon />

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>

                {/* Quote text */}
                <p className="text-sm text-neutral-600 flex-1 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-9 h-9 bg-neutral-100 flex items-center justify-center">
                    <span className="text-neutral-400 text-xs font-semibold">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-1000">{t.author}</p>
                    <p className="text-xs text-neutral-400">{t.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
