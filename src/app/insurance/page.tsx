import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";

export const metadata: Metadata = { title: "Insurance | Patientfy" };

const options = [
  {
    number: "01",
    title: "Insurance",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "02",
    title: "FSA or HSA",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Financing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function InsurancePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div className="flex flex-col gap-6">
              <Eyebrow variant="dark">Check Your Benefits</Eyebrow>
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-neutral-1000">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-base text-neutral-500 leading-relaxed max-w-lg">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="flex flex-col gap-5 mt-2">
                {options.map((option) => (
                  <div key={option.number} className="flex gap-4">
                    <span className="text-sm font-bold text-neutral-1000 bg-neutral-100 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {option.number}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-neutral-1000">{option.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link href="/insurance/check-benefits" className="button">
                  Check Benefits Online
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="aspect-[1/1] bg-neutral-200/50 border border-neutral-200 rounded-2xl placeholder-cross placeholder-diag flex items-center justify-center">
                <span className="text-neutral-400 text-xs uppercase tracking-widest">Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
