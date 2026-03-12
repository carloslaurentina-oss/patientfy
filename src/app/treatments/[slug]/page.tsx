import { notFound } from "next/navigation";
import { payloadFetchBySlug } from "@/lib/payload/client";
import type { Treatment } from "@/lib/payload/types";
import TreatmentDetail from "./TreatmentDetail";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = await payloadFetchBySlug<Treatment>("treatments", slug);
  return {
    title: treatment?.seo?.title || `${treatment?.title || "Treatment"} | Patientfy`,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = await payloadFetchBySlug<Treatment>("treatments", slug);

  if (!treatment) notFound();

  return <TreatmentDetail treatment={treatment} />;
}
