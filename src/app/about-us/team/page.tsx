import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = { title: "Our Team | Patientfy" };

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  slug: string;
  image: string | null;
};

export default async function TeamPage() {
  const team = await sanityFetch<TeamMember[]>({
    query: ALL_TEAM_MEMBERS_QUERY,
    tags: ["teamMember"],
  });

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Meet the professionals</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Our Team</h1>
            <p className="text-base text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus viverra.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Link
                key={member._id}
                href={`/about-us/team/${member.slug}`}
                className="border border-neutral-200 flex flex-col hover:border-primary-500 transition-colors"
              >
                <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-400 text-sm">Image</span>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-1000">{member.name}</h3>
                  <p className="text-sm text-primary-600">{member.role}</p>
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
