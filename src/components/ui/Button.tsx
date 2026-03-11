import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary-dark" | "secondary-light";
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="transition-transform duration-300"
  >
    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
  </svg>
);

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const variants = {
    primary: "button",
    "secondary-dark": "button-secondary-dark",
    "secondary-light": "button-secondary-light",
  };

  const cls = `${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowIcon />
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      <ArrowIcon />
    </Link>
  );
}
