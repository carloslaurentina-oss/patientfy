import Link from "next/link";
import Eyebrow from "@/components/ui/Eyebrow";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const testimonials = [
  {
    quote: "Amazing experience! The team was professional and caring. I highly recommend this dental practice to anyone looking for quality care.",
    author: "John D.",
    meta: "Patient since 2023",
    image: null,
  },
  {
    quote: "I've been coming here for years and the service just keeps getting better. Dr. and the whole team make me feel comfortable every visit.",
    author: "Sarah M.",
    meta: "Patient since 2021",
    image: null,
  },
  {
    quote: "State-of-the-art facility with compassionate staff. They took great care of my whole family.",
    author: "Mike R.",
    meta: "Patient since 2022",
    image: null,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="padding-section-medium bg-white">
      <div className="container-large padding-global">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow variant="dark">Reviews</Eyebrow>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-1000">
                Lorem Ipsum Dolor
              </h2>
            </div>
            <p className="text-base text-neutral-600 max-w-sm lg:text-right">
              Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-neutral-200 p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-sm text-neutral-700 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-xs font-semibold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-1000">{t.author}</p>
                    <p className="text-xs text-neutral-500">{t.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/contact-us" className="button">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
