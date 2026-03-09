import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Appointment Confirmed | Patientfy" };

export default function AppointmentThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-25 pt-20">
      <div className="text-center flex flex-col items-center gap-6 padding-global max-w-lg">
        <div className="w-20 h-20 bg-primary-500 flex items-center justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h1 className="text-3xl font-semibold text-neutral-1000">Appointment Request Received!</h1>
        <p className="text-base text-neutral-600">
          Thank you for scheduling with us. We&apos;ll contact you within 24 hours to confirm your appointment.
        </p>
        <Link href="/" className="button">Back to Home</Link>
      </div>
    </div>
  );
}
