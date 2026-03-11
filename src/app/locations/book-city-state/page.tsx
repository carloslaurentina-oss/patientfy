import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Book Appointment | Patientfy" };

export default function BookAppointmentPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Location</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Aliso Viejo</h1>
            <p className="text-base text-neutral-500">
              Schedule an appointment or ask us anything.
            </p>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-large padding-global">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
            {/* Column 1 - Form */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-neutral-1000">Request Your Appointment</h2>
              </div>

              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">First Name</label>
                    <input
                      type="text"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">Last Name</label>
                    <input
                      type="text"
                      className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <input
                    type="email"
                    className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Phone</label>
                  <input
                    type="tel"
                    className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors"
                    placeholder="(949) 000-0000"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Service</label>
                  <select className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors bg-white appearance-none">
                    <option value="">Select a service</option>
                    <option>General Dentistry</option>
                    <option>Cosmetic Dentistry</option>
                    <option>Orthodontics</option>
                    <option>Oral Surgery</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Message</label>
                  <textarea
                    rows={4}
                    className="border border-neutral-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-1000 transition-colors resize-none"
                    placeholder="Tell us about your dental needs..."
                  />
                </div>
                <button type="submit" className="button w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>

            {/* Column 2 - Info Sidebar */}
            <div className="flex flex-col gap-8">
              {/* Address & Phone */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-1000">Address & Phone</h3>
                </div>
                <div className="flex flex-col gap-2 text-sm text-neutral-500">
                  <p>
                    23411 Aliso Viejo Pkwy<br />
                    Suite D<br />
                    Aliso Viejo, CA 92656
                  </p>
                  <p>(949) 781-0050</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=23411+Aliso+Viejo+Pkwy+Suite+D+Aliso+Viejo+CA+92656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-neutral-1000 underline underline-offset-4 hover:text-neutral-600 transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-1000">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-1000">Hours</h3>
                </div>
                <div className="flex flex-col gap-2 text-sm text-neutral-500">
                  <div className="flex justify-between gap-6">
                    <span>Monday</span>
                    <span>9 AM–5 PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Tuesday</span>
                    <span>9 AM–5 PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Wednesday</span>
                    <span>9 AM–5 PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Thursday</span>
                    <span>9 AM–5 PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Friday</span>
                    <span>9 AM–5 PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Saturday</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
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
