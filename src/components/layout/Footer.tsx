import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const footerLinks = {
  "About Us": [
    { label: "Mission", href: "/about-us#mission" },
    { label: "Team", href: "/about-us/team" },
    { label: "Office", href: "/about-us#office" },
    { label: "Reviews", href: "/about-us#reviews" },
  ],
  "Services": [
    { label: "General Dentistry", href: "/services/general-dentistry" },
    { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { label: "Orthodontics", href: "/services/orthodontics" },
  ],
  "Get Started": [
    { label: "Insurance", href: "/insurance" },
    { label: "Financing", href: "/financing" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  "Locations": [
    { label: "Location Name", href: "/contact-us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-1000 text-white">
      {/* Main footer */}
      <div className="container-large padding-global py-16 lg:py-20">
        <div className="flex flex-col gap-12">
          {/* Top row: logo + description */}
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
            <div className="flex flex-col gap-4 max-w-xs">
              <Link href="/">
                <Logo className="h-7 w-auto text-white" />
              </Link>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a href="tel:8657778484" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                (865) 777-8484
              </a>
              <Button href="/contact-us" variant="white">Book Now</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 lg:max-w-3xl">
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
