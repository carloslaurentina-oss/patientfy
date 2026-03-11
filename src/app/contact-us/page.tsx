import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-neutral-1000">Book an Appointment</h2>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">First Name</label>
                    <input
                      type="text"
                      className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-neutral-700">Last Name</label>
                    <input
                      type="text"
                      className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Email</label>
                  <input
                    type="email"
                    className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Phone</label>
                  <input
                    type="tel"
                    className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="(865) 000-0000"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-neutral-700">Service</label>
                  <select className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors bg-white appearance-none">
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
                    className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us about your dental needs..."
                  />
                </div>
                <button type="submit" className="button w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-1000">Contact Information</h3>
                <div className="flex flex-col gap-3 text-sm text-neutral-600">
                  <p><strong className="text-neutral-1000">Phone:</strong> (865) 777-8484</p>
                  <p><strong className="text-neutral-1000">Email:</strong> info@patientfy.com</p>
                  <p><strong className="text-neutral-1000">Address:</strong> 123 Dental Way, Knoxville, TN 37901</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-neutral-1000">Office Hours</h3>
                <div className="flex flex-col gap-2 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
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
              <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
