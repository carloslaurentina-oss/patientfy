import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { payloadFetchAll } from "@/lib/payload/client";
import type { Location } from "@/lib/payload/types";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Locations | Patientfy" };

export default async function LocationsPage() {
  const locations = await payloadFetchAll<Location>("locations", {
    sort: "order",
  });

  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Our offices</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Locations</h1>
            <p className="text-base text-neutral-500">
              Find a location near you and schedule your visit.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.id}
                className="border border-neutral-200 rounded-xl p-8 flex flex-col gap-5 hover:border-neutral-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-1000">{location.name}</h3>
                </div>

                <div className="flex flex-col gap-1.5 text-sm text-neutral-500">
                  <p>{location.address}</p>
                  <p>{`${location.city}, ${location.state} ${location.zip}`}</p>
                  <p>{location.phone}</p>
                </div>

                <p className="text-sm text-neutral-400">{`Mon–Fri: ${location.hours?.monday || "9 AM–5 PM"}`}</p>

                <div className="flex gap-3 mt-auto pt-2">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="button self-start text-sm"
                  >
                    Book Now
                  </Link>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((location.address || "") + " " + (location.city || "") + ", " + (location.state || "") + " " + (location.zip || ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-1000 underline underline-offset-4 hover:text-neutral-600 transition-colors flex items-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
