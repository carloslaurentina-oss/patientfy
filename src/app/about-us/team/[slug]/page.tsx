import Eyebrow from "@/components/ui/Eyebrow";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { TEAM_MEMBER_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  slug: string;
  image: string | null;
  bio: any[];
  seo: { title: string; description: string } | null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await sanityFetch<TeamMember | null>({
    query: TEAM_MEMBER_BY_SLUG_QUERY,
    params: { slug },
    tags: ["teamMember"],
  });
  return { title: member?.seo?.title || `${member?.name || "Team Member"} | Patientfy` };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = await sanityFetch<TeamMember | null>({
    query: TEAM_MEMBER_BY_SLUG_QUERY,
    params: { slug },
    tags: ["teamMember"],
  });

  if (!member) notFound();

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Our Team</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">
              {member.name}
            </h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-[3/4] bg-neutral-100 flex items-center justify-center max-w-sm">
              <span className="text-neutral-400 text-sm">Image placeholder</span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-primary-600 font-semibold text-base mb-1">
                  {member.role}
                </p>
                <h2 className="text-3xl font-semibold text-neutral-1000">
                  {member.name}
                </h2>
              </div>
              {member.bio ? (
                <div className="text-base text-neutral-600 flex flex-col gap-4 [&>p]:leading-relaxed">
                  <PortableText value={member.bio} />
                </div>
              ) : (
                <p className="text-base text-neutral-600">
                  Biography coming soon.
                </p>
              )}
              <Link href="/contact-us" className="button self-start">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
