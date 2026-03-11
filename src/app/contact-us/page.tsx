import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact Us | Patientfy" };

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Get in touch</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Contact Us</h1>
            <p className="text-base text-neutral-500">
              Schedule an appointment or ask us anything.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Appointments */}
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-1000">Appointments</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Book your visit online in just a few clicks. We'll confirm your appointment within 24 hours.
              </p>
              <Link href="/locations/book-city-state" className="button self-start text-sm mt-1">
                Book Now
              </Link>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-1000">Hours</h3>
              <div className="flex flex-col gap-2 text-sm text-neutral-500">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Location & Phone */}
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-neutral-1000">Location & Phone</h3>
              <div className="flex flex-col gap-2 text-sm text-neutral-500">
                <p>23411 Aliso Viejo Pkwy, Suite D<br />Aliso Viejo, CA 92656</p>
                <p>(949) 781-0050</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=23411+Aliso+Viejo+Pkwy+Suite+D+Aliso+Viejo+CA+92656"
                target="_blank"
                rel="noopener noreferrer"
                className="button self-start text-sm mt-1"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 lg:mt-16 rounded-xl overflow-hidden border border-neutral-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.123456789!2d-117.7256!3d33.5765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s23411+Aliso+Viejo+Pkwy+Suite+D+Aliso+Viejo+CA+92656!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
