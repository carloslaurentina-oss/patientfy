import Link from "next/link";
import Logo from "@/components/ui/Logo";

const footerLinks = {
  "About Us": [
    { label: "Mission", href: "/about-us#mission" },
    { label: "Team", href: "/team" },
    { label: "Office", href: "/about-us#office" },
    { label: "Reviews", href: "/about-us#reviews" },
  ],
  "Get Started": [
    { label: "Insurance", href: "/insurance" },
    { label: "Financing", href: "/financing" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-1000 text-white">
      <div className="container-large padding-global py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="h-8 w-auto text-white" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-2xl">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                  {title}
                </p>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Services
              </p>
              <p className="text-sm text-neutral-600 italic">Coming soon</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                Location
              </p>
              <p className="text-sm text-neutral-600 italic">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-900">
        <div className="container-large padding-global py-4 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-neutral-500">
            <a
              href="https://patientfy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              Copyright © 2026 Patientfy.com
            </a>
          </p>
          <p className="text-xs text-neutral-500">
            <a
              href="https://patientfy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-300 transition-colors"
            >
              Site Monitored & Protected by DMCA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
