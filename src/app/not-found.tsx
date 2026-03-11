import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-25">
      <div className="text-center flex flex-col items-center gap-6 padding-global">
        <p className="text-8xl font-bold text-primary-500">404</p>
        <h1 className="text-3xl font-semibold text-neutral-1000">Page Not Found</h1>
        <p className="text-base text-neutral-600 max-w-sm">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" className={buttonVariants()}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
