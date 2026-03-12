import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ValueSection from "@/components/sections/ValueSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import { payloadFetchAll } from "@/lib/payload/client";
import type { TeamMember } from "@/lib/payload/types";

export default async function Home() {
  const team = await payloadFetchAll<TeamMember>("team-members", {
    sort: "order",
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
