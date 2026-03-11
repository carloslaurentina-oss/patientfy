import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";

export const metadata: Metadata = { title: "Check Insurance | Patientfy" };

export default function CheckInsurancePage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-neutral-50 text-neutral-1000">
        <div className="container-large padding-global">
          <div className="max-w-2xl flex flex-col gap-4">
            <Eyebrow variant="dark">Verify coverage</Eyebrow>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-1000">Check My Insurance</h1>
          </div>
        </div>
      </section>

      <section className="padding-section-medium bg-white">
        <div className="container-medium padding-global">
          <form className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-neutral-1000">Insurance Verification</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">First Name</label>
                <input type="text" className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-neutral-700">Last Name</label>
                <input type="text" className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-700">Insurance Provider</label>
              <input type="text" className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" placeholder="e.g. Delta Dental" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-700">Member ID</label>
              <input type="text" className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-neutral-700">Date of Birth</label>
              <input type="date" className="border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
            </div>
            <button type="submit" className="button w-full justify-center">Submit for Verification</button>
          </form>
        </div>
      </section>
    </>
  );
}
