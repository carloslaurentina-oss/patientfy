import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ValueSection from "@/components/sections/ValueSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const team = await sanityFetch<any[]>({
    query: ALL_TEAM_MEMBERS_QUERY,
    tags: ["teamMember"],
  });

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValueSection />
      <TeamSection team={team} />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
